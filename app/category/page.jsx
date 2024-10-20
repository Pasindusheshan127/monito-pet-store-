import DogList from "@/components/DogList";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nabbar";
import React from "react";

const page = () => {
  return (
    <div className="w-[1440px] h-[3119px]">
      <Navbar />
      <div className="flex">
        <div className="w-1/4 pl-[130px]">
          <Filter />
        </div>
        <div className="w-3/4 pl-[96px] pr-[130px]">
          <DogList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
