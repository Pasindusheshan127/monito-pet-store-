import Footer from "@/components/Footer";
import KnowledgeCards from "@/components/KnowledgeCards";
import Navbar from "@/components/Nabbar";
import PetCards from "@/components/PetCards";
import ProductCards from "@/components/ProductCards";

export default function Home() {
  return (
    <div>
      <div className=" bg-[#FCEED5]">
        <Navbar />
      </div>
      <PetCards />
      <ProductCards />
      <KnowledgeCards />
      <Footer />
    </div>
  );
}
