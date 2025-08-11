export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      photo: "/images/testimonial-1.png",
      name: "Emily R.",
      age: 47,
      title: "Busy Mom of Two",
      review:
        "Slimvera has been a total game changer for me. With two kids and zero time, I needed something to support my intermittent fasting. I've lost 7 pounds already without crash dieting, and I'm starting to feel like myself again.",
      timeAgo: "3 days ago",
    },
    {
      id: 2,
      photo: "/images/testimonial-2.png",
      name: "James T.",
      age: 52,
      title: "Back in Control",
      review:
        "I wasn't sure it would work, but I've seen a clear improvement in my energy, appetite control, and focus. I'm down two belt sizes in just a few weeks, and now I get through long office days without dragging!!",
      timeAgo: "1 week ago",
    },
    {
      id: 3,
      photo: "/images/testimonial-3.png",
      name: "Aisha M.",
      age: 38,
      title: "Last Few Kilos",
      review:
        "Give it a go! I was eating clean, staying active, but those last few kilos just wouldn't go, ugh. I felt stuck. Slimvera surprisingly gave me that final push. Now the scale's finally moving again, and I actually feel like I'm gonna hit my goal.",
      timeAgo: "2 weeks ago",
    },
  ];

  return (
    <div className="box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-center pb-0 pt-16 md:pt-32 px-6 md:px-8 relative w-full">
      <div className="box-border content-stretch flex flex-col gap-12 md:gap-16 items-center justify-center p-0 relative shrink-0 w-full max-w-[1400px]">
        {/* Title Section */}
        <div className="box-border content-stretch flex flex-col gap-6 md:gap-8 items-center justify-start p-0 relative shrink-0 text-[#274348] text-center w-full">
          <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-3xl md:text-[48px] tracking-tight md:tracking-[-0.48px] w-full max-w-[1240px]">
            <p className="block leading-normal">Core Community</p>
          </div>
          <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-sm md:text-[16px] w-full max-w-[800px]">
            <p className="block leading-[1.5]">
              The HealthyCore community is the heartbeat of our brand. You
              inspire us to keep raising the bar and deliver results that last.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-6 md:gap-10 items-center justify-center p-0 relative shrink-0 w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="basis-0 bg-[#fbfaf7] box-border content-stretch flex flex-col gap-6 md:gap-8 grow items-start justify-center min-h-px min-w-px p-6 md:p-[40px] relative shrink-0 w-full lg:w-auto rounded-lg"
            >
              {/* Header Row - Stars and Time */}
              <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
                <div className="h-5 relative shrink-0 w-[108px]">
                  <img
                    alt="5 stars rating"
                    className="block max-w-none w-full h-full"
                    src="/images/stars.svg"
                  />
                </div>
                <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#a4b4ba] text-sm md:text-[14px] text-left text-nowrap">
                  <p className="block leading-[1.1] whitespace-pre">
                    {testimonial.timeAgo}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 text-[#274348] text-left w-full">
                <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-base md:text-[18px] w-full">
                  <p className="block leading-[1.5]">{testimonial.title}</p>
                </div>
                <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-sm md:text-[16px] w-full">
                  <p className="block leading-[1.5]">"{testimonial.review}"</p>
                </div>
              </div>

              {/* Author */}
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                <div
                  className="bg-center bg-cover bg-no-repeat rounded-[20px] shrink-0 w-10 h-10"
                  style={{ backgroundImage: `url('${testimonial.photo}')` }}
                />
                <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left text-nowrap">
                  <p className="block leading-[1.1] whitespace-pre">
                    – {testimonial.name}, {testimonial.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
