import { useState } from "react";
import { Sectionn } from "./Sectionn";

export const Sidebar = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const [type, setType] = useState("Women");

  return (
    <aside
      className={`fixed left-0 top-[64px] h-[calc(100vh-64px)] w-64 px-5 py-6
      bg-gradient-to-b from-black/20 via-amber-400/50 to-black/20
      backdrop-blur-md border-r border-amber-100/30 shadow-lg
      transition-all duration-500 ease-in-out z-50
      ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* ==== Header Tabs ==== */}
      <div className="flex justify-around items-center mb-8">
        {["Men", "Women"].map((gender) => {
          const isDisabled = gender === "Men"; // نمنع القسم الخاص بالرجال

          return (
            <button
              key={gender}
              disabled={isDisabled}
              onClick={() => !isDisabled && setType(gender)}
              className={`px-4 py-2 text-lg font-semibold rounded-full transition-all duration-300
              ${
                isDisabled
                  ? "text-gray-400 bg-gray-100/20 cursor-not-allowed"
                  : type === gender
                  ? "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-200/30 hover:text-black"
              }`}
            >
              {gender}
            </button>
          );
        })}
      </div>

      {/* ==== Sections ==== */}
      <div className="overflow-y-auto max-h-[80vh] px-1 custom-scrollbar">
        <Sectionn type={type} />
      </div>
    </aside>
  );
};