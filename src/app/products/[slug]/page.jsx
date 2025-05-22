"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import data from "@/lib/data";

export default function ProductDetail({}) {
  const { slug } = useParams();
  const router = useRouter();

  let product = null;
  for (const category of data) {
    product = category.products.find((p) => p.slug === slug);
    if (product) break;
  }

  if (!product) {
    return <p className="p-4">Produkt nicht gefunden</p>;
  }

  return (
    <div className="min-h-screen p-6">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition px-4 py-2 rounded-lg border border-gray-200 shadow-sm mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Zurück
      </button>

      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p>Produktabmessungen: {product.Produktabmessungen}</p>
      <p>Menge im Beutel: {product["Menge im Beutel"]}</p>
    </div>
  );
}
