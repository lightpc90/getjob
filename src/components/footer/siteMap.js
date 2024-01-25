import React from "react";
import { siteMapLinks, siteMapFilterSearch } from "@/data/siteMap";

const SiteMap = () => {
  return (
    <div className="flex flex-col gap-2 my-10">
      {siteMapFilterSearch.map((keyword, i) => (
        <button key={i}>{keyword}</button>
      ))}
    </div>
  );
};

export default SiteMap;
