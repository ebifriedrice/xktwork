import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    controls.start({ x: isMenuOpen ? '100%' : 0 });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    controls.start({ x: '100%' });
  };

  return (
    <div className="">
      <div className="backdrop-blur-sm p-4 w-[98.9%] fixed top-0 z-50">
        <div className=" flex items-center justify-between">
          <div className="flex items-center content-center bg-white p-2">
            <a href="#home" className="text-black hover:underline">
              <img src="/logo.svg" alt="Logo" className="w-56 h-10" />
            </a>
          </div>
          <div className="px-5">
            <button
              className="text-black focus:outline-none focus:shadow-outline p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`fixed top-16 inset-0 backdrop-blur-md z-50 ${isMenuOpen ? 'flex items-center justify-center' : 'hidden'
          }`}
        initial={{ x: '100%' }}
        animate={controls}
        onClick={closeMenu}
      >
        <motion.div
          className=" w-64 p-4"
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-4 text-[3rem] text-center">
            <li>
              <a href="#home" className="text-black hover:underline"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-black hover:underline"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-black hover:underline"
                onClick={closeMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="text-black hover:underline"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#facility" className="text-black hover:underline"
                onClick={closeMenu}
              >
                Facility
              </a>
            </li>
            <li>
              <a href="#contact" className="text-black hover:underline"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};



export default Navbar;