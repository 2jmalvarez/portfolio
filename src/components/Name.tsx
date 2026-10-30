import type { ReactNode } from "react";
import { Logo } from "./Logo";

export const Name = ({ children }: { children: ReactNode }) => {
  return (
    <a
      className="m-4 flex flex-col justify-center text-white pb-2 text-[34px] font-bold tracking-tight first:mt-0 bg-transparent border-none cursor-pointer focus:outline-none"
      href="https://www.linkedin.com/in/juan-manuel-alvarez-/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ver perfil de Juan Manuel Alvarez en LinkedIn"
    >
      <div className="flex justify-center">
        <Logo />
      </div>
      {children}
      <span className="mt-1 text-center text-base font-normal text-sky-300 underline underline-offset-4">
        LinkedIn ↗
      </span>
    </a>
  );
};
