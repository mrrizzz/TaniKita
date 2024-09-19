"use client";

import { useState, useEffect, useRef } from "react";
import NavList from "./nav-links";
import Logo from "./logo";
import AuthLinks from "./auth-button";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav ref={navRef} className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Logo />
          <div className="flex md:order-2">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="w-6 h-6" />
            </button>
            <div className="hidden md:flex md:items-center md:space-x-4 rtl:space-x-reverse">
              <AuthLinks />
            </div>
          </div>
          <div
            className={`${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in-out overflow-hidden`}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <NavList isMenuOpen={isMenuOpen} />
            <div className="md:hidden mt-3 flex justify-center">
              <AuthLinks />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
