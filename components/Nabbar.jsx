import Image from "next/image";
import React from "react";
import StarCircle from "./StarCircle";

const Navbar = () => {
  return (
    <nav className="">
      {/* Desktop Navbar */}
      <div className="flex justify-between items-center pt-[28px] pr-[130px] pb-[28px] pl-[130px] w-auto min-w-[100px]">
        {/* Left Section: Logo and Navigation Links */}
        <div className=" flex gap-12 w-auto min-w-[529px] h-auto min-h-[40px]">
          {/* LOGO  */}
          <div className="w-[115px] h-[40px] cursor-pointer">
            <h1 className="text-3xl text-[#103559]">Monitó</h1>
            <span className="text-sm text-center text-[#103559]">
              pets for best
            </span>
          </div>
          {/* Navigation Links */}
          <ul className="flex w-auto min-w-[366px] h-auto min-h-[24px] gap-12 py-2 ">
            <li>
              <a
                href="#"
                className="font-[700] text-[16px] leading-6 text-[#003459] hover:text-[[#030d13]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-[700] text-[16px] leading-6 text-[#003459] hover:text-[#030d13]]"
              >
                Category
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-[700] text-[16px] leading-6 text-[#003459] hover:text-[#030d13]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-[700] text-[16px] leading-6 text-[#003459] hover:text-[#030d13]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Right Section: Search Bar, Join Button, and Currency Selector */}
        <div className="flex items-center gap-[14px] w-auto min-w-[615px] h-auto min-h-[44px]">
          {/* Search Bar */}
          <div className="flex w-[280px] h-auto min-h-[44px] rounded-[46px] px-3 pr-5 pl-4 gap-3 bg-[#FDFDFD]">
            <Image
              src="/assets/icons/search.svg"
              alt="search"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search something here"
              className="font-[500px] text-[14px] leading-5 text-[#99A2A5]"
            />
          </div>
          {/* Join Community Button */}
          <button className="bg-[#003459] font-xl gap-[10px] text-white px-[14px] pr-[28px]  pl-[28px] rounded-[57px] h-11 w-auto min-w-[203px]">
            <p className="font-[700px] text-[16px] leading-6 text-[#FDFDFD] w-[147px] h-6">
              Join the community
            </p>
          </button>
          {/* Currency Selector */}
          <div className="flex pt-[10px] pr-[8px] pb-[8px] pl-[8px] gap-1 ">
            <div className="flex gap-[6px] w-auto min-w-[60px] h-auto min-h-[23px]">
              <div className="w-[21px] h-[21px] mt-1">
                <StarCircle />
              </div>
              <p className="font-[500] text-[16px] leading-6">VND</p>
            </div>
            <Image
              src="/assets/icons/downArrow.svg"
              width={24}
              height={24}
              className="bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      {/* <div className="lg:hidden ">
        <div className="w-[32] h-[32]">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={18}
            height={13}
            className=""
          />
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
