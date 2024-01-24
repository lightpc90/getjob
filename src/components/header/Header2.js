'use client'

import {useEffect, useState} from 'react'
import User from './User'
import Search from './Search'

const Header2 = () => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY || document.documentElement.scrollTop
            if (scrollPos > 490) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }            
        }
        window.addEventListener('scroll', handleScroll)
        // Clean event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll)
    },[])
  return (
    <div
      className={`sticky top-[70px]  flex flex-col w-full p-3 justify-center items-center ${
        isSticky
          ? "bg-[#3b0764] rounded-b-xl opacity-95 text-white"
          : "text-[#3b0764]"
      }`}
    >
      <User />
      <Search />
    </div>
  );
}

export default Header2