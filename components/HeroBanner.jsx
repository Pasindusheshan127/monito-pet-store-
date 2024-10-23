import React from "react";
import Navbar from "./Nabbar";
import HeroAddsection from "./HeroAddsection";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative h-[628px] md:w-[1440px] md:h-[695px] px-4 md:px-[130px] rounded-br-[40px] rounded-bl-[20px] bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]] overflow-hidden">
      {/* Navbar section, hidden on mobile devices */}
      <div className="">
        <Navbar />
      </div>

      {/* Main content section */}
      <div className="flex flex-col md:flex-row">
        {/* Hero section, positioned absolutely on the page */}
        <div className="absolute top-[139px]  md:top-[178px] md:left-[130px]">
          <HeroAddsection />
        </div>

        {/* Displaying image on larger screens (hidden on mobile) */}
        <div className="absolute hidden md:block md:top-[120px] md:right-[60px]">
          <Image
            src="https://s3-alpha-sig.figma.com/img/035a/16de/8e1aa9a0522d0cebb4144a5ceda0344a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PXgr6E2Wr9TJgbO1dfFTE9BEHR7DXCgfMXe-M4X6OEao5Ia1eqDOUnO2oMGPSeGwjtd058b6k02-ZidYmiTqFbANEo2F6-og1Z6z3dedU8LFdObdwRTqHu3BkLffMnncNo1rYT42b15wMU5alVz6Zd8oqvXaG-IAyMuwLyUk4YEW8BJ4V78WHjT~70DBOorWWGfpMs2FGvLYzhrUi9O5eUd3J1~ZBjmNAum6Mi60Rm1uL3Iyx6B9PFHcTwrfCijMWjjyGtUSMa7PDA69pf9xkQT2ftRs~0x-CKW20QYWI2eYlb9J-qKDUu-lhEAqJpXWV0kfMmVQkKWqJ2B6FsYfKA__"
            alt="" // Empty alt tag for decorative images, but ideally should be meaningful
            width={944}
            height={623}
          />
        </div>

        {/* Displaying smaller image on mobile devices */}
        <div className="absolute left-[-32px] top-[402px] md:hidden">
          <Image
            src="https://s3-alpha-sig.figma.com/img/63ed/2cc9/7ebd1b80435a9c0d9051f445ecc741d3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=beIV6kVnGO~pY~YaJR96NL5laTQd1rNkrgF2f0rYNszWYZ9xNqfJaqRO~ANQry1crhtg6koYapj-YCFAFvTHtHH8Yr~vO4yWY09tPlZAOYqu1ivKrJpKRpbuhTEsPboi3Z9kun20s24PKI1gU~hmwk52Zb3ajwtKTKH8r2aF9HpT2NOql9qEuvgU9pJGk0zfI6hOmzg7JiOVavdt~iHzGNq3NWq2uv-f2rLJ~wQLnMtqnL8KQv~qlnjDjnur0CTL5tPy4cqCuZqBjgfx2IQRnX3tTblv9Gm2A0uH-PrLtjsn9ghc2NEtmnPY7uooJjBpPf5RF9ZGKq5YcwlYkweA9Q__"
            alt="bannerImg" // Descriptive alt text for the mobile banner image
            width={478}
            height={221}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; // Exporting the HeroBanner component
