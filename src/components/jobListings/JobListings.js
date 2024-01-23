import React from 'react'
import { jobListings } from '@/data/jobListings'
import JobListingLayout from './JobListingLayout'

const JobListings = () => {
  return (
    <div className='flex flex-col gap-3 my-10 p-4'>
      {jobListings.map((joblisting, i) => (
        <JobListingLayout key={i} joblisting={joblisting} />
      ))}
    </div>
  );
}

export default JobListings