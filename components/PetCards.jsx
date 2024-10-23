"use client";
import Image from "next/image";
import React from "react";

const PetCards = ({ pet }) => {
  return (
    <div className="cursor-pointer w-auto h-auto min-w-[185px] min-h-[318px] md:min-w-[280px] md:min-h-[378px] max-h-[400px] top-[548px] left-[1030px] rounded-xl pt-2 px-2 sm:gap-1 md:gap-2 bg-[#FFFFFF]">
      {/* Pet Image */}
      {/* Displays the pet's image or a default image if none is provided */}
      <Image
        src={pet?.image || "/assets/images/puppy.png"} // Uses pet's image or default puppy image
        alt="dogImg" // Alt text for accessibility
        width={264} // Image width
        height={264} // Image height
        className="rounded-[10px] bg-[#FFFFFF]" // Adds rounded corners and a white background to the image
      />

      {/* Pet Description */}
      {/* This section contains the pet's name, gender, age, and price details */}
      <div className="w-auto h-auto min-h-[98px] min-w-[264px] px-2 pt-2 pb-20 gap-5">
        <div className="w-auto h-auto min-h-[70px] min-w-[248px] gap-[4px]">
          {/* Pet Name */}
          {/* Displays the pet's ID and breed */}
          <div className="w-[260px] h-[24px] font-[700] text-[12px] md:text-[16px] leading-6 text-[#00171F]">
            {pet.id} - {pet.breed}
          </div>

          {/* Pet Details */}
          {/* Flex container for pet's gender and age details */}
          <div className="flex w-[248px] h-auto min-h-[18px] gap-1">
            {/* Gender */}
            {/* Displays the label 'Gene' and the pet's gender */}
            <div className="flex w-auto h-auto min-w-[68px] min-h-[18px] gap-[6px]">
              <div className="w-[34px] h-[18px] font-[500] text-[11px] md:text-[12px] leading-[18px] text-[#667479]">
                Gene:
              </div>
              <div className="w-auto min-w-[28px] h-[18px] font-[700] text-[11px] md:text-[12px] leading-[18px] text-[#667479]">
                {pet.gender}
              </div>
            </div>

            {/* Separator Dot */}
            {/* Decorative dot to separate gender and age sections */}
            <div className="ml-1 w-[18px] h-[18px] gap-1 my-2">
              <div className="w-1 h-1 rounded-full bg-[#667479]"></div>
            </div>

            {/* Age */}
            {/* Displays the label 'Age' and the pet's age */}
            <div className="flex w-auto h-auto min-w-[91px] min-h-[18px] gap-[6px]">
              <div className="w-[26px] h-[26px] font-[500] text-[11px] md:text-[12px] leading-[18px] text-[#667479]">
                Age:
              </div>
              <div className="w-auto h-auto min-w-[59px] min-h-[18px] font-[700] text-[11px] md:text-[12px] leading-[18px] text-[#667479]">
                {pet.age}
              </div>
            </div>
          </div>

          {/* Price */}
          {/* Displays the pet's price */}
          <div className="w-[248px] h-[20px] font-[700] text-[12px] md:text-[14px] leading-[20px] text-[#00171F]">
            {pet.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCards;
