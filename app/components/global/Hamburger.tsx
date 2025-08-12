"use client";
import { useState } from "react";
import Link from "next/link";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="block cursor-pointer relative shrink-0 size-[42px] p-2"
        aria-label="Toggle menu"
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <span
            className={`block w-6 h-0.5 bg-[#274348] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#274348] my-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#274348] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500"
          onClick={closeMenu}
        />

        {/* Menu Panel - Slides in from right */}
        <div
          className={`absolute inset-0 bg-[#ffffff] shadow-lg transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative h-full w-full overflow-hidden">
            {/* Header with Logo and Close Button */}
            <div className="absolute top-0 left-0 right-0 pointer-events-none">
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-between pointer-events-auto px-3 py-2 sticky top-0 w-full">
                <div
                  className="bg-center bg-contain bg-no-repeat h-[45px] shrink-0 w-[150px]"
                  style={{ backgroundImage: `url('/images/logo.png')` }}
                />
                <button
                  onClick={closeMenu}
                  className="box-border content-stretch cursor-pointer flex flex-row gap-1 items-center justify-start overflow-visible p-0 relative shrink-0 size-[42px]"
                >
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <span className="block w-6 h-0.5 bg-[#274348] rotate-45 translate-y-[1px]" />
                    <span className="block w-6 h-0.5 bg-[#274348] -rotate-45 -translate-y-[1px]" />
                  </div>
                </button>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="absolute box-border content-stretch flex flex-col font-['Epilogue:ExtraBold',_sans-serif] font-extrabold gap-10 items-start justify-center leading-[0] left-10 p-0 text-[#274348] text-[40px] text-left text-nowrap top-[111px] tracking-[-0.4px] uppercase">
              <div className="relative shrink-0">
                <Link
                  href="/about-us"
                  onClick={closeMenu}
                  className="block leading-[normal] text-nowrap whitespace-pre hover:text-[#19bf98] transition-colors duration-300"
                >
                  About us
                </Link>
              </div>
              <div className="relative shrink-0">
                <Link
                  href="/faq"
                  onClick={closeMenu}
                  className="block leading-[normal] text-nowrap whitespace-pre hover:text-[#19bf98] transition-colors duration-300"
                >
                  FAQ
                </Link>
              </div>
              <div className="relative shrink-0">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block leading-[normal] text-nowrap whitespace-pre hover:text-[#19bf98] transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute contents inset-[65.84%_-50.63%_-36.27%_25.63%]">
              <div className="absolute inset-[75%_-38.96%_-28.37%_30.14%] opacity-75">
                <div className="w-full h-full bg-gradient-to-br from-[#f3f8f9] to-[#e8f4f6] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
