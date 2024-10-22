import Image from "next/image";
import React from "react";

const AdpotionBanner = () => {
  return (
    <div className="relative w-[1180px] h-[378px] rounded-[20px] bg-[#FFB775] overflow-hidden ">
      {/* Details */}
      <div className="absolute top-[64px] left-[85px]">
        <div className="w-[225px] h-[68px] font-[800] text-[52px] leading-[68px] text-[#003459]">
          Adoption
        </div>
        <div className="w-[448px] h-[54px] font-[700] text-[36px] leading-[54px] text-[#003459]">
          We need help. so do they.
        </div>
        <div className="w-[394px] h-[36px] font-[500] text-[12px] leading-[18px] text-[#242B33]">
          Adopt a pet and give it a home, it will be love you back
          unconditionally.
        </div>
        <div className="flex gap-[40px]">
          <button
            className={`flex w-auto h-auto min-w-[161px] min-h-[48px] mt-8 rounded-[57px] px-[28px] pt-[14px] pb-[10px] gap-2 bg-[#002A48]`}
          >
            <div
              className={`w-auto min-w-[92px] h-auto min-h-6 font-[500] text-[16px] leading-6 text-[#FDFDFD] `}
            >
              Explore Now
            </div>
          </button>
          <button
            className={`flex w-auto h-auto min-w-[161px] min-h-[48px] mt-8 rounded-[57px] px-[28px] pt-[14px] pb-[10px] gap-2 border-[1.5px] border-[#003459]  `}
          >
            <div
              className={`w-auto min-w-[74px] h-6 font-[500] text-[16px] leading-6 text-[#002A48 `}
            >
              View Intro
            </div>
            <Image
              src="/assets/icons/playbtn.svg"
              alt="play"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      {/* Image */}
      <Image
        src="https://s3-alpha-sig.figma.com/img/dcc9/4436/190409de921d3586c62ceebc4d4890f1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YfN99w6PlS92wsgBwYZfyn2pbuUm9oV~u7W0x2f96DuuQX~DyKaDKozxa-KRKNtqxIrx2-sUG7a0In5870IhxDF7FBjCzmcwSus9jiMH66Zlz-pzkMah2vwe9kC98RTnSapvVpt687PuevXFO1-~syxxvh-4k1viNIHJ4YdTveaKnXJLJj~Z~dkmL7zcvBJB-eozE4m-BraE8fm3LE-t0bY3Zpe2gSZrl-bCq5RL7AQeBC-iHZ0c3NVnBNNxz2HWWt2kSs~cCQXJD~4WbmhPWMQ001OAfDzS4VdhSzg5aj~294CLSOwQ5b8UCAG7TC7bv7dJ6XKs01WsBrAN-6gAOA__"
        alt=""
        width={538}
        height={358}
        className="absolute top-[20px] left-[690px] rotate-[-96deg]"
      />
    </div>
  );
};

export default AdpotionBanner;
