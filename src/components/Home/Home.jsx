import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Typewriter({ phrases, typingSpeed = 80, deletingSpeed = 40, pause = 1500 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index >= phrases.length) setIndex(0);
    let timeout;

    if (!isDeleting && subIndex === phrases[index].length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setSubIndex((s) => s + (isDeleting ? -1 : 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="inline-block text-lg sm:text-xl md:text-2xl text-orange-400 font-semibold break-words">
      {phrases[index].substring(0, subIndex)}
      <span className="inline-block w-0.5 ml-1 align-middle" style={{ backgroundColor: 'white', height: '1.2em', display: 'inline-block', verticalAlign: 'middle', opacity: subIndex % 2 ? 1 : 0 }} />
    </span>
  );
}

export default function Home() {
  const phrases = [
    "Aspiring Software Engineer",
    "DSA Enthusiast",
    "Problem Solver",
    "Java Programmer",
    "Final Year Computer Engineering Student",
  ];

  return (
    <div id="home" className="mx-auto w-full max-w-7xl text-white px-4 sm:px-6 md:px-8">
      <section className="min-h-screen flex items-center py-12">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="md:w-1/2 w-full">
            <p className="text-base sm:text-lg text-gray-300 mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4">ANKIT SHARMA</h1>

            <div className="mb-6">
              <Typewriter phrases={phrases} />
            </div>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mb-6 leading-relaxed">
              I transform ideas into interactive digital experiences through clean code and modern technologies. Passionate about software development, problem-solving, and building impactful applications using Java, React.js, and modern web technologies.
            </p>

            <Link to="/About" className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded text-white font-medium text-sm sm:text-base transition">Know More</Link>
          </div>

          <div className="md:w-1/2 w-full flex justify-center md:justify-end px-2 sm:px-0">
            <img className="w-56 sm:w-72 md:w-96 lg:w-auto lg:max-w-md rounded-lg shadow-lg object-cover" src="https://img.freepik.com/free-photo/digital-graphic-tablet-laptop-mock-up-with-office-objects-white-background_23-2147880630.jpg" alt="Developer workspace" />
          </div>
        </div>
      </section>
    </div>
  );
}

