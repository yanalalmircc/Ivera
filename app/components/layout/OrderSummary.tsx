"use client";

import Link from "next/link";

interface OrderSummaryProps {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
}

export const OrderSummary = ({
  subtotal,
  discount,
  shipping,
  tax,
  total,
}: OrderSummaryProps) => {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-center p-0 relative shrink-0 w-full lg:w-[350px]">
      <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-3 items-start justify-start p-6 md:p-[32px] relative shrink-0 w-full rounded-lg">
        {/* Title */}
        <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center pb-5 pt-0 px-0 relative shrink-0 w-full border-b border-[#d0dfe5] border-solid">
          <div className="font-['Epilogue:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#274348] text-xl md:text-[24px] text-left tracking-tight md:tracking-[-0.24px] w-full">
            <p className="block leading-[1.2]">Order summary</p>
          </div>
        </div>

        {/* Summary List */}
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-0 py-3 relative shrink-0 w-full">
          {/* Subtotal */}
          <div className="box-border content-stretch flex flex-row font-['DM_Sans:Regular',_sans-serif] font-normal items-center justify-center leading-[0] pb-3 pt-0 px-0 relative shrink-0 text-[#274348] text-base md:text-[16px] tracking-tight md:tracking-[-0.16px] w-full">
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 text-left">
              <p className="block leading-[1.2]">Subtotal</p>
            </div>
            <div className="relative shrink-0 text-nowrap text-right">
              <p className="block leading-[1.2] whitespace-pre">
                ${subtotal.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Discount */}
          {discount > 0 && (
            <div className="box-border content-stretch flex flex-row font-['DM_Sans:Regular',_sans-serif] font-normal h-[31px] items-center justify-center leading-[0] pb-3 pt-0 px-0 relative shrink-0 text-base md:text-[16px] tracking-tight md:tracking-[-0.16px] w-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0 text-[#274348] text-left">
                <p className="block leading-[1.2]">Discount</p>
              </div>
              <div className="relative shrink-0 text-[#d44646] text-nowrap text-right">
                <p className="block leading-[1.2] whitespace-pre">
                  -${discount.toFixed(2)}
                </p>
              </div>
            </div>
          )}

          {/* Shipping */}
          <div className="box-border content-stretch flex flex-row font-['DM_Sans:Regular',_sans-serif] font-normal h-[31px] items-center justify-center leading-[0] pb-3 pt-0 px-0 relative shrink-0 text-[#274348] text-base md:text-[16px] tracking-tight md:tracking-[-0.16px] w-full">
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 text-left">
              <p className="block leading-[1.2]">Shipping</p>
            </div>
            <div className="relative shrink-0 text-nowrap text-right">
              <p className="block leading-[1.2] whitespace-pre">
                ${shipping.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Taxes */}
          <div className="box-border content-stretch flex flex-row font-['DM_Sans:Regular',_sans-serif] font-normal items-center justify-center leading-[0] p-0 relative shrink-0 text-[#274348] text-base md:text-[16px] tracking-tight md:tracking-[-0.16px] w-full">
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0 text-left">
              <p className="block leading-[1.2]">Taxes (20%)</p>
            </div>
            <div className="relative shrink-0 text-nowrap text-right">
              <p className="block leading-[1.2] whitespace-pre">
                ${tax.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Promo Code */}
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-2 pt-0 px-0 relative shrink-0 w-full">
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-start p-3 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
            <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start leading-[0] min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-base md:text-[16px]">
              <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center min-h-px min-w-px relative shrink-0 text-[#a4b4ba] text-left">
                <p className="block leading-[1.4]">Add promo code</p>
              </div>
              <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#19bf98] text-nowrap text-right cursor-pointer hover:text-[#15a085] transition-colors duration-200">
                <p className="block leading-[1.4] whitespace-pre">Apply</p>
              </div>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="box-border content-stretch flex flex-row items-center justify-center px-0 py-4 relative shrink-0 w-full border-t border-[#d0dfe5] border-solid">
          <div className="basis-0 font-['DM_Sans:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#274348] text-lg md:text-[20px] text-left tracking-tight md:tracking-[-0.2px]">
            <p className="block leading-[1.2]">Total:</p>
          </div>
          <div className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#274348] text-lg md:text-[20px] text-nowrap text-right tracking-tight md:tracking-[-0.2px]">
            <p className="block leading-[1.2] whitespace-pre">
              ${total.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Checkout Button */}
        <Link href="/checkout">
          <button className="bg-[#19bf98] box-border content-stretch flex flex-row gap-3 items-center justify-center px-8 py-3 relative rounded-[999px] shrink-0 w-full cursor-pointer hover:bg-[#15a085] transition-colors duration-200">
            <div className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center px-0 py-[0.5px] relative shrink-0">
              <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-base md:text-[16px] text-left text-nowrap tracking-tight md:tracking-[-0.16px] uppercase">
                <p className="block leading-[1.2] whitespace-pre">
                  Proceed to checkout
                </p>
              </div>
            </div>
          </button>
        </Link>

        {/* Separator */}
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#a4b4ba] text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px] uppercase">
            <p className="block leading-[1.2] whitespace-pre">or</p>
          </div>
        </div>

        {/* PayPal Button */}
        <button className="bg-[#ffc739] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-8 py-2 relative rounded-[999px] shrink-0 w-full cursor-pointer hover:bg-[#e6b333] transition-colors duration-200">
          <div className="bg-center bg-contain bg-no-repeat h-7 shrink-0 w-[67px]">
            <span className="text-black font-bold text-lg">PayPal</span>
          </div>
        </button>

        {/* Apple Pay Button */}
        <button className="bg-[#000000] box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-8 py-3 relative rounded-[999px] shrink-0 w-full cursor-pointer hover:bg-[#333333] transition-colors duration-200">
          <div className="h-5 relative shrink-0 w-[50px] text-white font-bold text-lg">
            Apple Pay
          </div>
        </button>
      </div>
    </div>
  );
};
