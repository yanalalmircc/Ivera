"use client";
import { Badge, Lock, Shield } from "@icons";

export const TrustIndicators = () => {
  return (
    <div className="box-border content-stretch flex flex-row gap-8 items-start justify-center pb-0 pt-14 px-0 relative shrink-0 w-full">
      {/* Money-back Guarantee */}
      <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-start justify-start min-h-px min-w-px px-0 py-6 relative shrink-0">
        <div className="relative shrink-0 size-[50px] text-[#19bf98] text-2xl">
          <Badge />
        </div>
        <div className="basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#274348] text-left">
          <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-lg tracking-tight md:tracking-[-0.18px] w-full">
            <p className="block leading-[1.2]">
              Money-back <br aria-hidden="true" /> Guarantee
            </p>
          </div>
          <div className="font-['DM_Sans:Regular',_sans-serif] font-normal opacity-50 relative shrink-0 text-sm tracking-tight md:tracking-[-0.14px] w-full">
            <p className="block leading-[1.4]">
              Shop with confidence — if you're not satisfied, we'll refund your
              purchase. No hassle.
            </p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="relative self-stretch shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0 w-px h-full bg-[#d0dfe5]"></div>
      </div>

      {/* Encrypted Transaction */}
      <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-start justify-start min-h-px min-w-px px-0 py-6 relative shrink-0">
        <div className="h-[50px] relative shrink-0 w-[39.583px] text-[#19bf98] text-2xl">
          <Lock />
        </div>
        <div className="basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#274348] text-left">
          <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-lg tracking-tight md:tracking-[-0.18px] w-full">
            <p className="block leading-[1.2]">
              Encrypted <br aria-hidden="true" /> Transaction
            </p>
          </div>
          <div className="font-['DM_Sans:Regular',_sans-serif] font-normal opacity-50 relative shrink-0 text-sm tracking-tight md:tracking-[-0.14px] w-full">
            <p className="block leading-[1.4]">
              Your data is protected with advanced encryption to ensure your
              personal information stays safe.
            </p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="relative self-stretch shrink-0 w-0">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0 w-px h-full bg-[#d0dfe5]"></div>
      </div>

      {/* Secure Payments Verified */}
      <div className="basis-0 box-border content-stretch flex flex-row gap-6 grow items-start justify-start min-h-px min-w-px px-0 py-6 relative shrink-0">
        <div className="h-[50px] relative shrink-0 w-[43.043px] text-[#19bf98] text-2xl">
          <Shield />
        </div>
        <div className="basis-0 box-border content-stretch flex flex-col gap-3 grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[#274348] text-left">
          <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-lg tracking-tight md:tracking-[-0.18px] w-full">
            <p className="block leading-[1.2]">
              Secure <br aria-hidden="true" /> Payments Verified
            </p>
          </div>
          <div className="font-['DM_Sans:Regular',_sans-serif] font-normal opacity-50 relative shrink-0 text-sm tracking-tight md:tracking-[-0.14px] w-full">
            <p className="block leading-[1.4]">
              All payments are processed through trusted, PCI-compliant systems
              for complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
