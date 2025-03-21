import React from "react";
import hero from "/public/hero.png";

const Section1 = () => {
  return (
    <section className="xl:h-screen px-6 lg:px-20 py-16 bg-gray-50">
      <h2 className="lg:text-5xl text-3xl font-extrabold text-center text-cyan-700 capitalize leading-snug">
        National Academy of Higher Education and Development  
        <span className="block text-lg text-gray-600 font-medium mt-2">
          NAHEAD
        </span>
      </h2>

      <div className="flex flex-col xl:flex-row items-center justify-between gap-10 mt-12">
        <div className="max-w-2xl text-gray-700 text-lg leading-relaxed tracking-wide">
          <p>
            Skills training is designed to provide employees with the targeted
            training they need to gain the knowledge and abilities necessary to
            fulfill the specific requirements of their job positions. Skills
            training can also be used to re-educate and retrain employees whenever
            new technology, processes, or systems debut.
          </p>
          <p className="mt-4">
            Skills development is the process of identifying skill gaps and
            honing these skills. It is crucial because your skills determine your
            ability to execute plans successfully. Imagine a carpenter trying to
            build a house. In goal achievement, your skills are your tools.
          </p>
        </div>

        <div className="relative">
          <img
            src={hero}
            alt="Training & Development"
            className="w-[300px] md:w-[450px] xl:w-[500px] rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
