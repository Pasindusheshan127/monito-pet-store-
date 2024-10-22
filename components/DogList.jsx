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

        {/* Dog Card */}
        {/* <div className="border w-auto h-auto min-w-[280px] min-h-[378px] top-[999px] left-[430px] rounded-xl p-2 gap-2 bg-[#FDFDFD]">
          <div className="border w-[264px] h-[264px] rounded-[10px] bg-[#FFFFFF]"></div>
          <div className="border w-auto h-auto min-w-[264px] min-h-[98px] pt-2 pr-2 pb-5 pl-2 gap-4">
            <div className="border w-auto h-auto min-w-[248px] min-h-[70px] gap-[4px]">
              <div className="w-[248px] h-[24px] font-[700px] leading-6 text-[#00171F]">
                MO502 - Poodle Tiny Yellow
              </div>
              <div className="border flex w-full min-w-[248px] h-auto min-h-[18px] gap-1">
                <div className="flex w-auto h-auto gap-[6px]">
                  <div className="w-auto h-auto min-w-[34px] min-h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Gene:
                  </div>
                  <div className="w-auto h-auto min-w-[41px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    Female
                  </div>
                </div>
                <div className="w-[4px] h-[4px] rounded-full bg-[#667479] m-2"></div>
                <div className="flex w-auto h-auto min-w-[91px] min-h-[18px] gap-[6px]">
                  <div className="w-auto h-auto min-w-[26px] min-h-[18px] font-[500] text-[12px] leading-[18px] text-[#667479]">
                    Age:
                  </div>
                  <div className="w-auto h-auto min-w-[59px] min-h-[18px] font-[700] text-[12px] leading-[18px] text-[#667479]">
                    02 months
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-5 font-[700] text-[14px] leading-5 text-[#00171F]">
                3.900.000 VND
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DogList;
