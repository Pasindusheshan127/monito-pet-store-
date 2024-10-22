import Image from "next/image";
import React from "react";

const ViewButton = () => {
  return (
    <div>
      <div className="">
        <button className="flex w-auto min-w-[151px] h-auto min-h-[44px] rounded-[57px] top-[78px] left-[1159px] border-[1.5px] py-3 px-7 gap-2 border-[#003459]">
          <div className="font-[500] text-[14px] leading-5 text-[#003459]">
            View more
          </div>
          <Image
            src="/assets/icons/rightArrow.svg"
            alt="rightArrow"
            width={20}
            height={20}
            className="top-[7px] left-[8px]"
          />
        </button>
      </div>
    </div>
  );
};

export default ViewButton;
