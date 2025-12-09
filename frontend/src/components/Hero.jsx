import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaStar,
  FaShieldAlt,
  FaTruck,
  FaAward,
  FaFire,
  FaCrown,
} from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";

const Hero = () => {
  const { navigate } = useContext(ShopContext);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br  min-h-[600px] lg:min-h-[700px]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-gray-200/10 to-gray-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 xl:p-16 flex items-center justify-center lg:justify-end"
        >
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-full mb-6 border border-amber-100 shadow-sm"
            >
              <FaFire className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700 tracking-wide">
                OUR BESTSELLERS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prata-regular text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight lg:leading-[1.15] mb-6"
            >
              Latest{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gray-900">Arrivals</span>
                <motion.div
                  className="absolute bottom-3 left-0 w-full h-3 bg-gradient-to-r from-amber-300/40 to-orange-300/40 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg mb-8 leading-relaxed"
            >
              Discover our premium collection featuring exquisite craftsmanship
              and timeless design. Elevate your style with pieces that blend
              innovation with tradition.
            </motion.p>

            <motion.button
              onClick={() => navigate("/collection")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 font-semibold text-base tracking-wide ">
                SHOP NOW
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="relative z-10"
              >
                <FaArrowRight className="w-5 h-5" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hidden lg:flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center ">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaStar className="w-5 h-5 text-amber-500" />
                  <p className="text-2xl font-bold text-gray-900 ">4.9</p>
                </div>
                <p className="text-sm text-gray-500">Customer Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaCrown className="w-5 h-5 text-amber-500" />
                  <p className="text-2xl font-bold text-gray-900">200+</p>
                </div>
                <p className="text-sm text-gray-500">Premium Products</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaTruck className="w-5 h-5 text-amber-500" />
                  <p className="text-2xl font-bold text-gray-900">Free</p>
                </div>
                <p className="text-sm text-gray-500">Shipping</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200"
            >
              {[
                {
                  icon: FaShieldAlt,
                  text: "Premium Quality",
                  subtext: "Guaranteed",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: FaTruck,
                  text: "Fast Shipping",
                  subtext: "2-3 Days",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: FaAward,
                  text: "Certified",
                  subtext: "Authentic",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-2xl mb-3 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {feature.text}
                  </p>
                  <p className="text-xs text-gray-500">{feature.subtext}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative h-[400px] lg:h-full overflow-hidden rounded-l-2xl lg:rounded-l-3xl shadow-2xl">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="w-full h-full object-cover object-center"
              src={assets.hero_img}
              alt="Premium collection showcase"
            />

            {/* Simple Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <FaCrown className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700">Premium</p>
                  <p className="text-xs text-gray-500">Collection</p>
                </div>
              </div>
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-white/30"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <p className="text-sm text-gray-500 mb-2 tracking-wider">
            EXPLORE MORE
          </p>
          <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
