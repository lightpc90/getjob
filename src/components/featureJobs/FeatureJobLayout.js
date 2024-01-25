import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const FeatureJobLayout = ({featureJob}) => {
  return (
    <Link href='/' className="flex flex-col h-full w-3/12 text-sm border-2 bg-gradient-to-tr from-[#c084fc] via-[#3b0764] to-[#5b21b6] border-white shadow-md rounded-lg p-2">
    <Image src={featureJob.logo} width={500} height={500} alt='logo' className='h-[30px] w-[30px]'/>
      <p className="font-bold">{featureJob.title}</p>
      <p>{`${featureJob.company}-${featureJob.location}`}</p>
      <p>{`${featureJob.type}-${featureJob.salary}`}</p>
      <p>{featureJob.mode}</p>
    </Link>
  );
}

export default FeatureJobLayout