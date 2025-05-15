import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="
        w-[210px] h-[55px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between
        min-w-[200px] text-black group bg-background/50 cursor-pointer rounded-md
        border-black border shadow shadow-sm shadow-black
       "
    >
      <div
        className="text-center tracking-[1.2px] font-extrabold text-black text-sm uppercase
      "
      >
        {text}
      </div>

      <div className="h-11 w-11 bg-black flex items-center justify-center">
        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
      </div>
    </button>
  );
};

export default Button;
