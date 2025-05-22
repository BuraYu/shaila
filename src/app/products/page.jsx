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

      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">
          {selectedCategory
            ? data.find((c) => c.slug === selectedCategory)?.name
            : "Alle Produkte"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedProducts.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow hover:shadow-lg"
            >
              <Link href={`/products/${product.slug}`}>
                <h2 className="text-xl font-semibold cursor-pointer">
                  {product.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm">{product.category || ""}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
