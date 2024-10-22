"use client";
import Footer from "@/components/Footer";
import FunVideoAdd from "@/components/FunVideoAdd";
import HeroBanner from "@/components/HeroBanner";
import ItemsHeader from "@/components/ItemsHeader";
import KnowledgeCards from "@/components/KnowledgeCards";
import PetCards from "@/components/PetCards";
import ProductCards from "@/components/ProductCards";
import { useEffect, useState } from "react";

// External Data import
//pets
const petsUrl = "https://monitor-backend-rust.vercel.app/api/pets";

//products
const productsUrl = "https://monitor-backend-rust.vercel.app/api/products";

export default function Home() {
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);

  const getPetsFromBackend = async () => {
    const data = await fetch(petsUrl);

    const pets = await data.json();
    console.log("Pets: ", pets);
    setPets(pets);
  };

  const getProductsFromBackend = async () => {
    const data = await fetch(productsUrl);

    const products = await data.json();
    console.log("products: ", products);
    setProducts(products);
  };

  useEffect(() => {
    getPetsFromBackend();
    getProductsFromBackend();
  }, []);

  return (
    <div>
      {/* Her section */}
      <div className="">
        <HeroBanner />
      </div>

      {/* Pets Details Section */}
      <div className="border w-[1440px] h-[986px] top-[695px] px-[130px] ">
        {/* Section Header */}
        <ItemsHeader />

        {/* pet cards */}
        <div className="grid grid-cols-4 gap-[8px] my-[28px] overflow-hidden ">
          {pets.length > 0 &&
            pets.map((pet) => <PetCards key={pet.id} pet={pet} />)}
        </div>
      </div>

      {/* One MoreFriend .. ADD */}
      <div className="px-[130px] py-10">
        <FunVideoAdd />
      </div>

      {/* Product Details Section */}
      <div className="border w-auto min-w-[1440px] h-auto min-h-[622px] top-[2059px] px-[130px] my-2">
        {/* Section Header */}
        <ItemsHeader />
        {/* product cards */}
        <div className="grid grid-cols-4 gap-[8px] my-[28px] ">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
        </div>
      </div>

      {/* Knowledge Section */}
      <div className="border w-[1440px] h-[634px] top-[3810px] px-[130px]">
        {/* Section Header */}
        <ItemsHeader />
        {/* Knowledge Cards */}
        <div className="grid grid-cols-3 grid-rows-1 overflow-hidden gap-2">
          <KnowledgeCards />
          <KnowledgeCards />
          <KnowledgeCards />
        </div>
      </div>
      <Footer />
    </div>
  );
}
