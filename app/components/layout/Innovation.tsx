export const Innovation = () => {
  const benefits = [
    {
      id: 1,
      icon: "/images/certified-icon.svg",
      title: "Certified Quality",
      description:
        "Backed by rigorously tested ingredients for safety and effectiveness.",
    },
    {
      id: 2,
      icon: "/images/balanced-icon.svg",
      title: "Scientifically Balanced",
      description:
        "Crafted with a 3-part formula to enhance fat burn and reduce cravings.",
    },
    {
      id: 3,
      icon: "/images/energy-icon.svg",
      title: "Energy Support",
      description:
        "Fueled by Magnesium BHB for sustained daily energy without the crash.",
    },
  ];

  return (
    <div className="box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-center px-6 md:px-10 py-0 relative w-full">
      <div
        className="bg-[#f5fcfa] bg-right bg-no-repeat box-border content-stretch flex flex-col gap-16 md:gap-28 items-center justify-center px-8 md:px-16 py-16 md:py-28 relative shrink-0 w-full max-w-[1400px] rounded-lg md:rounded-none"
        style={{
          backgroundImage: `url('/images/innovation-bg.png')`,
          backgroundSize: "50% 100%, auto",
          backgroundPosition: "135% 0%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Title Section */}
        <div className="box-border content-stretch flex flex-col gap-6 md:gap-8 items-center justify-start p-0 relative shrink-0 text-[#274348] text-center w-full">
          <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-3xl md:text-[48px] tracking-tight md:tracking-[-0.48px] w-full max-w-[1240px]">
            <p className="block leading-normal">Built on Innovation</p>
          </div>
          <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-sm md:text-[16px] w-full max-w-[720px]">
            <p className="block leading-[1.5]">
              Our top-rated weight loss supplements are trusted by thousands to
              control cravings, support metabolism, and boost daily
              energy—without the crash or the guesswork.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-8 md:gap-16 items-start justify-start p-0 pl-0 pr-0 md:pr-[280px] py-0 relative shrink-0 w-full max-w-[1240px]">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 w-full lg:w-auto"
            >
              {/* Benefit Item */}
              <div className="basis-0 box-border content-stretch flex flex-col gap-6 md:gap-8 grow items-start justify-start min-h-px min-w-px px-0 py-3 md:py-5 relative shrink-0 w-full lg:w-auto">
                {/* Icon */}
                <div className="h-16 md:h-20 relative shrink-0 w-16 md:w-[79px]">
                  <div className="absolute bottom-[-7.5%] left-0 right-0 top-0">
                    <img
                      alt={benefit.title}
                      className="block max-w-none w-full h-full"
                      src={benefit.icon}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 text-[#274348] text-left w-full">
                  <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-lg md:text-[20px] tracking-tight md:tracking-[-0.2px] w-full">
                    <p className="block leading-normal">{benefit.title}</p>
                  </div>
                  <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-sm md:text-[14px] w-full">
                    <p className="block leading-[1.4]">{benefit.description}</p>
                  </div>
                </div>
              </div>

              {/* Separator - Only show between items on desktop */}
              {index < benefits.length - 1 && (
                <div className="hidden lg:block relative self-stretch shrink-0 w-0">
                  <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
                    <img
                      alt="separator"
                      className="block max-w-none w-full h-full"
                      src="/images/separator-vertical.svg"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
