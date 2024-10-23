import Image from "next/image";
import React from "react";

const HeroAddsection = ({ isActive = false }) => {
  return (
    <div>
      {/* Container for hero buttons and titles */}
      <div className="px-[28px] md:p-0 w-auto h-auto min-w-[488px] min-h-[420px]">
        {/* Hero title: "One more friend" */}
        <div
          className={`px-6 md:p-0 w-[465px] h-[68px] font-[800] text-[36px] md:text-[55px] leading-[54px] md:leading-[68px] ${
            !isActive ? "text-[#002A48]" : "text-[#FDFDFD]"
          } `}
        >
          One more friend
        </div>

        {/* Hero subtitle: "Thousands more fun!" */}
        <div
          className={` px-8 md:p-0 w-[452px] h-[60px] font-[700px] text-[24px] leading-[36px] md:text-[46px] md:leading-[60px] ${
            !isActive ? "text-[#002A48]" : "text-[#FDFDFD]"
          } `}
        >
          Thousands more fun!
        </div>

        {/* Descriptive paragraph about pets */}
        <div
          className={`px-4 md:p-0 w-[342px] h-[54px] md:w-[480px] md:h-[72px] font-[500] leading-[18px]  text-[12px] md:leading-6 md:text-[16px] ${
            !isActive ? "text-[#002A48]" : "text-[#FDFDFD]"
          } `}
        >
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </div>

        {/* Container for hero buttons */}
        <div className="flex gap-[10px] md:gap-[40px]">
          {/* "View Intro" button */}
          <button
            className={`flex w-auto h-auto min-w-[161px] min-h-[48px] mt-8 rounded-[57px] px-[28px] pt-[12px] pb-[10px] gap-2 border-[1.5px] ${
              !isActive ? "border-[#003459]" : "border-[#FDFDFD]"
            }`}
          >
            <div
              className={`w-auto min-w-[74px] h-6 font-[500] text-[16px] leading-6 ${
                !isActive ? "text-[#002A48]" : "text-[#FDFDFD]"
              }`}
            >
              View Intro
            </div>
            {/* Conditional rendering of icon based on isActive */}
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

          {/* "Explore Now" button */}
          <button
            className={`flex w-auto h-auto min-w-[163px] min-h-[48px] mt-8 rounded-[57px] px-[28px] pt-[12px] pb-[10px] gap-2 ${
              !isActive ? "bg-[#002A48]" : "bg-[#FDFDFD]"
            }`}
          >
            <div
              className={`w-auto min-w-[92px] h-auto min-h-6 font-[500] text-[16px] ml-1 leading-6 ${
                !isActive ? "text-[#FDFDFD]" : "text-[#003459]"
              }`}
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
