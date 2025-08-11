"use client";
import { useState } from "react";
import Link from "next/link";
import { products } from "@lib/data";
import { BestSellers } from "@components";
import { ChevronRight, Plus, Minus } from "@icons";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productId = parseInt(params.id);
  const product = products.find((p: any) => p.id === productId);

  if (!product) {
    return (
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-center p-8 relative w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#274348] mb-4">
            Product Not Found
          </h1>
          <p className="text-[#a4b4ba] mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link
            href="/products"
            className="bg-[#19bf98] text-white px-6 py-3 rounded-[999px] hover:bg-[#15a085] transition-colors duration-200"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // TODO: Add product to cart functionality
    console.log(`Add ${quantity} of product ${product.id} to cart`);
  };

  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
      {/* Content Section */}
      <div className="box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-center pb-16 md:pb-24 pt-8 md:pt-12 px-6 md:px-10 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col gap-8 md:gap-12 items-start justify-center p-0 relative shrink-0 w-full max-w-[1080px]">
          {/* Breadcrumbs */}
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-5 pt-0 px-0 relative shrink-0 w-full">
            <Link
              href="/"
              className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px] hover:text-[#19bf98] transition-colors duration-200"
            >
              <p className="block leading-[1.2] whitespace-pre">Home</p>
            </Link>
            <div className="opacity-50 overflow-clip relative shrink-0 w-4 h-4">
              <div className="absolute inset-[26.22%_33.69%_26.22%_36.64%]">
                <ChevronRight />
              </div>
            </div>
            <Link
              href="/products"
              className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px] hover:text-[#19bf98] transition-colors duration-200"
            >
              <p className="block leading-[1.2] whitespace-pre">Products</p>
            </Link>
            <div className="opacity-50 overflow-clip relative shrink-0 w-4 h-4">
              <div className="absolute inset-[26.22%_33.69%_26.22%_36.64%]">
                <ChevronRight />
              </div>
            </div>
            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal opacity-50 relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px]">
              <p className="block leading-[1.2] whitespace-pre">
                {product.name}
              </p>
            </div>
          </div>

          {/* Product Section */}
          <div className="box-border content-stretch flex flex-col lg:flex-row gap-8 md:gap-20 items-start justify-start p-0 relative shrink-0 w-full">
            {/* Product Images */}
            <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center p-0 relative shrink-0 w-full lg:w-auto">
              {/* Main Image */}
              <div
                className="bg-[#fbfaf7] bg-center bg-cover bg-no-repeat shrink-0 w-full lg:w-[480px] h-64 lg:h-[480px] rounded-lg"
                style={{
                  backgroundImage: `url('${
                    product.images?.[selectedImage] || product.image
                  }')`,
                }}
              />

              {/* Thumbnail Images */}
              <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full overflow-x-auto">
                {(product.images || [product.image]).map(
                  (image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`bg-[#fbfaf7] bg-center bg-cover bg-no-repeat relative shrink-0 w-[70px] h-[70px] rounded-lg transition-all duration-200 ${
                        selectedImage === index
                          ? "ring-2 ring-[#19bf98] ring-offset-2"
                          : "opacity-50 hover:opacity-75"
                      }`}
                      style={{ backgroundImage: `url('${image}')` }}
                    />
                  )
                )}
              </div>

              {/* Discount Badge */}
              {product.oldPrice && (
                <div className="absolute bg-[#d44646] box-border content-stretch flex flex-row gap-5 items-center justify-center left-5 px-3 py-2 rounded-2xl top-5">
                  <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#ffffff] text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px]">
                    <p className="block leading-none whitespace-pre">
                      {discountPercentage}% OFF
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Product Description */}
            <div className="basis-0 box-border content-stretch flex flex-col gap-8 md:gap-12 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full lg:w-auto">
              {/* Product Info */}
              <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                {/* Product Name */}
                <div className="font-['DM_Sans:Bold',_sans-serif] font-bold min-w-full relative shrink-0 text-[#274348] text-2xl md:text-[32px] text-left tracking-tight md:tracking-[-0.32px] w-full">
                  <p className="block leading-[1.5]">{product.name}</p>
                </div>

                {/* Price Section */}
                <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0">
                  <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#19bf98] text-2xl md:text-[32px] text-left text-nowrap tracking-tight md:tracking-[-0.32px]">
                    <p className="block leading-[1.5] whitespace-pre">
                      ${product.price}
                    </p>
                  </div>
                  {product.oldPrice && (
                    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#a4b4ba] text-lg md:text-[20px] text-left text-nowrap tracking-tight md:tracking-[-0.2px]">
                        <p className="[text-decoration-line:line-through] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5] whitespace-pre">
                          ${product.oldPrice}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="box-border content-stretch flex flex-row gap-2.5 items-end justify-start p-0 relative shrink-0 w-full">
                {/* Quantity Selector */}
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[130px]">
                  <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#a4b4ba] text-sm md:text-[14px] text-center tracking-tight md:tracking-[-0.14px] w-full">
                    <p className="block leading-[1.2]">Quantity:</p>
                  </div>
                  <div className="box-border content-stretch flex flex-row gap-5 items-center justify-center px-4 py-3 relative rounded-[999px] shrink-0 w-full border border-[#d0dfe5] border-solid">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="relative shrink-0 w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity duration-200"
                    >
                      <Minus />
                    </button>
                    <div className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center px-0 py-[0.5px] relative shrink-0">
                      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#274348] text-base md:text-[16px] text-left text-nowrap tracking-tight md:tracking-[-0.16px] uppercase">
                        <p className="block leading-[1.2] whitespace-pre">
                          {quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="relative shrink-0 w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity duration-200"
                    >
                      <Plus />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="bg-[#19bf98] box-border content-stretch flex flex-row gap-3 items-center justify-center px-8 py-3 relative rounded-[999px] shrink-0 cursor-pointer hover:bg-[#15a085] transition-colors duration-200"
                >
                  <div className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center px-0 py-[0.5px] relative shrink-0">
                    <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#ffffff] text-base md:text-[16px] text-left text-nowrap tracking-tight md:tracking-[-0.16px] uppercase">
                      <p className="block leading-[1.2] whitespace-pre">
                        Add to cart
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {/* Product Description */}
              <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left w-full">
                <p className="block leading-[1.5]">
                  {product.longDescription || product.description}
                </p>
              </div>

              {/* Ingredients Section */}
              {product.ingredients && (
                <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#274348] text-lg md:text-[18px] text-left w-full">
                    <p className="block leading-[1.5]">Ingredients</p>
                  </div>

                  {/* Ingredients Table */}
                  <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                    {product.ingredients.map(
                      (ingredient: any, index: number) => (
                        <div
                          key={index}
                          className={`box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full ${
                            index % 2 === 0 ? "bg-neutral-50" : "bg-[#f1f1f1]"
                          }`}
                        >
                          <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px px-3 py-2 relative shrink-0">
                            <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center min-h-px min-w-px relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left">
                              <p className="block leading-[1.5]">
                                {ingredient.name}
                              </p>
                            </div>
                          </div>
                          <div className="bg-[rgba(0,0,0,0.03)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-2 relative shrink-0 w-[100px]">
                            <div className="basis-0 flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center min-h-px min-w-px relative shrink-0 text-[#274348] text-sm md:text-[14px] text-center">
                              <p className="block leading-[1.5]">
                                {ingredient.amount}
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bestsellers Section - Imported Component */}
      <div className="bg-[#fbfaf7] w-full">
        <BestSellers isHomePage={false} />
      </div>
    </div>
  );
}
