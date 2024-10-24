"use client";

import Image from "next/image";
import HeroAddsection from "./HeroAddsection";

const CategoryBanner = () => {
  return (
    <div>
      <div className="hidden md:block">
        {/*For Larger screen */}
        <div className="relative w-[1180px] h-[378px] rounded-[20px]  bg-[#FCEED5] overflow-hidden">
          {/* image */}
          <div className="absolute top-[77px] left-[41px] z-10">
            <Image
              src="https://s3-alpha-sig.figma.com/img/63ed/2cc9/7ebd1b80435a9c0d9051f445ecc741d3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=beIV6kVnGO~pY~YaJR96NL5laTQd1rNkrgF2f0rYNszWYZ9xNqfJaqRO~ANQry1crhtg6koYapj-YCFAFvTHtHH8Yr~vO4yWY09tPlZAOYqu1ivKrJpKRpbuhTEsPboi3Z9kun20s24PKI1gU~hmwk52Zb3ajwtKTKH8r2aF9HpT2NOql9qEuvgU9pJGk0zfI6hOmzg7JiOVavdt~iHzGNq3NWq2uv-f2rLJ~wQLnMtqnL8KQv~qlnjDjnur0CTL5tPy4cqCuZqBjgfx2IQRnX3tTblv9Gm2A0uH-PrLtjsn9ghc2NEtmnPY7uooJjBpPf5RF9ZGKq5YcwlYkweA9Q__"
              alt="bannerImg"
              width={650}
              height={301}
            />
          </div>
          {/* fun add */}
          <div className="absolute w-[782.29px] h-[635px] top-[-235px]  left-[599px]  rounded-tl-[99px] rotate-[-55.23deg] bg-[#003459]"></div>
          <div className="absolute top-[64px] left-[702px]">
            <HeroAddsection isActive={true} />
          </div>
        </div>
      </div>

      {/* For small screen */}
      <div className="md:hidden w-[1180px] h-auto min-h-[486px] overflow-hidden bg-[#FCEED5]">
        <div className="flex-col  ">
          {/* Hero section, positioned absolutely on the page */}
          <div className="">
            <HeroAddsection />
          </div>
          <div className="absolute left-[-41px] top-[318px]">
            <Image
              src="https://s3-alpha-sig.figma.com/img/63ed/2cc9/7ebd1b80435a9c0d9051f445ecc741d3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=beIV6kVnGO~pY~YaJR96NL5laTQd1rNkrgF2f0rYNszWYZ9xNqfJaqRO~ANQry1crhtg6koYapj-YCFAFvTHtHH8Yr~vO4yWY09tPlZAOYqu1ivKrJpKRpbuhTEsPboi3Z9kun20s24PKI1gU~hmwk52Zb3ajwtKTKH8r2aF9HpT2NOql9qEuvgU9pJGk0zfI6hOmzg7JiOVavdt~iHzGNq3NWq2uv-f2rLJ~wQLnMtqnL8KQv~qlnjDjnur0CTL5tPy4cqCuZqBjgfx2IQRnX3tTblv9Gm2A0uH-PrLtjsn9ghc2NEtmnPY7uooJjBpPf5RF9ZGKq5YcwlYkweA9Q__"
              alt="bannerImg"
              width={478}
              height={221}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
