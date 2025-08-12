"use client";
import Link from "next/link";
import { ArrowRight } from "@icons";

export const WhyItWorks = () => {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-center px-6 md:px-10 py-0 relative w-full">
      {/* Background */}
      <div className="absolute bg-[#f5fcfa] h-[170px] md:h-[355px] left-0 top-[334px] md:top-[536px] w-full -z-10" />

      {/* Container */}
      <div className="box-border content-stretch flex flex-col gap-10 md:gap-14 items-center justify-center pt-16 md:pt-32 px-0 relative shrink-0 w-full max-w-[1400px]">
        {/* Title Section */}
        <div className="box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-start p-0 relative shrink-0 w-full">
          <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-[#274348] text-[32px] md:text-[48px] text-center tracking-[-0.32px] md:tracking-[-0.48px] w-full max-w-[1240px]">
            <p className="block leading-normal">Why Slimvera Works</p>
          </div>

          <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#274348] text-[14px] md:text-[16px] text-center w-full max-w-[720px]">
            <p className="block leading-[1.5]">
              Struggling with stubborn weight, cravings, or low energy? Slimvera
              helps you take control with clean, science-backed support—so you
              can finally feel lighter, more energized, and in charge of your
              routine.
            </p>
          </div>

          {/* Shop Now Button */}
          <Link
            href="/products"
            className="box-border content-stretch flex flex-row gap-3 items-center justify-center pl-8 md:pl-8 pr-6 md:pr-6 py-4 md:py-4 relative rounded-[999px] shrink-0 cursor-pointer hover:bg-[#274348] hover:text-white transition-all duration-200 border border-[#274348] border-solid group"
          >
            <div className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center px-0 py-[0.5px] relative shrink-0">
              <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#274348] text-[16px] md:text-[16px] text-left text-nowrap tracking-[-0.16px] uppercase group-hover:text-white transition-colors duration-200">
                <p className="block leading-[1.2] whitespace-pre">Shop now</p>
              </div>
            </div>

            <div className="overflow-clip relative shrink-0 w-6 h-6">
              <div className="absolute flex inset-[18.36%_16.67%_18.41%_18.41%] items-center justify-center">
                <div className="flex-none h-[15.175px] rotate-[180deg] w-[15.582px] group-hover:translate-x-1 transition-transform duration-200">
                  <div className="relative w-full h-full">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Illustration */}
        <div
          className="bg-center bg-contain bg-no-repeat h-[183px] md:h-[430px] mix-blend-darken shrink-0 w-[420px] md:w-[1000px]"
          style={{
            backgroundImage: `url('/images/why-it-works-illustration.png')`,
          }}
        />
      </div>
    </div>
  );
};
