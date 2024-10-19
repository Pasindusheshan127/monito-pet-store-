import Image from "next/image";
import React from "react";

const PetCards = () => {
  return (
    <div className="w-[1440px] h-[986px] top-[695px] px-[130px]">
      {/* Section Header */}
      <div className="flex justify-between mt-16">
        <div className="w-auto min-w-[367px] h-auto min-h-[63px] top-[60px] left-[130px] gap-[2px]">
          <div className="w-[91px] h-[24px] font-[500] text-[16px] leading-6 text-[#000000]">
            What's new?
          </div>
          <div className="w-[367px] h-[36px] font-[700] text-[24px] leading-9 text-[#003459]">
            Take a look at some of our pets
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

      {/* pet cards */}
      <div className="grid grid-cols-4 gap-[8px] my-[28px] ">
        {/* Pet Card Section */}
        <div className=" w-auto h-auto min-w-[280px] min-h-[378px] top-[548px] left-[1030px] rounded-xl pt-2 px-2 gap-2 bg-[#FDFDFD]">
          {/* Pet Image */}
          <Image
            src="/assets/images/puppy.png"
            alt="dogImg"
            width={264}
            height={264}
            className="rounded-[10px] bg-[#FFFFFF]"
          />
          {/* Pet Description */}
          <div className="w-auto h-auto min-h-[98px] min-w-[264px] px-2 pt-2 pb-20 gap-5">
            <div className="w-auto h-auto min-h-[70px] min-w-[248px] gap-[4px]">
              {/* Pet Name */}
              <div className="w-[248px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
                MO512 - Poodle Tiny Dairy Cow
              </div>
              {/* Pet Details */}
              <div className="flex w-[248px] h-auto min-h-[18px] gap-1">
                {/* Gender */}
                <div className="flex w-auto h-auto min-w-[68px] min-h-[18px] gap-[6px]">
                  <div className="w-[34px] h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Gene:
                  </div>
                  <div className="w-[28px] h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Male
                  </div>
                </div>
                <div className="min-w-[18px] min-h-[18px]">
                  <div className="w-1 h-1 rounded-full bg-[#667479]"></div>
                </div>
                {/* Age */}
                <div className="flex w-auto h-auto min-w-[91px] min-h-[18px] gap-[6px]">
                  <div className="w-[26px] h-[26px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Age:
                  </div>
                  <div className="w-auto h-auto min-w-[59px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    02 months
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="w-[248px] h-[20px] font-[700] text-[14px] leading-[20px] text-[#00171F]">
                5.000.000 VND
              </div>
            </div>
          </div>
        </div>
        {/* Pet Card Section */}
        <div className="border w-auto h-auto min-w-[280px] min-h-[378px] top-[548px] left-[1030px] rounded-xl pt-2 px-2 gap-2 bg-[#FDFDFD]">
          {/* Pet Image */}
          <Image
            src="/assets/images/puppy.png"
            alt="dogImg"
            width={264}
            height={264}
            className="rounded-[10px] bg-[#FFFFFF]"
          />
          {/* Pet Description */}
          <div className="w-auto h-auto min-h-[98px] min-w-[264px] px-2 pt-2 pb-20 gap-5">
            <div className="w-auto h-auto min-h-[70px] min-w-[248px] gap-[4px]">
              {/* Pet Name */}
              <div className="w-[248px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
                MO512 - Poodle Tiny Dairy Cow
              </div>
              {/* Pet Details */}
              <div className="flex w-[248px] h-auto min-h-[18px] gap-1">
                {/* Gender */}
                <div className="flex w-auto h-auto min-w-[68px] min-h-[18px] gap-[6px]">
                  <div className="w-[34px] h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Gene:
                  </div>
                  <div className="w-[28px] h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Male
                  </div>
                </div>
                <div className="w-auto h-auto min-w-[18px] font-[700] text-[12px] ml-1 min-h-[18px] text-[#667479]">
                  .
                </div>
                {/* Age */}
                <div className="flex w-auto h-auto min-w-[91px] min-h-[18px] gap-[6px]">
                  <div className="w-[26px] h-[26px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Age:
                  </div>
                  <div className="w-auto h-auto min-w-[59px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    02 months
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="w-[248px] h-[20px] font-[700] text-[14px] leading-[20px] text-[#00171F]">
                5.000.000 VND
              </div>
            </div>
          </div>
        </div>
        {/* Pet Card Section */}
        <div className="border w-auto h-auto min-w-[280px] min-h-[378px] top-[548px] left-[1030px] rounded-xl pt-2 px-2 gap-2 bg-[#FDFDFD]">
          {/* Pet Image */}
          <Image
            src="/assets/images/puppy.png"
            alt="dogImg"
            width={264}
            height={264}
            className="rounded-[10px] bg-[#FFFFFF]"
          />
          {/* Pet Description */}
          <div className="w-auto h-auto min-h-[98px] min-w-[264px] px-2 pt-2 pb-20 gap-5">
            <div className="w-auto h-auto min-h-[70px] min-w-[248px] gap-[4px]">
              {/* Pet Name */}
              <div className="w-[248px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
                MO512 - Poodle Tiny Dairy Cow
              </div>
              {/* Pet Details */}
              <div className="flex w-[248px] h-auto min-h-[18px] gap-1">
                {/* Gender */}
                <div className="flex w-auto h-auto min-w-[68px] min-h-[18px] gap-[6px]">
                  <div className="w-[34px] h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Gene:
                  </div>
                  <div className="w-[28px] h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Male
                  </div>
                </div>
                <div className="w-auto h-auto min-w-[18px] font-[700] text-[12px] ml-1 min-h-[18px] text-[#667479]">
                  .
                </div>
                {/* Age */}
                <div className="flex w-auto h-auto min-w-[91px] min-h-[18px] gap-[6px]">
                  <div className="w-[26px] h-[26px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Age:
                  </div>
                  <div className="w-auto h-auto min-w-[59px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    02 months
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="w-[248px] h-[20px] font-[700] text-[14px] leading-[20px] text-[#00171F]">
                5.000.000 VND
              </div>
            </div>
          </div>
        </div>
        {/* Pet Card Section */}
        <div className="border w-auto h-auto min-w-[280px] min-h-[378px] top-[548px] left-[1030px] rounded-xl pt-2 px-2 gap-2 bg-[#FDFDFD]">
          {/* Pet Image */}
          <Image
            src="/assets/images/puppy.png"
            alt="dogImg"
            width={264}
            height={264}
            className="rounded-[10px] bg-[#FFFFFF]"
          />
          {/* Pet Description */}
          <div className="w-auto h-auto min-h-[98px] min-w-[264px] px-2 pt-2 pb-20 gap-5">
            <div className="w-auto h-auto min-h-[70px] min-w-[248px] gap-[4px]">
              {/* Pet Name */}
              <div className="w-[248px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
                MO512 - Poodle Tiny Dairy Cow
              </div>
              {/* Pet Details */}
              <div className="flex w-[248px] h-auto min-h-[18px] gap-1">
                {/* Gender */}
                <div className="flex w-auto h-auto min-w-[68px] min-h-[18px] gap-[6px]">
                  <div className="w-[34px] h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Gene:
                  </div>
                  <div className="w-[28px] h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Male
                  </div>
                </div>
                <div className="w-auto h-auto min-w-[18px] font-[700] text-[12px] ml-1 min-h-[18px] text-[#667479]">
                  .
                </div>
                {/* Age */}
                <div className="flex w-auto h-auto min-w-[91px] min-h-[18px] gap-[6px]">
                  <div className="w-[26px] h-[26px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Age:
                  </div>
                  <div className="w-auto h-auto min-w-[59px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    02 months
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="w-[248px] h-[20px] font-[700] text-[14px] leading-[20px] text-[#00171F]">
                5.000.000 VND
              </div>
            </div>
          </div>
        </div>
        {/* Pet Card Section */}
        <div className="border w-auto h-auto min-w-[280px] min-h-[378px] top-[548px] left-[1030px] rounded-xl pt-2 px-2 gap-2 bg-[#FDFDFD]">
          {/* Pet Image */}
          <Image
            src="/assets/images/puppy.png"
            alt="dogImg"
            width={264}
            height={264}
            className="rounded-[10px] bg-[#FFFFFF]"
          />
          {/* Pet Description */}
          <div className="w-auto h-auto min-h-[98px] min-w-[264px] px-2 pt-2 pb-20 gap-5">
            <div className="w-auto h-auto min-h-[70px] min-w-[248px] gap-[4px]">
              {/* Pet Name */}
              <div className="w-[248px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
                MO512 - Poodle Tiny Dairy Cow
              </div>
              {/* Pet Details */}
              <div className="flex w-[248px] h-auto min-h-[18px] gap-1">
                {/* Gender */}
                <div className="flex w-auto h-auto min-w-[68px] min-h-[18px] gap-[6px]">
                  <div className="w-[34px] h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Gene:
                  </div>
                  <div className="w-[28px] h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Male
                  </div>
                </div>
                <div className="w-auto h-auto min-w-[18px] font-[700] text-[12px] ml-1 min-h-[18px] text-[#667479]">
                  .
                </div>
                {/* Age */}
                <div className="flex w-auto h-auto min-w-[91px] min-h-[18px] gap-[6px]">
                  <div className="w-[26px] h-[26px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Age:
                  </div>
                  <div className="w-auto h-auto min-w-[59px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    02 months
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="w-[248px] h-[20px] font-[700] text-[14px] leading-[20px] text-[#00171F]">
                5.000.000 VND
              </div>
            </div>
          </div>
        </div>
        {/* Pet Card Section */}
        <div className="border w-auto h-auto min-w-[280px] min-h-[378px] top-[548px] left-[1030px] rounded-xl pt-2 px-2 gap-2 bg-[#FDFDFD]">
          {/* Pet Image */}
          <Image
            src="/assets/images/puppy.png"
            alt="dogImg"
            width={264}
            height={264}
            className="rounded-[10px] bg-[#FFFFFF]"
          />
          {/* Pet Description */}
          <div className="w-auto h-auto min-h-[98px] min-w-[264px] px-2 pt-2 pb-20 gap-5">
            <div className="w-auto h-auto min-h-[70px] min-w-[248px] gap-[4px]">
              {/* Pet Name */}
              <div className="w-[248px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
                MO512 - Poodle Tiny Dairy Cow
              </div>
              {/* Pet Details */}
              <div className="flex w-[248px] h-auto min-h-[18px] gap-1">
                {/* Gender */}
                <div className="flex w-auto h-auto min-w-[68px] min-h-[18px] gap-[6px]">
                  <div className="w-[34px] h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Gene:
                  </div>
                  <div className="w-[28px] h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Male
                  </div>
                </div>
                <div className="w-auto h-auto min-w-[18px] font-[700] text-[12px] ml-1 min-h-[18px] text-[#667479]">
                  .
                </div>
                {/* Age */}
                <div className="flex w-auto h-auto min-w-[91px] min-h-[18px] gap-[6px]">
                  <div className="w-[26px] h-[26px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Age:
                  </div>
                  <div className="w-auto h-auto min-w-[59px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    02 months
                  </div>
                </div>
              </div>
              {/* Price */}
              <div className="w-[248px] h-[20px] font-[700] text-[14px] leading-[20px] text-[#00171F]">
                5.000.000 VND
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCards;
