import React from "react";
import { Link,NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-20 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                           
                            
                            <span className="hidden sm:block text-5xl py-2 text-orange-700"> Web Developer</span>
                            <span className="hidden sm:block text-4xl ">Student</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-3 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            {/* <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg> */}
                            {/* &nbsp; Know More */}

                            <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 
                                        pl-3 duration-100 
                                        border-b 
                                        ${isActive ? "text-orange-700" : "text-grey-100"}
                                        border-orange-700 
                                        hover:bg-white
                                        lg:hover:bg-transparent 
                                        lg:border-0 
                                        lg:p-0`
                                    }
                                >
                                    Know More
                                </NavLink>

                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://img.freepik.com/free-photo/top-view-internet-communication-network-with-laptop_23-2148779281.jpg?t=st=1743248405~exp=1743252005~hmac=361c1403bb926748997bcfdda761a61527101a09f63336656e9afca89360023a&w=740" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://img.freepik.com/free-photo/digital-graphic-tablet-laptop-mock-up-with-office-objects-white-background_23-2147880630.jpg?t=st=1743248613~exp=1743252213~hmac=cc8bb47ece9b4ee94277454c345c1f2312518e4f710fafb4ddf31f2fbae7d54f&w=740" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-3xl py-10 font-medium">Let's Start with simple Web page</h1>
        </div>
    );
}
