import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRefs = useRef([]);
  const location = useLocation();
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    const activeIndex = navItems.findIndex(
      (item) => item.path === location.pathname
    );
    if (activeIndex !== -1 && navRefs.current[activeIndex]) {
      const link = navRefs.current[activeIndex];
      setUnderlineStyle({ left: link.offsetLeft, width: link.offsetWidth });
    }
  }, [location.pathname]);

  return (
    <nav className="relative bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <img
            src={assets.logo}
            alt="Logo"
            className="max-h-8 w-auto object-contain sm:max-h-10 "
          />
        </Link>

        <ul className="hidden sm:flex relative gap-8 text-gray-700 font-medium text-sm">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              ref={(el) => (navRefs.current[index] = el)}
              className="relative"
            >
              <p className="transition-colors duration-300">{item.name}</p>
            </NavLink>
          ))}

          <span
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
            className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
          ></span>
        </ul>

        <div className="flex items-center gap-5">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer"
          />

          <div className="group relative">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt="Profile"
            />

            {/* dropdown */}
            {token && (
              <div className=" group-hover:block hidden absolute dropdown-men right-0 pt-4 ">
                <div className="flex flex-col gap-2 w-36 py-3 px-4 bg-white text-gray-700 rounded-lg shadow-md border border-gray-200">
                  <p className="px-1 py-1 rounded hover:bg-gray-100 hover:text-black cursor-pointer transition-colors duration-200">
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="px-1 py-1 rounded hover:bg-gray-100 hover:text-black cursor-pointer transition-colors duration-200"
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className="px-1 py-1 rounded hover:bg-gray-100 hover:text-black cursor-pointer transition-colors duration-200"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-5 cursor-pointer"
              alt="Cart"
            />
            <span className="absolute -right-2 -bottom-2 w-4 h-4 bg-black text-white text-[8px] rounded-full flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="sm:hidden p-2 focus:outline-none"
          >
            <img src={assets.menu_icon} alt="Menu" className="w-5" />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <p className="font-medium text-lg">Menu</p>
          <button onClick={() => setMenuOpen(false)}>
            <img
              src={assets.dropdown_icon}
              alt="Close"
              className="h-4 rotate-45 cursor-pointer"
            />
          </button>
        </div>

        <ul className="flex flex-col mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-6 py-3 hover:bg-gray-100 cursor-pointer ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
