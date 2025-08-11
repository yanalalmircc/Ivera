"use client";
import Link from "next/link";
import { Cart } from "@components";

export const Navbar = () => {
  const handleCartClick = () => {
    // TODO: Open cart popup
    console.log("Cart clicked - open popup");
  };

  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between pl-5 pr-6 py-3 relative w-full h-full">
      <div
        className="bg-center bg-contain bg-no-repeat h-[55px] shrink-0 w-[190px]"
        style={{ backgroundImage: `url('/images/logo.png')` }}
      />
      <div className="box-border content-stretch flex flex-row gap-8 items-center justify-start p-0 relative shrink-0">
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
        <button
          className="bg-[#f3f8f9] box-border content-stretch cursor-pointer flex flex-row gap-2.5 items-center justify-center overflow-visible p-0 relative rounded-[40px] shrink-0 w-12 h-12"
          onClick={handleCartClick}
        >
          <Cart />
        </button>
      </div>
    </div>
  );
};
