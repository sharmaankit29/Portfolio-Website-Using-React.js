import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import Logo from "../../assets/Logo.png";

export default function Footer() {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-12 sm:mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Top Section */}
        <div className="flex flex-col text-center  items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <Link to="/" className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <img
                src={Logo}
                alt="logo"
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full"
              />
              <h2 className="text-lg sm:text-2xl font-bold text-white">
                Ankit Sharma
              </h2>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              Passionate about problem-solving, Data Structures &
              Algorithms, and building impactful software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col text-center items-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link to="/" onClick={handleHomeClick} className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-orange-500 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/projects" className="hover:text-orange-500 transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-orange-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center text-center sm:text-left md:col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
              Let's Connect
            </h3>

            <p className="text-sm text-gray-400">
              Open to internships, collaborations, and software
            </p>
            <p className="text-sm text-gray-400 sm:mb-5">
              engineering opportunities.
            </p>

            <div className="flex justify-center sm:justify-start gap-4 text-xl sm:text-2xl">

              <a
                href="https://github.com/sharmaankit29"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-orange-500 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ankit-sharma-239526289"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-orange-500 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/Ankit_9987"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-orange-500 transition"
                aria-label="LeetCode"
              >
                <FaCode />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <hr className="my-6 sm:my-8 border-gray-800" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs sm:text-sm text-center">

          <p>
            © {new Date().getFullYear()} Ankit Sharma. All Rights Reserved.
          </p>

          <p>
            Built with React.js & Tailwind CSS 🚀
          </p>

        </div>
      </div>
    </footer>
  );
}