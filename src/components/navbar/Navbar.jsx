import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = (props) => {
  return (
    <div className="max-w-[1640px] flex justify-between mx-auto items-center p-4">
      {/* Left Side of Navbar */}
      <div className="flex items-center justify-between">
        <div className="cursor-pointer s ">
          <AiOutlineMenu size={30} />
        </div>
        <h1>
          Best <span>Eats</span>
        </h1>
        <div>
          <p>Delivery</p>
          <p>Pickup</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
