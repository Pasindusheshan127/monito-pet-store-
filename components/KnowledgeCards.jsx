"use client";
import Image from "next/image";
import React from "react";

const KnowledgeCards = ({ Knowledge }) => {
  return (
    <div className="flex">
      {/* cards */}

      {/* Card Blog 1*/}
      <div className="cursor-pointer w-auto h-auto min-h-[424px] min-w[380px] top-[150px] left-[1`30px] rounded-[12px] p-2 gap-2 bg-[#FFFFFF]">
        <div className="w-[364px] h-[240px] rounded-[10px] bg-[#FFFFFF] ">
          <Image
            src="https://s3-alpha-sig.figma.com/img/164b/8551/c113c74555b6aeaec9a5b979c2ee53d4?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hsRWAQrWUe9iupTxSSoCIX2vgcBsCnGmLng-akJZoUDtAB5icJez8LoTcPQYmEVyHSrZift9Y-9cQoD5IZMcnXfGqJeTI2IK7TaD3p9Bl546kqX6VG~tWi~EhLoZZyGZOPaFW1xO1QYOHFNi8yz-ZEkSBFNjb~Ug36uxTCKhQM9PNRF7~-w9nXKGezjDBCVN3KLUU33wgCEwb3SRfXcCPZO-LZOnIc~8s0jrpLq1MnIGu3X6LG8TSsYisWrqdYn0~JBBVdKZM05JezLO2He3llzKjrI1ZCi-hKqJzuDBaHhhzU3Ys34JHswL0hraJ6TvYUbC7TzF-T5tsXGfVPeyUg__"
            alt=""
            width={364}
            height={243}
          />
        </div>

        <div className="w-auto h-auto min-w-[364px] min-h-[160px] p-2 gap-[10px] ">
          {/* Button */}
          <div className="w-[89px] h-auto min-h-[20px] rounded-[28px] py-[2px] px-[10px] gap-[10px] bg-[#00A7E7]">
            <div className="w-[89px] h-[16px] font-[700] text-[10px] leading-4 text-[#FDFDFD]">
              Pet knowledge
            </div>
          </div>
          {/* Title and desc */}
          <div className="w-auto h-auto min-w-[348px] min-h-[114px] gap-[6px]">
            <div className="w-[348px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
              What is a Pomeranian? How to Identify Pomeranian Dogs
            </div>
            <div className="w-[348px] h-[48px] font-[400] text-[14px] leading-[14px] text-[#242B33]">
              The Pomeranian, also known as the Pomeranian (Pom dog), is always
              in the top of the cutest pets. Not only that, the small, lovely,
              smart, friendly, and skillful circus dog breed.
            </div>
          </div>
        </div>
      </div>
      {/* Card Blog 2*/}
      <div className="cursor-pointer w-auto h-auto min-h-[424px] min-w[380px] top-[150px] left-[1`30px] rounded-[12px] p-2 gap-2 bg-[#FFFFFF]">
        <div className="w-[364px] h-[240px] rounded-[10px] bg-[#FFFFFF] ">
          <Image
            src="https://s3-alpha-sig.figma.com/img/5e97/6f4f/0a476f3dabcbcedb02310d51a05973ad?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Apm52RBuDHoa7iRy~lDgmm1K-zljgshyEy3DtkuN4lWvrliSQGexbqnfq5fdKiipMVct0YLexk5g2hjMf8jqklsrSNcE8krX2P5yQIWjnluAVS1e3tT6pyOYJ4boUNr0bJXoXrfej7PLNxMz21a~w7LyFxmxw-SRAZ8JiVMAkBNWMwvPZpowjVJ-mpeBrQFV~5oboHWYdNAq0HX0vIXaOepynLz1JLssb--Iu6mbuEtMp9WQO6aDrpYr-I~0hURDmZStt9GLKESmvkfMDPxaZevouKHxL-Ka794s69kjbDiw9ork~GAjV-~jJ4clAMZOKgsX-KP3Bmq4hrz2gJ1JUA__"
            alt=""
            width={364}
            height={243}
          />
        </div>

        <div className="w-auto h-auto min-w-[364px] min-h-[160px] p-2 gap-[10px] ">
          {/* Button */}
          <div className="w-[89px] h-auto min-h-[20px] rounded-[28px] py-[2px] px-[10px] gap-[10px] bg-[#00A7E7]">
            <div className="w-[89px] h-[16px] font-[700] text-[10px] leading-4 text-[#FDFDFD]">
              Pet knowledge
            </div>
          </div>
          {/* Title and desc */}
          <div className="w-auto h-auto min-w-[348px] min-h-[114px] gap-[6px]">
            <div className="w-[348px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
              Why Dogs Bite and Destroy Furniture and How to Prevent It
              Effectively
            </div>
            <div className="w-[348px] h-[48px] font-[400] text-[14px] leading-[14px] text-[#242B33]">
              Dog bites are common during development. However, no one wants to
              see their furniture or important items being bitten by a dog.
            </div>
          </div>
        </div>
      </div>
      {/* Card Blog 3*/}
      <div className="cursor-pointer w-auto h-auto min-h-[424px] min-w[380px] top-[150px] left-[1`30px] rounded-[12px] p-2 gap-2 bg-[#FFFFFF]">
        <div className="w-[364px] h-[240px] rounded-[10px] bg-[#FFFFFF] ">
          <Image
            src="https://s3-alpha-sig.figma.com/img/9c94/ebaa/40056d6caaf1af31cf6dd3725c34eb7f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J70gJS7oN75s3fHGhIBonrsiTxnn35j02vqiAGh0SDpmcI0TMc0f6esJ4QA8sY7T4A9JGkbOGe6gU5w4CYd49~mPnstCun4k5EJE7UIY3N7O3IgBTk71TWsqzSXpUlgSLFCmVZgznjsxKZqvOV-2GXv1yEeSTAL~WVBAnj-n3yRxCT7pnVis~IHE-PzXJLdYLb2v3f90k3mA3OqqkqNoT~bXCpx2KSrxIHEKX-cZGQ7PeVdfPSVNDVHFswLoTmeoQs6WuKivnryGW8McPLWqMoLr33G4SDkGXIkPznNlEflzGSegm-Pw-mCgoXW~Vuj4UwFxA3lBL8Hag7ccipJfbQ__"
            alt=""
            width={364}
            height={243}
          />
        </div>

        <div className="w-auto h-auto min-w-[364px] min-h-[160px] p-2 gap-[10px] ">
          {/* Button */}
          <div className="w-[89px] h-auto min-h-[20px] rounded-[28px] py-[2px] px-[10px] gap-[10px] bg-[#00A7E7]">
            <div className="w-[89px] h-[16px] font-[700] text-[10px] leading-4 text-[#FDFDFD]">
              Pet knowledge
            </div>
          </div>
          {/* Title and desc */}
          <div className="w-auto h-auto min-w-[348px] min-h-[114px] gap-[6px]">
            <div className="w-[348px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
              Why Dogs Bite and Destroy Furniture and How to Prevent It
              Effectively
            </div>
            <div className="w-[348px] h-[48px] font-[400] text-[14px] leading-[14px] text-[#242B33]">
              Dog bites are common during development. However, no one wants to
              see their furniture or important items being bitten by a dog.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCards;
