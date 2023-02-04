import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="flex justify-around">
      <div className="text-xl text-blue-900 font-bold">Redux T-Store</div>
      <div className="flex gap-5">
        <div>
          <Link className="text-decoration-none font-bold text-blue-800" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link
            className="text-decoration-none font-bold text-blue-800"
            to="/cart"
          >
            Cart
          </Link>
        </div>
        <span className="text-red-800 font-bold">
          Cart Items: {items.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
