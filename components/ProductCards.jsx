"use client";
import Image from "next/image";
import React from "react";

const ProductCards = ({ product }) => {
  return (
    <div className="cursor-pointer w-[280px] h-[446px] rounded-[12px] p-2 gap-2 bg-[#FDFDFD]">
      {/* product image */}
      <div className="w-[264px] h-[264px]">
        <Image
          src={product?.image || "/assets/images/product.png"}
          alt="productImg"
          width={264}
          height={264}
        />
      </div>
      <div className="w-auto h-auto min-h-[264px] min-w-[166px] pt-2 pr-2 pb-5 pl-2 gap-[10px] ">
        <div className="w-auto h-auto min-w-[248px] min-h-[94px] gap-1">
          <div className="w-[248px] h-[48px] font-[700] text-[16px] leading-6 text-[#00171F]">
            {product.name}
          </div>
          <div className="flex w-full min-w-[248px] h-[18px] gap-1">
            <div className="flex w-auto h-auto min-w-[108px] min-h-[18px] gap-[6px]">
              <div className="w-auto h-auto min-m-[47px] min-h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                Product:
              </div>
              <div className="w-auto h-auto min-w-[55px] min-h-[18p] font-[700] text-[12px] leading-[18px] text-[#667479]">
                {product.product}
              </div>
            </div>
            <div className="w-[18px] h-[18px] gap-1 my-2">
              <div className="w-1 h-1 rounded-full bg-[#667479]"></div>
            </div>
            <div className="flex w-auto h-auto min-w-[70px] min-h-[18px] gap-[6px]">
              <div className="w-auto h-auto min-w-[26px] min-h-[18px] font-[500px] text-[12px] leading-[18px] text-[#667479]">
                Size:
              </div>
              <div className="w-auto h-auto min-w-[38px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                {product.size}
              </div>
            </div>
          </div>
          <div className="w-[248px] h-[20px] font-[700px] text-[14px] leading-5 text-[#00171F]">
            {product.price}
          </div>
        </div>
        <div className="flex w-[248px] h-auto min-h-[34px] rounded-lg px-[10px] pt-[6px] pb-[4px] gap-[2px] bg-[#FCEED5] ">
          <div className="w-[20px] h-[20px] ">
            <Image
              src="/assets/images/gift.png"
              alt="gift"
              width={20}
              height={20}
              // className="transform -rotate-180"
            />
          </div>
          <div className="w-auto h-auto py-[10px] px-2 gap-[10px]">
            <div className="w-1 h-1 rounded-full bg-[#003459]"></div>
          </div>
          <div className="w-auto h-auto min-w-[148px] min-h-[20px] font-[700] text-[14px] leading-5 text-[#002A4B]">
            {product.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
