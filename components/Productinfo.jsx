"use client";
import Image from "next/image";
import React from "react";
import PetsImageSlider from "./PetsImageSlider";

const Productinfo = () => {
  return (
    <div className="">
      {/* Main Container for Product Details */}
      <div className="mx-[130px]">
        <div className="w-full grid grid-cols-2 min-w-[1180px] h-auto min-h-[826px] rounded-[20px] py-[22px] px-[20px] gap-[34px] border border-[#EBEEEF] bg-[#FDFDFD] ">
          {/* Image Carousel */}
          <div className="w-full min-w-[560px] h-auto min-h-[706px] gap-4">
            <PetsImageSlider />
            <div className="flex w-full h-auto min-h-[48px] min-w-[560px] rounded-[10px] justify-between py-[9px] px-[12px]  mt-4">
              {/*  */}
              <div className="flex w-auto h-auto min-w-[244px] min-h-[30px] gap-[9px]">
                <div className="w-[20px] h-[20px] border"></div>
                <div className="w-[225px] h-[20px] font-[700] text-[14px] leading-5 text-[#002A48]">
                  100% health guarantee for pets
                </div>
              </div>
              {/*  */}
              <div className="flex w-auto h-auto min-w-[277px] min-h-[30px] gap-[9px]">
                <div className="w-[20px] h-[20px] border"></div>
                <div className="w-[268px] h-[20px] font-[700] text-[14px] leading-5 text-[#002A48]">
                  100% guarantee of pet identification
                </div>
              </div>
            </div>
            {/* Icons */}
            <div className="flex w-auto min-w-[240px] h-[40px] py-[6px] px-[10px] gap-[21px] ">
              {/* share */}
              <div className="w-auto h-auto min-w-[70px] min-h-[20px] gap-8px flex">
                <div className="w-5 h-5">
                  <Image
                    src="/assets/icons/share.svg"
                    alt="share"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="w-[42px] h-[20px] font-[700] text-[14px] leading-5 text-[#002A4B]">
                  Share:
                </div>
              </div>
              {/* social media */}
              <div className="flex w-fullm h-auto min-w-[129px] min-h-[18px] justify-between">
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="facebook"
                  width={18}
                  height={18}
                />
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="facebook"
                  width={18}
                  height={18}
                />
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="facebook"
                  width={18}
                  height={18}
                />
                <Image
                  src="/assets/icons/youtube.svg"
                  alt="facebook"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          </div>
          {/* Product Information */}
          <div className="h-auto w-auto min-w-[517px] min-h-[782px] gap-[18px]">
            {/* Breadcrumb Navigation */}
            <div className="flex w-auto h-auto min-w-[343px] min-h-[24px] gap-[6px]">
              <div className="w-[38px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                Home
              </div>
              <div className="w-auto h-auto min-w-6 min-h-6 gap-[10px]">
                <Image
                  src="/assets/icons/rightArrow.svg"
                  alt="arrow"
                  width={18}
                  height={18}
                />
              </div>
              <div className="w-[28px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                Dog
              </div>
              <div className="w-auto h-auto min-w-6 min-h-6 gap-[10px]">
                <Image
                  src="/assets/icons/rightArrow.svg"
                  alt="arrow"
                  width={18}
                  height={18}
                />
              </div>
              <div className="w-[68px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                Large Dog
              </div>
              <div className="w-auto h-auto min-w-6 min-h-6 gap-[10px]">
                <Image
                  src="/assets/icons/rightArrow.svg"
                  alt="arrow"
                  width={18}
                  height={18}
                />
              </div>
              <div className="w-[101px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                Shiba Inu Sepia
              </div>
            </div>

            {/* Name & Price */}
            <div className="w-auto h-auto gap-[6px]">
              {/* name */}
              <div className="w-auto h-auto gap-[2px] mt-6">
                <div className="w-[302px] h-[20px] font-[500] text-[14px] leading-5 text-[#99A2A5]">
                  SKU #1000078
                </div>
                <div className="w-[320px] h-[36px] font-[700] text-[24px] leading-9 text-[#00171F]">
                  Shiba Inu Sepia
                </div>
              </div>
              {/* price */}
              <div className="w-[248px] h-[32px] font-[700] text-[20px] leading-8 text-[#002A48]">
                34.000.000 VND
              </div>
            </div>

            {/* Bottons */}
            <div className="flex mt-5 w-auto h-auto min-h-[44px] min-w-[373px] gap-[18px]">
              <button className="w-auto h-full min-w-[138px] min-h-[44px] pt-[14px] px-[28px] pb-[10px] rounded-[57px] bg-[#003459] ">
                <div className="w-[82px] h-6 font-[700] text-[16px] leading-6 text-[#FDFDFD]">
                  Contact us
                </div>
              </button>
              <button className="flex w-auto  min-w-[217px] h-[44px] pt-[10px] px-[28px] pb-[10px] rounded-[57px] border-2 border-[#003459] gap-[18px]">
                <div className="w-auto h-auto min-w-[26px] min-h-[28px] pr-[2px] pb-[4px] ">
                  <div className=" ">
                    <Image
                      src="/assets/icons/massage.svg"
                      alt="massagebox"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="w-auto min-w-[129px] h-6 font-[700] text-[16px] leading-6 text-[#002A48]">
                  Chat with Monito
                </div>
              </button>
            </div>

            {/* Product Information */}
            <div className="mt-5 w-auto h-auto min-w-[517px] min-h-[546px]">
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[42px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    SKU
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[250px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : #1000078
                  </div>
                </div>
              </div>
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[42px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    Gender
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[250px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : Female
                  </div>
                </div>
              </div>
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[42px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    Age
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[250px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : 2 Months
                  </div>
                </div>
              </div>
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[42px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    Size
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[250px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : Small
                  </div>
                </div>
              </div>
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[42px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    Vaccinated
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[250px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : Yes
                  </div>
                </div>
              </div>
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[42px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    Dewormed
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[250px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : Yes
                  </div>
                </div>
              </div>
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[42px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    Cert
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[250px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : Yes (MKA)
                  </div>
                </div>
              </div>
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[42px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    Microchip
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[250px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : Yes
                  </div>
                </div>
              </div>
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[42px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    Location
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[250px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : Vietnam
                  </div>
                </div>
              </div>
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[42px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    Published Date
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[250px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : 12-Oct-2022
                  </div>
                </div>
              </div>
              {/* rows */}
              <div className="flex w-full h-auto min-w-[517px] min-h-[102px] border-b border-[#EBEEEF] py-2 ">
                <div className="w-full h-auto min-w-[194px] min-h-[26px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[120px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    Additional Information
                  </div>
                </div>
                <div className="w-full h-auto min-w-[323px] min-h-[86px] pt-1 px-[11px] pb-[2px] gap-[10px]">
                  <div className="w-[205px] h-5 font-[500] text-[14px] leading-5 text-[#667479]">
                    : Pure breed Shih Tzu. Good body structure. With MKA cert
                    and Microchip. Father from champion lineage.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productinfo;
