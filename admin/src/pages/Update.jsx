import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Update = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // Fetch product data
  const fetchProduct = async () => {
    try {
      const response = await axios.post(backendUrl + "/api/product/single", {
        productId: id,
      });

      if (response.data.success) {
        const p = response.data.product;
        setProduct(p);

        setName(p.name);
        setDescription(p.description);
        setPrice(p.price);
        setCategory(p.category);
        setSubCategory(p.subCategory);
        setBestSeller(p.bestseller);
        setSizes(p.sizes);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("id", id);

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/update",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Product Updated Successfully");
        navigate("/list");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <form
      onSubmit={updateHandler}
      className="flex flex-col w-full items-start gap-6 p-4"
    >
      <h2 className="text-xl font-semibold">Update Product</h2>

      {/* ---------- IMAGE UPLOAD ---------- */}
      <div className="w-full">
        <p className="mb-2 font-medium">Update Images</p>

        <div className="flex gap-4">
          {[image1, image2, image3, image4].map((img, index) => {
            const oldImg = product.image[index];

            const setter = [setImage1, setImage2, setImage3, setImage4][index];

            return (
              <label key={index} className="cursor-pointer">
                <img
                  className="w-24 h-24 border rounded-md object-cover"
                  src={
                    img
                      ? URL.createObjectURL(img)
                      : oldImg || assets.upload_area
                  }
                  alt=""
                />
                <input
                  onChange={(e) => setter(e.target.files[0])}
                  type="file"
                  hidden
                />
              </label>
            );
          })}
        </div>
      </div>

      {/* ---------- NAME ---------- */}
      <div className="w-full">
        <p className="mb-1 font-medium">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2 border rounded-md focus:ring-2 focus:ring-black"
          type="text"
          placeholder="Type here..."
          required
        />
      </div>

      {/* ---------- DESCRIPTION ---------- */}
      <div className="w-full">
        <p className="mb-1 font-medium">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 border rounded-md focus:ring-2 focus:ring-black"
          rows="4"
          placeholder="Write description here..."
          required
        ></textarea>
      </div>

      {/* ---------- CATEGORY / PRICE ---------- */}
      <div className="flex flex-col sm:flex-row w-full gap-6">
        <div className="w-full">
          <p className="mb-1 font-medium">Product Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-black"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="w-full">
          <p className="mb-1 font-medium">Sub Category</p>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-black"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-1 font-medium">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 border rounded-md sm:w-[120px] focus:ring-2 focus:ring-black"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      {/* ---------- SIZES ---------- */}
      <div className="w-full">
        <p className="mb-2 font-medium text-base sm:text-lg">
          Product Sizes
        </p>

        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size, index) => (
            <p
              key={index}
              onClick={() => toggleSize(size)}
              className={`px-4 py-1 rounded-md cursor-pointer ${
                sizes.includes(size)
                  ? "bg-pink-300 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {size}
            </p>
          ))}
        </div>
      </div>

      {/* ---------- BESTSELLER ---------- */}
      <div className="flex items-center gap-2 mt-2">
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      {/* ---------- SUBMIT ---------- */}
      <button
        type="submit"
        className="w-32 py-3 mt-4 bg-black text-white rounded-md hover:bg-gray-800 cursor-pointer"
      >
        Update Product
      </button>
    </form>
  );
};

export default Update;
