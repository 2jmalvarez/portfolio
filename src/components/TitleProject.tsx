import { ReactNode } from "react";

export const TitleProject = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-lg font-semibold text-white">{children}</h3>;
};
