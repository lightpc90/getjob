import React from 'react'
import { jobTitles } from '@/data/jobTitle'

const JobTitle = () => {
  return (
      <div className='flex gap-2 w-full overflow-auto'>
          {jobTitles.map((jobTitle, i) => (
              <button key={i} className='border-2  text-xs rounded-xl px-3 border-gray-400 bg-gray-200 shadow-md'>{jobTitle}</button>
          ))}
    </div>
  )
}

export default JobTitle