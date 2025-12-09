import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="group block cursor-pointer" to={`/product/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden aspect-square">
          <img
            className="w-full  h-full object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
            src={image[0]}
            alt={name}
          />

          <img
            className="absolute top-0 left-0 w-full h-full object-cover transform transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            src={image[1] || image[0]}
            alt={`${name} alternative view`}
          />

          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        </div>

        <div className="p-4">
          <h3 className="text-gray-900 font-medium mb-2 text-sm line-clamp-2  group-hover:text-black">
            {name}
          </h3>

          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-1 font-medium">
              {currency}
            </span>
            <span className="text-lg font-bold text-gray-900">{price}</span>
            <span className="ml-auto text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
