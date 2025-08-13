"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LockSmall, ChevronRight } from "@icons";

const shippingSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  postcode: z.string().min(3, "Postcode must be at least 3 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
});

type ShippingFormData = z.infer<typeof shippingSchema>;

interface ShippingFormProps {
  onSubmit: (data: ShippingFormData) => void;
  initialData?: Partial<ShippingFormData>;
}

export const ShippingForm = ({ onSubmit, initialData }: ShippingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: initialData || {
      email: "johndoe1985@gmail.com",
      firstName: "",
      lastName: "",
      address: "",
      postcode: "3242CW",
      city: "",
      country: "United States (US)",
      phone: "(123) 456 7890",
    },
  });

  const watchedPostcode = watch("postcode");
  const isPostcodeValid = watchedPostcode && watchedPostcode.length >= 3;

  return (
    <div className="basis-0 bg-neutral-50 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-6 md:p-[32px] relative shrink-0 rounded-lg">
      <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center pb-8 pt-0 px-0 relative shrink-0 w-full">
        <div className="font-['Epilogue:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#274348] text-xl md:text-[24px] text-left tracking-tight md:tracking-[-0.24px] w-full">
          <p className="block leading-[1.2]">1. Shipping information</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
      >
        {/* Email Address */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            <p className="block leading-[1.2]">Email address</p>
          </div>
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start pl-4 pr-3 py-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
            <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0">
              <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#274348] text-lg md:text-[20px] text-left">
                <p className="block leading-[1.2]">johndoe1985@gmail.com</p>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-6 text-[#19bf98]">
              ✓
            </div>
          </div>
        </div>

        {/* First Name and Last Name */}
        <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
              <p className="block leading-[1.2]">First name</p>
            </div>
            <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
              <input
                {...register("firstName")}
                type="text"
                className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#274348] text-lg md:text-[20px] text-left bg-transparent border-none outline-none w-full"
                placeholder="Enter your first name"
              />
            </div>
            {errors.firstName && (
              <p className="text-[#d44646] text-xs md:text-[12px] tracking-tight md:tracking-[-0.12px]">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
              <p className="block leading-[1.2]">Last name</p>
            </div>
            <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
              <input
                {...register("lastName")}
                type="text"
                className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#274348] text-lg md:text-[20px] text-left bg-transparent border-none outline-none w-full"
                placeholder="Enter your last name"
              />
            </div>
            {errors.lastName && (
              <p className="text-[#d44646] text-xs md:text-[12px] tracking-tight md:tracking-[-0.12px]">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            <p className="block leading-[1.2]">Address</p>
          </div>
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
            <input
              {...register("address")}
              type="text"
              className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#a4b4ba] text-lg md:text-[20px] text-left bg-transparent border-none outline-none w-full"
              placeholder="House number and street name"
            />
          </div>
          {errors.address && (
            <p className="text-[#d44646] text-xs md:text-[12px] tracking-tight md:tracking-[-0.12px]">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Postcode */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            <p className="block leading-[1.2]">Postcode/ZIP</p>
          </div>
          <div
            className={`bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start pl-4 pr-3 py-4 relative shrink-0 w-full border border-solid rounded ${
              watchedPostcode && watchedPostcode.length > 0
                ? isPostcodeValid
                  ? "border-[#19bf98]"
                  : "border-[#d44646]"
                : "border-[#d0dfe5]"
            }`}
          >
            <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0">
              <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#274348] text-lg md:text-[20px] text-left">
                <p className="block leading-[1.2]">3242CW</p>
              </div>
            </div>
            {watchedPostcode && watchedPostcode.length > 0 && (
              <div className="overflow-clip relative shrink-0 size-6">
                {isPostcodeValid ? (
                  <div className="text-[#19bf98]">✓</div>
                ) : (
                  <div className="text-[#d44646]">✕</div>
                )}
              </div>
            )}
            {watchedPostcode &&
              watchedPostcode.length > 0 &&
              !isPostcodeValid && (
                <div className="absolute inset-0 pointer-events-none shadow-[0px_-1px_0px_0px_inset_#d44646]"></div>
              )}
          </div>
          {watchedPostcode &&
            watchedPostcode.length > 0 &&
            !isPostcodeValid && (
              <p className="text-[#d44646] text-xs md:text-[12px] tracking-tight md:tracking-[-0.12px]">
                Invalid postcode
              </p>
            )}
          {errors.postcode && (
            <p className="text-[#d44646] text-xs md:text-[12px] tracking-tight md:tracking-[-0.12px]">
              {errors.postcode.message}
            </p>
          )}
        </div>

        {/* City */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            <p className="block leading-[1.2]">Town / City</p>
          </div>
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
            <input
              {...register("city")}
              type="text"
              className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#274348] text-lg md:text-[20px] text-left bg-transparent border-none outline-none w-full"
              placeholder="Enter your city"
            />
          </div>
          {errors.city && (
            <p className="text-[#d44646] text-xs md:text-[12px] tracking-tight md:tracking-[-0.12px]">
              {errors.city.message}
            </p>
          )}
        </div>

        {/* Country */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            <p className="block leading-[1.2]">Country/Region</p>
          </div>
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start pl-4 pr-3 py-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
            <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0">
              <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#274348] text-lg md:text-[20px] text-left">
                <p className="block leading-[1.2]">United States (US)</p>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-6 text-[#a4b4ba]">
              <ChevronRight className="rotate-90" />
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            <p className="block leading-[1.2]">Phone number</p>
          </div>
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 place-items-start relative">
                <div className="[grid-area:1_/_1] h-4 ml-0 relative w-6">
                  <div className="w-6 h-4 bg-[#a4b4ba] rounded text-white text-xs flex items-center justify-center">
                    🇺🇸
                  </div>
                </div>
              </div>
              <div className="[grid-area:1_/_1] flex h-[7px] items-center justify-center ml-[27px] mt-1 relative w-2">
                <div className="flex-none scale-y-[-100%]">
                  <div className="h-[7px] relative w-2">
                    <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
                      <ChevronRight className="w-2 h-[7px] text-[#a4b4ba] rotate-90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0">
              <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#a4b4ba] text-lg md:text-[20px] text-left">
                <p className="block leading-[1.2]">(123) 456 7890</p>
              </div>
            </div>
          </div>
          {errors.phone && (
            <p className="text-[#d44646] text-xs md:text-[12px] tracking-tight md:tracking-[-0.12px]">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Security Notice */}
        <div className="box-border content-stretch flex flex-row gap-2 items-end justify-start pb-0 pt-4 px-0 relative shrink-0 w-full">
          <div className="overflow-clip relative shrink-0 size-5 text-[#19bf98]">
            <LockSmall />
          </div>
          <div className="basis-0 flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#274348] text-base md:text-[16px] text-left tracking-tight md:tracking-[-0.16px]">
            <p className="block leading-[1.2]">
              Your Personal information is safe and encrypted
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
