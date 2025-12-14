import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import nLogo from "../../assets/nLogo.png";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  

  // Safely close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => setNavOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home", icon: <AiOutlineHome className="inline mb-1" /> },
    { path: "/skillset", label: "Skillset", icon: <GiSkills className="inline mb-1" /> },
    { path: "/project", label: "Projects", icon: <AiOutlineFundProjectionScreen className="inline mb-1" /> },
    { path: "/resume", label: "Resume", icon: <CgFileDocument className="inline mb-1" /> },
    { path: "/contact", label: "Contact Me", icon: <AiOutlineContacts className="inline mb-1" /> },
  ];

  // Make navbar background consistently dark (same before/after scroll)
  const linkTextClass = "text-white hover:text-yellow-400";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-indigo-900/98 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
              <Link to="/" className="inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded -ml-1">
                {/* show the wordmark directly (no square box) and size to navbar height */}
                <img src={nLogo} alt="Aniket logo" className="h-16 sm:h-20 object-contain block" />
                {/* small yellow mark */}
                <span className={`hidden sm:inline-block w-3 h-3 rounded-full bg-yellow-400`}></span>
              </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className={`focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded p-2`}
              aria-label={navOpen ? "Close menu" : "Open menu"}
            >
              <div className="space-y-1.5">
                <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu items - separate from desktop */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        navOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-4 pb-4 space-y-2 bg-indigo-900/98">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setNavOpen(false)}
              className={`block ${linkTextClass} px-4 py-3 rounded-md font-medium transition-all ${
                location.pathname === item.path ? "text-yellow-400 bg-indigo-800/50" : "hover:bg-indigo-800/30"
              }`}
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop menu items */}
      <div className="hidden md:flex md:items-center md:justify-end md:space-x-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`inline-block ${linkTextClass} px-3 py-2 rounded-md font-medium ${
              location.pathname === item.path ? "text-yellow-400" : ""
            }`}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
