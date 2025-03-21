import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const VerifyDocument = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Verify Documents</h1>

        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Procedure</h2>
          <p className="text-gray-700">
            Anyone can apply for verification of original/photo copy of documents like Detail Marks Certificate / Certificate issued by the board.
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Send a Demand Draft of <strong>Rs. 1000/-</strong> (non-refundable) for each document drawn in favour of <strong>"Nehru Skill Development Mission"</strong> payable at Pappiredipatti.</li>
            <li>Add <strong>Rs. 100/-</strong> for postal charges in India and <strong>Rs. 2000/-</strong> for outside India.</li>
            <li>No verification charges for Central / State Govt. Departments and Embassies.</li>
            <li>Normal period required for verification is 15 days.</li>
          </ul>
          <p className="text-red-500 font-semibold mt-2">
            NOTE: VERIFICATION BY TELEPHONE / FAX / EMAIL WILL NOT BE ENTERTAINED.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Admin Office:</h2>
          <p className="text-gray-700">
            <strong>Nehru Skill Development Mission</strong> <br />
            4/1958, Samiyapuram Koot Road, <br />
            Pattukonampatti-post, <br />
            Pappiredipatti-Tk, <br />
            Dharmapuri-Dt. Pincode: 636905, <br />
            Tamilnadu, India. <br />
            <strong>Mobile:</strong> 9585343052, 8270923781
          </p>
        </div>

        <div className="mt-4">
          <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    </>
  );
};

export default VerifyDocument;
