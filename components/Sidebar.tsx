import { useState } from "react";
import { Sectionn } from "./Sectionn";

export const Sidebar = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const [type, setType] = useState("Women");
  const[isDisabled,setisDisabled]=useState("true")
  return (
    <aside
      className={`fixed left-0 top-[64px] w-64 h-full p-5 text-gray-800  backdrop-blur-3xl transition-colors duration-300`}
    >
      <div className="flex justify-between items-center px-4 py-2 border-b-gray-300 border-b-2">
        <button
          onClick={() => setType("Men")}
          disabled={isDisabled}
          className={`p-4 text-xl font-semibold rounded-2xl hover:bg-gray-500/60 disabled:cursor-not-allowed${
            type === "Men" ? "bg-blue-500/50" : ""
          }`}
        >
          Men
        </button>

        <button
          onClick={() => setType("Women")}
          className={`p-4 text-xl font-semibold rounded-2xl hover:bg-gray-500/60 ${
            type === "Women" ? "bg-amber-300/20" : ""
          }`}
        >
          Women
        </button>
      </div>
      {
        type&&  <Sectionn type={type} />
      }
    
    </aside>
  );
};