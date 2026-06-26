import React, { useEffect } from "react";

export default function Extracurricular() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6", "transform");
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-6 text-gray-100" id="extracurricular">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">Extracurricular Activities & Certifications</h1>
      <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300">Experiences and achievements beyond academics that have strengthened my leadership, teamwork, discipline, and continuous learning mindset.</p>

      {/* NCC Card */}
      <section className="fade-in mb-6 sm:mb-8">
        <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-lg sm:text-xl font-semibold">⚓ NCC Naval Wing</h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                Successfully completed a three-year journey as an NCC Naval Wing Cadet under 1 MNU (1 Maharashtra Naval Unit) and earned the prestigious  'B' &amp; 'C' Certificates. Through NCC, I developed leadership, discipline, teamwork, communication skills, and adaptability while participating in training activities, camps, and leadership exercises.
              </p>
              <div className="mt-3 sm:mt-4 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-center">
                <div className="inline-block bg-orange-500/10 text-orange-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-orange-600">3 Years Completed</div>
                <div className="inline-block bg-orange-500/10 text-orange-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-orange-600">'B' &amp; 'C' Certificates</div>
                <div className="inline-block bg-orange-500/10 text-orange-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-orange-600">Leadership</div>
              <div className="inline-block bg-orange-500/10 text-orange-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-orange-600">Teamwork</div>
              <div className="inline-block bg-orange-500/10 text-orange-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-orange-600">Discipline</div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Hackathons cards */}
      <section className="mb-6 sm:mb-10">
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Hackathons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <article className="fade-in bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
            <div className="text-lg sm:text-xl">🏆 MUJ Hacks</div>
            <p className="text-gray-300 mt-2 text-xs sm:text-sm">Hackathon participant at Jaipur showcasing problem-solving and development skills.</p>
          </article>

          <article className="fade-in bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
            <div className="text-lg sm:text-xl">🚀 Mumbai Hacks</div>
            <p className="text-gray-300 mt-2 text-xs sm:text-sm">Participated in Mumbai Hacks at NESCO, collaborating and developing innovative solutions.</p>
          </article>

          <article className="fade-in bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
            <div className="text-lg sm:text-xl">💡 SPIT Hackathon</div>
            <p className="text-gray-300 mt-2 text-xs sm:text-sm">Participated in SPIT Hackathon, enhancing teamwork and technical skills.</p>
          </article>

          <article className="fade-in bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
            <div className="text-lg sm:text-xl">🧠 TCET Ideathon</div>
            <p className="text-gray-300 mt-2 text-xs sm:text-sm">Presented innovative ideas and participated in problem-solving sessions.</p>
          </article>

          <article className="fade-in bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
            <div className="text-lg sm:text-xl">🌿 Eco-Cyclothon</div>
            <p className="text-gray-300 mt-2 text-xs sm:text-sm">Actively participated in an environmental awareness initiative at SGNP.</p>
          </article>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <article className="fade-in bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
            <div className="text-xs sm:text-sm font-medium">📜 JavaScript with HTML5 &amp; CSS3</div>
          </article>

          <article className="fade-in bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
            <div className="text-xs sm:text-sm font-medium">📜 HTML Responsive Web Design</div>
          </article>

          <article className="fade-in bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
            <div className="text-xs sm:text-sm font-medium">📜 HTML, JavaScript and Bootstrap</div>
          </article>

          <article className="fade-in bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
            <div className="text-xs sm:text-sm font-medium">🏅 2 LeetCode 50-Day Badge</div>
          </article>

          <article className="fade-in bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20">
            <div className="text-xs sm:text-sm font-medium">🏅 LeetCode 100-Day Badge</div>
          </article>
        </div>
      </section>
    </main>
  );
}
