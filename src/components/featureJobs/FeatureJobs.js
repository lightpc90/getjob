import React from 'react'
import { jobListings } from '@/data/jobListings'
import { pickRandomly } from '@/app/utilityFunctions/pickRandomly'
import FeatureJobLayout from './FeatureJobLayout'

const FeatureJobs = () => {
    const featureJobs = pickRandomly(jobListings, 6)
  return (
      <div className='flex gap-3 p-2 h-[140px]'>
          {featureJobs.map((featureJob, i) => (
              <FeatureJobLayout key={i} featureJob={ featureJob} />
          ))}
    </div>
  )
}

export default FeatureJobs