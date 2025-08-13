export const Cart = () => {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative rounded-[40px] w-full h-full">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-none place-items-start relative shrink-0">
        <div className="[grid-area:1_/_1] bg-[#274348] h-3.5 ml-0 mt-1.5 rounded-bl-[3px] rounded-br-[3px] w-4" />
        <div className="[grid-area:1_/_1] h-3.5 ml-1 mt-0 relative rounded-[10px] w-2">
          <div
            aria-hidden="true"
            className="absolute border-[#274348] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]"
          />
        </div>
      </div>
      <div className="absolute bg-[#19bf98] box-border content-stretch flex flex-col gap-2.5 items-center justify-center left-[31px] p-0 rounded-[20px] w-5 h-5 top-[-2.5px]">
        <div className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-none relative shrink-0 text-[#ffffff] text-[12px] text-center uppercase w-full">
          <p className="block leading-normal">3</p>
        </div>
      </div>
    </div>
  );
};
