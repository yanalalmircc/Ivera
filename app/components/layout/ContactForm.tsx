"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ArrowRight } from "@icons";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  orderId: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
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
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", data);
    setShowSuccess(true);
    reset();

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="bg-gray-50 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Form Fields */}
          <div className="space-y-6">
            {/* First Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                placeholder="Your first name"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                {...register("firstName")}
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            {/* Last Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                placeholder="Your last name"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                {...register("lastName")}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>

            {/* Order ID Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Order ID{" "}
                <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Your order ID"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                {...register("orderId")}
              />
            </div>

            {/* Subject Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors appearance-none cursor-pointer"
                  {...register("subject")}
                >
                  <option value="">Select a subject</option>
                  {subjectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {errors.subject && (
                <span className="text-red-500 text-sm">
                  {errors.subject.message}
                </span>
              )}
            </div>
          </div>

          {/* Right Column - Message and Submit */}
          <div className="space-y-6">
            {/* Message Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Your message
              </label>
              <textarea
                placeholder="What is your question?"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none h-[360px]"
                {...register("message")}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-teal-500 hover:bg-teal-600 disabled:bg-teal-400 text-white font-medium px-8 py-3 flex items-center gap-3 transition-colors disabled:cursor-not-allowed rounded-full"
              >
                <span className="uppercase tracking-wide">
                  {isSubmitting ? "Sending..." : "Submit"}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 shadow-lg z-50">
          <p className="font-medium">Message sent successfully!</p>
        </div>
      )}
    </form>
  );
};
