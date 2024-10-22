"use client";

import { useEffect, useState } from "react";
import PetCards from "./PetCards";
import Image from "next/image";

//External Data import
const petsUrl = "https://monitor-backend-rust.vercel.app/api/pets";

const DogList = () => {
  const [pets, setPets] = useState([]);

  const getPetsFromBackend = async () => {
    const data = await fetch(petsUrl);

    const pets = await data.json();
    console.log("Pets: ", pets);
    setPets(pets);
  };

  useEffect(() => {
    getPetsFromBackend();
  }, []);

  return (
    <div className="">
      {/* Title */}
      <div className="flex justify-between">
        <div className="flex gap-4 my-3">
          <h1 className="w-auto h-auto min-w-[114px] min-h-[36px] gap-[2px] font-[700] text-[24px] leading-9 text-[#003459]">
            Small Dog
          </h1>
          <h2 className="w-[71px] h-[20px] font-[500] text-[14px] leading-5 text-[#667479] mt-3">
            52 puppies
          </h2>
        </div>
        <div className=" flex w-auto h-auto min-w-[165px] min-h-[34px] rounded-[20px] border border-[#CCD1D2] pt-[6px] pb-[4px] pr-[10px] pl-[20px] gap-2 my-3">
          <div className="w-auto h-auto min-w-[103px] min-h-[20px] font-[500] text-[14px] leading-5 text-[#667479]">
            Sort by: Popular
          </div>
          <Image
            src="/assets/icons/downArrow.svg"
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 overflow-hidden">
        {/* Dog List */}
        {pets.length > 0 &&
          pets.map((pet) => <PetCards key={pet.id} pet={pet} />)}
      </div>
      {/* pgination */}
      <div className="flex items-center ml-[280px] mb-4 w-auto h-auto min-w-[356px] min-h-[34px]  gap-[12px]">
        <div className="w-[34px] h-[34px] rounded-[8px] px-[2px] gap-[10px ">
          <div className="h-6 w-6">
            <Image
              src="/assets/icons/leftarrw.svg"
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="w-8 h-8 rounded-[8px] pt-[6px] pr-[13px] pl-[13px] pb-[4px] gap-[10px] bg-[#003459]">
          <div className="text-[#FDFDFD] w-[7px] h-[24px] font-[700] text-[18px] leading-6">
            1
          </div>
        </div>
        <div className="w-[34px] h-[34px] rounded-[10px] pt-[6px] pr-[11px]pb-[4px] pl-[11px] gap-[10px] ">
          <div className=" w-[7px] h-[24px] font-[700] text-[18px] leading-6">
            2
          </div>
        </div>
        <div className="w-[34px] h-[34px] rounded-[10px] pt-[6px] pr-[11px]pb-[4px] pl-[11px] gap-[10px] ">
          <div className=" w-[7px] h-[24px] font-[700] text-[18px] leading-6">
            3
          </div>
        </div>
        <div className="w-[34px] h-[34px] rounded-[10px] pt-[6px] pr-[11px]pb-[4px] pl-[11px] gap-[10px] ">
          <div className=" w-[7px] h-[24px] font-[700] text-[18px] leading-6">
            4
          </div>
        </div>
        <div className="w-[34px] h-[34px] rounded-[10px] pt-[6px] pr-[11px]pb-[4px] pl-[11px] gap-[10px] ">
          <div className=" w-[7px] h-[24px] font-[700] text-[18px] leading-6">
            ...
          </div>
        </div>
        <div className="w-[34px] h-[34px] rounded-[10px] pt-[6px] pr-[11px]pb-[4px] pl-[11px] gap-[10px] ">
          <div className=" w-[7px] h-[24px] font-[700] text-[18px] leading-6">
            28
          </div>
        </div>
        <div className="w-[34px] h-[34px] rounded-[8px] px-[2px] gap-[10px ">
          <div className="h-6 w-6">
            <Image
              src="/assets/icons/rightarrw.svg"
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogList;
