import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  const options = useRef();
  const mobileMenu = useRef();
  const [optionExpanded, setOptionExpanded] = useState(false);
  const [expandMenu, setExpandMenu] = useState(false);

  const displayMore = () => {
    setOptionExpanded((prev) => !prev);
  };

  const handleExpandMenu = () => {
    setExpandMenu((prev) => !prev);
  };

  return (
    <header className="bg-gray-100 shadow-md">
      {/* Search Bar */}
      <div className="search flex items-center p-2 bg-white shadow-sm">
        <input
          type="text"
          placeholder="Search here..."
          className="p-2 outline-none w-full border border-gray-300 rounded-l-md"
        />
        <button className="p-2 bg-red-600 text-white font-semibold hover:bg-red-700 rounded-r-md transition duration-300">
          Search
        </button>
      </div>

      {/* Banner Image */}
      <img src="/banner.png" alt="banner" className="w-full" />

      {/* Marquee for Announcements */}
      <marquee className="py-1 bg-blue-100 text-blue-600 font-semibold">
        <p>New Study Centers are Invited, Contact: 81108 97011, 95853 43052</p>
      </marquee>

      {/* Mobile Menu */}
      <ul className="xl:hidden flex flex-col bg-gray-300 py-2 capitalize font-semibold transition-all duration-500">
        <div className="flex justify-between px-5 items-center">
          <p className="text-sm">Menu</p>
          <button onClick={handleExpandMenu} className="text-2xl cursor-pointer">
            <img src={expandMenu ? "/close.png" : "/menu.png"} className="h-5" />
          </button>
        </div>
        <div
          ref={mobileMenu}
          className={`flex flex-col overflow-hidden transition-all duration-500 ${
            expandMenu ? "h-auto max-h-[500px]" : "max-h-0"
          }`}
        >
          {[
            { name: "Welcome", link: "/"},
            { name: "About Us", link: "/about" },
             // Connected Recognition page
            { name: "Course List" },
            { name: "D Pharm", link: "/dpharma" },
            { name: "University Courses" },
            { name: "Sikkim Alpine University (Regular)" },
            { name: "NAHEAD Syllabus" },
            { name: "Certificate of Commitment" },
            { name: "Student Verification" },
            { name: "NAHEAD Skill Training Certification Courses" },
            { name: "CMS ALLOPATHY", link: "/cmsalopathy" },
            { name: "Download Forms" },
            { name: "Approved Institutions / Educator" },
            { name: "Recognition’s", link: "/recognition" },
            { name: "Affiliation", link: "/affiliation"},
            { name: "Examination Branch", link: "/examination branch" },
            { name: "NAHEAD Question Bank" },
            { name: "Job Verification Letters" },
            { name: "Verify Documents", link: "/verify documents" },
            { name: "Payment Method", link: "/payment method" },
            { name: "Contact Us", link: "/contact us" },
          ].map((item, index) =>
            item.link ? (
              <Link
                key={index}
                to={item.link}
                className="text-neutral-700 hover:text-sky-600 hover:bg-gray-200 py-2 text-center cursor-pointer transition duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <li
                key={index}
                className="text-neutral-700 hover:text-sky-600 hover:bg-gray-200 py-2 text-center cursor-pointer transition duration-300"
              >
                {item.name}
              </li>
            )
          )}
        </div>
      </ul>

      {/* Desktop Menu */}
      <ul
        ref={options}
        className={`xl:flex hidden gap-4 justify-center capitalize font-semibold bg-gray-200 p-4 flex-wrap overflow-hidden relative pr-24 transition-all duration-500 shadow-md rounded-lg ${
          optionExpanded ? "max-h-[600px]" : "max-h-[50px]"
        }`}
      >
        <div
          onClick={displayMore}
          className={`absolute right-6 bottom-3 cursor-pointer font-semibold transition duration-300 ${
            optionExpanded ? "text-red-500" : "text-blue-500"
          } hover:scale-105`}
        >
          {optionExpanded ? "Less..." : "More..."}
        </div>
        {[
          { name: "Welcome", link:"/" },
          { name: "About Us", link: "/about" },
          { name: "Course List" },
          { name: "D Pharm", link: "/dpharma" },
          { name: "University Courses" },
          { name: "Sikkim Alpine University (Regular)" },
          { name: "NAHEAD Syllabus" },
          { name: "Certificate of Commitment" },
          { name: "Student Verification" },
          { name: "NAHEAD Skill Training Certification Courses" },
          { name: "CMS ALLOPATHY", link: "/cmsalopathy" },
          { name: "Download Forms" },
          { name: "Approved Institutions / Educator" },
          { name: "Recognition’s", link: "/recognition" },
          { name: "Affiliation", link: "/affiliation"},
          { name: "Examination Branch", link: "/examination branch" },
          { name: "NAHEAD Question Bank" },
          { name: "Job Verification Letters" },
          { name: "Verify Documents", link: "verify documents" },
          { name: "Payment Method", link: "/payment method" },
          { name: "Contact Us", link: "/contact us" },
        ].map((item, index) =>
          item.link ? (
            <Link
              key={index}
              to={item.link}
              className="text-neutral-700 hover:text-sky-600 cursor-pointer transition duration-300 hover:underline hover:font-bold px-3 py-1 rounded-md"
            >
              {item.name}
            </Link>
          ) : (
            <li
              key={index}
              className="text-neutral-700 hover:text-sky-600 cursor-pointer transition duration-300 hover:underline hover:font-bold px-3 py-1 rounded-md"
            >
              {item.name}
            </li>
          )
        )}
      </ul>
    </header>
  );
};

export default Header;
