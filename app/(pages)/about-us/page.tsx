import Link from "next/link";
import { BestSellers } from "@components";

export default function AboutUsPage() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
      {/* Content Section */}
      <div className="box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-center pb-16 md:pb-24 pt-8 md:pt-12 px-6 md:px-10 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col gap-8 md:gap-12 items-start justify-center p-0 relative shrink-0 w-full max-w-[1080px]">
          {/* Breadcrumbs */}
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-5 pt-0 px-0 relative shrink-0 w-full">
            <Link
              href="/"
              className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px] hover:text-[#19bf98] transition-colors duration-200"
            >
              <p className="block leading-[1.2] whitespace-pre">Home</p>
            </Link>
            <div className="opacity-50 overflow-clip relative shrink-0 w-4 h-4">
              <div className="absolute inset-[26.22%_33.69%_26.22%_36.64%]">
                <img
                  alt="chevron right"
                  className="block max-w-none w-full h-full"
                  src="/images/chevron-right.svg"
                />
              </div>
            </div>
            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal opacity-50 relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px]">
              <h1 className="text-[32px] text-[#274348] font-bold">About us</h1>
            </div>
          </div>

          {/* Title Section */}
          <div className="box-border content-stretch flex flex-col font-['Epilogue:Bold',_sans-serif] font-bold gap-4 md:gap-5 items-center justify-center pb-5 pt-0 px-0 relative shrink-0 w-full">
            <div className="relative shrink-0 text-[#274348] text-3xl md:text-[48px] tracking-tight md:tracking-[-0.48px] w-full">
              <p className="block leading-[1.2]">About us</p>
            </div>
            <div className="relative shrink-0 text-[#19bf98] text-xl md:text-[24px] tracking-tight md:tracking-[-0.24px] w-full">
              <p className="block leading-[1.2]">
                Welcome to HealthyCore — Where Wellness Begins at the Center.
              </p>
            </div>
          </div>

          {/* Main Description */}
          <div className="font-['DM_Sans:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[#274348] text-base md:text-[18px] text-left">
            <p className="block leading-[1.5]">
              At HealthyCore, we believe that true health starts from within —
              at the core of who you are. That's why we've dedicated ourselves
              to creating high-quality, science-backed supplements that support
              your journey toward a healthier, more balanced life.
              <br aria-hidden="true" className="hidden md:block" />
              <br aria-hidden="true" className="hidden md:block" />
              Whether you're working on weight management, boosting your energy,
              improving digestion, or simply supporting your overall well-being,
              our goal is to help you feel your best — every day.
            </p>
          </div>

          {/* What We Do Section */}
          <div className="box-border content-stretch flex flex-col gap-4 md:gap-6 items-start justify-start p-0 relative shrink-0 text-[#274348] text-left w-full">
            <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-2xl md:text-[32px] w-full">
              <h1 className="text-[32px] text-[#274348] font-bold">
                What We Do
              </h1>
            </div>
            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-base md:text-[18px] w-full">
              <p className="block leading-[1.5]">
                HealthyCore formulates and delivers premium dietary supplements
                made with clean, effective ingredients. Each product is designed
                with purpose, crafted to support modern lifestyles without
                cutting corners on safety or transparency.
              </p>
            </div>
            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-base md:text-[18px] w-full">
              <ul className="list-disc pl-6 md:pl-8 space-y-2">
                <li>
                  <span className="leading-[1.8]">
                    Thoughtfully sourced ingredients
                  </span>
                </li>
                <li>
                  <span className="leading-[1.8]">
                    No unnecessary fillers or additives
                  </span>
                </li>
                <li>
                  <span className="leading-[1.8]">
                    Backed by science, guided by nature
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Philosophy and Quality Row */}
          <div className="flex flex-col gap-10 items-start md:flex-row">
            <div className="flex flex-col gap-4 border-b md:border-b-0 md:border-r border-[#D0DFE5] pb-10 md:pb-0 md:pr-10 md:w-1/2">
              <h1 className="text-[32px] text-[#274348] font-bold">
                Our Philosophy
              </h1>
              <p>
                We believe that wellness should be accessible, honest, and
                empowering. Your body deserves products that work in harmony
                with your lifestyle, not against it. That’s why everything we
                make is created with your long-term health in mind — from
                formulation to packaging.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-1/2">
              <h1 className="text-[32px] text-[#274348] font-bold">
                Quality You Can Trust
              </h1>
              <p>
                All HealthyCore supplements are produced in GMP-certified
                facilities with rigorous quality control. From our first idea to
                the final capsule, every step is rooted in integrity,
                innovation, and a deep respect for your health.
              </p>
            </div>
          </div>
          {/* Call to Action Block */}
          <div
            className="bg-[#f5fcfa] bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-16 md:p-[128px] relative shrink-0 w-full"
            style={{ backgroundImage: `url('/images/about-us-bg.png')` }}
          >
            <div className="basis-0 font-['Epilogue:Bold',_sans-serif] font-bold grow leading-none min-h-px min-w-px relative shrink-0 text-[#000000] text-2xl md:text-[32px] text-center md:text-left">
              <p className="leading-[1.4]">
                <span className="text-[#19bf98]">
                  Your health is your foundation.
                </span>
                <span className="block mt-2 md:mt-0">
                  Let HealthyCore support your journey — from the inside out.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fbfaf7] w-full">
        <BestSellers />
      </div>
    </div>
  );
}
