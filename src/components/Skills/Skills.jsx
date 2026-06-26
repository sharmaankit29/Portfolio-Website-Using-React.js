import React, { useEffect, useRef, useState } from "react";

// Clean, readable Skills section
export default function Skills() {
  const [Icons, setIcons] = useState(null);
  const nodes = useRef(new Set());

  useEffect(() => {
    let mounted = true;
    import("react-icons/si")
      .then((mod) => {
        if (!mounted) return;
        setIcons({
          React: mod.SiReact,
          JS: mod.SiJavascript,
          Java: mod.SiJava,
          Cpp: mod.SiCplusplus,
          Tailwind: mod.SiTailwindcss,
          Bootstrap: mod.SiBootstrap,
          Node: mod.SiNodedotjs,
          Git: mod.SiGithub,
          Vercel: mod.SiVercel,
          Postman: mod.SiPostman,
          VSCode: mod.SiVisualstudiocode,
        });
      })
      .catch(() => setIcons(null));
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const setNode = (el) => {
    if (!el) return;
    el.classList.add("opacity-0", "transform");
    nodes.current.add(el);
  };

  const skillGroups = [
    {
      title: "Programming Languages",
      items: [
        { name: "Java", icon: "Java", emoji: "☕" },
        { name: "C/C++", icon: "Cpp", emoji: "⚙️" },
        { name: "JavaScript", icon: "JS", emoji: "🟨" },
        { name: "HTML5", icon: null, emoji: "🌐" },
        { name: "CSS3", icon: null, emoji: "🎨" },
      ],
      desc: "Building strong programming fundamentals with a focus on writing clean, efficient, and maintainable code.",
    },
    {
      title: "Problem Solving & Core Concepts",
      items: [
        { name: "Data Structures & Algorithms", icon: null, emoji: "🧠" },
        { name: "Object-Oriented Programming", icon: null, emoji: "🔁" },
        { name: "DBMS", icon: null, emoji: "🗄️" },
        { name: "Operating Systems", icon: null, emoji: "⚙️" },
        { name: "Computer Networks", icon: null, emoji: "🌐" },
      ],
      desc: "Passionate about solving real-world problems through algorithms and strengthening my understanding of core computer science concepts.",
    },
    {
      title: "Web Development",
      items: [
        { name: "React.js", icon: "React", emoji: "⚛️" },
        { name: "Tailwind CSS", icon: "Tailwind", emoji: "✨" },
        { name: "Bootstrap", icon: "Bootstrap", emoji: "📦" },
        { name: "Node.js", icon: "Node", emoji: "🌳" },
        { name: "Express.js (Basics)", icon: null, emoji: "🔌" },
      ],
      desc: "Developing responsive and user-centric web applications using modern frontend technologies and component-based architecture.",
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", icon: "Git", emoji: "🔧" },
        { name: "GitHub", icon: "Git", emoji: "🐙" },
        { name: "VS Code", icon: "VSCode", emoji: "📝" },
        { name: "Postman", icon: "Postman", emoji: "📮" },
        { name: "Vercel", icon: "Vercel", emoji: "☁️" },
      ],
      desc: "Leveraging modern development tools for version control, API testing, deployment, and efficient software development workflows.",
    },
  ];

  const bringCards = [
    { title: "Problem Solver", icon: "🧠", desc: "Transforming complex problems into efficient solutions." },
    { title: "Continuous Learner", icon: "🚀", desc: "Always exploring new technologies and improving my skills." },
    { title: "Full Development Lifecycle", icon: "🌐", desc: "From coding and testing to deployment on Vercel." },
    { title: "Team Player", icon: "🤝", desc: "Leadership and teamwork strengthened through NCC." },
  ];

  return (<>
    <main className="max-w-6xl mx-auto p-6 text-gray-100" id="skills">
      <h1 className="text-3xl font-bold mb-3">Skills &amp; Expertise</h1>
      <p className="mb-6 text-gray-300">A concise set of core skills and capabilities.</p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {skillGroups.map((g) => (
          <section key={g.title} className="bg-gray-900 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl text-white font-semibold">{g.title}</h2>
                <p className="text-sm text-gray-400">{g.desc}</p>
              </div>
            </div>

            <div className="grid gap-4 grid-cols-2">
              {g.items.map((it, i) => {
                const dirClass = i % 2 === 0 ? "-translate-x-4" : "translate-x-4";
                const isLast = i === g.items.length - 1;
                const colClass =isLast ? "col-span-2 max-w-[300px] mx-auto" : "col-span-1";
                return (
                  <div
                    key={it.name}
                    ref={setNode}
                    data-dir={dirClass}
                    className={`opacity-0 ${dirClass} transition-all duration-600 ease-out bg-gray-800 p-4 rounded-lg hover:scale-[1.02] hover:shadow-2xl hover:bg-orange-600 hover:text-white transform h-full flex items-center justify-center text-center overflow-hidden`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-2xl">
                        {Icons && it.icon && Icons[it.icon] ? React.createElement(Icons[it.icon], { className: "text-orange-400" }) : it.emoji}
                      </div>
                      <div className="text-white font-medium">{it.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/*What I Bring section */}

      <section className="mt-6 bg-gray-900 p-6 rounded-lg shadow-sw">
          <h2 className="text-2xl text-white font-semibold mb-4">What I Bring</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {bringCards.map((c, idx) => (
              <div key={c.title} ref={setNode} className={`opacity-0 ${idx % 2 === 0 ? '-translate-x-4' : 'translate-x-4'} transition-all duration-600 bg-gray-800 mx-4 p-6 rounded-lg hover:scale-105 hover:bg-orange-600 hover:text-white text-center flex flex-col items-center justify-center`}>
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="text-white font-semibold mb-1">{c.title}</div>
                <div className="text-sm text-gray-300">{c.desc}</div>
              </div>
            ))}
          </div>
      </section>
    </main>
    </>);
}
