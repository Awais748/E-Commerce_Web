import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((p) => p._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t pt-10 animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT SIDE — IMAGES */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto w-full md:w-24">
            {productData.image.map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                onClick={() => setImage(imgSrc)}
                className={`w-24 h-24 rounded-lg object-cover border cursor-pointer transition 
                  ${
                    image === imgSrc
                      ? "border-black shadow-md"
                      : "border-gray-300"
                  }
                `}
                alt=""
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 rounded-xl overflow-hidden shadow-md">
            <img src={image} className="w-full h-full object-cover" alt="" />
          </div>
        </div>

        {/* RIGHT SIDE — INFO */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">{productData.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={assets.star_icon} width={20} alt="star" />
            ))}
            <img src={assets.star_dull_icon} width={20} alt="star" />
            <span className="text-gray-600 text-sm pl-2">(122 reviews)</span>
          </div>

          {/* Price */}
          <p className="mt-5 text-4xl font-bold">
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className="mt-5 text-gray-600 leading-relaxed">
            {productData.description}
          </p>

          {/* Size Selector */}
          <div className="mt-8">
            <p className="text-lg font-medium mb-3">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {productData.sizes.map((sz, idx) => (
                <button
                  key={idx}
                  onClick={() => setSize(sz)}
                  className={`
                    px-5 py-2 rounded-md border transition font-medium cursor-pointer
                    ${
                      size === sz
                        ? "bg-black text-white border-black"
                        : "bg-gray-100"
                    }
                  `}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="mt-8 w-full md:w-auto px-10 py-3 text-white bg-black rounded-md cursor-pointer
              hover:bg-gray-900 active:scale-95 transition shadow-sm "
          >
            Add To Cart
          </button>

          {/* Extra Info */}
          <div className="mt-8 text-sm text-gray-500 space-y-1">
            <p>✔ 100% Original product</p>
            <p>✔ Cash on delivery available</p>
            <p>✔ Easy 7-day return & exchange</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-16">
        <div className="flex">
          <button className="px-5 py-3 border font-medium">Description</button>
          <button className="px-5 py-3 border text-gray-600">
            Reviews (122)
          </button>
        </div>

        <div className="border p-6 text-gray-600 text-sm leading-relaxed space-y-3">
          <p>
            An e-commerce website lets businesses showcase and sell products
            online, giving customers a fast and convenient way to shop.
          </p>
          <p>
            Modern platforms focus on clean design, easy navigation, and secure
            checkout that builds customer trust and increases sales.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
