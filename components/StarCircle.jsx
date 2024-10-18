import Image from "next/image";
import React from "react";

const StarCircle = () => {
  return (
    <div>
      {/* Outer circle */}
      <div className="relative w-4 h-4 bg-[#D80027] rounded-full flex items-center justify-center">
        {/* Star inside the circle */}
        <div className="w-[7px] h-[7px] text-[#FFDA44]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path
              fillRule="evenodd"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StarCircle;
