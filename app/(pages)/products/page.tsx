"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@lib/data";
import { ChevronRight, Plus, ChevronLeft } from "@icons";

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
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
      {/* Content Section */}
      <div className="box-border content-stretch flex flex-col gap-6 md:gap-10 items-center justify-center pb-16 md:pb-24 pt-8 md:pt-12 px-6 md:px-10 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col gap-8 md:gap-12 items-start justify-center p-0 relative shrink-0 w-full max-w-[1400px]">
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
            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal opacity-50 relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px]">
              <p className="block leading-[1.2] whitespace-pre">Products</p>
            </div>
          </div>

          {/* Title and Sort Section */}
          <div className="box-border content-stretch flex flex-col md:flex-row gap-4 md:gap-5 items-start md:items-center justify-between pb-10 pt-0 px-0 relative shrink-0 w-full border-b border-[#d0dfe5] border-solid">
            <div className="font-['Epilogue:Bold',_sans-serif] font-bold relative shrink-0 text-[#274348] text-3xl md:text-[48px] text-left tracking-tight md:tracking-[-0.48px] w-full md:w-auto">
              <p className="block leading-[1.2]">Our products</p>
            </div>

            {/* Sort Dropdown */}
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full md:w-[220px]">
              <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-center justify-start p-[10px] relative shrink-0 w-full border border-[#d0dfe5] border-solid focus-within:border-[#19bf98] transition-colors duration-200">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="basis-0 box-border content-stretch flex flex-row gap-2 grow h-6 items-center justify-start min-h-px min-w-px px-0 py-[0.5px] relative shrink-0 text-[#274348] text-sm md:text-[14px] text-left tracking-tight md:tracking-[-0.14px] bg-transparent border-none outline-none cursor-pointer"
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
          <div className="flex flex-wrap gap-8 md:gap-12 items-start justify-start w-full">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="box-border content-stretch flex flex-col lg:flex-row items-start justify-start p-0 relative shrink-0 w-full lg:w-[675px]"
              >
                {/* Product Image */}
                <Link
                  href={`/products/${product.id}`}
                  className="bg-[#fbfaf7] bg-center bg-cover bg-no-repeat shrink-0 w-full lg:w-80 h-64 lg:h-80 cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />

                {/* Product Description */}
                <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px p-6 md:p-[40px] relative self-stretch shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col gap-1 md:gap-2 items-start justify-start p-0 relative shrink-0 w-full">
                    {/* Product Name */}
                    <Link
                      href={`/products/${product.id}`}
                      className="font-['DM_Sans:Bold',_sans-serif] font-bold min-w-full relative shrink-0 text-[#274348] text-xl md:text-[24px] text-left tracking-tight md:tracking-[-0.24px] w-full cursor-pointer hover:text-[#19bf98] transition-colors duration-200"
                    >
                      <p className="block leading-[1.5]">{product.name}</p>
                    </Link>

                    {/* Product Category */}
                    <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#a4b4ba] text-sm md:text-[16px] text-left">
                      <p className="block leading-[1.2]">{product.category}</p>
                    </div>

                    {/* Price Section */}
                    <div className="box-border content-stretch flex flex-row gap-2 md:gap-3 items-center justify-center p-0 relative shrink-0">
                      <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#19bf98] text-lg md:text-[24px] text-left text-nowrap tracking-tight md:tracking-[-0.24px]">
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
                    className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-center justify-center pl-4 pr-5 py-3 relative rounded-[999px] shrink-0 cursor-pointer text-[#274348] hover:bg-[#274348] hover:text-white transition-all duration-200 border border-[#274348] border-solid"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <div className="overflow-clip relative shrink-0 w-6 h-6">
                      <div className="flex items-center justify-center">
                        <Plus />
                      </div>
                    </div>
                    <div className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center px-0 py-[0.5px] relative shrink-0">
                      <div className="flex flex-col font-['DM_Sans:Bold',_sans-serif] font-bold justify-center relative shrink-0  text-sm md:text-[14px] text-left text-nowrap tracking-tight md:tracking-[-0.14px] uppercase group-hover:text-white transition-colors duration-200">
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
                      <p className="block leading-none whitespace-pre">
                        {Math.round(
                          ((product.oldPrice - product.price) /
                            product.oldPrice) *
                            100
                        )}
                        % OFF
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="box-border content-stretch flex flex-col md:flex-row gap-4 md:gap-2.5 items-center justify-between px-0 py-10 relative shrink-0 w-full border-t border-[#d0dfe5] border-solid">
            {/* Results Count */}
            <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#274348] text-sm md:text-[16px] text-left tracking-tight md:tracking-[-0.16px] w-full md:w-auto text-center md:text-left">
              <p className="block leading-[1.2]">
                Showing {startIndex + 1}–
                {Math.min(endIndex, sortedProducts.length)} of{" "}
                {sortedProducts.length} results
              </p>
            </div>

            {/* Pagination Controls */}
            <div className="box-border content-stretch flex flex-row gap-2 md:gap-3 items-center justify-center p-0 relative shrink-0">
              {/* Previous Page Button */}
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="bg-[#f5fcfa] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-10 h-10 hover:bg-[#19bf98] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <div className="overflow-clip relative shrink-0 w-6 h-6 rotate-180">
                    <ChevronLeft />
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
                      className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-10 h-10 cursor-pointer transition-all duration-200 ${
                        isCurrentPage
                          ? "bg-[#19bf98] text-white"
                          : "bg-[#f5fcfa] text-[#274348] hover:bg-[#19bf98] hover:text-white"
                      }`}
                    >
                      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-sm md:text-[16px] text-center tracking-tight md:tracking-[-0.16px]">
                        <p className="block leading-[1.2]">{pageNumber}</p>
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
                      className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#274348] text-sm md:text-[16px] text-center tracking-tight md:tracking-[-0.16px] px-2"
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
                  className="bg-[#f5fcfa] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-10 h-10 hover:bg-[#19bf98] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <div className="overflow-clip relative shrink-0 w-6 h-6">
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
