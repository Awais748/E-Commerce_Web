import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="">
      {/* Page Title */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* About Content */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-md"
          src={assets.about_img}
          alt="VelWear"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-relaxed">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-gray-800">VelWear</span>, a
            brand built on creativity, premium quality, and the belief that
            clothing should be more than just fabric — it should be a reflection
            of who you are. At VelWear, we are committed to delivering stylish,
            comfortable, and long-lasting apparel for everyday life.
          </p>

          <p>
            Our story began with a simple thought:
            <span className="italic">
              {" "}
              “Why can’t premium fashion be accessible to everyone?”{" "}
            </span>
            What started as a small passion project led by a love for design and
            modern aesthetics has today become a trusted online clothing
            destination. With every piece we create, we aim to bring you style
            that feels good — inside and out.
          </p>

          <b className="text-gray-800 text-lg">Our Mission</b>
          <p>
            Our mission is to inspire confidence. We want you to feel your best
            in everything you wear. That’s why we focus on high-quality fabrics,
            innovative designs, and affordable prices — making premium fashion
            available to everyone, everywhere. Whether you're dressing for
            comfort, style, or confidence, VelWear is here to elevate your daily
            wardrobe.
          </p>
        </div>
      </div>

      {/* Why Choose Us Title */}
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6 md:gap-3">
        <div className="border flex-1 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 rounded-lg hover:shadow-md transition">
          <b className="text-gray-900 text-lg">Quality You Can Trust</b>
          <p className="text-gray-600">
            Every VelWear product goes through a strict quality control process.
            From premium fabrics to durable stitching, we ensure each item meets
            the highest standards so you get long-lasting comfort and style.
          </p>
        </div>

        <div className="border flex-1 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 rounded-lg hover:shadow-md transition">
          <b className="text-gray-900 text-lg">Designed for Your Lifestyle</b>
          <p className="text-gray-600">
            Our pieces are crafted to match the modern lifestyle — stylish,
            versatile, and comfortable. Whether it's casual wear or streetwear,
            we have something that fits your unique personality and daily life.
          </p>
        </div>

        <div className="border flex-1 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 rounded-lg hover:shadow-md transition">
          <b className="text-gray-900 text-lg">Exceptional Customer Care</b>
          <p className="text-gray-600">
            Your satisfaction is our priority. From easy ordering to quick
            support, we aim to make your shopping experience smooth, enjoyable,
            and completely worry-free.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
          <div className="text-3xl font-bold text-black-600 mb-2">5+</div>
          <div className="text-gray-600">Years of Excellence</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
          <div className="text-3xl font-bold text-black-600 mb-2">10K+</div>
          <div className="text-gray-600">Happy Customers</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
          <div className="text-3xl font-bold text-black-600 mb-2">500+</div>
          <div className="text-gray-600">Unique Designs</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
          <div className="text-3xl font-bold text-black-600 mb-2">24/7</div>
          <div className="text-gray-600">Customer Support</div>
        </div>
      </div>

      <NewLetterBox />
    </div>
  );
};

export default About;
