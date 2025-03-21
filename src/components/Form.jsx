import React from "react";
import { FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt, FaBook, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Form = () => {
  return (
    <section className="bg-sky-100 py-10">
      <div className="text-center">
        <p className="text-sky-600 font-bold text-3xl capitalize flex items-center justify-center gap-2">
          <FaCalendarAlt /> Exam Time Table
        </p>
        <div className="flex items-center justify-center gap-2 text-lg font-semibold text-orange-500 uppercase mt-2">
          <p>Oct 2024</p>
          <p>-</p>
          <p className="text-orange-700">Apr 2025</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 p-10">
        {["Online Affiliate Form", "Student Inquiry Form"].map((title, index) => (
          <form key={index} className="w-full bg-white shadow-xl rounded-lg p-6">
            <p className="text-orange-600 font-bold text-xl text-center">{title}</p>
            <hr className="my-2" />
            <div className="flex flex-col gap-4">
              {[
                { label: "Name", icon: <FaEnvelope /> },
                { label: "Phone Number", icon: <FaPhoneAlt /> },
                { label: "Location", icon: <FaMapMarkerAlt /> },
                { label: "Course/Category", icon: <FaBook /> },
                { label: "Message", icon: <FaEnvelope />, textarea: true }
              ].map(({ label, icon, textarea }, idx) => (
                <div key={idx}>
                  <label className="font-semibold flex items-center gap-2">
                    <span className="text-red-600">*</span> {icon} {label}
                  </label>
                  {textarea ? (
                    <textarea className="p-2 outline-none bg-gray-100 rounded-md w-full" rows="3" />
                  ) : (
                    <input type="text" className="p-2 outline-none bg-gray-100 rounded-md w-full" />
                  )}
                </div>
              ))}
              <button className="bg-orange-500 font-semibold text-white rounded-md hover:bg-orange-600 p-2 flex items-center justify-center gap-2 w-full">
                <FaPaperPlane /> Submit
              </button>
            </div>
          </form>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-evenly p-7">
        {["Supreme Court Order", "National Policy for Skill Development", "National Education Policy"].map((title, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <p className="text-2xl font-bold">{title}</p>
            <a href="#" className="flex items-center text-purple-600 gap-1 mt-2">
              Click to view <FaPaperPlane />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Form;
