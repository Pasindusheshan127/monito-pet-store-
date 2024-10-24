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
      <div className="hidden md:block px-[16px] md:mx-[130px] mb-3">
        <Navbar />
      </div>

      {/* Product Detail */}
      <Productinfo />

      {/* Our Lovely Customer Section */}
      <LovelyCustomer />

      {/* more puppies */}
      <div className="w-[382px] h-[1027px] px-[11px]  md:w-[1440px] md:h-[588px] md:px-[130px] overflow-hidden">
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
        {/* For Mobile Screen */}
        <div className="grid grid-cols-2 md:hidden overflow-hidden mb-4">
          {pets.length > 0 &&
            pets.slice(0, 6).map((pet) => <PetCards key={pet.id} pet={pet} />)}
        </div>
        {/* For Desktop Screen */}
        <div className="hidden md:grid grid-cols-4 overflow-hidden mb-4">
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
