import Image from "next/image";
import React from "react";

const Filter = () => {
  return (
    // Main filter container
    <div className="border w-auto h-auto min-h-[572px] min-w-[280px] top-[603px] left-[130px] ">
      {/* Gender filter section */}
      <div className="w-full h-auto min-w-[280px] min-h-[98px] border-b border-[#EBEEEF]">
        {/* Gender title */}
        <div className="w-[57px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
          Gender
        </div>
        {/* Gender filter options */}
        <div className="w-auto h-auto gap-[8px]">
          <div className="flex w-auto h-auto min-w-[58px] min-h-[#20px] gap-[10px] ">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border bg-[#FFFFFF] border-[#CCD1D2]"
            />
            <div className="w-8 h-5 font-[500] text-[14px] leading-[20px] text-[#00171F]">
              Male
            </div>
          </div>
          <div className="flex w-auto h-auto min-w-[74px] gap-[10px]">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border border-[#CCD1D2] bg-[#FFFFFF]"
            />
            <div className="w-12 h-5 font-[500] text-[14px] leading-5 text-[#00171F]">
              Female
            </div>
          </div>
        </div>
      </div>
      {/* Color filter section */}
      <div className="w-full h-auto min-w-[280px] min-h-[226px] border-b py-[16px] gap-[10px] border-[#EBEEEF]">
        {/* Color title */}
        <div className="w-[41px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
          Color
        </div>
        {/* Color filter options */}
        <div className="w-auto h-auto min-h-[160px] min-w-[141px] gap-2">
          <div className="flex w-auto h-auto min-w-[72px] min-h-[20px] gap-[10px]">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border border-[#CCD1D2] bg-[#FFFFFF]"
            />

            <div className="w-[15px] h-[15px] rounded-[10px] bg-[#FF564F]"></div>
            <div className="w-[26px] h-[20px] font-[500] text-[14px] leading-5 text-[#00171F]">
              Red
            </div>
          </div>

          <div className="flex w-auto h-auto min-h-[20px] min-w-[98px] gap-[10px]">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border border-[#CCD1D2] bg-[#FFFFFF]"
            />
            <div className=" w-[15px] h-[15px] rounded-[10px] bg-[#FFB672]"></div>
            <div className=" w-[47px] h-[20px] font-[500] text-[14px] leading-5 text-[#00171F]">
              Apricot
            </div>
          </div>

          <div className="flex w-auto h-auto min-w-[87px min-h-[20px] gap-[10px]">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border border-[#CCD1D2] bg-[#FFFFFF]"
            />
            <div className=" w-[15px] h-[15px] rounded-[10px] bg-[#242B33]"></div>
            <div className="w-9 h-5 font-[500] text-[14px] leading-5 text-[#00171F]">
              Black
            </div>
          </div>

          <div className="flex w-auto h-auto min-w-[141px] min-h-[20px] gap-[10px]">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border border-[#CCD1D2] bg-[#FFFFFF]"
            />
            <div
              className=" w-[15px] h-[15px] rounded-[10px] bg-gradient-to-r"
              style={{
                background:
                  "linear-gradient(90deg, #242B33 0%, #242B33 52.59%, #D7D7D7 52.6%, #D2D2D2 100%)",
              }}
            ></div>
            <div className="w-[90px] h-[20px] font-[500] text-[14px] leading-5 text-[#00171F]">
              Black & White
            </div>
          </div>

          <div className="flex w-auto h-auto min-w-[88px] min-h-[20px] gap-[10px]">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border border-[#CCD1D2] bg-[#FFFFFF]"
            />
            <div className="w-[15px] h-[15px] rounded-[10px] bg-[#CECECE]"></div>
            <div className="w-[35px] h-[20px] font-[500] text-[14px] leading-5 text-[#00171F]">
              Silver
            </div>
          </div>

          <div className="flex w-auto h-auto min-w-[75px] min-h-[20px] gap-[10px]">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border border-[#CCD1D2] bg-[#FFFFFF]"
            />
            <div className="w-[15px] h-[15px] rounded-[10px] bg-[#FFF7CE]"></div>
            <div className="w-245px] h-[20px] font-[500] text-[14px] leading-5 text-[#00171F]">
              Tan
            </div>
          </div>
        </div>
      </div>
      {/* Price filter section */}
      <div className="w-full h-auto min-w-[280px] min-h-[106px] border-b border-[#EBEEEF]">
        {/* Price title */}
        <div className="w-[37px] h-6 font-[700] text-[16px] leading-6 text-[#00171F]">
          Price
        </div>
        {/* Min price input */}
        <div className="flex w-full min-w-[280px] h-auto min-h-[40px] justify-between">
          <div className="w-auto h-auto min-w-[135px] min-h-[40px] border border-[#EBEEEF] p-[10px] gap-[10px]">
            <div className="flex w-full min-w-[115px] h-auto min-h-[20px] justify-between">
              <div className="w-[23px] h-5 font-[500] text-[14px] leading-5 text-[#242B33]">
                Min
              </div>
              <div className="w-auto h-auto min-w-[14px] min-h-[14px]">
                <Image
                  src="/assets/icons/updownArrows.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </div>
            </div>
          </div>
          {/* Max price input */}
          <div className="w-full min-w-[135px] h-auto min-h-[40px] border border-[#EBEEEF] p-[10px] gap-[10px]">
            <div className="flex w-full min-w-[115px] h-auto min-h-[20px] justify-between">
              <div className="w-[28px] h-5 font-[500] text-[14px] leading-5 text-[#242B33]">
                Max
              </div>
              <div className="w-auto h-auto min-w-[14px] min-h-[14px]">
                <Image
                  src="/assets/icons/updownArrows.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breed filter section */}
      <div className="w-full h-auto min-w-[280px] min-h-[142px] border-b py-[16px] gap-[10px] border-[#EBEEEF">
        {/* Breed title */}
        <div className="w-[44px] h-[24px] font-[700] text-[16px] leading-6 text-[#00171F]">
          Breed
        </div>
        {/* Breed input field */}
        <div className="w-auto h-auto min-w-[78px] min-h-[76px] gap-2">
          <div className="flex w-auto h-auto min-w-[61px] min-h-[20px] gap-10">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border border-[#CCD1D2] bg-[#FFFFFF]"
            />
            <div className="w-[35px] h-[20px] font-[500] text-[14px] leading-5 text-[#00171F]">
              Small
            </div>
          </div>
          <div className="flex w-auto h-auto min-w-[78px] min-h-[20px] gap-10">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border border-[#CCD1D2] bg-[#FFFFFF]"
            />
            <div className="w-[52px] h-[20px] font-[500] text-[14px] leading-5 text-[#00171F]">
              Medium
            </div>
          </div>
          <div className="flex w-auto h-auto min-w-[64px] min-h-[20px] gap-10">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-[4px] border border-[#CCD1D2] bg-[#FFFFFF]"
            />
            <div className="w-[38px] h-[20px] font-[500] text-[14px] leading-5 text-[#00171F]">
              Small
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
