"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import data from "@/lib/data";
import Image from "next/image";

export default function ProductDetail() {
  const { slug } = useParams();
  const router = useRouter();

  let product = null;
  let categorySlug = null;

  for (const category of data) {
    const found = category.products.find((p) => p.slug === slug);
    if (found) {
      product = found;
      categorySlug = category.slug;
      break;
    }
  }

  if (!product) {
    return <p className="p-4">Produkt nicht gefunden</p>;
  }

  const imagePath = `/images/${product.categorySlug}/${product.slug}.jpg`;

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition px-4 py-2 rounded-lg border border-gray-200 shadow-sm mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Zurück
      </button>

      {/* Image */}
      <div className="mb-6">
        <Image
          src={imagePath}
          alt={product.title}
          width={800}
          height={500}
          className="rounded-xl shadow object-contain w-full h-auto max-h-[400px]"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
        <div>
          <span className="font-semibold">Produktabmessungen:</span>
          <br />
          {product.Produktabmessungen}
        </div>
        <div>
          <span className="font-semibold">Menge im Beutel:</span>
          <br />
          {product["Menge im Beutel"]}
        </div>
        <div>
          <span className="font-semibold">Menge im Karton:</span>
          <br />
          {product["Menge im Karton"]}
        </div>
        <div>
          <span className="font-semibold">Kartongröße:</span>
          <br />
          {product.Kartongröße}
        </div>
        <div>
          <span className="font-semibold">Karton m³:</span>
          <br />
          {product["Karton m³"]}
        </div>
        <div>
          <span className="font-semibold">40 HC-Box Menge:</span>
          <br />
          {product["40 HC-Box Menge"]}
        </div>
        <div>
          <span className="font-semibold">Kartonmenge im LKW:</span>
          <br />
          {product["Kartonmenge im LKW"]}
        </div>
      </div>
    </div>
  );
}
