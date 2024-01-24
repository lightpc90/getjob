import React from 'react'
import { CgMenuRight } from "react-icons/cg";

const MobileNav = () => {
    return (
      <div className="sticky top-0 bg-[#e9d5ff] mb-10 text-[#3b0764] h-[60px] p-2 w-full flex items-center font-bold justify-between">
        <div>CareerCraze</div>
        <div><CgMenuRight size={30}/></div>
      </div>
    );
}

export default MobileNav