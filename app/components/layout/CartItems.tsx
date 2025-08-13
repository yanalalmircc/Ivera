"use client";
import { Plus, Minus } from "@icons";

interface CartItem {
  id: number;
  name: string;
  price: number;
  oldPrice?: number | null;
  image: string;
  quantity: number;
}

interface CartItemsProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export const CartItems = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: CartItemsProps) => {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full lg:w-auto">
      {/* Title */}
      <div className="box-border content-stretch flex flex-col gap-5 items-center justify-center pb-5 pt-0 px-0 relative shrink-0 w-full">
        <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-[#274348] text-3xl md:text-[40px] text-left tracking-tight md:tracking-[-0.4px] w-full">
          <p className="block leading-[1.2]">Your order</p>
        </div>
      </div>

      {/* Table Headers */}
      <div className="box-border content-stretch flex flex-row items-center justify-start px-0 py-3 relative shrink-0 w-full border-b border-[#d0dfe5] border-solid">
        <div className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#a4b4ba] text-sm md:text-[14px] text-left">
          <p className="block leading-[1.2]">Product</p>
        </div>
        <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#a4b4ba] text-sm md:text-[14px] text-center w-[110px]">
          <p className="block leading-[1.2]">Quantity</p>
        </div>
        <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#a4b4ba] text-sm md:text-[14px] text-right w-[130px]">
          <p className="block leading-[1.2]">Price</p>
        </div>
      </div>

      {/* Cart Items List */}
      <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start px-0 py-5 relative shrink-0 w-full">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="box-border content-stretch flex flex-row items-start justify-start pb-5 pt-0 px-0 relative shrink-0 w-full border-b border-[#d0dfe5] border-solid"
          >
            {/* Product Image */}
            <div
              className="bg-[#fbfaf7] bg-center bg-cover bg-no-repeat shrink-0 w-[120px] h-[120px] rounded-lg"
              style={{ backgroundImage: `url('${item.image}')` }}
            />

            {/* Product Description */}
            <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px px-4 py-0 relative self-stretch shrink-0">
              <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
                {/* Product Name */}
                <div className="font-['DM_Sans:Bold',_sans-serif] font-bold min-w-full relative shrink-0 text-[#274348] text-base md:text-[16px] text-left w-full">
                  <p className="block leading-[1.5]">{item.name}</p>
                </div>

                {/* Product Price */}
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0">
                  <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#19bf98] text-base md:text-[16px] text-left text-nowrap">
                    <p className="block leading-[1.5] whitespace-pre">
                      ${item.price}
                    </p>
                  </div>
                  {item.oldPrice && (
                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
                      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#a4b4ba] text-sm md:text-[14px] text-left text-nowrap">
                        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] whitespace-pre">
                          ${item.oldPrice}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start px-2 py-0 relative self-stretch shrink-0">
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1.5 relative rounded-[999px] shrink-0 border border-[#d0dfe5] border-solid">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="relative shrink-0 w-5 h-5 cursor-pointer hover:opacity-75 transition-opacity duration-200"
                >
                  <Minus />
                </button>
                <div className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center px-0 py-[0.5px] relative shrink-0">
                  <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-center tracking-tight md:tracking-[-0.14px] uppercase w-5">
                    <p className="block leading-[1.2]">{item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="relative shrink-0 w-5 h-5 cursor-pointer hover:opacity-75 transition-opacity duration-200"
                >
                  <Plus />
                </button>
              </div>

              {/* Remove Button */}
              <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center pb-0 pt-5 px-0 relative shrink-0">
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="h-[13px] relative shrink-0 w-3 text-[#a4b4ba] hover:text-[#d44646] transition-colors duration-200"
                >
                  ✕
                </button>
                <div className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#a4b4ba] text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px]">
                  <p className="block leading-[1.5] whitespace-pre">Remove</p>
                </div>
              </div>
            </div>

            {/* Total Price */}
            <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-end justify-start leading-[0] p-0 relative self-stretch shrink-0 text-right w-[130px]">
              <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#274348] text-base md:text-[16px] tracking-tight md:tracking-[-0.16px] w-full">
                <p className="block leading-[1.5]">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              {item.oldPrice && (
                <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#a4b4ba] text-sm md:text-[14px] w-full">
                  <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5]">
                    ${(item.oldPrice * item.quantity).toFixed(2)}
                  </p>
                </div>
              )}
            </div>

            {/* Discount Badge */}
            {item.oldPrice && (
              <div className="absolute bg-[#d44646] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-2.5 px-2 py-1 rounded-2xl top-2.5">
                <div className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#ffffff] text-xs md:text-[9px] text-left text-nowrap tracking-tight md:tracking-[-0.09px]">
                  <p className="block leading-none whitespace-pre">
                    {Math.round(
                      ((item.oldPrice - item.price) / item.oldPrice) * 100
                    )}
                    % OFF
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
