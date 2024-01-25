import React from 'react'
import { CgMenuRight } from "react-icons/cg";
import { FaWindowClose } from "react-icons/fa";

const MobileNav = () => {
    return (
      <div className="sticky top-0 bg-[#e9d5ff] mb-10 text-[#3b0764] h-[60px] p-2 w-full flex items-center font-bold justify-between z-30">
        <div>CareerCraze</div>

        <div className="flex gap-1 items-center">
          <div className="border-2 border-[#3b0764] px-1 rounded-md">Login</div>
          <p>|</p>
          <div>Signup</div>
          <CgMenuRight size={30} />
        </div>
      </div>
    );
}

export default MobileNav