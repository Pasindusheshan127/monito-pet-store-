import React from "react";
import Navbar from "./Nabbar";
import HeroAddsection from "./HeroAddsection";

const HeroBanner = () => {
  return (
    <div className="relative w-[1440px] h-[695px] px-[130px] rounded-r-[40px] rounded-l-[20px] bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]]">
      <Navbar />
      <HeroAddsection />
    </div>
  );
};

export default HeroBanner;
