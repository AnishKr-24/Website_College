import React from "react";
import { Link } from "react-router-dom";

const Recognition = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Recognition’s</h2>
      <img 
        src="Trophy.jpg" 
        alt="Recognition Award" 
        className="w-full h-auto rounded-lg mb-4"
      />
      <ul className="list-decimal pl-5 space-y-2 text-gray-700">
        <li>Nehru Skill Development Mission is registered under Government Of Tamilnadu, Established Under Act 1882.</li>
        <li>Nehru Skill Development Mission is registered Ministry Of MSME, Govt Of India.</li>
        <li>Nehru Skill Development Mission is An Autonomous Organisation, Regd Under NCT Govt Of Delhi.</li>
        <li>The Mission Programs are especially aimed to improve employability in Private Sector Organizations in India.</li>
        <li>The Mission is an autonomous body, it doesn’t come under the purview of UGC / AICTE / AIU / DEB Acts.</li>
        <li>The Mission follows the syllabus and the Nomenclatures as prescribed by University Grants Commission, Government of India for various Programs, designed by its’ Academic Board.</li>
        <li>As per the circular of the Ministry of Home Affairs, Govt. of India New Delhi Notification No 264/52 c.c. Dated on 20/09/1952 issued in consultation with the Union Public Service Commission That in case of Degree/ Diploma awarded by Board/ University in India which are incorporated by an act of central / State Legislature in India. No formal order recognition such Degree/ Diploma need be issued by Govt. Such Degree should be recognized automatically for the purpose of employment.</li>
      </ul>
      <div className="mt-4">
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default Recognition;