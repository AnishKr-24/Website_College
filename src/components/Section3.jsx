import React from 'react'
import boy from '/public/boy-reading.png'

const Section3 = () => {
  return (
    <section className="xl:h-screen p-10">
      <h2 className="lg:text-4xl text-2xl font-bold text-start pl-20 py-10 text-cyan-700 capitalize">
        Daily Living Skills
      </h2>
      <div className="flex flex-col xl:flex-row justify-center items-center px-4 xl:px-20">
        <p className="leading-loose tracking-wider">
          The term “daily living skills” refers to a wide range of personal
          self-care activities across home, school, work, and community
          settings. Most daily living skills, like food preparation and personal
          hygiene, need to be performed on a regular basis to maintain a
          reasonable level of health and safety. Good work ethic, problem
          solving, time management, communication skills, and teamwork ability
          are all skills that can make you a great employee. Leadership skills
          make you a candidate to be more than that. No matter the job, most
          employers are looking for someone who is capable of growing beyond
          that job.
        </p>
        <img
          src={boy}
          alt="img"
          className="w-[280px] md:w-[420px] cursor-pointer hover:scale-105 transition-all duration-500 xl:mt-[-90px]"
        />
      </div>
    </section>
  );
}

export default Section3