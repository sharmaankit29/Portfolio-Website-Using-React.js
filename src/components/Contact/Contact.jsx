import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
    return (
        <div className="bg-gray-900 text-gray-100 py-8 sm:py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 sm:space-y-8 md:space-y-10">
                    <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 sm:p-8 shadow-sm">
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-serif italic uppercase tracking-widest text-white">Get In Touch</p>
                            <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-orange-300">
                                Let&apos;s Connect
                            </h1>
                            <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base leading-6 sm:leading-7 text-slate-300">
                                I&apos;m currently open to internships, software engineering opportunities, collaborations, and exciting projects. Whether you have an opportunity, a project idea, or simply want to connect, feel free to reach out.
                            </p>
                            <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-xs sm:text-sm leading-6 text-slate-400">
                                You can contact me directly via email or explore my profiles to know more about my work and technical journey.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
                        <a href="#" className="group flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950 p-4 sm:p-5 transition-transform transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-500/30">
                            <div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                                    <FiMail className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-xs uppercase tracking-wider text-slate-400">📧 Email</p>
                                <p className="mt-2 text-sm sm:text-base font-semibold text-white break-all">ankit.2907ms@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/ankit-sharma-239526289" target="_blank" rel="noreferrer" className="group flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950 p-4 sm:p-5 transition-transform transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-400/30">
                            <div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                                    <FiLinkedin className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-xs uppercase tracking-wider text-slate-400">💼 LinkedIn</p>
                                <p className="mt-2 text-sm sm:text-base font-semibold text-white">Connect professionally</p>
                            </div>
                        </a>

                        <a href="https://github.com/sharmaankit29" target="_blank" rel="noreferrer" className="group flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950 p-4 sm:p-5 transition-transform transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20 hover:border-violet-400/30">
                            <div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                                    <FiGithub className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-xs uppercase tracking-wider text-slate-400">💻 GitHub</p>
                                <p className="mt-2 text-sm sm:text-base font-semibold text-white">Explore my projects</p>
                            </div>
                        </a>

                        <a href="https://leetcode.com/u/Ankit_9987" target="_blank" rel="noreferrer" className="group flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950 p-4 sm:p-5 transition-transform transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/20 hover:border-emerald-400/30">
                            <div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                                    <SiLeetcode className="h-5 w-5" />
                                </div>
                                <p className="mt-3 text-xs uppercase tracking-wider text-slate-400">🧩 LeetCode</p>
                                <p className="mt-2 text-sm sm:text-base font-semibold text-white">View my journey</p>
                            </div>
                        </a>
                    </div>

                    <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 sm:p-8 text-center text-slate-300">
                        <p className="text-sm sm:text-base leading-6 sm:leading-7">
                            Always open to new opportunities, collaborations, and meaningful conversations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
