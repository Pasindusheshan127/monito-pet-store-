"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Swiper pagination styles
import "swiper/css/navigation"; // Swiper navigation styles (if you're using navigation)

import { Navigation, Pagination } from "swiper/modules";

const SmallImageSlider = () => {
  return (
    <div>
      {/* smaller image slider */}
      <div className="w-[414px] md:w-[560px] h-[94px] overflow-hidden">
        <Swiper
          slidesPerView={6}
          spaceBetween={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 6 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 6 },
          }}
          modules={[Pagination, Navigation]}
          className=""
        >
          <SwiperSlide>
            <img
              src="/assets/images/pet1.png"
              alt="pet "
              className="w-[94px] h-[94px] rounded-[4px] object-cover object-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/pet2.png"
              alt="pet "
              className="w-[94px] h-[94px] rounded-[4px] object-cover object-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/pet3.png"
              alt="pet "
              className="w-[94px] h-[94px] rounded-[4px] object-cover object-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/pet4.png"
              alt="pet "
              className="w-[94px] h-[94px] rounded-[4px] object-cover object-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/pet3.png"
              alt="pet "
              className="w-[94px] h-[94px] rounded-[4px] object-cover object-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/pet5.png"
              alt="pet "
              className="w-[94px] h-[94px] rounded-[4px] object-cover object-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/pet1.png"
              alt="pet "
              className="w-[94px] h-[94px] rounded-[4px] object-cover object-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/pet2.png"
              alt="pet "
              className="w-[94px] h-[94px] rounded-[4px] object-cover object-center"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SmallImageSlider;
