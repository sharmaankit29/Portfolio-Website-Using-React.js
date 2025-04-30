import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?t=st=1743358160~exp=1743361760~hmac=da39959abebc6014cf6c4743fde6c4ccefc9a4cfd90d8792ab044c161147d9e3&w=740"
                                className="mr-5 h-20"
                                alt="Logo"
                            />
                            <h6>Sharma Ankit</h6>
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/sharmaankit29"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        href="https://www.linkedin.com/in/ankit-sharma-239526289"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://github.com/sharmaankit29" className="hover:underline">
                            sharmaankit29
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                
                                <path d="M20.451 20.452h-3.9v-5.683c0-1.355-.027-3.1-1.89-3.1-1.89 0-2.18 1.475-2.18 3.003v5.78h-3.9V9h3.743v1.56h.054c.523-.99 1.8-2.036 3.704-2.036 3.96 0 4.692 2.607 4.692 6v5.928zM5.337 7.433C4.013 7.433 3 6.42 3 5.1c0-1.318 1.013-2.332 2.337-2.332 1.322 0 2.337 1.014 2.337 2.332-.002 1.32-1.015 2.333-2.337 2.333zm1.95 13.02h-3.9V9h3.9v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.728V22.27C0 23.225.792 24 1.771 24h20.453C23.208 24 24 23.225 24 22.27V1.728C24 .774 23.208 0 22.225 0z" />
                            </svg>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.2c3.2 0 3.584.012 4.849.07 3.25.148 4.771 1.691 4.919 4.919.058 1.265.07 1.649.07 4.849s-.012 3.584-.07 4.849c-.148 3.25-1.691 4.771-4.919 4.919-1.265.058-1.649.07-4.849.07s-3.584-.012-4.849-.07c-3.25-.148-4.771-1.691-4.919-4.919C2.212 16.603 2.2 16.219 2.2 13s.012-3.584.07-4.849C2.418 4.901 3.961 3.38 7.189 3.232 8.454 3.174 8.838 3.162 12 3.162s3.584.012 4.849.07c3.25.148 4.771 1.691 4.919 4.919.058 1.265.07 1.649.07 4.849s-.012 3.584-.07 4.849c-.148 3.25-1.691 4.771-4.919 4.919-1.265.058-1.649.07-4.849.07s-3.584-.012-4.849-.07c-3.25-.148-4.771-1.691-4.919-4.919C2.212 16.603 2.2 16.219 2.2 13s.012-3.584.07-4.849c.148-3.25 1.691-4.771 4.919-4.919C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.164 0-3.544.012-4.795.07-2.152.103-3.262.944-3.365 3.365-.058 1.251-.07 1.631-.07 4.795s.012 3.544.07 4.795c.103 2.152.944 3.262 3.365 3.365 1.251.058 1.631.07 4.795.07s3.544-.012 4.795-.07c2.152-.103 3.262-.944 3.365-3.365.058-1.251.07-1.631.07-4.795s-.012-3.544-.07-4.795c-.103-2.152-.944-3.262-3.365-3.365-1.251-.058-1.631-.07-4.795-.07zm0 3.2c2.09 0 3.8 1.71 3.8 3.8s-1.71 3.8-3.8 3.8-3.8-1.71-3.8-3.8 1.71-3.8 3.8-3.8zm0 1.8c-1.102 0-2 .898-2 2s.898 2 2 2 2-.898 2-2-.898-2-2-2zm5.8-.9c.497 0 .9.403.9.9s-.403.9-.9.9-.9-.403-.9-.9.403-.9.9-.9z" />
                            </svg>

                            <span className="sr-only">instagram</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
