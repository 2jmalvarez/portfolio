import { ReactNode } from "react";

export const DescriptionProject = ({ children }: { children: ReactNode }) => {
  return <p className="mb-4 text-base font-normal text-gray-400">{children}</p>;
};
