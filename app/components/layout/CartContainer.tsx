"use client";
import { useState, useEffect } from "react";
import { products } from "@lib/data";
import { CartItems } from "./CartItems";
import { OrderSummary } from "./OrderSummary";

interface CartItem {
  id: number;
  name: string;
  price: number;
  oldPrice?: number | null;
  image: string;
  quantity: number;
}

export const CartContainer = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Generate random products only on client side to prevent hydration mismatch
    const getRandomProducts = () => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3).map((product: any) => ({
        ...product,
        quantity: Math.floor(Math.random() * 3) + 1, // Random quantity 1-3
      }));
    };

    setCartItems(getRandomProducts());
    setIsLoading(false);
  }, []);

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateDiscount = () => {
    return cartItems.reduce((sum, item) => {
      if (item.oldPrice) {
        return sum + (item.oldPrice - item.price) * item.quantity;
      }
      return sum;
    }, 0);
  };

  const shipping = 14.25;
  const taxRate = 0.2;
  const subtotal = calculateSubtotal();
  const discount = calculateDiscount();
  const tax = (subtotal - discount) * taxRate;
  const total = subtotal - discount + shipping + tax;

  // Show loading state while generating products
  if (isLoading) {
    return (
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-center p-8 relative w-full min-h-[600px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#19bf98] mx-auto mb-4"></div>
          <p className="text-[#a4b4ba]">Loading your cart...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-center p-8 relative w-full min-h-[600px]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#274348] mb-4">
            Your cart is empty
          </h1>
          <p className="text-[#a4b4ba] mb-6">
            Add some products to get started!
          </p>
          <a
            href="/products"
            className="bg-[#19bf98] text-white px-6 py-3 rounded-[999px] hover:bg-[#15a085] transition-colors duration-200 inline-block"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="box-border content-stretch flex flex-col lg:flex-row gap-8 md:gap-16 items-start justify-start p-0 relative shrink-0 w-full max-w-[1080px]">
      <CartItems
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
      <OrderSummary
        subtotal={subtotal}
        discount={discount}
        shipping={shipping}
        tax={tax}
        total={total}
      />
    </div>
  );
};
