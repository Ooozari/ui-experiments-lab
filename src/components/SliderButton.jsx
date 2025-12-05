import React from "react";

export function SliderButton() {
  return (
    <div className="bg-black flex items-center justify-center p-6 rounded-xl border border-gray-200 shadow-sm">
    <button className="relative bg-[#1E1D19] group outline-2 outline-white/20 rounded-xl py-2.5 text-white pl-12 pr-3 hover:pl-3 hover:pr-12 transition-all duration-300 cursor-pointer">
      {/* Background expanding layer */}
      <div
        className="
      absolute inset-0 
      w-full h-full rounded-xl
      bg-white/20 
      [clip-path:inset(0_100%_0_0)]
      group-hover:[clip-path:inset(0_0%_0_0)]
      transition-[clip-path] duration-500 ease-out
      z-0
    "
      />

      {/* Moving Box */}
      <div
        className="
      absolute left-[3px] top-1/2 -translate-y-1/2
      transition-all duration-300
      group-hover:left-[calc(100%-41px)]
      group-hover:rotate-180
      z-20
    "
      >
        <Box />
      </div>

      {/* Text */}
      <span className="relative z-10">Chat with me</span>
    </button>
    </div>
  );
}

const Box = () => {
  return (
    <div className="transition-transform duration-200 size-[38px] bg-[#FFCC00] rounded-[9px] flex flex-col justify-center items-center gap-0.5">
      <div className="grid grid-cols-5 gap-0.5">
        <Indicator />
        <Indicator />
        <Indicator highlight={true} />
        <Indicator />
        <Indicator />
      </div>
      <div className="grid grid-cols-5 gap-0.5">
        <Indicator />
        <Indicator />
        <Indicator />
        <Indicator highlight={true} />
        <Indicator />
      </div>
      <div className="grid grid-cols-5 gap-0.5">
        <Indicator highlight={true} />
        <Indicator highlight={true} />
        <Indicator highlight={true} />
        <Indicator highlight={true} />
        <Indicator highlight={true} />
      </div>
      <div className="grid grid-cols-5 gap-0.5">
        <Indicator />
        <Indicator />
        <Indicator />
        <Indicator highlight={true} />
        <Indicator />
      </div>
      <div className="grid grid-cols-5 gap-0.5">
        <Indicator />
        <Indicator />
        <Indicator highlight={true} />
        <Indicator />
        <Indicator />
      </div>
    </div>
  );
};

const Indicator = ({ highlight }) => {
  return (
    <div
      className={`size-1 aspect-square rounded-full  ${
        highlight
          ? "bg-white"
          : "bg-white/20"
      }`}
    ></div>
  );
};
