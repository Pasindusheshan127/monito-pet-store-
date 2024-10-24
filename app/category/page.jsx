import CategoryBanner from "@/components/CategoryBanner";
import DogList from "@/components/DogList";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nabbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-auto w-auto min-w-[1440px] min-h-[2119px] ">
      <div className="px-[16px] md:px-[130px] md:mb-10">
        <div className="h-[57px] w-[414px]">
          <Navbar />
        </div>
      </div>

      {/* Banner */}
      <div className="md:px-[130px]">
        <CategoryBanner />
      </div>

      {/*  */}
      <div className="">
        {/* For larger screen */}
        <div className="hidden md:flex">
          <div className="w-1/4 pl-[130px]">
            <Filter />
          </div>
          <div className="w-3/4 md:pl-[96px] md:pr-[130px]">
            <DogList />
          </div>
        </div>
        {/* For smaller screen */}
        <div className="md:hidden">
          {/* head  */}
          <div className="">
            <div className=" flex w-auto h-auto max-w-[172px] min-h-[34px] rounded-[20px] border border-[#CCD1D2] pt-[6px] pb-[4px] pr-[10px] pl-[20px] gap-2 my-3">
              <div className="w-auto h-auto min-w-[103px] min-h-[20px] font-[500] text-[14px] leading-5 text-[#667479]">
                Sort by: Popular
              </div>
              <Image
                src="/assets/icons/downArrow.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
          </div>
          <DogList />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;
