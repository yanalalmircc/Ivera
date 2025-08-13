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
      <div className="bg-white flex flex-col items-center justify-center p-8 w-full">
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
    <div className="bg-white w-full">
      {/* Content Section */}
      <div className="flex flex-col gap-6 md:gap-10 items-center pb-8 md:pb-24 pt-5 md:pt-12 px-5 md:px-10 w-full">
        <div className="flex flex-col gap-8 md:gap-12 items-start justify-center w-full max-w-[1080px]">
          {/* Breadcrumbs */}
          <div className="box-border content-stretch flex flex-row items-center justify-start pb-5 pt-0 px-0 relative shrink-0 w-full">
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
              <p className="text-[#274348]">{product.name}</p>
            </div>
          </div>

          {/* Product Section */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-20 items-start justify-start w-full">
            {/* Product Images */}
            <div className="flex flex-col gap-2 md:gap-3 items-start justify-center w-full lg:w-auto relative">
              {/* Main Image */}
              <div
                className="bg-[#fbfaf7] bg-center bg-cover bg-no-repeat w-full lg:w-[480px] lg:h-[480px] aspect-square md:h-[480px] rounded-lg"
                style={{
                  backgroundImage: `url('${
                    product.images?.[selectedImage] || product.image
                  }')`,
                }}
              />

              {/* Thumbnail Images */}
              <div className="flex flex-row gap-1 md:gap-3 items-center justify-start w-full overflow-x-auto">
                {(product.images || [product.image]).map(
                  (image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`bg-[#fbfaf7] bg-center bg-cover bg-no-repeat w-[52px] h-[52px] md:w-[70px] md:h-[70px] rounded-lg transition-all duration-200 ${
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
                <div className="absolute bg-[#d44646] flex flex-row gap-5 items-center justify-center left-2.5 md:left-5 px-3 py-2 rounded-2xl top-2.5 md:top-5">
                  <div className="font-['DM_Sans:Bold',_sans-serif] font-bold text-white text-[12px] md:text-sm text-left tracking-[-0.12px] md:tracking-tight">
                    {discountPercentage}% OFF
                  </div>
                </div>
              )}
            </div>

            {/* Product Description */}
            <div className="flex flex-col gap-5 md:gap-12 items-start justify-start w-full lg:w-auto lg:grow">
              {/* Product Info */}
              <div className="flex flex-col gap-2 md:gap-3 items-start justify-start w-full">
                {/* Product Name */}
                <div className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[#274348] text-[24px] md:text-[32px] text-left tracking-[-0.24px] md:tracking-[-0.32px] w-full">
                  {product.name}
                </div>

                {/* Price Section */}
                <div className="flex flex-row gap-3 md:gap-4 items-center justify-center">
                  <div className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[#19bf98] text-[24px] md:text-[32px] text-left tracking-[-0.24px] md:tracking-[-0.32px]">
                    ${product.price}
                  </div>
                  {product.oldPrice && (
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#a4b4ba] text-[18px] md:text-[20px] text-left tracking-[-0.18px] md:tracking-[-0.2px] line-through">
                        ${product.oldPrice}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="flex flex-row gap-2.5 items-end justify-start pb-3 pt-0 w-full">
                {/* Quantity Selector */}
                <div className="flex flex-col gap-2 items-start justify-start w-[110px] md:w-[130px]">
                  <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center text-[#a4b4ba] text-[12px] md:text-sm text-center tracking-[-0.12px] md:tracking-tight w-full">
                    Quantity:
                  </div>
                  <div className="flex flex-row gap-4 md:gap-5 items-center justify-center px-3 md:px-4 py-2 md:py-3 rounded-[999px] w-full border border-[#d0dfe5] border-solid">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity duration-200"
                    >
                      <Minus />
                    </button>
                    <div className="flex flex-row gap-2 h-6 items-center justify-center">
                      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center text-[#274348] text-base md:text-[16px] text-left tracking-[-0.16px] uppercase">
                        {quantity}
                      </div>
                    </div>
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="w-6 h-6 cursor-pointer hover:opacity-75 transition-opacity duration-200"
                    >
                      <Plus />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="bg-[#19bf98] flex flex-row gap-3 items-center justify-center px-5 md:px-8 py-2 md:py-3 rounded-[999px] cursor-pointer hover:bg-[#15a085] transition-colors duration-200 flex-1"
                >
                  <div className="flex flex-row gap-2 h-6 items-center justify-center">
                    <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center text-white text-[14px] md:text-base text-left tracking-[-0.14px] md:tracking-[-0.16px] uppercase">
                      Add to cart
                    </div>
                  </div>
                </button>
              </div>

              {/* Product Description */}
              <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal justify-center text-[#274348] text-[14px] md:text-sm text-left w-full">
                <p className="leading-[1.5]">
                  {product.longDescription || product.description}
                </p>
              </div>

              {/* Ingredients Section */}
              {product.ingredients && (
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center text-[#274348] text-[18px] md:text-lg text-left w-full">
                    Ingredients
                  </div>

                  {/* Ingredients Table */}
                  <div className="flex flex-col items-start justify-start w-full">
                    {product.ingredients.map(
                      (ingredient: any, index: number) => (
                        <div
                          key={index}
                          className={`flex flex-row items-center justify-center w-full ${
                            index % 2 === 0 ? "bg-neutral-50" : "bg-[#f1f1f1]"
                          }`}
                        >
                          <div className="flex flex-row gap-2.5 grow items-center justify-center px-3 py-2">
                            <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center text-[#274348] text-[14px] md:text-sm text-left">
                              {ingredient.name}
                            </div>
                          </div>
                          <div className="bg-[rgba(0,0,0,0.03)] flex flex-row gap-2.5 items-center justify-center p-2 w-[100px]">
                            <div className="flex flex-col font-['DM_Sans:Regular',_sans-serif] font-normal grow justify-center text-[#274348] text-[14px] md:text-sm text-center">
                              {ingredient.amount}
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
