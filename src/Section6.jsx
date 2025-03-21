import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ethic from '/public/ethic.jpg';
import positive from '/public/positive.jpg';
import communication from '/public/communication.jpg';
import time from '/public/time.jpg';
import problem from '/public/problem.jpg';
import team from '/public/team.jpg';
import confidence from '/public/confidence.jpg';
import learner from '/public/learner.jpg';

const lifeSkills = [
  { img: positive, title: 'Creativity', color: 'text-green-700' },
  { img: time, title: 'Problem Solving', color: 'text-orange-700' },
  { img: learner, title: 'Decision Making', color: 'text-cyan-700' },
  { img: team, title: 'Creative Thinking', color: 'text-yellow-700' },
  { img: problem, title: 'Critical Thinking', color: 'text-gray-700' },
  { img: ethic, title: 'Work Ethic', color: 'text-amber-700' },
  { img: communication, title: 'Effective Communication', color: 'text-sky-700' },
  { img: team, title: 'Interpersonal Relationship', color: 'text-blue-700' },
];

const Section6 = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position
  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        setCanScrollLeft(scrollRef.current.scrollLeft > 0);
        setCanScrollRight(
          scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        );
      }
    };

    checkScroll();
    scrollRef.current?.addEventListener('scroll', checkScroll);
    return () => scrollRef.current?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-10 px-5 bg-gray-50 relative">
      <h3 className="text-3xl font-bold text-amber-600 capitalize text-center">
        Core Life Skills (WHO)
      </h3>
      <p className="mt-5 text-gray-700 text-center px-5">
        Hard skills are teachable and measurable abilities, such as writing, reading, math, or using computer programs. 
        Soft skills, on the other hand, include communication, teamwork, and problem-solving. 
        Life skills help individuals navigate challenges, from critical thinking to decision-making.
      </p>

      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 mt-28 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 md:hidden"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Scrollable Cards */}
      <div ref={scrollRef} className="flex overflow-x-auto space-x-4 p-5 scrollbar-hide">
        {lifeSkills.map((skill, index) => (
          <div
            key={index}
            className="min-w-[180px] w-[220px] h-[240px] bg-white rounded-xl shadow-lg p-3 cursor-pointer flex flex-col items-center justify-center transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
          >
            <img src={skill.img} alt={skill.title} className="w-full rounded-lg" />
            <p className={`mt-3 text-center font-semibold break-words w-full ${skill.color}`}>
              {skill.title}
            </p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 mt-28 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 md:hidden"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </section>
  );
};

export default Section6;
