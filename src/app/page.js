import Image from "next/image";
import Header from "@/components/header/Header";
import FreeInterviewTips from "@/components/header/freeInterviewTips/FreeInterviewTips";
import JobTitle from "@/components/buttons/JobTitle";
import JobListings from "@/components/jobListings/JobListings";
import Header2 from "@/components/header/Header2";
import EmployerCTA from "@/components/employer/EmployerCTA";


export default function Home() {
  return (
    <main className="min-h-screen mt-10">
      <section className="flex flex-col items-center">
        <Header2 />
        <FreeInterviewTips />
        <p className="text-start my-5 font-semibold">
          Search by Popular Job Titles
        </p>
        <JobTitle />
        <JobListings />
      </section>
      <section><EmployerCTA/></section>
    </main>
  );
}
