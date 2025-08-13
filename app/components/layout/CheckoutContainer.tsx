"use client";
import { useState } from "react";
import { ShippingForm } from "./ShippingForm";
import { PaymentForm } from "./PaymentForm";
import { TrustIndicators } from "./TrustIndicators";
import { Edit } from "@icons";

interface ShippingFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  postcode: string;
  city: string;
  country: string;
  phone: string;
}

interface PaymentFormData {
  paymentMethod: "creditCard" | "googlePay" | "paypal" | "klarna";
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cvc?: string;
}

export const CheckoutContainer = () => {
  const [shippingData, setShippingData] = useState<ShippingFormData | null>(
    null
  );
  const [paymentData, setPaymentData] = useState<PaymentFormData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  console.log("Shipping data:", shippingData);
  console.log("Payment data:", paymentData);
  const handleShippingSubmit = (data: ShippingFormData) => {
    setShippingData(data);
    console.log("Shipping data:", data);
    // You could also show a success message or move to next step
  };

  const handlePaymentSubmit = async (data: PaymentFormData) => {
    if (!shippingData) {
      alert("Please complete shipping information first");
      return;
    }

    setPaymentData(data);
    console.log("Payment data:", data);
    setIsProcessing(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Payment data:", data);
      console.log("Complete checkout data:", {
        shipping: shippingData,
        payment: data,
      });

      // Here you would typically send the data to your backend
      alert("Order placed successfully! Thank you for your purchase.");
    } catch (error) {
      console.error("Payment error:", error);
      alert("There was an error processing your payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[1080px]">
      {/* Title and Edit Order Link */}
      <div className="box-border content-stretch flex flex-row gap-5 items-center justify-center pb-10 pt-0 px-0 relative shrink-0 w-full">
        <div className="basis-0 font-['Epilogue:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#274348] text-3xl md:text-[40px] text-left tracking-tight md:tracking-[-0.4px]">
          <p className="block leading-[1.2]">Checkout</p>
        </div>
        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center p-0 relative shrink-0">
          <div className="relative shrink-0 size-4 text-[#a4b4ba]">
            <Edit />
          </div>
          <div className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#a4b4ba] text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px] uppercase">
            <p className="block leading-[1.2] whitespace-pre">Edit order</p>
          </div>
        </div>
      </div>

      {/* Main Checkout Forms */}
      <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0 w-full">
        {/* Left Column - Shipping Form */}
        <ShippingForm onSubmit={handleShippingSubmit} />

        {/* Right Column - Payment Form */}
        <PaymentForm onSubmit={handlePaymentSubmit} />
      </div>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Processing Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#19bf98] mx-auto mb-4"></div>
            <h3 className="text-lg font-bold text-[#274348] mb-2">
              Processing Your Order
            </h3>
            <p className="text-[#a4b4ba]">
              Please wait while we process your payment...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
