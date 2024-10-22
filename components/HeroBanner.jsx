import React from "react";
import Navbar from "./Nabbar";
import HeroAddsection from "./HeroAddsection";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative w-[1440px] h-[695px] px-[130px] rounded-r-[40px] rounded-l-[20px] bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]] overflow-hidden">
      <Navbar />
      <div className="absolute top-[178px] left-[130px]">
        <HeroAddsection />
      </div>
      <div className="absolute top-[120px] right-[60px]">
        <Image
          src="https://s3-alpha-sig.figma.com/img/035a/16de/8e1aa9a0522d0cebb4144a5ceda0344a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PXgr6E2Wr9TJgbO1dfFTE9BEHR7DXCgfMXe-M4X6OEao5Ia1eqDOUnO2oMGPSeGwjtd058b6k02-ZidYmiTqFbANEo2F6-og1Z6z3dedU8LFdObdwRTqHu3BkLffMnncNo1rYT42b15wMU5alVz6Zd8oqvXaG-IAyMuwLyUk4YEW8BJ4V78WHjT~70DBOorWWGfpMs2FGvLYzhrUi9O5eUd3J1~ZBjmNAum6Mi60Rm1uL3Iyx6B9PFHcTwrfCijMWjjyGtUSMa7PDA69pf9xkQT2ftRs~0x-CKW20QYWI2eYlb9J-qKDUu-lhEAqJpXWV0kfMmVQkKWqJ2B6FsYfKA__"
          alt=""
          width={944}
          height={623}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
