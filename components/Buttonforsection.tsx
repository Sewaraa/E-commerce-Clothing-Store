import { useSidebarStore } from "@/stores/sidebarStore";
import Link from "next/link";

export const Buttonforsection = ({
    href,
    category

}:{
    href:string,
    category:string
})=>{
  const { toggle } = useSidebarStore();


  return (
    <Link
      onClick={toggle}
      href={href}
      className="p-4 flex justify-between items-center bg-gray-400/90 rounded-xl hover:bg-gray-300 transition"
    >
      <div>{category}</div>
      <img alt="" />
    </Link>
  );
};