export const Banner = () => {
  return (
    <div className="bg-[#274348] box-border content-stretch flex flex-row gap-3 items-center justify-center px-2 py-3 relative w-full h-full">
      <div className="h-3.5 relative shrink-0 w-[21.771px]">
        <div className="absolute bottom-0 left-0 right-[-0.84%] top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="14"
            viewBox="0 0 23 14"
            fill="none"
          >
            <path
              d="M15.4603 0C15.8774 0 16.2761 0.173842 16.5599 0.479492L21.6664 5.97949C22.2008 6.55501 22.2008 7.44499 21.6664 8.02051L16.5599 13.5205C16.2761 13.8262 15.8774 14 15.4603 14H1.61462C0.786197 14 0.114624 13.3284 0.114624 12.5V1.5C0.114624 0.671573 0.786197 0 1.61462 0H15.4603ZM16.1146 5C15.0101 5 14.1146 5.89543 14.1146 7C14.1146 8.10457 15.0101 9 16.1146 9C17.2192 9 18.1146 8.10457 18.1146 7C18.1146 5.89543 17.2192 5 16.1146 5Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <button className="[white-space-collapse:collapse] block cursor-pointer font-['DM_Sans:SemiBold',_sans-serif] font-semibold leading-none relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font]">
            Special Offer -30% OFF
          </span>
          <span>{` Only Today!`}</span>
        </p>
      </button>
    </div>
  );
};
