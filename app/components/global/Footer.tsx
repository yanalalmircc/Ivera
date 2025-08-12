"use client";
import Link from "next/link";
import { Amex, Klarna, MasterCard, Paypal, VisaCard } from "@icons";

export const Footer = () => {
  const menuItems = [
    { href: "/about-us", label: "About us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy policy" },
    { href: "/terms-conditions", label: "Terms & conditions" },
  ];

  const paymentMethods = [
    {
      name: "PayPal",
      icon: <Paypal className="h-[30px] w-[42px]" />,
    },
    {
      name: "Klarna",
      icon: <Klarna className="h-[30px] w-[42px]" />,
    },
    {
      name: "American Express",
      icon: <Amex className="h-[30px] w-[42px]" />,
    },
    {
      name: "Mastercard",
      icon: <MasterCard className="h-[30px] w-[42px]" />,
    },
    {
      name: "Visa",
      icon: <VisaCard className="h-[30px] w-[42px]" />,
    },
  ];

  return (
    <footer className="bg-[#274348] px-10 py-8 w-full">
      <div className="flex flex-col gap-8 items-center justify-start w-full max-w-[1400px] mx-auto">
        {/* Navigation Menu - Top */}
        <div className="flex flex-wrap font-['DM_Sans:Regular',_sans-serif] font-normal gap-5 items-center justify-center text-[#ffffff] text-[14px] text-center w-full">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative shrink-0 hover:text-[#19bf98] transition-colors duration-200"
            >
              <p className="block leading-normal text-nowrap whitespace-pre">
                {item.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Payment Methods - Middle */}
        <div className="flex flex-row gap-[5px] items-center md:justify-center w-full md:w-auto justify-between">
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex items-center justify-center">
              {method.icon}
            </div>
          ))}
        </div>

        {/* Copyright - Bottom */}
        <div className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#ffffff] text-[14px] text-center w-full">
          <p className="block leading-[1.5]">
            Copyright 2025 Healthycore.io
            <br aria-hidden="true" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
