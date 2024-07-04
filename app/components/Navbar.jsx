import React from "react";
import { FaBars, FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex w-full p-2 px-4 justify-between items-center">
      <div className="flex gap-3 items-center"> 
        <FaBars size={24} />
        <FaSearch size={24} />
      </div>
      <h2 className="font-bold text-2xl">FARFETCH</h2>
      <div className="flex gap-3 items-center">
        <FaHeart size={24} />
        <FaShoppingBag size={24} />
      </div>
    </div>
  );
}

export default Navbar;
