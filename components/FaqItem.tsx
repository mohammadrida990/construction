"use client";

import React, { useState } from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

const FaqItem = ({ title, desc }: { title: string; desc: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b ">
      <div className="flex items-center justify-between py-6">
        <h4 className="text-2 max-w-[300px] sm:max-w-md md:max-w-max font-bold">
          {title}
        </h4>

        <button
          className="w-[44px] h-[44px] bg-background flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiSubtractFill
              className={`text-black text-2xl transition-opacity duration-700 ${
                isOpen ? " opacity-100" : " opacity-0"
              }`}
            />
          ) : (
            <RiAddFill
              className={`text-black text-2xl transition-opacity duration-700 ${
                isOpen ? " opacity-0" : " opacity-100"
              }`}
            />
          )}
        </button>
      </div>

      <div
        className={`transition-all  ease-in-out ${
          isOpen
            ? "max-h-[200px] opacity-100 duration-500 ease-in-out"
            : "max-h-0 opacity-0 duration-300 overflow-hidden"
        }`}
      >
        <p className="pb-8 flex items-center max-w-[860px]">{desc}</p>
      </div>
    </div>
  );
};

export default FaqItem;
