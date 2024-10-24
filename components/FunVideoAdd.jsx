import React from "react";
import HeroAddsection from "./HeroAddsection";
import Image from "next/image";

const FunVideoAdd = () => {
  return (
    <div className="relative w-[382px] h-[640px] md:w-[1180px] md:h-[378px] rounded-[20px] bg-[#003459] overflow-hidden">
      {/* image */}
      <div className="absolute top-[315px] left-[-50px] md:top-[36px] md:left-[20px] z-10">
        <Image
          src="https://s3-alpha-sig.figma.com/img/cc4b/2826/12bf9db02e233aa64a34946d9a9aed4d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYKy07b0LNYKFQ2~NF4ZZM5p8LQRuEausWP4DGcEYnWdUQ77iKLYJZaf~aPQnYxsTZ0nY1jpBBnsujzk3-xzQO0KBpD8vXhDZGoMf1TBsYiiMfkC1M44icwL8oYmhkt7M0KPU5dz9lrCXhAJR2fnR1gdBSRfXUEAOZxOAppKxD3AzmpKy4sAZRLSPQ1~G1NV8X8HkiVQixaz1hRCAOlw6bmz1v0x6R-m8zGaTQOI4Hnb8dYlVvB14t3GTnBv85AbRzSsgKvEsRNBiKMrapM5eDYlSMPWPfbcQN6uoe7rwCLlGtqRiLZndwoGnv~0GR2wGYk3dWk9WaRd0GABMt3mXw__"
          alt="bannerImg"
          width={513}
          height={342}
          className=""
        />
      </div>
      {/* fun add */}
      <div className="absolute rotate-[198deg] top-[-292px] left-[-98px] w-[605px] h-[645px] md:w-[782.29px] md:h-[635px] md:top-[-235px]  md:left-[599px]  rounded-tl-[99px] md:rotate-[-55.23deg] bg-[#FCEED5]"></div>
      <div className="absolute md:top-[64px] md:left-[692px]">
        <HeroAddsection />
      </div>
    </div>
  );
};

export default FunVideoAdd;
