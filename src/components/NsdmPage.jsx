import React from "react";
import { FaCheckCircle, FaCalendarAlt, FaUniversity, FaPhone, FaMapMarkerAlt, FaBook, FaEnvelope } from "react-icons/fa";

const NSDMPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-2 md:p-12 font-sans">
      <div className=" mx-auto p-6 md:p-10 rounded-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
          Nehru Skill Development Mission – NSDM
        </h1>
        
        <p className="text-gray-700 leading-relaxed">
          Skills training is designed to provide employees with the targeted training they need to gain the knowledge and abilities necessary to fulfill the specific requirements of their job positions. Skills training can also be used to re-educate and retrain employees whenever new technology, processes, or systems debut.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Advantages of Skill India</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li><FaCheckCircle className="inline text-green-500" /> Raise confidence, improve productivity, and give direction.</li>
          <li><FaCheckCircle className="inline text-green-500" /> Enable youths to get blue-collar jobs.</li>
          <li><FaCheckCircle className="inline text-green-500" /> Enhance problem-solving and responsibility skills.</li>
          <li><FaCheckCircle className="inline text-green-500" /> Boost collaboration and teamwork skills.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Daily Living Skills</h2>
        <p className="text-gray-700 leading-relaxed">
          Daily living skills refer to a wide range of personal self-care activities across home, school, work, and community settings. Good work ethic, problem-solving, time management, and communication skills are essential for professional success.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Common Soft Skills Employers Look For</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mt-4">
          {["Strong Work Ethic", "Positive Attitude", "Good Communication Skills", "Time Management Abilities", "Problem-Solving Skills", "Acting as a Team Player", "Self-Confidence", "Ability to Accept and Learn From Criticism"].map(skill => (
            <li key={skill}><FaCheckCircle className="inline text-green-500" /> {skill}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Examples of Hard Skills</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li><FaCheckCircle className="inline text-green-500" /> Computer Programming</li>
          <li><FaCheckCircle className="inline text-green-500" /> Web Design</li>
          <li><FaCheckCircle className="inline text-green-500" /> Typing</li>
          <li><FaCheckCircle className="inline text-green-500" /> Accounting & Finance</li>
          <li><FaCheckCircle className="inline text-green-500" /> Mathematics</li>
          <li><FaCheckCircle className="inline text-green-500" /> Legal Knowledge</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Exam Time Table</h2>
        <div className="bg-gray-200 p-4 rounded-lg mt-2">
          <p className="text-lg text-gray-800 font-semibold flex items-center"><FaCalendarAlt className="mr-2 text-blue-600" /> OCT 2024</p>
          <p className="text-lg text-gray-800 font-semibold flex items-center"><FaCalendarAlt className="mr-2 text-blue-600" /> APR 2025</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Online Affiliate Form</h2>
        <form className="bg-gray-200 p-6 rounded-lg mt-4 space-y-4">
          <div className="flex items-center bg-white p-2 rounded-lg shadow-md">
            <FaUniversity className="text-blue-600 mx-2" />
            <input type="text" placeholder="Name of the Institute" className="w-full p-2 focus:outline-none" />
          </div>
          <div className="flex items-center bg-white p-2 rounded-lg shadow-md">
            <FaPhone className="text-blue-600 mx-2" />
            <input type="text" placeholder="Phone Number" className="w-full p-2 focus:outline-none" />
          </div>
          <div className="flex items-center bg-white p-2 rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-blue-600 mx-2" />
            <input type="text" placeholder="Location" className="w-full p-2 focus:outline-none" />
          </div>
          <div className="flex items-center bg-white p-2 rounded-lg shadow-md">
            <FaBook className="text-blue-600 mx-2" />
            <input type="text" placeholder="Course / Category" className="w-full p-2 focus:outline-none" />
          </div>
          <div className="flex items-center bg-white p-2 rounded-lg shadow-md">
            <FaEnvelope className="text-blue-600 mx-2" />
            <textarea placeholder="Message" className="w-full p-2 focus:outline-none resize-none" rows="3"></textarea>
          </div>
          {/* <div className="flex items-center bg-white p-2 rounded-lg shadow-md">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-800">I am not a robot</label>
          </div> */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NSDMPage;
