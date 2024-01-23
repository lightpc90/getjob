import React from "react";
import { BsSliders } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (

      <div className="flex flex-wrap my-2 gap-2">
        {/* search box */}
        <div className="relative flex items-center">
          <div className="absolute p-1">
            <GoSearch size={25} />
          </div>
          <input
            type="text"
            placeholder="Job title, company or keyword"
            className="pl-10 py-2 pr-2 shadow-md rounded-md"
          />
        </div>
        {/* filter icon */}
        <div className="bg-white p-2 rounded-md shadow-md">
          <BsSliders size={20}/>
        </div>
      </div>

  );
};

export default Search;
