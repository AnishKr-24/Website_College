import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const ExamBranch = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Examination Branch</h1>

        <div className="flex justify-center mb-4">
          <img 
            src="nsdmwatch.jpg" 
            alt="Examination Branch" 
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-800">NSDM Examination Branch</h2>
        <p className="text-gray-700 mt-2">
          The Winter / Summer system was introduced, Winter / Summer Examinations were conducted twice a year, i.e., in November and April, under the ratio 30:70. A student should obtain a minimum of 40% in each paper to qualify for a general pass.
        </p>

        <p className="mt-4 text-gray-700">
          At present, Winter / Summer Examinations are conducted under the ratio 40:60. 40% of marks are allotted for internal examination, and 60% is allotted for External examinations for both Theory & Practical. The duration of time for the theory Winter / Summer exam is 3 hours, and the practical exam is for 3 hours.
        </p>

        <p className="mt-4 text-gray-700">
          A candidate should qualify a minimum of 40% in each theory paper and 40% in each practical paper to qualify for a general pass.
        </p>

        <p className="mt-4 text-gray-700">
          Advanced supplementary Examination for Winter / Summer will be conducted within 30 days from the date of declaration of results to give an immediate opportunity to those students who failed/absented in one or more number of papers in the final year (i.e., Winter/Summer only) examination so that they do not lose one year.
        </p>

        <p className="mt-4 text-gray-700">
          A candidate must earn 40% of the total credits to promote to the next Academic Year.
        </p>

        <h3 className="text-lg font-semibold mt-4">Question Papers & Examination Dates</h3>
        <p className="text-gray-700">
          Question papers will be uploaded on the official website <a href="https://nehruskilldevelopmentmission.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">nehruskilldevelopmentmission.com</a> on April / November. To download the Question papers, please call & collect the Password.
        </p>

        <p className="mt-2 text-gray-700">
          Examination will be in the month of April / November. Examination dates are available in NSDM's official website.
        </p>

        <p className="mt-2 text-gray-700">
          Examination should be conducted normally in the Institute itself. An external invigilator will be made available.
        </p>

        <p className="mt-2 text-gray-700 font-semibold">
          Division is awarded based on total marks.
        </p>

        <p className="text-right font-bold mt-4">Controller of Examinations</p>

        <div className="mt-4">
          <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default ExamBranch;
