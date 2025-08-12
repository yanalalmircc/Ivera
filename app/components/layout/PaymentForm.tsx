"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Amex, MasterCard, VisaCard, GPay, Paypal, Klarna } from "@icons";

const paymentSchema = z.object({
  paymentMethod: z.enum(["creditCard", "googlePay", "paypal", "klarna"]),
  cardNumber: z.string().optional(),
  cardholderName: z.string().optional(),
  expiryDate: z.string().optional(),
  cvc: z.string().optional(),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
}

export const PaymentForm = ({ onSubmit }: PaymentFormProps) => {
  const [selectedMethod, setSelectedMethod] =
    useState<PaymentFormData["paymentMethod"]>("creditCard");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      paymentMethod: "creditCard",
      cardNumber: "",
      cardholderName: "",
      expiryDate: "",
      cvc: "",
    },
  });

  const watchedPaymentMethod = watch("paymentMethod");

  const handlePaymentMethodChange = (
    method: PaymentFormData["paymentMethod"]
  ) => {
    setSelectedMethod(method);
    setValue("paymentMethod", method);
  };

  const onSubmitForm = (data: PaymentFormData) => {
    // Validate credit card fields if credit card is selected
    if (data.paymentMethod === "creditCard") {
      if (
        !data.cardNumber ||
        !data.cardholderName ||
        !data.expiryDate ||
        !data.cvc
      ) {
        return;
      }
    }
    onSubmit(data);
  };

  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      {/* Title Section */}
      <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-3 items-start justify-start p-6 md:p-[32px] relative shrink-0 w-full rounded-lg">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full border-b border-[#d0dfe5] border-solid">
          <div className="font-['Epilogue:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#274348] text-xl md:text-[24px] text-left tracking-tight md:tracking-[-0.24px] w-full">
            <p className="block leading-[1.2]">2. Payment method</p>
          </div>
        </div>
      </div>

      {/* Credit Card Payment Method */}
      <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-3 items-start justify-start p-6 md:p-[32px] relative shrink-0 w-full rounded-lg">
        <div className="box-border content-stretch flex flex-row gap-5 items-center justify-center pb-3 pt-0 px-0 relative shrink-0 w-full border-b border-[#d0dfe5] border-solid">
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("creditCard")}
            className="block cursor-pointer overflow-visible relative shrink-0 size-6"
          >
            <div
              className={`absolute inset-0 rounded-[30px] ${
                selectedMethod === "creditCard"
                  ? "bg-[#19bf98]"
                  : "bg-[#ffffff]"
              }`}
            >
              <div
                className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[30px] ${
                  selectedMethod === "creditCard"
                    ? "border-[#19bf98]"
                    : "border-[#a4b4ba]"
                }`}
              />
            </div>
            {selectedMethod === "creditCard" && (
              <div className="absolute left-1/2 size-3.5 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white">
                ✓
              </div>
            )}
          </button>
          <div className="basis-0 font-['Epilogue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#274348] text-lg md:text-[18px] text-left tracking-tight md:tracking-[-0.18px]">
            <p className="block leading-[1.2]">Credit card</p>
          </div>
          <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
            <Amex className="h-[30px] w-[42px]" />
            <MasterCard className="h-[30px] w-[42px]" />
            <VisaCard className="h-[30px] w-[42px]" />
          </div>
        </div>

        {selectedMethod === "creditCard" && (
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
          >
            {/* Card Number */}
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left w-full">
                <p className="block leading-[1.2]">Card number</p>
              </div>
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
                <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0">
                  <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#a4b4ba] text-lg md:text-[20px] text-left tracking-[1px]">
                    <p className="block leading-[1.2]">____ ____ ____ ____</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cardholder Name */}
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left w-full">
                <p className="block leading-[1.2]">Cardholder name</p>
              </div>
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
                <input
                  {...register("cardholderName")}
                  type="text"
                  className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#274348] text-lg md:text-[20px] text-left bg-transparent border-none outline-none w-full"
                  placeholder="Enter cardholder name"
                />
              </div>
            </div>

            {/* Expiry Date and CVC */}
            <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start pb-3 pt-0 px-0 relative shrink-0 w-full">
              <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
                  <p className="block leading-[1.2]">Expiry date</p>
                </div>
                <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
                  <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0">
                    <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#a4b4ba] text-lg md:text-[20px] text-left">
                      <p className="block leading-[1.2]">MM / YY</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
                  <p className="block leading-[1.2]">CVC</p>
                </div>
                <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 h-14 items-center justify-start px-4 py-3 relative shrink-0 w-full border border-[#d0dfe5] border-solid rounded">
                  <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0">
                    <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#a4b4ba] text-lg md:text-[20px] text-left tracking-[1px]">
                      <p className="block leading-[1.2]">___</p>
                    </div>
                  </div>
                  <div className="h-[30px] relative shrink-0 w-[45px] text-[#a4b4ba] text-xs">
                    CVV
                  </div>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#19bf98] box-border content-stretch flex flex-row gap-3 items-center justify-center px-8 py-4 relative rounded-[999px] shrink-0 w-full cursor-pointer hover:bg-[#15a085] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center px-0 py-[0.5px] relative shrink-0">
                <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-lg md:text-[20px] text-left text-nowrap tracking-tight md:tracking-[-0.2px] uppercase">
                  <p className="block leading-[1.2] whitespace-pre">
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </p>
                </div>
              </div>
            </button>
          </form>
        )}
      </div>

      {/* Google Pay Payment Method */}
      <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-3 items-start justify-start p-6 md:p-[32px] relative shrink-0 w-full rounded-lg">
        <div className="box-border content-stretch flex flex-row gap-5 items-center justify-center p-0 relative shrink-0 w-full border-b border-[#d0dfe5] border-solid">
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("googlePay")}
            className="block cursor-pointer overflow-visible relative shrink-0 size-6"
          >
            <div
              className={`absolute inset-0 rounded-[30px] ${
                selectedMethod === "googlePay" ? "bg-[#19bf98]" : "bg-[#ffffff]"
              }`}
            >
              <div
                className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[30px] ${
                  selectedMethod === "googlePay"
                    ? "border-[#19bf98]"
                    : "border-[#a4b4ba]"
                }`}
              />
            </div>
            {selectedMethod === "googlePay" && (
              <div className="absolute left-1/2 size-3.5 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white">
                ✓
              </div>
            )}
          </button>
          <div className="basis-0 font-['Epilogue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#274348] text-lg md:text-[18px] text-left tracking-tight md:tracking-[-0.18px]">
            <p className="block leading-[1.2]">Google Pay</p>
          </div>
          <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
            <GPay className="h-[30px] w-[42px]" />
          </div>
        </div>
      </div>

      {/* PayPal Payment Method */}
      <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-3 items-start justify-start p-6 md:p-[32px] relative shrink-0 w-full rounded-lg">
        <div className="box-border content-stretch flex flex-row gap-5 items-center justify-center p-0 relative shrink-0 w-full border-b border-[#d0dfe5] border-solid">
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("paypal")}
            className="block cursor-pointer overflow-visible relative shrink-0 size-6"
          >
            <div
              className={`absolute inset-0 rounded-[30px] ${
                selectedMethod === "paypal" ? "bg-[#19bf98]" : "bg-[#ffffff]"
              }`}
            >
              <div
                className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[30px] ${
                  selectedMethod === "paypal"
                    ? "border-[#19bf98]"
                    : "border-[#a4b4ba]"
                }`}
              />
            </div>
            {selectedMethod === "paypal" && (
              <div className="absolute left-1/2 size-3.5 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white">
                ✓
              </div>
            )}
          </button>
          <div className="basis-0 font-['Epilogue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#274348] text-lg md:text-[18px] text-left tracking-tight md:tracking-[-0.18px]">
            <p className="block leading-[1.2]">PayPal</p>
          </div>
          <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
            <Paypal className="h-[30px] w-[42px]" />
          </div>
        </div>
      </div>

      {/* Klarna Payment Method */}
      <div className="bg-neutral-50 box-border content-stretch flex flex-col gap-3 items-start justify-start p-6 md:p-[32px] relative shrink-0 w-full rounded-lg">
        <div className="box-border content-stretch flex flex-row gap-5 items-center justify-center p-0 relative shrink-0 w-full">
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("klarna")}
            className="block cursor-pointer overflow-visible relative shrink-0 size-6"
          >
            <div
              className={`absolute inset-0 rounded-[30px] ${
                selectedMethod === "klarna" ? "bg-[#19bf98]" : "bg-[#ffffff]"
              }`}
            >
              <div
                className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[30px] ${
                  selectedMethod === "klarna"
                    ? "border-[#19bf98]"
                    : "border-[#a4b4ba]"
                }`}
              />
            </div>
            {selectedMethod === "klarna" && (
              <div className="absolute left-1/2 size-3.5 top-1/2 translate-x-[-50%] translate-y-[-50%] text-white">
                ✓
              </div>
            )}
          </button>
          <div className="basis-0 box-border content-stretch flex flex-col gap-1.5 grow items-center justify-center leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-left">
            <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-[#274348] text-lg tracking-tight md:tracking-[-0.18px] w-full">
              <p className="leading-[1.2]">
                <span>Klarna</span>
                <span className="font-['Epilogue:Regular',_sans-serif] font-normal">
                  {" "}
                </span>
                <span className="font-['Epilogue:Regular',_sans-serif] font-normal text-[#274348]">
                  (Pay Later)
                </span>
              </p>
            </div>
            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#a4b4ba] text-sm tracking-tight md:tracking-[-0.14px] w-full">
              <p className="block leading-[1.2]">
                Pay now, within 30 days or in 3 installments.
              </p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
            <Klarna className="h-[30px] w-[42px]" />
          </div>
        </div>
      </div>

      {/* Hidden input for payment method */}
      <input type="hidden" {...register("paymentMethod")} />
    </div>
  );
};
