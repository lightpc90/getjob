import React from "react";
import { siteMapLinks } from "@/data/siteMap";
import Link from "next/link";

const SiteLinks = () => {
  return (
    <div className="flex flex-wrap gap-3 my-10">
      {siteMapLinks.map((siteLink, i) => (
        <Link href={siteLink.url} key={i}>{siteLink.name}</Link>
      ))}
    </div>
  );
};

export default SiteLinks;
