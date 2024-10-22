"use client";
import Image from "next/image";
import React from "react";

const KnowledgeCards = () => {
  return (
    <div className="border w-[1440px] h-[634px] top-[3810px] px-[130px]">
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

      {/* cards */}
      <div className="grid grid-cols-3 grid-rows-1 overflow-hidden gap-2">
        {/* Card Blog */}
        <div className="border w-auto h-auto min-h-[424px] min-w[380px] top-[150px] left-[1`30px] rounded-[12px] p-2 gap-2 bg-[#FFFFFF]">
          <div className="w-[364px] h-[240px] rounded-[10px] bg-[#FFFFFF] ">
            {/* image */}
          </div>

          <div className="w-auto h-auto min-w-[364px] min-h-[160px] p-2 gap-[10px] ">
            {/* Button */}
            <div className="w-[89px] h-auto min-h-[20px] rounded-[28px] py-[2px] px-[10px] gap-[10px] bg-[#00A7E7]">
              <div className="w-[89px] h-[16px] font-[700] text-[10px] leading-4 text-[#FDFDFD]">
                Pet knowledge
              </div>
            </div>
            {/* Title and desc */}
            <div className="w-auto h-auto min-w-[348px] min-h-[114px] gap-[6px]">
              <div className="w-[348px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </div>
              <div className="w-[348px] h-[48px] font-[400] text-[14px] leading-[14px] text-[#242B33]">
                The Pomeranian, also known as the Pomeranian (Pom dog), is
                always in the top of the cutest pets. Not only that, the small,
                lovely, smart, friendly, and skillful circus dog breed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCards;
