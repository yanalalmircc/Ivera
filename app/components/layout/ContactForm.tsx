"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  orderId: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const subjectOptions = [
  "Delivery",
  "Product Quality",
  "Order Issues",
  "Returns & Refunds",
  "General Inquiry",
  "Technical Support",
  "Billing",
  "Other",
];

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    setShowSuccess(true);
    reset();
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-neutral-50 box-border content-stretch flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-center p-8 md:p-[48px] relative shrink-0 w-full rounded-lg">
      {/* Left Column - Form Fields */}
      <div className="basis-0 box-border content-stretch flex flex-col gap-4 md:gap-5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full lg:w-auto">
        
        {/* First Name Field */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <label className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            First name
          </label>
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid focus-within:border-[#19bf98] transition-colors duration-200">
            <input
              type="text"
              placeholder="Your first name"
              className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#274348] text-base md:text-[20px] text-left tracking-tight md:tracking-[-0.2px] bg-transparent border-none outline-none placeholder:text-[#a4b4ba]"
              {...register("firstName")}
            />
          </div>
          {errors.firstName && (
            <span className="text-red-500 text-sm">{errors.firstName.message}</span>
          )}
        </div>

        {/* Last Name Field */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <label className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            Last name
          </label>
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid focus-within:border-[#19bf98] transition-colors duration-200">
            <input
              type="text"
              placeholder="Your last name"
              className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#274348] text-base md:text-[20px] text-left tracking-tight md:tracking-[-0.2px] bg-transparent border-none outline-none placeholder:text-[#a4b4ba]"
              {...register("lastName")}
            />
          </div>
          {errors.lastName && (
            <span className="text-red-500 text-sm">{errors.lastName.message}</span>
          )}
        </div>

        {/* Order ID Field */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <label className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            Order ID <span className="text-[#a4b4ba]">(Optional)</span>
          </label>
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid focus-within:border-[#19bf98] transition-colors duration-200">
            <input
              type="text"
              placeholder="Your order ID"
              className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#274348] text-base md:text-[20px] text-left tracking-tight md:tracking-[-0.2px] bg-transparent border-none outline-none placeholder:text-[#a4b4ba]"
              {...register("orderId")}
            />
          </div>
        </div>

        {/* Subject Field */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <label className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            Subject
          </label>
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 items-center justify-start p-4 relative shrink-0 w-full border border-[#d0dfe5] border-solid focus-within:border-[#19bf98] transition-colors duration-200">
            <select
              className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#274348] text-base md:text-[20px] text-left tracking-tight md:tracking-[-0.2px] bg-transparent border-none outline-none cursor-pointer"
              {...register("subject")}
            >
              <option value="" className="text-[#a4b4ba]">Select a subject</option>
              {subjectOptions.map((option) => (
                <option key={option} value={option} className="text-[#274348]">
                  {option}
                </option>
              ))}
            </select>
            <div className="overflow-clip relative shrink-0 w-6 h-6">
              <div className="absolute inset-[37.49%_26.7%_35.07%_26.74%]">
                <img
                  alt="chevron down"
                  className="block max-w-none w-full h-full"
                  src="/images/chevron-down.svg"
                />
              </div>
            </div>
          </div>
          {errors.subject && (
            <span className="text-red-500 text-sm">{errors.subject.message}</span>
          )}
        </div>
      </div>

      {/* Right Column - Message and Submit */}
      <div className="basis-0 box-border content-stretch flex flex-col gap-6 md:gap-10 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0 w-full lg:w-auto">
        
        {/* Message Field */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
          <label className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] w-full">
            Your message
          </label>
          <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-3 h-[360px] items-start justify-start p-6 relative shrink-0 w-full border border-[#d0dfe5] border-solid focus-within:border-[#19bf98] transition-colors duration-200">
            <textarea
              placeholder="What is your question?"
              className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-full items-start justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#274348] text-base md:text-[20px] text-left tracking-tight md:tracking-[-0.2px] bg-transparent border-none outline-none placeholder:text-[#a4b4ba] resize-none"
              rows={15}
              {...register("message")}
            />
          </div>
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="bg-[#19bf98] box-border content-stretch flex flex-row gap-3 items-center justify-center pl-8 pr-6 py-4 relative rounded-[999px] shrink-0 cursor-pointer hover:bg-[#15a085] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <div className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center px-0 py-[0.5px] relative shrink-0">
            <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#ffffff] text-base md:text-[16px] text-left text-nowrap tracking-tight md:tracking-[-0.16px] uppercase">
              {isSubmitting ? "Sending..." : "Submit"}
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 w-6 h-6">
            <div className="absolute flex inset-[18.36%_16.67%_18.41%_18.41%] items-center justify-center">
              <div className="flex-none h-[15.175px] rotate-[180deg] w-[15.582px]">
                <div className="relative w-full h-full">
                  <img
                    alt="arrow right"
                    className="block max-w-none w-full h-full"
                    src="/images/arrow-right.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in slide-in-from-right duration-300">
          <p className="font-medium">Message sent successfully!</p>
        </div>
      )}
    </div>
  );
};
