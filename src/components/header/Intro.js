import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex gap-3 h-[250px] lg:h-[600px] w-full rounded-b-3xl  bg-gradient-to-tr from-[#fce7f3] via-[#f5f3ff] to-[#f3e8ff] p-3 justify-center items-center shadow-md">
      <h2 className="text-4xl lg:text-7xl font-bold text-[#581c87] w-4/12 lg:text-end">
        Your Career Starts Here
      </h2>
      <div className="w-full lg:w-4/12 p-2">
        <Image src="/Saly-1.svg" alt="header image" width={900} height={900} />
      </div>
    </div>
  );
};

export default Intro;
