"use client";

import { ArrowDown } from "@icons";
import { useState } from "react";

interface FAQSection {
  title: string;
  items: FAQItem[];
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FaqList = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  const isItemOpen = (itemId: string) => openItems.has(itemId);
  const faqData: FAQSection[] = [
    {
      title: "Orders",
      items: [
        {
          id: "orders-1",
          question: "How do I place an order?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: "orders-2",
          question: "How can I cancel my order?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: "orders-3",
          question: "Was my order successfully placed?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: "orders-4",
          question: "I received the wrong product, what do I do?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: "orders-5",
          question: "I received a defective product, what do I do?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: "orders-6",
          question:
            "I am missing one or more products from my order, what do I do?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: "orders-7",
          question:
            "I'm unsatisfied with the products I received, what can I do?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
    },
    {
      title: "Payments",
      items: [
        {
          id: "payments-1",
          question: "What payments methods do you accept?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: "payments-2",
          question: "What currencies do you accept?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: "payments-3",
          question: "Is your website safe for payments?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          id: "payments-4",
          question: "What do I do if my payment keeps failing?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      ],
    },
  ];
  return (
    <>
      {faqData.map((section, sectionIndex) => (
        <div
          key={section.title}
          className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
        >
          {/* Section Title */}
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pb-6 pt-0 px-0 relative shrink-0 w-full">
            <div className="flex flex-col font-['Epilogue:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#a4b4ba] text-xl md:text-[24px] text-left text-nowrap">
              <p className="block leading-[1.4] whitespace-pre">
                {section.title}
              </p>
            </div>
          </div>

          {/* FAQ Items */}
          {section.items.map((item, itemIndex) => (
            <button
              key={item.id}
              className="bg-[#ffffff] box-border content-stretch cursor-pointer flex flex-col gap-6 items-start justify-start overflow-visible px-0 py-8 md:py-10 relative shrink-0 w-full border-b border-[#d0dfe5] border-solid hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isItemOpen(item.id)}
            >
              {/* Question Row */}
              <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                <div className="flex flex-col font-['Epilogue:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[#274348] text-base md:text-[18px] text-left text-nowrap max-w-[80%]">
                  <p className="block leading-[1.2] whitespace-pre text-left">
                    {item.question}
                  </p>
                </div>
                <div className="overflow-clip relative shrink-0 w-6 h-6">
                  <div
                    className={`transition-transform duration-300 ease-in-out ${
                      isItemOpen(item.id) ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ArrowDown />
                  </div>
                </div>
              </div>

              {/* Answer Section */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isItemOpen(item.id)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full pt-4">
                  <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#274348] text-sm md:text-[16px] text-left leading-[1.6] w-full">
                    <p className="block leading-[1.6]">{item.answer}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      ))}
    </>
  );
};
