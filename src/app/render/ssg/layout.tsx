import React from "react";

export default function SSGLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
