"use client";
import AddsBanner from "@/components/AddsBanner";
import AdpotionBanner from "@/components/AdpotionBanner";
import Footer from "@/components/Footer";
import FunVideoAdd from "@/components/FunVideoAdd";
import HeroBanner from "@/components/HeroBanner";
import ItemsHeader from "@/components/ItemsHeader";
import KnowledgeCards from "@/components/KnowledgeCards";
import PetCards from "@/components/PetCards";
import ProductCards from "@/components/ProductCards";
import ViewButton from "@/components/ViewButton";
import Link from "next/link";
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
      {/* Hero section */}
      <div className="">
        <HeroBanner />
      </div>

      {/* Pets Details Section */}
      <div className="w-full lg:w-[1440px] h-auto lg:h-[986px] top-[695px] px-[20px] lg:px-[130px]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between my-6">
          <div>
            <div className=" h-auto min-w-[145px] min-h-[24px] font-[500] text-[16px] leading-6 text-[#000000]">
              Whats new?
            </div>
            <div className=" h-auto min-w-[242px] min-h-[36px] font-[700] text-[24px] leading-[36px] text-[#003459]">
              Take a look at some of our pets
            </div>
          </div>
          {/* View More Button for Desktop */}
          <div className="hidden lg:block">
            <Link href="/productdetail">
              <ViewButton />
            </Link>
          </div>
        </div>

        {/* Pet Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[4px] lg:gap-[8px] my-[16px] lg:my-[28px]">
          {pets.length > 0 &&
            pets.map((pet) => <PetCards key={pet.id} pet={pet} />)}
        </div>

        {/* View More Button for Mobile */}
        <div className="block lg:hidden   mt-6">
          <Link href="/productdetail">
            <ViewButton />
          </Link>
        </div>
      </div>

      {/* One MoreFriend .. ADD */}
      <div className="px-[18px] md:px-[130px] my-5 md:py-10">
        <FunVideoAdd />
      </div>

      {/* Product Details Section */}
      <div className="hidden md:block  w-auto min-w-[1440px] h-auto min-h-[622px] top-[2059px] px-[130px] my-2">
        {/* Section Header */}
        <div className="flex justify-between my-6">
          <div className="">
            <div className="m-auto h-auto min-w-[145px] min-h-[24px] font-[500] text-[16px] leading-6 text-[#000000]">
              Hard to choose right products for your pets?
            </div>
            <div className="m-auto h-auto min-w-[242px] min-h-[36px] font-[700] text-[24px] leading-[36px] text-[#003459]">
              Our Products
            </div>
          </div>
          {/* View More Button */}
          <ViewButton />
        </div>
        {/* product cards */}
        <div className="grid grid-cols-4 gap-[8px] my-[28px] ">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
        </div>
      </div>

      {/* Adds Banner */}
      <div className="hidden md:block px-[130px] w-full h-auto min-w-[1438px] min-h-[251px] py-[40px] gap-[15px]">
        <AddsBanner />
      </div>

      {/* Adoption banner */}
      <div className="hidden md:block px-[130px]">
        <AdpotionBanner />
      </div>

      {/* Knowledge Section */}
      <div className=" px-[18px] w-auto h-auto md:w-[1440px] md:h-[634px] top-[3810px] md:px-[130px] mb-4">
        {/* Section Header */}
        <ItemsHeader />
        {/* Knowledge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3  overflow-hidden gap-2">
          <KnowledgeCards />
        </div>
        <div className="md:hidden">
          <ViewButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}
