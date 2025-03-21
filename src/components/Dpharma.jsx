import React from "react";

const DPharm = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Course Image */}
      <div className="flex justify-center">
        <img
          src="pharm.jpg"
          alt="D. Pharmacy"
          className="rounded-lg shadow-md w-full max-w-lg border"
        />
      </div>

      {/* Course Title */}
      <h2 className="text-center text-2xl font-semibold text-teal-600 mt-4">
        D.PHARM
      </h2>

      {/* Course Details */}
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h3 className="text-lg font-bold flex items-center">
          📖 D.PHARMACY – 2 YEARS
        </h3>

        <p className="text-red-600 font-semibold mt-2">
          🚀 ADMISSIONS GOING ON
        </p>

        <p className="text-green-600 font-semibold flex items-center mt-2">
          📅 2024 – 2025 BATCH
        </p>

        <p className="text-gray-700 mt-2">📞 Contact us for more Details:</p>

        {/* Phone Numbers */}
        <div className="mt-2 text-gray-700">
          <p className="font-semibold text-blue-600">📞 Landline: 04346 – 296120</p>
          <p className="font-semibold">📱 Mobile:</p>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li>81108 97011</li>
            <li>97863 30331</li>
            <li>95853 43052</li>
            <li>93444 61942</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DPharm;
