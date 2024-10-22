import Image from "next/image";
import React from "react";

const HeroAddsection = ({ isActive = false }) => {
  return (
    <div>
      {/* hero buttons and titles */}
      <div className="w-auto h-auto min-w-[488px] min-h-[420px]  ">
        {/* hero title */}
        <div
          className={`w-[465px] h-[68px] font-[800] text-[55px] leading-[68px] ${
            !isActive ? "text-[#002A48]" : "text-[#FDFDFD]"
          } `}
        >
          One more friend
        </div>
        <div
          className={`w-[452px] h-[60px] font-[700px] text-[46px] leading-[60px] ${
            !isActive ? "text-[#002A48]" : "text-[#FDFDFD]"
          } `}
        >
          Thousands more fun!
        </div>
        {/* paragraph */}
        <div
          className={`w-[480px] h-[72px] font-[500] leading-6 text-[16px] ${
            !isActive ? "text-[#002A48]" : "text-[#FDFDFD]"
          } `}
        >
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </div>
        {/* hero buttons */}
        <div className="flex gap-[40px]">
          <button
            className={`flex w-auto h-auto min-w-[161px] min-h-[48px] mt-8 rounded-[57px] px-[28px] pt-[14px] pb-[10px] gap-2 border-[1.5px]  ${
              !isActive ? "border-[#003459]" : "border-[#FDFDFD]"
            }    `}
          >
            <div
              className={`w-auto min-w-[74px] h-6 font-[500] text-[16px] leading-6   ${
                !isActive ? "text-[#002A48]" : "text-[#FDFDFD]"
              }      `}
            >
              View Intro
            </div>
            {isActive ? (
              <Image
                src="/assets/icons/whiteplaybtn.svg"
                alt="play"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/assets/icons/playbtn.svg"
                alt="play"
                width={24}
                height={24}
              />
            )}
          </button>
          <button
            className={`flex w-auto h-auto min-w-[161px] min-h-[48px] mt-8 rounded-[57px] px-[28px] pt-[14px] pb-[10px] gap-2  ${
              !isActive ? "bg-[#002A48]" : "bg-[#FDFDFD]"
            } `}
          >
            <div
              className={`w-auto min-w-[92px] h-auto min-h-6 font-[500] text-[16px] leading-6 ${
                !isActive ? "text-[#FDFDFD]" : "text-[#003459]"
              }   `}
            >
              Explore Now
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAddsection;
