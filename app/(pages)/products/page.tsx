"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@lib/data";
import { ChevronRight, Plus } from "@icons";

type SortOption = "price-low-high" | "price-high-low" | "name-a-z" | "name-z-a";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>("price-low-high");
  const productsPerPage = 8;

  // Sort products based on selected option
  const sortedProducts = useMemo(() => {
    const sorted = [...products];

    switch (sortBy) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "name-a-z":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-z-a":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  }, [sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle sorting change
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortOption);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  // Handle add to cart
  const handleAddToCart = (productId: number) => {
    // TODO: Add product to cart functionality
    console.log(`Add product ${productId} to cart`);
  };

  return (
    <div className="bg-white w-full">
      {/* Content Section */}
      <div className="flex flex-col gap-8 md:gap-10 items-center pb-8 md:pb-24 pt-5 md:pt-12 px-5 md:px-10 w-full">
        <div className="flex flex-col gap-8 md:gap-12 items-start justify-center w-full max-w-[1400px]">
          {/* Breadcrumbs */}
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <Link
              href="/"
              className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#274348] text-[14px] text-left tracking-[-0.14px] hover:text-[#19bf98] transition-colors duration-200"
            >
              Home
            </Link>
            <div className="opacity-50 w-4 h-4">
              <ChevronRight />
            </div>
            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal opacity-50 text-[#274348] text-[14px] text-left tracking-[-0.14px]">
              Products
            </div>
          </div>

          {/* Title and Sort Section */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-5 items-start md:items-center justify-center md:justify-between pb-5 w-full border-b border-[#d0dfe5] border-solid">
            <div className="font-['Epilogue:Bold',_sans-serif] font-bold text-[#274348] text-[32px] md:text-[48px] text-left tracking-[-0.32px] md:tracking-[-0.48px] w-full md:w-auto">
              Our products
            </div>

            {/* Sort Dropdown */}
            <div className="flex flex-col gap-2 items-start justify-start w-full md:w-[220px]">
              <div className="bg-white flex flex-row gap-2 items-center justify-start p-[10px] w-full border border-[#d0dfe5] border-solid focus-within:border-[#19bf98] transition-colors duration-200">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="grow h-6 text-[#274348] text-[14px] text-left tracking-[-0.14px] bg-transparent border-none outline-none cursor-pointer"
                >
                  <option value="price-low-high">
                    Sort by price: low to high
                  </option>
                  <option value="price-high-low">
                    Sort by price: high to low
                  </option>
                  <option value="name-a-z">Sort by name: A to Z</option>
                  <option value="name-z-a">Sort by name: Z to A</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-start justify-start w-full">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-row gap-4 md:gap-0 items-start justify-start w-full relative"
              >
                {/* Product Image */}
                <Link
                  href={`/products/${product.id}`}
                  className="aspect-square md:size-80 bg-[#fbfaf7] bg-center bg-cover bg-no-repeat w-full max-w-[120px] md:max-w-none md:shrink-0 cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />

                {/* Product Description */}
                <div className="flex flex-col gap-4 md:gap-auto md:grow items-start justify-start md:justify-between w-full p-[40px] md:h-[320px]">
                  <div className="flex flex-col gap-3 md:gap-2 items-start justify-start w-full ">
                    {/* Product Name */}
                    <Link
                      href={`/products/${product.id}`}
                      className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[#274348] text-[18px] md:text-[24px] text-left tracking-[-0.18px] md:tracking-[-0.24px] w-full cursor-pointer hover:text-[#19bf98] transition-colors duration-200"
                    >
                      {product.name}
                    </Link>

                    {/* Product Category */}
                    <div className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#a4b4ba] text-[14px] md:text-[16px] text-left">
                      {product.category}
                    </div>

                    {/* Price Section */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-2 md:gap-3">
                      {product.oldPrice && (
                        <div className="flex flex-row gap-1 items-center justify-start">
                          <div className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#a4b4ba] text-[14px] md:text-[16px] text-left tracking-[-0.14px] md:tracking-[-0.16px] line-through">
                            ${product.oldPrice}
                          </div>
                        </div>
                      )}
                      <div className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[#19bf98] text-[18px] md:text-[24px] text-left tracking-[-0.18px] md:tracking-[-0.24px]">
                        ${product.price}
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button - Desktop Only */}
                  <div className="hidden md:flex flex-row gap-2 items-center justify-center pl-4 pr-5 py-3 rounded-[999px] cursor-pointer text-[#274348] hover:bg-[#274348] hover:text-white transition-all duration-200 border border-[#274348] border-solid">
                    <div className="w-6 h-6">
                      <Plus />
                    </div>
                    <div className="flex flex-row gap-2 h-6 items-center justify-center">
                      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center text-[#274348] text-[12px] text-left tracking-[-0.14px] uppercase">
                        Add to cart
                      </div>
                    </div>
                  </div>
                </div>

                {/* Discount Badge - Only show for products with oldPrice */}
                {product.oldPrice && (
                  <div className="absolute bg-[#d44646] flex flex-row gap-2.5 items-center justify-center left-2.5 md:left-5 px-3 py-2 rounded-2xl top-2.5 md:top-5">
                    <div className="font-['DM_Sans:Bold',_sans-serif] font-bold text-white text-[11px] md:text-[12px] text-left tracking-[-0.11px] md:tracking-[-0.12px]">
                      {Math.round(
                        ((product.oldPrice - product.price) /
                          product.oldPrice) *
                          100
                      )}
                      % OFF
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="flex flex-col gap-6 items-center justify-center pt-6 w-full border-t border-[#d0dfe5] border-solid">
            {/* Results Count */}
            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#274348] text-[16px] text-center tracking-[-0.16px] w-full">
              Showing {startIndex + 1}–
              {Math.min(endIndex, sortedProducts.length)} of{" "}
              {sortedProducts.length} results
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-row gap-3 items-center justify-center">
              {/* Previous Page Button */}
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="bg-[#f5fcfa] flex flex-row gap-2.5 items-center justify-center w-10 h-10 hover:bg-[#19bf98] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <div className="w-6 h-6 rotate-180">
                    <ChevronRight />
                  </div>
                </button>
              )}

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isCurrentPage = pageNumber === currentPage;

                // Show first page, last page, current page, and pages around current page
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 &&
                    pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`flex flex-row gap-2.5 items-center justify-center w-10 h-10 cursor-pointer transition-all duration-200 ${
                        isCurrentPage
                          ? "bg-[#19bf98] text-white"
                          : "bg-[#f5fcfa] text-[#274348] hover:bg-[#19bf98] hover:text-white"
                      }`}
                    >
                      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[16px] text-center tracking-[-0.16px]">
                        {pageNumber}
                      </div>
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return (
                    <span
                      key={pageNumber}
                      className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#274348] text-[16px] text-center tracking-[-0.16px] px-2"
                    >
                      ...
                    </span>
                  );
                }
                return null;
              })}

              {/* Next Page Button */}
              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="bg-[#f5fcfa] flex flex-row gap-2.5 items-center justify-center w-10 h-10 hover:bg-[#19bf98] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <div className="w-6 h-6">
                    <ChevronRight />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
