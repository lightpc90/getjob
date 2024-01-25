'use client'

import {useState} from 'react'
import { CgMenuRight } from "react-icons/cg";
import { FaWindowClose } from "react-icons/fa";
import MobileNavItems from './MobileNavItems';

const MobileNav = () => {
  const [menuOpened, setMenuOpened]= useState(false)
    return (
      <div className="sticky top-0  mb-10 text-[#3b0764]  z-30">
        {/* navbar */}
        <div className="flex items-center bg-[#e9d5ff]  h-[60px] w-full p-2 font-bold justify-between">
          <div>CareerCraze</div>

          <div className="flex gap-1 items-center">
            {/* <div className="border-2 border-[#3b0764] px-1 rounded-md">SignIn</div>
          <p>|</p>
          <div>SignUp</div> */}
            {!menuOpened ? (
              <div onClick={()=>{setMenuOpened(true)}}><CgMenuRight size={30} /></div>
            ) : (
              <div onClick={()=>{setMenuOpened(false)}}><FaWindowClose size={30} /></div>
            )}
          </div>
        </div>
        {/* Navbar Items */}
        {menuOpened && <MobileNavItems setMenuOpened={setMenuOpened} />}
      </div>
    );
}

export default MobileNav