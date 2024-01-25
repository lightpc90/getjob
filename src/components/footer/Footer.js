import React from 'react'
import SiteLinks from './siteLinks';
import SiteMap from './siteMap';

const Footer = () => {
  return (
    <div className="flex flex-col justify-between w-full min-h-[300px] p-2 text-white bg-gradient-to-br from-[#6d28d9] via-[#6b21a8] to-[#581c87] mt-10">
      {/* SiteMap */}
      <div>
        <SiteMap/>
        <SiteLinks/>
        <p></p>
      </div>
      {/* copyright section */}
      <div className="mt-8 text-center">
        &copy;{new Date().getFullYear()} CareerCraze
      </div>
    </div>
  );
}

export default Footer