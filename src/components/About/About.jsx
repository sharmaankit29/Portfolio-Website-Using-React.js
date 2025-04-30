import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1325.jpg?t=st=1743361105~exp=1743364705~hmac=ea19704c6dcb8aa08c5a2acecff50a22ca41ec38baca88ea2ec695288b50a3bc&w=740"
                            alt="image"
                        />
                        {/* <img
                            src="https://img.freepik.com/free-photo/top-view-copy-space-with-devices_23-2148223235.jpg?t=st=1743253612~exp=1743257212~hmac=85231957763787df75f5145259e584bfdb96bd29c32667f0051661f8b8f8a15e&w=740"
                            alt="image"
                        /> */}
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        🚀 Aspiring Engineer | Driven by Innovation & Discipline
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Motivated and detail-oriented second-year engineering student with a solid foundation in mathematics and science. Eager to apply analytical and problem-solving skills in a dynamic, real-world environment. As an active NCC cadet, I bring leadership, teamwork, and discipline—qualities that enhance my ability to adapt, collaborate, and contribute effectively. Passionate about leveraging technical knowledge to drive innovation and add value to an organization.
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        💡 Web Developer | Code. Build. Innovate.
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Passionate Web Developer skilled in HTML, CSS, JavaScript, React, MySQL, and modern frameworks like Tailwind and Bootstrap. Experienced in building responsive and high-performance web applications. Proficient in Git, GitHub, and VS Code, with a strong focus on UI/UX and optimization. Eager to contribute technical expertise to innovative projects.
                        </p>
                        
                    </div>
                    <div className="md:5/12 lg:w-5/12">
                        
                        <img
                            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1743361561~exp=1743365161~hmac=111756de288a1c7968e12f5c95430ced74608b24c984cc0981ee77e4eea1e280&w=740"
                            alt="image"
                        />
                    </div>
                </div>
        </div>
    );
}
