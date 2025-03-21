import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ethic from "/public/ethic.jpg";
import positive from "/public/positive.jpg";
import communication from "/public/communication.jpg";
import time from "/public/time.jpg";
import problem from "/public/problem.jpg";
import team from "/public/team.jpg";
import confidence from "/public/confidence.jpg";
import learner from "/public/learner.jpg";

const skills = [
  { img: ethic, text: "Strong Work Ethic", color: "text-amber-700" },
  { img: positive, text: "Positive Attitude", color: "text-green-700" },
  { img: communication, text: "Good Communication Skills", color: "text-sky-700" },
  { img: time, text: "Time Management Abilities", color: "text-orange-700" },
  { img: problem, text: "Problem-Solving Skills", color: "text-gray-700" },
  { img: team, text: "Acting as a Team Player", color: "text-yellow-700" },
  { img: confidence, text: "Self-Confidence", color: "text-blue-700" },
  { img: learner, text: "Ability to Accept and Learn From Criticism", color: "text-cyan-700" },
];

const Section4 = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 px-6 md:px-20 relative">
      <h3 className="text-3xl font-bold text-amber-600 text-center">
        Common Soft Skills Employers Look For
      </h3>

      {/* Arrows for Mobile */}
      <button
        className="absolute left-0 top-1/2 mt-12 -translate-y-1/2 md:hidden bg-white p-2 shadow rounded-full"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-0 top-1/2 mt-12 -translate-y-1/2 md:hidden bg-white p-2 shadow rounded-full"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </button>

      {/* Skills List */}
      <div
        ref={scrollRef}
        className="mt-8 flex overflow-x-auto md:grid md:grid-cols-4 gap-6 scrollbar-hide px-4 py-4"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="min-w-[180px] md:w-48 md:h-60 shadow-lg p-3 rounded-lg cursor-pointer 
                       hover:-translate-y-2 transition-all duration-300 bg-slate-100 flex flex-col items-center"
          >
            <img src={skill.img} alt={skill.text} className="w-full rounded-lg" />
            <p className={`${skill.color} text-center font-semibold mt-3 text-sm md:text-base`}>
              {skill.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
