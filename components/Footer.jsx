import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="justify-between items-center w-auto px-[130px] pb-[32px] pt-[48px]  min-w-[1440px] h-[440px] top-[4444px] left-[-1px] bg-[#FCEED5] rounded-tl-[40px] rounded-tr-[40px]">
      {/* Top Section: Subscription and Navigation Links */}
      <div className="flex flex-col w-auto min-w-[1180px] h-auto min-h-[240px] top-[80px] left-[130px] border-b pb-[40px] gap-[40px] border-[#CCD1D2]">
        {/* Subscription Call-to-Action */}
        <div className="flex w-auto min-w-[1180px] h-auto min-h-[136px] rounded-2xl p-8 gap-5 bg-[#003459]">
          <div className="w-[389px] h-auto min-h-[72px] font-[700] text-[24px] leading-9 text-[#FDFDFD]">
            Register now so you don't miss our programs
          </div>
          <div className="flex w-[707px] h-auto min-h-[72px] rounded-[14px] p-3 gap-3 bg-[#FFFFFF]">
            {/* Email Input Field */}
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-full h-auto min-h-[48px] rounded-lg border py-[14px] px-[28px] gap-[10px] bg-[#FFFF] border-[#99A2A5]"
            />
            {/* Subscription Button */}
            <button className=" w-[163px] h-auto min-h-[48px] rounded-lg pt-[14px] pb-[10px] px-[28px] gap-[10px] bg-[#003459]">
              <div className="w-[102px] h-6 font-[500] size-4 leading-6 text-[#FDFDFD]">
                Subcribe Now
              </div>
            </button>
          </div>
        </div>
        {/* Navigation Links and Social Media Icons */}
        <div className="flex w-auto min-w-[1180px] h-auto min-h-[24px] gap-[562px]">
          {/* Navigation Links */}
          <div className="w-auto min-w-[402px] h-auto min-h-[24px] ">
            <ul className="flex gap-[60px]">
              <li className="font-[500] text-[16px] leading-6 text-[#00171F] w-11 h-6">
                Home
              </li>
              <li className="font-[500] text-[16px] leading-6 text-[#00171F] w-11 h-6">
                Category
              </li>
              <li className="font-[500] text-[16px] leading-6 text-[#00171F] w-11 h-6">
                About
              </li>
              <li className="font-[500] text-[16px] leading-6 text-[#00171F] w-11 h-6">
                Contact
              </li>
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="flex w-auto h-auto min-h-[24px] min-w-[216px] gap-[40px]">
            <Image
              src="/assets/icons/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
              className=""
            />
            <Image
              src="/assets/icons/twitter.svg"
              alt="twitter"
              width={24}
              height={24}
              className=""
            />
            <Image
              src="/assets/icons/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
              className=""
            />
            <Image
              src="/assets/icons/youtube.svg"
              alt="youtube"
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Bottom Section: Copyright Information */}
      <div className="flex mt-[40px] justify-between w-[1180px] h-[40px] top-[360px] left-[130px] ">
        <div className="w-[317px] h-[20px] top-[10px] font-[500] text-[14px] leading-5">
          © 2022 Monito. All rights reserved.
        </div>
        <div className="flex flex-col w-[115px] h-[40px] left-[533px]">
          <p className="">Monito </p>
          <span className="items-center text-sm">Pets For Best</span>
        </div>
        <div className="text-[14px] font-[500] leading-5 text-[#667479] w-[227px] h-[20px] top-[10px] left-[953px] flex gap-5">
          <p>Terms of service</p> <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
