"use client"
import React from "react";

const Brands: React.FC = () => {
    const brands = ["Versace", "Zara", "Gucci", "Prada", "Calvin Klein"];
    return (
      <section className="flex justify-around py-8 bg-white">
        {brands.map((brand, idx) => (
          <span key={idx} className="text-xl font-semibold">{brand}</span>
        ))}
      </section>
    );
  };
  
  export default Brands;
  