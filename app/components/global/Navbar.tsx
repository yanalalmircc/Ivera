"use client";
import Link from "next/link";
import { Cart, Hamburger } from "@components";

export const Navbar = () => {
  const handleCartClick = () => {
    // TODO: Open cart popup
    console.log("Cart clicked - open popup");
  };

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-between px-3 py-2 relative shadow-[0px_0px_2px_0px_rgba(0,0,0,0.15)] size-full">
      {/* Logo */}
      <Link href="/">
        <div
          className="bg-center bg-contain bg-no-repeat h-[45px] shrink-0 w-[150px]"
          style={{ backgroundImage: `url('/images/logo.png')` }}
        />
      </Link>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:flex box-border content-stretch flex-row gap-8 items-center justify-start p-0 relative shrink-0">
        <div className="box-border content-stretch flex flex-row font-['DM_Sans:Bold',_sans-serif] font-bold gap-6 items-center justify-start leading-none p-0 relative shrink-0 text-[#274348] text-[14px] text-left text-nowrap uppercase">
          <Link
            href="/about-us"
            className="relative shrink-0 hover:text-[#19bf98] transition-colors duration-200"
          >
            <p className="block leading-normal text-nowrap whitespace-pre">
              About us
            </p>
          </Link>
          <Link
            href="/faq"
            className="relative shrink-0 hover:text-[#19bf98] transition-colors duration-200"
          >
            <p className="block leading-normal text-nowrap whitespace-pre">
              FAQ
            </p>
          </Link>
          <Link
            href="/contact"
            className="relative shrink-0 hover:text-[#19bf98] transition-colors duration-200"
          >
            <p className="block leading-normal text-nowrap whitespace-pre">
              Contact
            </p>
          </Link>
        </div>
        <Link href="/cart">
          <button
            className="bg-[#f3f8f9] box-border content-stretch cursor-pointer flex flex-row gap-2.5 items-center justify-center overflow-visible p-0 relative rounded-[40px] shrink-0 w-12 h-12"
            onClick={handleCartClick}
          >
            <Cart />
          </button>
        </Link>
      </div>

      {/* Mobile Navigation - Visible only on mobile */}
      <div className="md:hidden box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
        {/* Hamburger Menu */}
        <Hamburger />

        {/* Mobile Cart */}
        <Link href="/cart">
          <button
            className="bg-[#f3f8f9] box-border content-stretch cursor-pointer flex flex-row gap-2.5 items-center justify-center p-0 relative rounded-[40px] shrink-0 size-[42px]"
            onClick={handleCartClick}
          >
            <Cart />
          </button>
        </Link>
      </div>
    </div>
  );
};
