import React from 'react'
import { SiAzuredataexplorer } from "react-icons/si";
import Marquee from '../utility/Marquee';
import FeatureJobs from '../featureJobs/FeatureJobs';

const Intro2 = () => {
  return (
    <div className=" flex flex-col justify-between text-xl h-[230px] bg-[#3b0764] w-full pt-[50px] text-white p-3">
      <div className="flex gap-2 ">
        <p>...explore endless possibilities</p>
        <SiAzuredataexplorer />
      </div>
      <Marquee><FeatureJobs/></Marquee>
    </div>
  );
}

export default Intro2