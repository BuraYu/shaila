"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import data from "@/lib/data";
import Link from "next/link";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const allProducts = data.flatMap((cat) =>
    cat.products.map((prod) => ({ ...prod, category: cat.name }))
  );

  const displayedProducts =
    selectedCategory === null
      ? allProducts
      : data.find((cat) => cat.slug === selectedCategory)?.products || [];

  return (
    <div className="flex">
      <Sidebar onSelectCategory={(slug) => setSelectedCategory(slug)} />

      <div className="flex-1 p-4 flex justify-center">
        <div className="w-full max-w-7xl">
          <h1 className="text-2xl font-bold mb-4">
            {selectedCategory
              ? data.find((c) => c.slug === selectedCategory)?.name
              : "Alle Produkte"}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedProducts.map((product, index) => (
              <Link
                href={`/products/${product.slug}`}
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col"
              >
                {/* TODO Image update! */}
                <div className="aspect-[4/3] bg-gray-100">
                  <img
                    src="https://via.placeholder.com/300x225"
                    alt={product.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-3">
                  <h2 className="text-sm font-medium text-gray-900 leading-tight line-clamp-2">
                    {product.title}
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    {product.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
