"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="justify-between items-center w-[414px] h-[600px] px-[16px] md:px-[130px] pb-[32px] pt-[48px]  md:w-[1440px] md:h-[440px] top-[4444px] left-[-1px] bg-[#FCEED5] rounded-tl-[40px] rounded-tr-[40px]">
      {/* Top Section: Subscription and Navigation Links */}
      <div className="flex flex-col w-auto max-w-[382px] h-auto min-h-[288px] md:w-auto md:min-w-[1180px] md:h-auto md:min-h-[240px]  border-b pb-[40px] gap-[40px] border-[#CCD1D2]">
        {/* Subscription Call-to-Action */}
        <div className="flex flex-col md:flex-row w-auto max-w-[382px] h-auto min-h-[244px] md:w-auto md:min-w-[1180px] md:h-auto md:min-h-[136px] md:p-8 md:gap-5  rounded-[16px] gap-4 p-[16px] bg-[#003459]">
          <div className="w-[350px] h-[64px] md:w-[389px] md:h-auto min-h-[72px] font-[700] text-[20px] md:text-[24px] leading-8 md:leading-9 text-[#FDFDFD]">
            Register now so you don't miss our programs
          </div>
          <div className="flex flex-col md:flex-row w-[350px] h-auto min-h-[132px] md:w-[707px] md:h-auto md:min-h-[72px] rounded-[14px] p-3 gap-3 bg-[#FFFFFF]">
            {/* Email Input Field */}
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-[326px] h-[48px] md:w-full md:h-auto min-h-[48px] rounded-lg border py-[14px] px-[28px] gap-[10px] bg-[#FFFF] border-[#99A2A5]"
            />
            {/* Subscription Button */}
            <button className="max-w-[326px] min-h-[48px] md:w-[163px] h-auto rounded-lg pt-[14px] pb-[10px] px-[28px] gap-[10px] bg-[#003459]">
              <div className="w-[122px] h-6 font-[500] size-4 leading-6 text-[#FDFDFD]">
                Subscribe Now
              </div>
            </button>
          </div>
        </div>
        {/* Navigation Links and Social Media Icons */}
        <div className="flex flex-col md:flex-row h-auto min-h-[64px] md:w-auto md:min-w-[1180px] md:h-auto md:min-h-[24px] gap-5 md:gap-[492px]">
          {/* Navigation Links */}
          <div className="w-auto max-w-[382px] md:min-w-[402px] h-auto min-h-[24px]">
            <ul className="flex gap-[40px]  md:gap-[60px] justify-between mr-5 md:mr-0">
              <Link href="/">
                <li className="cursor-pointer font-[500] text-[16px] leading-6 text-[#00171F] w-11 h-6">
                  Home
                </li>
              </Link>
              <Link href="/category">
                <li className="cursor-pointer font-[500] text-[16px] leading-6 text-[#00171F] w-11 h-6">
                  Category
                </li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer font-[500] text-[16px] leading-6 text-[#00171F] w-11 h-6">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="cursor-pointer font-[500] text-[16px] leading-6 text-[#00171F] w-11 h-6">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="flex px-[60px] w-auto h-auto min-h-[24px] min-w-[216px] gap-[40px]">
            <Image
              src="/assets/icons/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
              className=" cursor-pointer "
            />
            <Image
              src="/assets/icons/twitter.svg"
              alt="twitter"
              width={24}
              height={24}
              className=" cursor-pointer "
            />
            <Image
              src="/assets/icons/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
              className=" cursor-pointer "
            />
            <Image
              src="/assets/icons/youtube.svg"
              alt="youtube"
              width={24}
              height={24}
              className="rounded-full cursor-pointer "
            />
          </div>
        </div>
      </div>
      {/* Bottom Section: Copyright Information */}
      <div className="flex flex-col md:flex-row mt-[40px] justify-between w-[1180px] h-[40px] top-[360px] left-[130px] px-24 md:px-0 gap-3">
        <div className="flex flex-col md:hidden w-[155px] h-[40px] left-[533px] mb-3 px-4 md:px-0">
          <p className="text-2xl pl-4">Monito </p>
          <span className="items-center text-xl">Pets For Best</span>
        </div>
        <div className="w-[317px] h-[20px] top-[10px] font-[500] text-[14px] leading-5">
          © 2022 Monito. All rights reserved.
        </div>
        <div className="hidden md:flex flex-col w-[115px] h-[40px] left-[533px]">
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
