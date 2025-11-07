"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { Sidebar } from "./Sidebar";
import { useSidebarStore } from "@/stores/sidebarStore";
import { sampleData } from "@/data/sampleData";
import { Product } from "@/type/product";

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const { isOpen, toggle } = useSidebarStore();

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = sampleData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  return (
    <header className="fixed bg-black/40 text-white w-full left-0 top-0 z-50 backdrop-blur-sm h-[64px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <button onClick={toggle} className="text-2xl">
            <FaBars />
          </button>
          <Link href="/women/home" className="text-2xl font-bold">
            STELLA
          </Link>
        </div>

        {/* Desktop search */}
        <div className="hidden md:flex flex-col flex-1 items-center relative">
          <input
            type="text"
            placeholder="Search items and brands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-white w-1/2 text-black rounded-full px-4 py-2 outline-none"
          />

          {/* Result Search*/}
          {query && results.length > 0 && (
            <div className="absolute top-[45px] w-1/2 bg-white text-black rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => setQuery("")}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-sm">{product.title}</p>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4 text-xl">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="md:hidden">
            <FaSearch />
          </button>
          <Link href={'/fav'}>
            <FaHeart />
          </Link >
          <button>
            <FaUser />
          </button>
          <Link href="/cart">
            <FaShoppingCart />
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="flex flex-col items-center px-4 py-2 md:hidden relative">
          <input
            type="text"
            placeholder="Search items and brands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-white w-full text-black rounded-full px-4 py-2 outline-none"
          />

          {/* Result Search in mobile*/}
          {query && results.length > 0 && (<div className="absolute top-[60px] w-[90%] bg-white text-black rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
                  onClick={() => {
                    setQuery("");
                    setIsSearchOpen(false);
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-sm">{product.title}</p>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {isOpen && <Sidebar isMenuOpen={isOpen} />}
    </header>
  );
};