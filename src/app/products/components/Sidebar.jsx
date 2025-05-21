"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const categories = [
  { name: "Schaumstoffschalen", count: 66 },
  { name: "Ökologisch versiegelte Behälter", count: 2121 },
  { name: "Lux Auslaufsichere Behälter", count: 2121 },
  { name: "PP-versiegelte Behälter", count: 77 },
  { name: "Baklava-Becher", count: 33 },
  { name: "Salatschüsseln", count: 55 },
  { name: "Keksbecher", count: 1010 },
  { name: "Kuchenbecher", count: 77 },
  { name: "Soßenbecher", count: 1111 },
  { name: "Feinkostbehälter", count: 66 },
  { name: "Fleischtöpfe", count: 2323 },
  { name: "Käsebecher", count: 44 },
  { name: "Lebensmittelbehälter", count: 99 },
  { name: "Plastikbecher", count: 1313 },
  { name: "Hummusbehälter", count: 1010 },
  { name: "Spezial-Produktionsbehälter", count: 44 },
  { name: "Karton- und Papierprodukte", count: 2929 },
  { name: "Aluminiumprodukte", count: 77 },
  { name: "Holzprodukte", count: 22 },
  { name: "Papierhandtücher", count: 44 },
  { name: "Kunststoffprodukte", count: 9 },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-full sm:w-64 bg-white shadow-lg z-40 p-4 transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full"} 
  lg:translate-x-0 lg:static lg:block flex flex-col`}
      >
        <h2 className="text-xl font-bold mb-4">Kategorien</h2>

        <ul className="space-y-2 flex-1 overflow-y-auto">
          {categories.map((cat, index) => (
            <li key={index}>
              <Link
                href={`/kategorie/${encodeURIComponent(cat.name)}`}
                className="flex justify-between items-center px-3 py-2 rounded hover:bg-gray-100"
              >
                <span>{cat.name}</span>
                <span className="text-sm text-gray-500">{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="mt-4 p-3 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center justify-center lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <X className="w-5 h-5" />
          <span className="ml-2 text-sm">Menü schließen</span>
        </button>
      </aside>

      {!open && (
        <button
          className="lg:hidden p-3 fixed bottom-4 left-4 z-50 bg-white rounded-full shadow-md"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
