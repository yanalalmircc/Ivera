import { CheckoutContainer } from "@components";

export default function CheckoutPage() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
      {/* Content Section */}
      <div className="box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-start min-h-[800px] pb-16 md:pb-24 pt-8 md:pt-12 px-6 md:px-10 relative shrink-0 w-full">
        <CheckoutContainer />
      </div>
    </div>
  );
}
