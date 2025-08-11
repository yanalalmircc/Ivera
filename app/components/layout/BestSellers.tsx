"use client";
import Link from "next/link";
import { products } from "@lib/data";

export const BestSellers = ({ isHomePage }: { isHomePage?: boolean }) => {
  // Get top 2 products
  const topProducts = products.slice(0, 2);

  const handleAddToCart = (productId: number) => {
    // TODO: Add product to cart functionality
    console.log(`Add product ${productId} to cart`);
  };

  return (
    <div className="box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-center pb-16 md:pb-32 pt-12 md:pt-24 px-6 md:px-10 relative w-full">
      <div
        className={`box-border content-stretch flex flex-col gap-8 md:gap-12 items-start justify-center p-0 relative shrink-0 w-full ${
          isHomePage ? "max-w-[1400px]" : "max-w-[1080px]"
        }`}
      >
        {/* Title Section */}
        <div className="box-border content-stretch flex flex-col md:flex-row gap-4 md:gap-5 items-start md:items-center justify-start p-0 relative shrink-0 w-full">
          <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-[#274348] text-3xl md:text-[48px] text-left tracking-tight md:tracking-[-0.48px]">
            <p className="block leading-[1.2] whitespace-pre">
              Our Bestsellers
            </p>
          </div>
          <div className="hidden md:block basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <img
                alt="separator"
                className="block max-w-none w-full h-full"
                src="/images/separator.svg"
              />
            </div>
          </div>
          <Link
            href="/products"
            className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#274348] text-sm md:text-[16px] text-left text-nowrap tracking-tight md:tracking-[-0.16px] cursor-pointer hover:text-[#19bf98] transition-colors duration-200"
          >
            <p className="block leading-[1.2] whitespace-pre">All Products</p>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="box-border content-stretch flex flex-col lg:flex-row gap-8 lg:gap-10 items-start justify-start p-0 relative shrink-0 w-full">
          {topProducts.map((product: any) => (
            <div
              key={product.id}
              className="basis-0 box-border content-stretch flex flex-col lg:flex-row grow items-start justify-start min-h-px min-w-px p-0 relative self-stretch shrink-0 w-full lg:w-auto"
            >
              {/* Product Image */}
              <Link
                href={`/products/${product.id}`}
                className="bg-[#fbfaf7] bg-center bg-cover bg-no-repeat shrink-0 w-full lg:w-80 h-64 lg:h-80 cursor-pointer hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundImage: `url('${product.image}')` }}
              />

              {/* Product Description */}
              <div className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-between min-h-px min-w-px p-6 md:p-[40px] relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                  {/* Product Name */}
                  <Link
                    href={`/products/${product.id}`}
                    className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#274348] text-xl md:text-[24px] text-left tracking-tight md:tracking-[-0.24px] w-full cursor-pointer hover:text-[#19bf98] transition-colors duration-200"
                  >
                    <p className="block leading-[1.5]">{product.name}</p>
                  </Link>

                  {/* Price Section */}
                  <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0">
                    <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#19bf98] text-xl md:text-[24px] text-left text-nowrap tracking-tight md:tracking-[-0.24px]">
                      <p className="block leading-[1.5] whitespace-pre">
                        ${product.price}
                      </p>
                    </div>
                    {product.oldPrice && (
                      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
                        <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#a4b4ba] text-sm md:text-[16px] text-left text-nowrap tracking-tight md:tracking-[-0.16px]">
                          <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] whitespace-pre">
                            ${product.oldPrice}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div
                  className={`box-border content-stretch flex flex-row gap-2 items-center justify-center pl-4 pr-5 py-3 relative rounded-[999px] shrink-0 cursor-pointer text-[#274348]  hover:bg-[#274348] hover:text-white transition-all duration-200 border border-[#274348] border-solid ${
                    isHomePage ? "bg-transparent" : "bg-white"
                  }`}
                  onClick={() => handleAddToCart(product.id)}
                >
                  <div className="overflow-clip relative shrink-0 w-6 h-6">
                    <div className="absolute inset-[16.667%]">
                      <img
                        alt="plus icon"
                        className="block max-w-none w-full h-full"
                        src="/images/plus-icon.svg"
                      />
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center px-0 py-[0.5px] relative shrink-0">
                    <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px] uppercase">
                      <p className="block leading-[1.2] whitespace-pre">
                        Add to cart
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Discount Badge - Only show for products with oldPrice */}
              {product.oldPrice && (
                <div className="absolute bg-[#d44646] box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-5 px-3 py-2 rounded-2xl top-5">
                  <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#ffffff] text-xs md:text-[12px] text-left text-nowrap tracking-tight md:tracking-[-0.12px]">
                    <p className="block leading-none whitespace-pre">30% OFF</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
