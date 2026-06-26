import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import ResumePdf from "../../assets/Ankit_Resume.pdf";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  const [resumeDownloaded, setResumeDownloaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleResumeDownload = () => {
    setResumeDownloaded(true);
    window.setTimeout(() => setResumeDownloaded(false), 3000);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-gray-900 border-b border-gray-800 px-4 lg:px-6 py-3">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" className="h-10 mr-3" />
            <span className="text-white font-semibold hidden sm:inline">Sharma Ankit</span>
            <span className="text-white font-semibold sm:hidden text-sm">SA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <NavLink to="/" end className={({isActive}) => isActive ? 'text-orange-400 font-medium' : 'text-gray-200 hover:text-orange-400'}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-orange-400 font-medium' : 'text-gray-200 hover:text-orange-400'}>About</NavLink>
            <NavLink to="/skills" className={({isActive}) => isActive ? 'text-orange-400 font-medium' : 'text-gray-200 hover:text-orange-400'}>Skills</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-orange-400 font-medium' : 'text-gray-200 hover:text-orange-400'}>Projects</NavLink>
            <NavLink to="/experience" className={({isActive}) => isActive ? 'text-orange-400 font-medium' : 'text-gray-200 hover:text-orange-400'}>Experience</NavLink>
            <NavLink to="/extracurricular" className={({isActive}) => isActive ? 'text-orange-400 font-medium' : 'text-gray-200 hover:text-orange-400'}>Extracurricular</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-orange-400 font-medium' : 'text-gray-200 hover:text-orange-400'}>Contact</NavLink>
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={ResumePdf}
              download="Ankit_Resume.pdf"
              onClick={handleResumeDownload}
              className="ml-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={ResumePdf}
              download="Ankit_Resume.pdf"
              onClick={handleResumeDownload}
              className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded text-sm"
            >
              Resume
            </a>
            <button
              onClick={toggleMobileMenu}
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-700 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top">
            <NavLink to="/" end onClick={closeMobileMenu} className={({isActive}) => isActive ? 'block text-orange-400 font-medium py-2' : 'block text-gray-200 hover:text-orange-400 py-2'}>Home</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu} className={({isActive}) => isActive ? 'block text-orange-400 font-medium py-2' : 'block text-gray-200 hover:text-orange-400 py-2'}>About</NavLink>
            <NavLink to="/skills" onClick={closeMobileMenu} className={({isActive}) => isActive ? 'block text-orange-400 font-medium py-2' : 'block text-gray-200 hover:text-orange-400 py-2'}>Skills</NavLink>
            <NavLink to="/projects" onClick={closeMobileMenu} className={({isActive}) => isActive ? 'block text-orange-400 font-medium py-2' : 'block text-gray-200 hover:text-orange-400 py-2'}>Projects</NavLink>
            <NavLink to="/experience" onClick={closeMobileMenu} className={({isActive}) => isActive ? 'block text-orange-400 font-medium py-2' : 'block text-gray-200 hover:text-orange-400 py-2'}>Experience</NavLink>
            <NavLink to="/extracurricular" onClick={closeMobileMenu} className={({isActive}) => isActive ? 'block text-orange-400 font-medium py-2' : 'block text-gray-200 hover:text-orange-400 py-2'}>Extracurricular</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu} className={({isActive}) => isActive ? 'block text-orange-400 font-medium py-2' : 'block text-gray-200 hover:text-orange-400 py-2'}>Contact</NavLink>
          </div>
        )}
      </nav>
      {resumeDownloaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6">
          <div className="resume-popup-card w-full max-w-md rounded-[2rem] border border-green-300/30 bg-slate-900/95 p-8 text-center text-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600">
              ✓
            </div>
            <h2 className="text-lg font-semibold text-white">Resume Downloaded Successfully</h2>
          </div>
        </div>
      )}
    </header>
  );
}

