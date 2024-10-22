"use client";
import Image from "next/image";
import React from "react";

const PetCards = ({ pet }) => {
  return (
    <div className="w-auto h-auto min-w-[280px] min-h-[378px] max-h-[400px] top-[548px] left-[1030px] rounded-xl pt-2 px-2 gap-2 bg-[#FFFFFF]">
      {/* Pet Image */}
      <Image
        src={pet?.image || "/assets/images/puppy.png"}
        alt="dogImg"
        width={264}
        height={264}
        className="rounded-[10px] bg-[#FFFFFF]"
      />
      {/* Pet Description */}
      <div className="w-auto h-auto min-h-[98px] min-w-[264px] px-2 pt-2 pb-20 gap-5">
        <div className="w-auto h-auto min-h-[70px] min-w-[248px] gap-[4px]">
          {/* Pet Name */}
          <div className="w-[260px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
            {pet.id} - {pet.breed}
          </div>
          {/* Pet Details */}
          <div className="flex w-[248px] h-auto min-h-[18px] gap-1">
            {/* Gender */}
            <div className="flex w-auto h-auto min-w-[68px] min-h-[18px] gap-[6px]">
              <div className="w-[34px] h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                Gene:
              </div>
              <div className="w-auto min-w-[28px] h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                {pet.gender}
              </div>
            </div>
            <div className=" ml-1 w-[18px] h-[18px] gap-1 my-2">
              <div className="w-1 h-1 rounded-full bg-[#667479]"></div>
            </div>
            {/* Age */}
            <div className="flex w-auto h-auto min-w-[91px] min-h-[18px] gap-[6px]">
              <div className="w-[26px] h-[26px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                Age:
              </div>
              <div className="w-auto h-auto min-w-[59px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                {pet.age}
              </div>
            </div>
          </div>
          {/* Price */}
          <div className="w-[248px] h-[20px] font-[700] text-[14px] leading-[20px] text-[#00171F]">
            {pet.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCards;
