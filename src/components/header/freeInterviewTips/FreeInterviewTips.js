import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import InterviewImage from '../../../../public/Saly-13now.svg'
import Image from "next/image";

const FreeInterviewTips = () => {
  return (
    <div className="flex flex-wrap items-center ">
      <Image src={InterviewImage} alt="interview image" className="w-6/12"/>
      <div className="flex flex-col justify-center font-bold gap-3 w-5/12">
        <p>13 Interview Tips That Guarantee Your Success</p>
        <Link href="/" className="flex items-center gap-1">
          Learn more
          <span>
            <HiArrowLongRight size={20} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FreeInterviewTips;
