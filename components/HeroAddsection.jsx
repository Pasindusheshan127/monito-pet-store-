import Image from "next/image";
import React from "react";

const HeroAddsection = () => {
  return (
    <div>
      {/* hero buttons and titles */}
      <div className="w-auto h-auto min-w-[488px] min-h-[420px]  ">
        {/* hero title */}
        <div className="w-[465px] h-[68px] font-[800] text-[55px] leading-[68px] text-[#002A48]">
          One more friend
        </div>
        <div className="w-[452px] h-[60px] font-[700px] text-[46px] leading-[60px] text-[#002A48]">
          Thousands more fun!
        </div>
        {/* paragraph */}
        <div className="w-[480px] h-[72px] font-[500] leading-6 text-[16px] text-[#242B33]">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </div>
        {/* hero buttons */}
        <div className="flex gap-[40px]">
          <button className="flex w-auto h-auto min-w-[161px] min-h-[48px] mt-8 rounded-[57px] px-[28px] pt-[14px] pb-[10px] gap-2 border-[1.5px] border-[#003459] ">
            <div className="w-auto min-w-[74px] h-6 font-[500] text-[16px] leading-6 text-[#003459]">
              View Intro
            </div>
            <Image
              src="/assets/icons/playbtn.svg"
              alt="play"
              width={24}
              height={24}
            />
          </button>
          <button className="flex w-auto h-auto min-w-[161px] min-h-[48px] mt-8 rounded-[57px] px-[28px] pt-[14px] pb-[10px] gap-2 bg-[#003459] ">
            <div className="w-auto min-w-[92px] h-auto min-h-6 font-[500] text-[16px] leading-6 text-[#FDFDFD]">
              Explore Now
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAddsection;
