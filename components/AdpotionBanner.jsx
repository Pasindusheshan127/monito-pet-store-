import Image from "next/image";
import React from "react";

const AdpotionBanner = () => {
  return (
    <div className="relative w-[1180px] h-[378px] rounded-[20px] bg-[#FFB775] overflow-hidden ">
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
