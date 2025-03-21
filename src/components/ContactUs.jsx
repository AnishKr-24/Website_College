import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        {/* Banner Image */}
        <div className="mb-6 flex justify-start">
          <img
            src="Banner.jpg"
            alt="Graduation Celebration"
            className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Address Section */}
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <div className="flex items-center">
            <img
              src="Address.jpg"
              alt="Address Icon"
              className="w-32 h-32 rounded-lg shadow-md mr-4"
            />
            <div>
              <p className="text-gray-700">
                <strong>Nehru Skill Development Mission</strong> <br />
                4/1958, Samiyapuram Koot Road, <br />
                Pattukonampatti Post, <br />
                Pappiredipatti Tk, <br />
                Dharmapuri Dt, <br />
                Pincode: 636905, <br />
                Tamilnadu, India. <br />
                <strong>Email:</strong> nsdmeduc@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Phone and WhatsApp Numbers */}
        <div className="bg-green-100 p-4 rounded-md mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Phone / WhatsApp Numbers
          </h2>
          <p className="text-gray-700">
            <strong>Landline Number:</strong> 04346 – 296120
          </p>
          <table className="w-full mt-4 border-collapse border border-gray-400">
            <thead>
              <tr className="bg-green-300">
                <th className="border border-gray-400 px-4 py-2">SL</th>
                <th className="border border-gray-400 px-4 py-2">
                  Mobile Numbers
                </th>
                <th className="border border-gray-400 px-4 py-2">
                  WhatsApp Numbers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">1</td>
                <td className="border border-gray-400 px-4 py-2">8110897011</td>
                <td className="border border-gray-400 px-4 py-2">8110897011</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">2</td>
                <td className="border border-gray-400 px-4 py-2">9786393031</td>
                <td className="border border-gray-400 px-4 py-2">9786393031</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">3</td>
                <td className="border border-gray-400 px-4 py-2">9585343052</td>
                <td className="border border-gray-400 px-4 py-2">9585343052</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">4</td>
                <td className="border border-gray-400 px-4 py-2">9344461942</td>
                <td className="border border-gray-400 px-4 py-2">9344461942</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">5</td>
                <td className="border border-gray-400 px-4 py-2">8637619106</td>
                <td className="border border-gray-400 px-4 py-2">8637619106</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Google Map */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Nehru Skill Development Mission Location
          </h2>
          <iframe
            title="Google Map"
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3754296828796!2d78.0447!3d11.7765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babcd5e88ad7b75%3A0x4f8f5b3b3e6e5eaf!2sSamiyapuram%20X%20Road%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1642957999891"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Back Button */}
        <div className="mt-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
