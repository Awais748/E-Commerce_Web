import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center px-4">
      <p className="text-2xl font-semibold text-gray-900">
        Join Our Newsletter & Get 20% Off
      </p>

      <p className="text-gray-500 mt-3 max-w-xl mx-auto leading-relaxed">
        Stay updated with new arrivals, exclusive offers, and the latest trends
        from VelWear. No spam — only quality fashion updates straight to your inbox.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none py-3 text-sm text-gray-700"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-8 py-4 font-medium tracking-wide hover:bg-gray-900 transition-all duration-300"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
