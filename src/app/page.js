import Image from 'next/image'
import Header from '@/components/header/Header'
import FreeInterviewTips from '@/components/header/freeInterviewTips/FreeInterviewTips'
import JobTitle from '@/components/buttons/JobTitle'
import JobListings from '@/components/jobListings/JobListings'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <FreeInterviewTips />
      <JobTitle />
      <JobListings/>
    </main>
  )
}
