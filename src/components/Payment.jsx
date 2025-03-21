import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Payment = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Payment Method</h1>

        <div className="flex justify-center mb-4">
          <img 
            src="Indianbank.jpg" 
            alt="Indian Bank Payment Details" 
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
        </div>

        <div className="text-lg text-gray-800">
          <p><strong>Name of the Entity:</strong> Nehru Skill Development Mission</p>
          <p><strong>Current Account No:</strong> 6893270613</p>
          <p><strong>Branch:</strong> Kozhimekkanur</p>
          <p><strong>IFSC Code:</strong> IDIB000M082</p>
        </div>

        <div className="mt-4">
          <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default Payment;
