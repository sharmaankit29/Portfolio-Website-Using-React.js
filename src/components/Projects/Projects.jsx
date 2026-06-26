import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project, reverse }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // initial state
    el.classList.add("opacity-0", "translate-y-6");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article 
      ref={ref} 
      className={`w-full flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} gap-4 sm:gap-6 md:gap-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-4 sm:p-6 shadow-lg transition-all duration-500 ease-out transform ${isHovered ? "scale-100 md:scale-105 shadow-2xl shadow-orange-500/20" : "scale-100"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > 
      <div className="w-full md:w-1/2">
        <div className="relative h-48 sm:h-64 md:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-full bg-orange-500/15 px-2 py-1 sm:px-3 sm:py-1 text-xs text-orange-200 backdrop-blur-sm">
            {project.label}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center">
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">{project.title}</h2>
          <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-5 line-clamp-2">{project.tech}</p>
          <p className="text-sm sm:text-base text-gray-300 leading-6 sm:leading-7 mb-4 sm:mb-6">{project.description}</p>

          <div className="grid gap-2 sm:gap-3 mb-4 sm:mb-6">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-300">
                <span className="mt-0.5 text-orange-400 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.demo && (
              project.demo === "/" ? (
                <Link
                  to={project.demo}
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  Live Demo
                </Link>
              ) : (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
                >
                  Live Demo
                </a>
              )
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-transparent border border-slate-700 px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-300"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Currency Converter",
      tech: "JavaScript • HTML5 • CSS3 • Exchange Rate API",
      description:
        "Developed a real-time currency converter application by integrating a live exchange-rate API. The application provides accurate currency conversions across multiple countries with a responsive and user-friendly interface.",
      features: [
        "Real-time currency conversion",
        "Live exchange-rate API integration",
        "Dynamic currency selection",
        "Error handling and loading states",
        "Responsive design",
      ],
      demo: "https://ankit-currency-converter.vercel.app",
      github: "https://github.com/sharmaankit29/Currency-Converter",
      label: "Converter",
      index: "01",
      image: new URL("../../assets/projects/CurrencyConverter.png", import.meta.url).href,
    },
    {
      title: "Personal Portfolio",
      tech: "React.js • JavaScript • Tailwind CSS • React Router",
      description:
        "Designed and developed a modern, responsive personal portfolio website to showcase my skills, projects, achievements, and technical journey. Built using React.js with a component-based architecture, the portfolio provides a seamless user experience with interactive UI elements and smooth navigation.",
      features: [
        "Fully responsive design for all devices",
        "Component-based architecture using React.js",
        "Smooth scrolling and interactive animations",
        "Dedicated sections for About, Skills, Projects, and Contact",
        "Integrated social media and resume download functionality",
      ],
      demo: "/",
      github: "https://github.com/sharmaankit29/Portfolio-Website-Using-React.js",
      label: "Portfolio",
      index: "02",
      image: new URL("../../assets/projects/porfolio.png", import.meta.url).href,
    },
    {
      title: "Password Generator",
      tech: "JavaScript • HTML5 • CSS3",
      description:
        "Designed and developed a secure password generator that enables users to create strong and customizable passwords by selecting character types and password length.",
      features: [
        "Custom password length",
        "Uppercase, lowercase, numbers, and symbols",
        "Copy to clipboard functionality",
        "Regenerate password option",
        "Responsive design",
      ],
      demo: "https://password-generator-ankit.vercel.app",
      github: "https://github.com/sharmaankit29/Password-Generator",
      label: "Generator",
      index: "04",
      image: new URL("../../assets/projects/PasswordGenerator.png", import.meta.url).href,
    },
    
    {
      title: "Number Guessing Game",
      tech: "JavaScript • HTML5 • CSS3",
      description:
        "Built an interactive number guessing game where users attempt to guess a randomly generated number within a limited number of attempts, providing instant feedback and score tracking.",
      features: [
        "Random number generation",
        "Real-time feedback on guesses",
        "Score tracking system",
        "Input validation",
        "Interactive user interface",
      ],
      demo: "https://ankit-number-guessing-game.vercel.app",
      github: "https://github.com/sharmaankit29/Number-Guessing-Game",
      label: "Game",
      index: "03",
      image: new URL("../../assets/projects/NumberGuessingGame.png", import.meta.url).href,
    },
  ];

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6 text-gray-100" id="projects">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Projects</h1>
      <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300">A showcase of projects that demonstrate my skills in software development, problem-solving, and building responsive web applications.</p>

      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} reverse={index % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
