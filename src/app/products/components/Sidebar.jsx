"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import data from "@/lib/data";

export default function Sidebar({ onSelectCategory }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  const hamburgerMenuClick = (test) => {
    setOpen(false);
    onSelectCategory(test);
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-full sm:w-64 bg-white shadow-lg z-40 p-4 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:block flex flex-col`}
      >
        <h2 className="text-xl font-bold mb-4">Kategorien</h2>

        <ul className="space-y-2 flex-1 overflow-y-auto">
          <li>
            <button
              onClick={() => hamburgerMenuClick(null)}
              className="flex justify-between items-center px-3 py-2 w-full text-left rounded hover:bg-gray-100"
            >
              <span>Alle Produkte</span>
            </button>
          </li>

          {data.map((cat, index) => (
            <li key={index}>
              <button
                onClick={() => hamburgerMenuClick(cat.slug)}
                className="flex justify-between items-center px-3 py-2 w-full text-left rounded hover:bg-gray-100"
              >
                <span>{cat.name}</span>
                <span className="text-sm text-gray-500">
                  {cat.products.length}
                </span>
              </button>
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
