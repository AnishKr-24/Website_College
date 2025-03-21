import React from "react";
import { Link } from "react-router-dom";

const Affiliation = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-4">Affiliation</h1>

      <h2 className="text-xl font-semibold text-gray-800">How to get Affiliation</h2>
      <h3 className="text-2xl font-bold text-blue-600 mt-2">Online Affiliation</h3>

      <h4 className="text-lg font-semibold mt-4">Download Collage Affiliation form</h4>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Do you have an Institution on Skill Development course?</li>
        <li>Are you interested to get Affiliation with this famous Skill Mission?</li>
      </ul>

      <p className="mt-4 text-gray-700">
        We are all the time with you. All is possible by getting Affiliation of famous Skill Mission and setting up your respectable career in All Skill Programme Service.
      </p>

      <h4 className="text-lg font-semibold mt-4">How to Get Approval</h4>
      <p className="text-gray-700">
        Fill up the online Form/Downloaded Form mentioned below and send it to the Nehru Skill Development Mission office along with two passport-size photographs.
      </p>

      <p className="mt-2 text-gray-700">
        After receiving your filled-up form along with the <br />
        <strong>Affiliation Fee: 25,000/-</strong> <br />
        <strong>Renewal Fee: 6000/- Per Year</strong>
      </p>

      <p className="mt-2 text-gray-700">
        The Skill Mission will provide you the affiliation Certificate with all other relevant documents by Speed Post/Courier services.
      </p>

      <p className="mt-2 text-gray-700">
        The affiliated Institution must follow up the Rules & Regulations and obey the guidelines of the Skill Mission. The Institution should maintain a regular positive touch with the Skill Mission and attend all Conferences / Seminars / Convocations.
      </p>

      <h4 className="text-lg font-semibold mt-4">Draft/D.D</h4>
      <p className="text-gray-700">
        The Bank Draft/D.D should be in favor of <span className="font-bold text-blue-600">Nehru Skill Development Mission</span> from any Bank payable at <span className="font-bold text-pink-600">Kozhimekkanur</span>.
      </p>

      <div className="mt-4 p-4 bg-green-500 text-white text-center font-semibold rounded-md">
        NEFT / IMPS / RTGS
      </div>

      <div className="mt-4 flex justify-center">
        <img 
          src="bankdetail.png" 
          alt="Bank Details" 
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
      </div>

      <div className="mt-4">
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default Affiliation;
