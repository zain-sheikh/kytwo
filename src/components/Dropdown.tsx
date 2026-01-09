"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface BudgetDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const BudgetDropdown: React.FC<BudgetDropdownProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: string[] = [
    "$100,000 - $200,000",
    "$50,000 - $100,000",
    "$20,000 - $50,000",
    "$10,000 - $20,000",
  ];

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Trigger Area */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-between border-b cursor-pointer transition-all pb-2 pt-2
          ${isOpen ? "border-indigo-600" : "border-gray-300"}
        `}
      >
        <span
          className={`${
            value ? "text-gray-900" : "text-gray-400"
          } text-lg font-normal transition-colors`}
        >
          {value || "What is your budget? *"}
        </span>

        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-900" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
        )}
      </div>

      {/* Floating Menu */}
      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+8px)] w-full bg-white rounded-[2rem] shadow-[0_15px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-50 z-50 overflow-hidden py-4">
          <div className="flex flex-col">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="px-10 py-5 text-left text-[20px] text-gray-900 hover:bg-gray-50 transition-colors font-normal first:pt-6 last:pb-6"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetDropdown;
