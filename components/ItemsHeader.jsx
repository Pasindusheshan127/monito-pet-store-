"use client";
import Image from "next/image";
import React from "react";
import ViewButton from "./ViewButton";

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
        <ViewButton />
      </div>
    </div>
  );
};

export default ItemsHeader;
