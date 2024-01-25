import Link from 'next/link'
import React from 'react'
import { siteMapLinks } from '@/data/siteMap'

const MobileNavItems = ({setMenuOpened}) => {
  return (
    <div className="p-3 flex flex-col gap-3 w-full text-white bg-gradient-to-tr from-[#030712] via-[#3b0764] font-semibold to-[#172554]">
      {siteMapLinks.map((link, i) => (
        <Link onClick={()=>{setMenuOpened(false)}} key={i} href={link.url}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default MobileNavItems