export const Hero = () => {
  return (
    <div className="bg-[#f5fcfa] box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-center p-6 md:p-10 relative w-full h-[750px]">
      {/* Background Images */}
      <div
        className="absolute bottom-0 right-0 top-0 w-full md:w-[864px] opacity-30 md:opacity-100"
        style={{
          backgroundImage: `url('/images/hero-bg-1.png'), url('/images/hero-bg-2.png')`,
          backgroundPosition: "13.01% 0%, 50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "125.03% 100%, cover",
        }}
      />

      {/* Content Container */}
      <div className="box-border content-stretch flex flex-col gap-8 md:gap-16 items-start justify-center p-0 relative shrink-0 text-[#274348] text-left w-full max-w-[1400px] z-10">
        {/* Main Heading */}
        <div className="font-['Epilogue:Bold',_sans-serif] font-bold min-w-full relative shrink-0 text-4xl md:text-6xl lg:text-[88px] tracking-tight md:tracking-[-0.88px]">
          <p className="block leading-[1.1] md:leading-[1.2]">
            Supplements That Work
          </p>
        </div>

        {/* Description Text */}
        <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-base md:text-lg lg:text-[20px] w-full max-w-[520px]">
          <p className="leading-[1.4] md:leading-[1.5]">
            <span className="font-['DM_Sans:Bold',_sans-serif] font-bold">
              HealthyCore{" "}
            </span>
            <span>
              puts science first and your goals at the center. Through smart,
              supplement-based health solutions and results you can feel, we
              help you take control of your wellness.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
