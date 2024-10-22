"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Swiper pagination styles
import "swiper/css/navigation"; // Swiper navigation styles (if you're using navigation)

import { Navigation, Pagination } from "swiper/modules";
import SmallImageSlider from "./SmallImageSlider";

const PetsImageSlider = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[56px] h-[592px] gap-4">
        {/*larger image slider  */}
        <div className="w-[550px] h-[476px] rounded-[10px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            loop={true}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            modules={[Pagination, Navigation]}
            className=""
          >
            <SwiperSlide>
              <img
                src="/assets/images/pet1.png"
                alt="pet "
                className="w-[565px] h-[592px] rounded-[10px] object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/images/pet2.png"
                alt="pet "
                className="w-[565px] h-[592px] rounded-[10px] object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/images/pet1.png"
                alt="pet "
                className="w-[565px] h-[592px] rounded-[10px] object-cover object-center"
              />
            </SwiperSlide>
            {/* Add the Swiper navigation buttons */}
            {/* <div className="swiper-button-prev custom-prev"></div>
            <div className="swiper-button-next custom-next"></div> */}
          </Swiper>
        </div>
      </div>
      <div className="mt-1">
        <SmallImageSlider />
      </div>
    </div>
  );
};

export default PetsImageSlider;
