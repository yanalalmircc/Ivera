"use client";
import Link from "next/link";

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
      bgColor: "bg-[#0057db]",
      icon: "/images/paypal-bg.png",
      iconSize: "size-5",
    },
    {
      name: "Klarna",
      bgColor: "bg-[#ffa8cd]",
      icon: "/images/klarna-bg.png",
      iconSize: "size-[17px]",
    },
    {
      name: "American Express",
      bgColor: "",
      icon: "/images/amex.png",
      iconSize: "size-full",
    },
    {
      name: "Mastercard",
      bgColor: "bg-[#000000]",
      icon: "/images/mastercard.svg",
      iconSize: "h-[15px] w-[25px]",
    },
    {
      name: "Visa",
      bgColor: "",
      icon: "/images/visa.svg",
      iconSize: "size-full",
    },
  ];

  return (
    <div className="bg-[#274348] box-border content-stretch flex flex-col md:flex-row items-center justify-center p-6 md:p-[40px] relative w-full">
      <div className="basis-0 box-border content-stretch flex flex-col md:flex-row gap-6 md:gap-0 grow items-center justify-between min-h-px min-w-px p-0 relative shrink-0 w-full max-w-[1400px]">
        {/* Copyright - Left Side */}
        <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#ffffff] text-sm md:text-[14px] text-center md:text-left text-nowrap order-3 md:order-1">
          <p className="block leading-[1.5] whitespace-pre">
            Copyright 2025 Healthycore.io
            <br aria-hidden="true" className="hidden md:block" />
            All rights reserved.
          </p>
        </div>

        {/* Navigation Menu - Center */}
        <div className="box-border content-stretch flex flex-row font-['DM_Sans:Regular',_sans-serif] font-normal gap-4 md:gap-5 items-center justify-center p-0 text-[#ffffff] text-sm md:text-[14px] text-center text-nowrap order-1 md:order-2">
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

        {/* Payment Methods - Right Side */}
        <div className="box-border content-stretch flex flex-row gap-1 md:gap-[5px] items-center justify-center p-0 relative shrink-0 order-2 md:order-3">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className={`${method.bgColor} box-border content-stretch flex flex-col gap-2.5 h-[30px] items-center justify-center p-0 relative rounded shrink-0 w-[42px]`}
            >
              <div
                className={`bg-center bg-cover bg-no-repeat shrink-0 ${method.iconSize}`}
                style={{
                  backgroundImage: method.icon.includes(".png")
                    ? `url('${method.icon}')`
                    : "none",
                }}
              >
                {!method.icon.includes(".png") && (
                  <img
                    alt={method.name}
                    className="block max-w-none w-full h-full"
                    src={method.icon}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
