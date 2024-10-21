import Navbar from "@/components/Nabbar";
import Productinfo from "@/components/Productinfo";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      {/* Product Detail */}
      <Productinfo />
      {/* Our Lovely Customer Section */}
    </div>
  );
};

export default page;
