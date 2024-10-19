import Image from "next/image";
import React from "react";

const ProductCards = () => {
  return (
    <div className="border w-[1440px] h-[1122px] top-[2059px] px-[130px] my-2">
      {/* Section Header */}
      <div className="flex justify-between">
        <div className="">
          <div className="m-auto h-auto min-w-[326px] min-h-[24px] font-[500] text-[16px] leading-6 text-[#000000]">
            Hard to choose right products for your pets?
          </div>
          <div className="m-auto h-auto min-w-[146px] min-h-[36px] font-[700] text-[24px] leading-[36px] text-[#003459]">
            Our Products
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

      {/* product cards */}
      <div className="grid grid-cols-4 gap-[8px] my-[28px] ">
        {/* card 1 */}
        <div className="border w-[280px] h-[446px] rounded-[12px] p-2 gap-2 bg-[#FDFDFD]">
          <div className="w-[264px] h-[264px]"></div>
          <div className="w-auto h-auto min-h-[264px] min-w-[166px] pt-2 pr-2 pb-5 pl-2 gap-[10px] ">
            <div className="w-auto h-auto min-w-[248px] min-h-[94px] gap-1">
              <div className="w-[248px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
                NaturVet Dogs - Omega-Gold Plus Salmon Oil
              </div>
              <div className="flex w-full min-w-[248px] h-[18px] gap-1">
                <div className="flex w-auto h-auto min-w-[108px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-m-[47px] min-h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Product:
                  </div>
                  <div className="w-auto h-auto min-w-[55px] min-h-[18p] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Dog Food
                  </div>
                </div>
                <div className="w-[18px] h-[18px] gap-1 my-2">
                  <div className="w-1 h-1 rounded-full bg-[#667479]"></div>
                </div>
                <div className="flex w-auto h-auto min-w-[70px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-w-[26px] min-h-[18px] font-[500px] text-[12px] leading-[18px] text-[#667479]">
                    Size:
                  </div>
                  <div className="w-auto h-auto min-w-[38px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    385gm
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-[20px] font-[700px] text-[14px] leading-5 text-[#00171F]">
                350.000 VND
              </div>
            </div>
            <div className="flex w-[248px] h-auto min-h-[34px] rounded-lg px-[10px] pt-[6px] pb-[4px] gap-[2px] bg-[#FCEED5] ">
              <div className="w-[20px] h-[20px] ">
                <Image
                  src="/assets/images/gift.png"
                  alt="gift"
                  width={20}
                  height={20}
                  // className="transform -rotate-180"
                />
              </div>
              <div className="w-auto h-auto py-[10px] px-2 gap-[10px]">
                <div className="w-1 h-1 rounded-full bg-[#003459]"></div>
              </div>
              <div className="w-auto h-auto min-w-[148px] min-h-[20px] font-[700] text-[14px] leading-5 text-[#002A4B]">
                Free Toy & Free Shaker
              </div>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="border w-[280px] h-[446px] rounded-[12px] p-2 gap-2 bg-[#FDFDFD]">
          <div className="w-[264px] h-[264px]"></div>
          <div className="w-auto h-auto min-h-[264px] min-w-[166px] pt-2 pr-2 pb-5 pl-2 gap-[10px] ">
            <div className="w-auto h-auto min-w-[248px] min-h-[94px] gap-1">
              <div className="w-[248px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
                NaturVet Dogs - Omega-Gold Plus Salmon Oil
              </div>
              <div className="flex w-full min-w-[248px] h-[18px] gap-1">
                <div className="flex w-auto h-auto min-w-[108px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-m-[47px] min-h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Product:
                  </div>
                  <div className="w-auto h-auto min-w-[55px] min-h-[18p] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Dog Food
                  </div>
                </div>
                <div className="w-[18px] h-[18px] gap-1 my-2">
                  <div className="w-1 h-1 rounded-full bg-[#667479]"></div>
                </div>
                <div className="flex w-auto h-auto min-w-[70px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-w-[26px] min-h-[18px] font-[500px] text-[12px] leading-[18px] text-[#667479]">
                    Size:
                  </div>
                  <div className="w-auto h-auto min-w-[38px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    385gm
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-[20px] font-[700px] text-[14px] leading-5 text-[#00171F]">
                350.000 VND
              </div>
            </div>
            <div className="flex w-[248px] h-auto min-h-[34px] rounded-lg px-[10px] pt-[6px] pb-[4px] gap-[2px] bg-[#FCEED5] ">
              <div className="w-[20px] h-[20px] ">
                <Image
                  src="/assets/images/gift.png"
                  alt="gift"
                  width={20}
                  height={20}
                  // className="transform -rotate-180"
                />
              </div>
              <div className="w-auto h-auto py-[10px] px-2 gap-[10px]">
                <div className="w-1 h-1 rounded-full bg-[#003459]"></div>
              </div>
              <div className="w-auto h-auto min-w-[148px] min-h-[20px] font-[700] text-[14px] leading-5 text-[#002A4B]">
                Free Toy & Free Shaker
              </div>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="borderw-[280px] h-[446px] rounded-[12px] p-2 gap-2 bg-[#FDFDFD]">
          <div className="w-[264px] h-[264px]"></div>
          <div className="w-auto h-auto min-h-[264px] min-w-[166px] pt-2 pr-2 pb-5 pl-2 gap-[10px] ">
            <div className="w-auto h-auto min-w-[248px] min-h-[94px] gap-1">
              <div className="w-[248px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
                NaturVet Dogs - Omega-Gold Plus Salmon Oil
              </div>
              <div className="flex w-full min-w-[248px] h-[18px] gap-1">
                <div className="flex w-auto h-auto min-w-[108px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-m-[47px] min-h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Product:
                  </div>
                  <div className="w-auto h-auto min-w-[55px] min-h-[18p] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Dog Food
                  </div>
                </div>
                <div className="w-[18px] h-[18px] gap-1 my-2">
                  <div className="w-1 h-1 rounded-full bg-[#667479]"></div>
                </div>
                <div className="flex w-auto h-auto min-w-[70px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-w-[26px] min-h-[18px] font-[500px] text-[12px] leading-[18px] text-[#667479]">
                    Size:
                  </div>
                  <div className="w-auto h-auto min-w-[38px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    385gm
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-[20px] font-[700px] text-[14px] leading-5 text-[#00171F]">
                350.000 VND
              </div>
            </div>
            <div className="flex w-[248px] h-auto min-h-[34px] rounded-lg px-[10px] pt-[6px] pb-[4px] gap-[2px] bg-[#FCEED5] ">
              <div className="w-[20px] h-[20px] ">
                <Image
                  src="/assets/images/gift.png"
                  alt="gift"
                  width={20}
                  height={20}
                  // className="transform -rotate-180"
                />
              </div>
              <div className="w-auto h-auto py-[10px] px-2 gap-[10px]">
                <div className="w-1 h-1 rounded-full bg-[#003459]"></div>
              </div>
              <div className="w-auto h-auto min-w-[148px] min-h-[20px] font-[700] text-[14px] leading-5 text-[#002A4B]">
                Free Toy & Free Shaker
              </div>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="border w-[280px] h-[446px] rounded-[12px] p-2 gap-2 bg-[#FDFDFD]">
          <div className="w-[264px] h-[264px]"></div>
          <div className="w-auto h-auto min-h-[264px] min-w-[166px] pt-2 pr-2 pb-5 pl-2 gap-[10px] ">
            <div className="w-auto h-auto min-w-[248px] min-h-[94px] gap-1">
              <div className="w-[248px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
                NaturVet Dogs - Omega-Gold Plus Salmon Oil
              </div>
              <div className="flex w-full min-w-[248px] h-[18px] gap-1">
                <div className="flex w-auto h-auto min-w-[108px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-m-[47px] min-h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Product:
                  </div>
                  <div className="w-auto h-auto min-w-[55px] min-h-[18p] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Dog Food
                  </div>
                </div>
                <div className="w-[18px] h-[18px] gap-1 my-2">
                  <div className="w-1 h-1 rounded-full bg-[#667479]"></div>
                </div>
                <div className="flex w-auto h-auto min-w-[70px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-w-[26px] min-h-[18px] font-[500px] text-[12px] leading-[18px] text-[#667479]">
                    Size:
                  </div>
                  <div className="w-auto h-auto min-w-[38px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    385gm
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-[20px] font-[700px] text-[14px] leading-5 text-[#00171F]">
                350.000 VND
              </div>
            </div>
            <div className="flex w-[248px] h-auto min-h-[34px] rounded-lg px-[10px] pt-[6px] pb-[4px] gap-[2px] bg-[#FCEED5] ">
              <div className="w-[20px] h-[20px] ">
                <Image
                  src="/assets/images/gift.png"
                  alt="gift"
                  width={20}
                  height={20}
                  // className="transform -rotate-180"
                />
              </div>
              <div className="w-auto h-auto py-[10px] px-2 gap-[10px]">
                <div className="w-1 h-1 rounded-full bg-[#003459]"></div>
              </div>
              <div className="w-auto h-auto min-w-[148px] min-h-[20px] font-[700] text-[14px] leading-5 text-[#002A4B]">
                Free Toy & Free Shaker
              </div>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="border w-[280px] h-[446px] rounded-[12px] p-2 gap-2 bg-[#FDFDFD]">
          <div className="w-[264px] h-[264px]"></div>
          <div className="w-auto h-auto min-h-[264px] min-w-[166px] pt-2 pr-2 pb-5 pl-2 gap-[10px] ">
            <div className="w-auto h-auto min-w-[248px] min-h-[94px] gap-1">
              <div className="w-[248px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
                NaturVet Dogs - Omega-Gold Plus Salmon Oil
              </div>
              <div className="flex w-full min-w-[248px] h-[18px] gap-1">
                <div className="flex w-auto h-auto min-w-[108px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-m-[47px] min-h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Product:
                  </div>
                  <div className="w-auto h-auto min-w-[55px] min-h-[18p] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Dog Food
                  </div>
                </div>
                <div className="w-[18px] h-[18px] gap-1 my-2">
                  <div className="w-1 h-1 rounded-full bg-[#667479]"></div>
                </div>
                <div className="flex w-auto h-auto min-w-[70px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-w-[26px] min-h-[18px] font-[500px] text-[12px] leading-[18px] text-[#667479]">
                    Size:
                  </div>
                  <div className="w-auto h-auto min-w-[38px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    385gm
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-[20px] font-[700px] text-[14px] leading-5 text-[#00171F]">
                350.000 VND
              </div>
            </div>
            <div className="flex w-[248px] h-auto min-h-[34px] rounded-lg px-[10px] pt-[6px] pb-[4px] gap-[2px] bg-[#FCEED5] ">
              <div className="w-[20px] h-[20px] ">
                <Image
                  src="/assets/images/gift.png"
                  alt="gift"
                  width={20}
                  height={20}
                  // className="transform -rotate-180"
                />
              </div>
              <div className="w-auto h-auto py-[10px] px-2 gap-[10px]">
                <div className="w-1 h-1 rounded-full bg-[#003459]"></div>
              </div>
              <div className="w-auto h-auto min-w-[148px] min-h-[20px] font-[700] text-[14px] leading-5 text-[#002A4B]">
                Free Toy & Free Shaker
              </div>
            </div>
          </div>
        </div>
        {/* card 1 */}
        <div className="border w-[280px] h-[446px] rounded-[12px] p-2 gap-2 bg-[#FDFDFD]">
          <div className="w-[264px] h-[264px]"></div>
          <div className="w-auto h-auto min-h-[264px] min-w-[166px] pt-2 pr-2 pb-5 pl-2 gap-[10px] ">
            <div className="w-auto h-auto min-w-[248px] min-h-[94px] gap-1">
              <div className="w-[248px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
                NaturVet Dogs - Omega-Gold Plus Salmon Oil
              </div>
              <div className="flex w-full min-w-[248px] h-[18px] gap-1">
                <div className="flex w-auto h-auto min-w-[108px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-m-[47px] min-h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Product:
                  </div>
                  <div className="w-auto h-auto min-w-[55px] min-h-[18p] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Dog Food
                  </div>
                </div>
                <div className="w-[18px] h-[18px] gap-1 my-2">
                  <div className="w-1 h-1 rounded-full bg-[#667479]"></div>
                </div>
                <div className="flex w-auto h-auto min-w-[70px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-w-[26px] min-h-[18px] font-[500px] text-[12px] leading-[18px] text-[#667479]">
                    Size:
                  </div>
                  <div className="w-auto h-auto min-w-[38px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    385gm
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-[20px] font-[700px] text-[14px] leading-5 text-[#00171F]">
                350.000 VND
              </div>
            </div>
            <div className="flex w-[248px] h-auto min-h-[34px] rounded-lg px-[10px] pt-[6px] pb-[4px] gap-[2px] bg-[#FCEED5] ">
              <div className="w-[20px] h-[20px] ">
                <Image
                  src="/assets/images/gift.png"
                  alt="gift"
                  width={20}
                  height={20}
                  // className="transform -rotate-180"
                />
              </div>
              <div className="w-auto h-auto py-[10px] px-2 gap-[10px]">
                <div className="w-1 h-1 rounded-full bg-[#003459]"></div>
              </div>
              <div className="w-auto h-auto min-w-[148px] min-h-[20px] font-[700] text-[14px] leading-5 text-[#002A4B]">
                Free Toy & Free Shaker
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
