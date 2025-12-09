import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 px-4">
        
        <img
          className="w-full md:max-w-[480px] rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          src={assets.contact_img}
          alt="Contact VelWear"
        />

        <div className="flex flex-col justify-center items-start gap-6 text-gray-700">

          <p className="font-semibold text-2xl text-gray-900">
            Our Store
          </p>

          <p className="text-gray-600 leading-relaxed">
            VelWear Headquarters <br />
            Plot 21, Commercial Zone<br />
            DHA Phase 6, Lahore, Pakistan
          </p>

          <p className="text-gray-600 leading-relaxed">
            Phone: +92 317 555 0193 <br />
            Email: support@velwear.com
          </p>

          <p className="font-semibold text-2xl text-gray-900 mt-4">
            Careers at VelWear
          </p>

          <p className="text-gray-600">
            We're always looking for creative designers, developers, and
            marketing talent to join our growing fashion brand.
          </p>

          <button className="border border-black px-8 py-3 text-sm rounded-md hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
            Explore Jobs
          </button>
        </div>

      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
