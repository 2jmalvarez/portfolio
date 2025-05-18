import { ReactNode } from "react";

export const Background = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col bg-gradient-to-tr from-[#23272e] via-[#3a3f47] to-[#40c96e] w-full h-full items-center justify-center">
    {children}
  </div>
);
