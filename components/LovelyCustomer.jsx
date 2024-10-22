"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Swiper pagination styles
import "swiper/css/navigation"; // Swiper navigation styles (if you're using navigation)

import { Navigation, Pagination } from "swiper/modules"; // Import Pagination and Navigation

// External Data import
const url = "https://monitor-backend-rust.vercel.app/api/customers";

const LovelyCustomer = () => {
  const [customers, setCustomers] = React.useState([]);
  const getCustomersFromBackend = async () => {
    const data = await fetch(url);

    const customer = await data.json();
    console.log(customer);
    setCustomers(customer);
  };

  useEffect(() => {
    getCustomersFromBackend();
  }, []);

  return (
    <div className="w-full min-w-[1180px] h-auto min-h-[471px] rounded-[20px] pt-[24px] pb-[26px] px-[130px]">
      <div className="w-full h-auto min-w-[1149px] min-h-[388px] pl-4 gap-3">
        {/* Title */}
        <h2 className="mb-5 w-[302px] h-[36px] font-[700] text-[24px] leading-9 text-[#00171F]">
          Our Lovely Customer
        </h2>

        {/* Swiper Carousel */}
        <div className="w-[1149px] h-[340px] overflow-hidden">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
            pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Pagination, Navigation]}
            className=""
          >
            {/* Slides */}
            {customers.map((customer, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={customer.image || "/assets/images/customer.png"}
                    alt="Customer 1"
                    className="w-[248px] h-[340px] rounded-[10px] object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* Pagination Div Inside Swiper */}
            <div className="swiper-pagination-custom mt-4"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LovelyCustomer;
