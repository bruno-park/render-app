"use client";

import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

export default function Home() {
  const router = useRouter();

  const handleRouter = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router],
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <Button onClick={() => handleRouter("/render/csr")}>CSR</Button>
        <Button onClick={() => handleRouter("/render/ssr")}>SSR</Button>
        <Button onClick={() => handleRouter("/render/ssg")}>SSG</Button>
        <Button onClick={() => handleRouter("/render/isr")}>ISR</Button>
      </div>
    </div>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="rounded-xl w-20 bg-blue-400 text-white h-10 cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};
