import { ReactNode } from "react";
import { Logo } from "./Logo";

export const Name = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col m-4">
      <div className="flex justify-center">
        <Logo />
      </div>
      <a
        className="flex justify-center text-white pb-2 text-4xl font-extrabold tracking-tight first:mt-0 bg-transparent border-none cursor-pointer focus:outline-none"
        href="https://www.linkedin.com/in/juan-manuel-alvarez-/"
        target="_blank"
        aria-label="Open LinkedIn profile"
        type="button"
      >
        {children}
      </a>
    </div>
  );
};
