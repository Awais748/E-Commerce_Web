import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Footer = () => {


  const { navigate } = useContext(ShopContext);

  return (
    <div className="mt-40">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-20 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
            We bring you a curated selection of quality products paired with
            fast delivery and a smooth, effortless shopping experience. Every
            detail—from browsing to checkout—is designed to give you comfort and
            confidence.
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5 text-gray-800">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li onClick={() => navigate('/')} className="hover:text-black cursor-pointer transition">Home</li>
            <li  onClick={() => navigate('/about')} className="hover:text-black cursor-pointer transition">
              About us
            </li>
            <li onClick={() => navigate('/orders')} className="hover:text-black cursor-pointer transition">
              Delivery
            </li>
            <li onClick={() => navigate('/about')} className="hover:text-black cursor-pointer transition">
              Privacy policy
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5 text-gray-800">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">
              +92 3022228021
            </li>
            <li className="hover:text-black cursor-pointer transition">
              Awaistariq10111@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-600">
          © {new Date().getFullYear()} VELWEAR — All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
