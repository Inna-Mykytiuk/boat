import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="title relative gradient-text font-bold text-[100px] sm:text-[160px] md:text-[220px] xl:text-[250px] font-comforta text-center tracking-tighter leading-tight uppercase before:w-full  xl:before:h-[840px] md:before:h-[600px] before:top-[-40px] sm:before:top-0 xl:before:bg-cover  before:bg-cover before:h-[420px]">
      {children}
    </h1>
  );
}
