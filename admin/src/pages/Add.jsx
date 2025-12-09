import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  // IMAGE STATES
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  // PREVIEW STATES
  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [preview3, setPreview3] = useState(null);
  const [preview4, setPreview4] = useState(null);

  // PRODUCT DATA
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // IMAGE HANDLERS
  const handleImage1 = (e) => {
    const file = e.target.files[0];
    setImage1(file);
    setPreview1(URL.createObjectURL(file));
  };

  const handleImage2 = (e) => {
    const file = e.target.files[0];
    setImage2(file);
    setPreview2(URL.createObjectURL(file));
  };

  const handleImage3 = (e) => {
    const file = e.target.files[0];
    setImage3(file);
    setPreview3(URL.createObjectURL(file));
  };

  const handleImage4 = (e) => {
    const file = e.target.files[0];
    setImage4(file);
    setPreview4(URL.createObjectURL(file));
  };

  // SELECT SIZES
  const toggleSize = (size) => {
    setSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  // SUBMIT HANDLER
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        // RESET FORM
        setName("");
        setDescription("");
        setPrice("");
        setSizes([]);
        setCategory("Men");
        setSubCategory("Topwear");
        setBestSeller(false);

        // CLEAR IMAGES + PREVIEWS
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setPreview1(null);
        setPreview2(null);
        setPreview3(null);
        setPreview4(null);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error adding product");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-6 p-4"
    >
      {/* IMAGE UPLOAD */}
      <div className="w-full">
        <p className="mb-2 font-medium">Upload Images</p>

        <div className="flex gap-4">
          {/* IMAGE 1 */}
          <label htmlFor="image1" className="cursor-pointer">
            <img
              className="w-24 h-24 border rounded-md object-cover"
              src={preview1 || assets.upload_area}
              alt=""
            />
            <input type="file" id="image1" hidden onChange={handleImage1} />
          </label>

          {/* IMAGE 2 */}
          <label htmlFor="image2" className="cursor-pointer">
            <img
              className="w-24 h-24 border rounded-md object-cover"
              src={preview2 || assets.upload_area}
              alt=""
            />
            <input type="file" id="image2" hidden onChange={handleImage2} />
          </label>

          {/* IMAGE 3 */}
          <label htmlFor="image3" className="cursor-pointer">
            <img
              className="w-24 h-24 border rounded-md object-cover"
              src={preview3 || assets.upload_area}
              alt=""
            />
            <input type="file" id="image3" hidden onChange={handleImage3} />
          </label>

          {/* IMAGE 4 */}
          <label htmlFor="image4" className="cursor-pointer">
            <img
              className="w-24 h-24 border rounded-md object-cover"
              src={preview4 || assets.upload_area}
              alt=""
            />
            <input type="file" id="image4" hidden onChange={handleImage4} />
          </label>
        </div>
      </div>

      {/* NAME */}
      <div className="w-full">
        <p className="mb-1 font-medium">Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2 border rounded-md focus:ring-black"
          type="text"
          placeholder="Type here..."
          required
        />
      </div>

      {/* DESCRIPTION */}
      <div className="w-full">
        <p className="mb-1 font-medium">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 border rounded-md focus:ring-black"
          rows="4"
          placeholder="Write description here..."
          required
        ></textarea>
      </div>

      {/* CATEGORY + SUBCATEGORY + PRICE */}
      <div className="flex flex-col sm:flex-row w-full gap-6">
        <div className="w-full">
          <p className="mb-1 font-medium">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="w-full">
          <p className="mb-1 font-medium">Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
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
            className="w-full px-3 py-2 border rounded-md sm:w-[120px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      {/* SIZES */}
      <div className="w-full">
        <p className="mb-2 font-medium">Product Sizes</p>
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size, i) => (
            <p
              key={i}
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

      {/* BESTSELLER */}
      <div className="flex items-center gap-2 mt-2">
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          Add to bestseller
        </label>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-32 py-3 mt-4 bg-black text-white rounded-md hover:bg-gray-800"
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;
