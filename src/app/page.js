import Image from 'next/image'
import Header from '@/components/header/Header'
import FreeInterviewTips from '@/components/header/freeInterviewTips/FreeInterviewTips'
import JobTitle from '@/components/buttons/JobTitle'
import JobListings from '@/components/jobListings/JobListings'
import User from '@/components/header/User'
import Search from '@/components/header/Search'
import Header2 from '@/components/header/Header2'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-10">
        <Header2 />

      <FreeInterviewTips />
      <p className="text-start my-5 font-semibold">
        Search by Popular Job Titles
      </p>
      <JobTitle />
      <JobListings />
    </main>
  );
}
