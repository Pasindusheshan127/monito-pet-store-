"use client";
import Footer from "@/components/Footer";
import LovelyCustomer from "@/components/LovelyCustomer";
import Navbar from "@/components/Nabbar";
import PetCards from "@/components/PetCards";
import Productinfo from "@/components/Productinfo";

import React, { useEffect, useState } from "react";

// External Data import
const url = "https://monitor-backend-rust.vercel.app/api/pets";

const page = () => {
  const [pets, setPets] = useState([]);
  const getPetsFromBackend = async () => {
    const data = await fetch(url);

    const pet = await data.json();
    console.log("pets:", pet);
    setPets(pet);
  };

  useEffect(() => {
    getPetsFromBackend();
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <div className="px-[16px] md:mx-[130px] mb-3">
        <Navbar />
      </div>

      {/* Product Detail */}
      <Productinfo />

      {/* Our Lovely Customer Section */}
      <LovelyCustomer />

      {/* more puppies */}
      <div className="w-[1440px] h-[588px] px-[130px]">
        {/* head */}
        <div className="w-auto h-auto min-w-[199px] min-h-[62px] gap-[2px] mb-4">
          <h2 className="w-[91px] h-6 font-[500] text-[16px] leading-6 text-[#000000]">
            Whats new?
          </h2>
          <h1 className="w-[210px] h-9 font-[700] text-[24px] leading-9 text-[#003459]">
            See more puppies
          </h1>
        </div>

        {/* cards */}
        <div className="grid grid-cols-4 overflow-hidden">
          {pets.length > 0 &&
            pets.slice(0, 4).map((pet) => <PetCards key={pet.id} pet={pet} />)}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;
