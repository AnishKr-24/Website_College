import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">About Us</h2>
      <div className="flex justify-center mb-4">
        {/* <img
          src="/path-to-image.jpg"
          alt="Students discussing"
          className="rounded-lg shadow-md w-full max-w-lg"
        /> */}
      </div>
      <div className="text-center mb-4">
        <span className="inline-block p-3 bg-blue-100 rounded-full">
          📘
        </span>
      </div>
      <p className="text-gray-700">
        The four levels are Reaction, Learning, Behavior, and Results. We look
        at each level in greater detail and explain how to apply it below.
      </p>
      <h3 className="text-xl font-semibold mt-4">Personal Skill</h3>
      <p className="text-gray-700">
        A personal skill audit is a very good way for an individual to identify
        their key strengths and weaknesses. It allows them to compare their
        current skills with their ambition, suggesting further training and
        development.
      </p>
      <h3 className="text-xl font-semibold mt-4">Training and Development</h3>
      <p className="text-gray-700">
        The primary function of training and development is to prepare employees
        with the knowledge and skills to perform effectively.
      </p>
      <h3 className="text-xl font-semibold mt-4">General Duty Assistant</h3>
      <p className="text-gray-700">
        The General Duty Assistant (GDA) also known as "Nursing Care Assistant"
        is a hospital attendant providing patient care.
      </p>
      <h3 className="text-xl font-semibold mt-4">Fire Safety Training</h3>
      <p className="text-gray-700">
        Fire safety training helps individuals understand fire hazards and the
        importance of fire prevention.
      </p>
      <h3 className="text-xl font-semibold mt-4">Benefits of Neuropathy</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Increase performance in managing your work stress.</li>
        <li>Increase decision-making skills.</li>
        <li>Reduce procrastination.</li>
        <li>Increase creativity power.</li>
      </ul>
      <div className="text-center mt-6">
        <Link to="/about" className="text-blue-600 hover:underline font-semibold">
          Learn More About Us
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
