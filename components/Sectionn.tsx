import Link from "next/link";

import {motion} from "framer-motion";
import { Buttonforsection } from "./Buttonforsection";
export const Sectionn = ({ type }: { type: string }) => {
  

  return (
    <motion.div 
    initial={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    transition={{duration:0.7}}
    className="flex flex-col gap-4 mt-4 text-lg font-medium px-4 py-2">
      {type==='Women' &&(  <div className="mb-6">
  
        <nav className="space-y-2">
          <Buttonforsection href={'/women/home'} category={'Home'}/>
          <Buttonforsection href={'/women/home#newin'} category={'New in'}/>
          <Buttonforsection href={'/women/clothing'} category={'Clothing'}/>
          <Buttonforsection href={'/women/dresses'} category={'Dresses'}/>
          <Buttonforsection href={'/women/shoes'} category={'Shoes'}/>
          <Buttonforsection href={'/women/bags'} category={'Bags'}/>
          <Buttonforsection href={'/women/accessories'} category={'Accessories'}/>
        </nav>
      </div>)}
      

      {type==='Men' && ( <div>
        
        <nav className="space-y-2">
        <Buttonforsection href={'/men/home'} category={'Home'}/>
          <Buttonforsection href={'/men/newin'} category={'New in'}/>
          <Buttonforsection href={'/men/clothing'} category={'Clothing'}/>
          <Buttonforsection href={'/men/shoes'} category={'Shoes'}/>
          <Buttonforsection href={'/men/bags'} category={'Bags'}/>
          <Buttonforsection href={'/men/accessories'} category={'Accessories'}/>
        </nav>
      </div>)}
     
    </motion.div>
  );
}