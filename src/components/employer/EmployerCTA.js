import React from "react";
import Image from "next/image";
import employer from "../../../public/Saly-10.svg";

const EmployerCTA = () => {
  return (
    <div className="flex flex-col gap-3 border-2 border-[#3b0764] text-[#3b0764] rounded-lg px-5 pb-10 m-5 shadow-md">
      <Image src={employer} alt="employer image" width={900} height={900} className="justify-center items-center mb-3"/>
      <p className="text-xl">FOR EMPLOYERS</p>
      <p className="text-2xl font-bold">Searching for the right talent?</p>
      <p className="font-semibold">
        Create a free account, complete your profile, list your job vacancies.
        See the list of talents, fit for your organisation!
      </p>
      <button className="w-5/12 p-2 bg-[#3b0764] text-white rounded-md">
        Get Started
      </button>
    </div>
  );
};

export default EmployerCTA;
