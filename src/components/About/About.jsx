import React, { useState, useEffect } from "react";
function Counter({ end = 0, duration = 1500, suffix = '', decimals = 0 }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = start + (end - start) * progress;
            setValue(current);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        return () => {};
    }, [end, duration]);

    return (
        <span className="font-bold text-2xl text-white">
            {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}{suffix}
        </span>
    );
}

export default function About() {
    return (
        <div className="py-8 sm:py-12 md:py-16 bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 xl:px-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                    <div className="md:w-2/3 w-full">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">About Me</h2>

                        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-justify leading-relaxed">
                            <p>
                                I'm Ankit Sharma, a Final Year Computer Engineering student at Thakur College of Engineering &amp; Technology, Mumbai, with a strong academic record and a CGPA of <span className="font-semibold text-white">9.79</span>.
                            </p>

                            <p>
                                What excites me most about Computer Science is problem-solving. I am particularly passionate about Data Structures and Algorithms because they go beyond coding-they demonstrate how complex real-world problems can be solved efficiently. From route optimization in navigation systems to search recommendations on digital platforms, I enjoy understanding how algorithms shape and optimize our everyday lives.
                            </p>

                            <p>
                                Beyond academics and coding, I successfully completed my three-year journey as an NCC Naval Wing Cadet and earned the prestigious NCC 'C' Certificate. My experience in NCC has instilled leadership, discipline, teamwork, and adaptability—qualities that continue to guide me in both my personal and professional life.
                            </p>

                            <p>
                                I am always eager to learn, embrace new challenges, and contribute to building impactful and efficient software solutions.
                            </p>
                        </div>

                        <div className="mt-6 sm:mt-8">
                            <h3 className="text-xl sm:text-2xl text-white font-semibold mb-4">Highlights</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <div className="flex flex-col items-center text-center gap-2 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                                    <div className="text-2xl">🎓</div>
                                    <div>
                                        <div className="text-xs sm:text-sm text-gray-300">Status</div>
                                        <div className="text-white font-semibold text-sm">Final Year B.E. Computer Engineering Student</div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center gap-2 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                                    <div className="text-2xl">🏆</div>
                                    <div>
                                        <div className="text-xs sm:text-sm text-gray-300">CGPA</div>
                                        <div className="text-white font-semibold text-sm">9.79</div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center gap-2 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                                    <div className="text-2xl">💻</div>
                                    <div>
                                        <div className="text-xs sm:text-sm text-gray-300">LeetCode</div>
                                        <div className="text-white font-semibold text-sm"><Counter end={200} duration={1400} suffix={"+"} /></div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center gap-2 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                                    <div className="text-2xl">🚀</div>
                                    <div>
                                        <div className="text-xs sm:text-sm text-gray-300">Deployment</div>
                                        <div className="text-white font-semibold text-sm">Projects Deployed on Vercel</div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center gap-2 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                                    <div className="text-2xl">⚓</div>
                                    <div>
                                        <div className="text-xs sm:text-sm text-gray-300">NCC</div>
                                        <div className="text-white font-semibold text-sm">'B' & 'C' Certificate Holder</div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center text-center gap-2 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                                    <div className="text-2xl">🌱</div>
                                    <div>
                                        <div className="text-xs sm:text-sm text-gray-300">Learning</div>
                                        <div className="text-white font-semibold text-sm">Continuously learning and improving</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                      <aside className="md:w-1/3 w-full md:mt-12 mt-6">
                        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
                            <h4 className="text-lg sm:text-xl text-white font-semibold mb-4">Info</h4>
                            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                                <li><span className="font-medium">Name:</span> Ankit Sharma</li>
                                <li><span className="font-medium">Degree:</span> B.E. Computer Engineering</li>
                                <li><span className="font-medium">College:</span> Thakur College of Engineering &amp; Technology</li>
                                <li><span className="font-medium">CGPA:</span> 9.79</li>
                                <li><span className="font-medium">Location:</span> Mumbai, Maharashtra</li>
                                <li><span className="font-medium">Email:</span> <a href="#" className="text-orange-400 hover:underline">ankit.2907ms@gmail.com</a></li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <img src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1325.jpg" alt="about" className="w-full rounded-lg shadow-md" />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
