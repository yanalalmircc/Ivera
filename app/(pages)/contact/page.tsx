import Link from "next/link";
import { BestSellers } from "@components";
import { ContactForm } from "@components";

export default function ContactPage() {
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
              <p className="block leading-[1.2] whitespace-pre">Contact us</p>
            </div>
          </div>

          {/* Title Section */}
          <div className="box-border content-stretch flex flex-col gap-4 md:gap-5 items-center justify-center pb-5 pt-0 px-0 relative shrink-0 w-full">
            <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-[#274348] text-3xl md:text-[48px] text-left tracking-tight md:tracking-[-0.48px] w-full">
              <p className="block leading-[1.2]">Contact us</p>
            </div>
          </div>

          {/* Description Text */}
          <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#274348] text-base md:text-[18px] text-left w-full">
            <p className="leading-[1.5] mb-4">
              <span>Our customer service is here for you! </span>
              <span className="font-['DM_Sans:Bold',_sans-serif] font-bold">
                Please use the contact form below
              </span>
              <span> to get in touch with us directly.</span>
            </p>
            <p className="leading-[1.5]">
              <span>Alternatively, you can also send us an email at </span>
              <span className="underline cursor-pointer hover:text-[#19bf98] transition-colors duration-200">
                support@healthycore.com
              </span>
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>

      {/* Bestsellers Section - Imported Component */}
      <div className="bg-[#fbfaf7] w-full">
        <BestSellers isHomePage={false} />
      </div>
    </div>
  );
}
