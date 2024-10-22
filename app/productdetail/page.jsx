import LovelyCustomer from "@/components/LovelyCustomer";
import Navbar from "@/components/Nabbar";
import Productinfo from "@/components/Productinfo";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      {/* Product Detail */}
      <Productinfo />
      {/* Our Lovely Customer Section */}
      <LovelyCustomer />
    </div>
  );
};

export default page;
