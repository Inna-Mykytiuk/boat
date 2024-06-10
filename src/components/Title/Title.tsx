import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="gradient-text font-bold text-[250px] font-comforta text-center tracking-tighter leading-tight uppercase">
      {children}
    </h1>
  );
}
