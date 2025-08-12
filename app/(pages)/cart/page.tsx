import { CartContainer } from "@components";

export default function CartPage() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full h-[calc(100vh-241px)]">
      {/* Content Section */}
      <div className="box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-start pb-16 md:pb-24 pt-8 md:pt-12 px-6 md:px-10 relative shrink-0 w-full min-h-[880px]">
        <CartContainer />
      </div>
    </div>
  );
}
