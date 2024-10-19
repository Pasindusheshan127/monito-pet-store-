import Footer from "@/components/Footer";
import Navbar from "@/components/Nabbar";
import PetCards from "@/components/PetCards";
import ProductCards from "@/components/ProductCards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <PetCards />
      <ProductCards />
      <Footer />
    </div>
  );
}
