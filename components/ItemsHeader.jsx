"use client";
import Image from "next/image";
import React from "react";

const ItemsHeader = () => {
  return (
    <div>
      {/* Section Header */}
      <div className="flex justify-between my-6">
        <div className="">
          <div className="m-auto h-auto min-w-[145px] min-h-[24px] font-[500] text-[16px] leading-6 text-[#000000]">
            You already know ?
          </div>
          <div className="m-auto h-auto min-w-[242px] min-h-[36px] font-[700] text-[24px] leading-[36px] text-[#003459]">
            Useful pet knowledge
          </div>
        </div>
        {/* View More Button */}
        <div className="">
          <button className="flex w-auto min-w-[151px] h-auto min-h-[44px] rounded-[57px] top-[78px] left-[1159px] border-[1.5px] py-3 px-7 gap-2 border-[#003459]">
            <div className="font-[500] text-[14px] leading-5 text-[#003459]">
              View more
            </div>
            <Image
              src="/assets/icons/rightArrow.svg"
              alt="rightArrow"
              width={20}
              height={20}
              className="top-[7px] left-[8px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsHeader;
