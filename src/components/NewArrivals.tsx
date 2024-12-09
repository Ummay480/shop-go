"use client"
import React from "react";
import Image from "next/image";


type Product = {
    name: string;
    price: string;
    discountedPrice?: string;
    imageUrl: string;
  };
  
  const NewArrivals: React.FC = () => {
    const products: Product[] = [
      { name: "T-shirt with Tape Details", price: "$120", imageUrl: "/tshirt.jpg" },
      { name: "Skinny Fit Jeans", price: "$240", discountedPrice: "$260", imageUrl: "/jeans.jpg" },
      // Add more products as necessary
    ];
  
    return (
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="p-4 bg-white rounded shadow-lg">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded" />
              <h3 className="mt-4 font-semibold">{product.name}</h3>
              <p>{product.discountedPrice ? product.discountedPrice : product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default NewArrivals;
  