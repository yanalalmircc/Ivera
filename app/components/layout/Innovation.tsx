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
    <div className="w-full">
      <div
        className="w-full bg-[#F5FCFA] p-10 pb-0 gap-[24px] flex flex-col md:px-16 md:py-28 md:gap-28 md:items-center md:justify-center"
        style={{
          backgroundImage: 'url("/images/innovation-bg.png")',
          backgroundSize: "45% 94.59%, auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        {/* Text */}
        <div className="flex flex-col gap-[20px] md:gap-8 justify-center items-center text-center md:w-[1240px]">
          <h1 className="text-[32px] md:text-[48px] text-[#274348] font-bold md:tracking-[-0.48px] md:leading-[normal]">
            Built on Innovation
          </h1>
          <p className="text-[#274348] text-center text-[14px] md:text-[16px] md:leading-[1.5] md:w-[720px]">
            Our top-rated weight loss supplements are trusted by thousands to
            control cravings, support metabolism, and boost daily energy—without
            the crash or the guesswork.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center md:justify-center md:w-[1240px] md:pl-0 md:pr-[280px] w-full mt-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="h-full md:basis-0 md:grow md:px-0 md:py-5"
            >
              {/* Separator line (except for first item) */}
              {index > 0 && (
                <>
                  {/* Mobile separator */}
                  <div className="h-0 relative shrink-0 w-full mb-6 md:hidden">
                    <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                      <img
                        src="/images/separator-line.svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Desktop separator */}
                  <div className="hidden md:block relative self-stretch shrink-0 w-0">
                    <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
                      <img
                        src="/images/separator-vertical.svg"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Benefit Card */}
              <div className="flex md:flex-col flex-row gap-5 md:gap-8 items-center md:items-start justify-start w-full">
                {/* Icon */}
                <div className="h-[70px] w-[69px] md:h-20 md:w-[79px] relative shrink-0 flex items-center justify-center">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="max-w-none w-full h-full object-contain"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2 grow items-start justify-start text-[#274348] text-left w-full">
                  <h3 className="font-['Epilogue:Bold',_sans-serif] font-bold text-[18px] md:text-[20px] tracking-[-0.18px] md:tracking-[-0.2px] leading-[1.2] md:leading-[normal] w-full">
                    {benefit.title}
                  </h3>
                  <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[14px] leading-[1.4] w-full">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image - only show on mobile */}
        <div className="w-full h-full bg-center bg-cover bg-no-repeat md:hidden">
          <img src="/images/innovation-bg.png" alt="Innovation" />
        </div>
      </div>
    </div>
  );
};
