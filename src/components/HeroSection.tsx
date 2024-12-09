"use client"
import React from "react";

const HeroSection: React.FC = () => {
    return (
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Find Clothes That Match Your Style</h2>
        <p className="text-lg mb-8">Browse through our diverse range of meticulously crafted garments...</p>
        <button className="px-8 py-4 bg-black text-white rounded">Shop Now</button>
        <div className="flex justify-center space-x-8 mt-8">
          <div>200+ International Brands</div>
          <div>2,000+ High-Quality Products</div>
          <div>30,000+ Happy Customers</div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  