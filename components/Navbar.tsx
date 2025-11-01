import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars, FaShoppingCart } from "react-icons/fa";
import { Sidebar } from "./Sidebar";
import { useSidebarStore } from "@/stores/sidebarStore";

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const{isOpen,toggle}=useSidebarStore();
  

  return (
    <header className=" fixed bg-black/40 text-white w-full left-0 top-0 z-50 backdrop-blur-sm h-[64px]">
      
      <div className=" max-w-7xl mx-auto flex justify-between items-center px-4 py-3 ">
        <div className="flex items-center  gap-3  ">
          <button onClick={toggle}
          className="text-2xl">
              <FaBars/>
          </button>
          <Link href={'/women/home'} className="text-2xl  font-bold font-stretch-105%">STELLA</Link>
        </div>
        {/*Desktop search*/}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <input type="text" placeholder="Search items and brands " className=" bg-white w-1/2 text-black rounded-full px-4 py-2 outline-none "/>
        </div>
        {/*Right icons*/}
        <div className="flex items-center gap-4 text-xl ">
          <button 
          onClick={()=>setIsSearchOpen(!isSearchOpen)}
          className="md:hidden ">
            <FaSearch/>
          </button>
          <button>
            <FaHeart/>
          </button>
          <button>
            <FaUser/>
          </button>
          <Link href={'/cart'}>
            <FaShoppingCart/>
          </Link>

        </div>
        

      </div>

     

      {/* Mobile Search (expands below navbar) */}
      {isSearchOpen &&(
         <div className="flex flex-1 justify-center px-4 py-2 md:hidden">
          <input type="text" placeholder="Search items and brands " className=" bg-white w-1/2 text-black rounded-full px-4 py-2 outline-none "/>
        </div>
      )}
      {isOpen &&<Sidebar isMenuOpen={isOpen}/>}
     
    </header>
  );
};