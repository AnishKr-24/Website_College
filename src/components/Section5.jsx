import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ethic from '/public/ethic.jpg';
import positive from '/public/positive.jpg';
import communication from '/public/communication.jpg';
import time from '/public/time.jpg';
import problem from '/public/problem.jpg';
import team from '/public/team.jpg';
import confidence from '/public/confidence.jpg';
import learner from '/public/learner.jpg';

const skills = [
  { img: positive, label: 'Creativity', color: 'text-green-700' },
  { img: time, label: 'Time Management', color: 'text-orange-700' },
  { img: learner, label: 'Teamwork', color: 'text-cyan-700' },
  { img: team, label: 'Adaptability', color: 'text-yellow-700' },
  { img: problem, label: 'Problem-Solving', color: 'text-gray-700' },
  { img: ethic, label: 'Work Ethic', color: 'text-amber-700' },
  { img: communication, label: 'Communication', color: 'text-sky-700' },
  { img: confidence, label: 'Interpersonal Skills', color: 'text-blue-700' },
];

const Section5 = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 px-5 md:px-20 relative">
      <h3 className="text-3xl font-bold text-teal-600 capitalize text-center">
        Examples of Hard Skills
      </h3>
      <p className="mt-5 text-center md:text-left">
        Examples of hard skills include computer programming, web design, typing, accounting, finance, writing, mathematics, legal, and other
        quantifiable skills that are included in job requirements. Consider these examples as you build your resume:
      </p>
      {/* Scrollable Container */}
      <div className="relative mt-6">
        {/* Left Arrow (Only on Mobile) */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-lg rounded-full md:hidden"
          onClick={() => scroll('left')}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Skills List */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar p-4 gap-5 w-full md:flex-wrap md:justify-center"
        >
          {skills.map(({ img, label, color }, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 md:w-48 h-60 shadow p-3 rounded-lg cursor-pointer hover:translate-y-[-1rem] transition-all duration-500 bg-slate-100"
            >
              <img src={img} alt={label} className="w-full rounded-lg" />
              <p className={`${color} text-center font-semibold break-words w-full`}>{label}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow (Only on Mobile) */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-lg rounded-full md:hidden"
          onClick={() => scroll('right')}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Section5;