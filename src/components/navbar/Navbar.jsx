import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";

import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";

import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = (props) => {
  // State for collapse i.e if sidebar is open or not
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-[1640px] flex justify-between mx-auto items-center p-4">
      {/* Left Side of Navbar */}
      <div className="flex items-center justify-between">
        <div className="cursor-pointer  ">
          <AiOutlineMenu
            size={30}
            onClick={() => {
              setOpen((prevValue) => {
                return !prevValue;
              });
            }}
          />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[300px] sm:w-[500px] lg:w-[600px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Foods"
          className=" bg-transparent focus:outline-none w-full p-2 "
        />
      </div>

      {/* Cart Btn */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        <span>Cart</span>
      </button>

      {/* Mobile Menu -> Bg Overlay */}
      {open && (
        <div className="fixed bg-black/80 top-0 left-0 w-full z-10 h-screen"></div>
      )}

      {/* Side Draw Menu */}

      <div
        className={
          open
            ? "fixed top-0 left-0 h-screen bg-white z-10 w-[300px] duration-300"
            : "fixed top-0 left-[-100%] h-screen bg-white z-10 w-[300px] duration-300"
        }
      >
        <AiOutlineClose
          size={20}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => {
            setOpen(false);
          }}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col  p-4 text-gray-800 ">
            <li className="text-xl py-4 flex cursor-pointer">
              <TbTruckDelivery size={30} className="mr-4 " />
              Orders
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdFavorite size={30} className="mr-4 " />
              Favourites
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaWallet size={30} className="mr-4 " />
              Wallets
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdHelp size={30} className="mr-4 " />
              Help
            </li>
            <li className="text-xl py-4 flex cursor-pointer align-center">
              <AiFillTag size={30} className="mr-4 " />
              Promotions
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <BsFillSaveFill size={30} className="mr-4 " />
              Best Ones
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaUserFriends size={30} className="mr-4 " />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
