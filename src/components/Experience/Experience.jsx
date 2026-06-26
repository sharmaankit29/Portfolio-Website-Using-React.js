import React, { useState } from "react";
import internshipReport from "../../assets/Internship.png";

export default function Experience() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-6 text-gray-100" id="experience">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Experience</h1>

      <article className="bg-slate-900/80 border border-slate-700 rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl">
        <div className="mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-orange-400 font-semibold">
            Experience Card
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mt-2">Indian Naval Dockyard, Mumbai</h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">Engineering Intern | Dec 2025 - Jan 2026</p>
        </div>

        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300 leading-relaxed">
          During my internship at the Indian Naval Dockyard, I gained valuable exposure to industrial operations and engineering processes within a defence environment. I observed end-to-end workflow processes and developed an understanding of quality standards followed in large-scale engineering facilities.
        </p>

        <div className="space-y-2 sm:space-y-3 mb-6">
          <div className="text-white font-semibold text-sm sm:text-base">Key Responsibilities & Learnings:</div>
          <ul className="list-disc pl-5 text-sm sm:text-base text-gray-300 space-y-1 sm:space-y-2">
            <li>Observed the operational workflow and maintenance processes of the Naval Dockyard.</li>
            <li>Gained exposure to PCB manufacturing, circuit testing, and maintenance protocols.</li>
            <li>Studied quality control frameworks and defence-grade safety compliance standards.</li>
            <li>Developed insights into industrial engineering practices and teamwork in a professional environment.</li>
          </ul>
        </div>

        <button
          type="button"
          onClick={() => setShowCertificate((prev) => !prev)}
          className="inline-flex items-center rounded-full bg-orange-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white transition hover:bg-orange-600"
        >
          {showCertificate ? "Close Certificate" : "View Certificate"}
        </button>

        {showCertificate && (
          <div className="mt-6 rounded-3xl border border-slate-700 bg-slate-950 p-4 sm:p-5 text-gray-200 shadow-inner">
            <div className="mb-3 text-xs sm:text-sm uppercase tracking-wider text-orange-400 font-semibold">
              Certificate Preview
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3 sm:p-4 text-xs sm:text-sm leading-6 text-gray-300">
              
              <div className="mb-4 font-semibold text-white text-sm">Indian Naval Dockyard Internship Completion Certificate</div>
              <div className="overflow-hidden rounded-3xl border border-slate-700 bg-black">
                <img
                  src={internshipReport}
                  alt="Internship Certificate"
                  className="w-full max-h-96 sm:max-h-[700px] object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
