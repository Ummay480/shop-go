"use client"
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <h1 className="text-2xl font-bold">SHOP.CO</h1>
      <div className="space-x-4">
        <Link href="/">Shop</Link>
        <Link href="/">On Sale</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Brands</Link>
      </div>
      <input
        type="text"
        placeholder="Search for products..."
        className="border rounded px-4 py-2"
      />
    </nav>
  );
};

export default Navbar;
