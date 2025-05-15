import React from "react";

const PreTitle = ({ text, center }: { text: string; center: boolean }) => {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${center && "justify-center"}`}
    >
      <div className="w-2 h-2 bg-background"></div>

      <p className="tracking-[3px] uppercase">{text}</p>

      <div className="w-2 h-2 bg-background"></div>
    </div>
  );
};

export default PreTitle;
