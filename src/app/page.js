import Image from 'next/image'
import Header from '@/components/header/Header'
import FreeInterviewTips from '@/components/header/freeInterviewTips/FreeInterviewTips'
import JobTitle from '@/components/buttons/JobTitle'
import JobListings from '@/components/jobListings/JobListings'
import User from '@/components/header/User'
import Search from '@/components/header/Search'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-10">
      <User />
      <Search/>
      <FreeInterviewTips />
      <JobTitle />
      <JobListings/>
    </main>
  )
}
