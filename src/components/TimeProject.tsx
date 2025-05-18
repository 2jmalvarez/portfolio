import { ReactNode } from "react";

export const TimeProject = ({ children }: { children: ReactNode }) => {
  return (
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {children}
    </time>
  );
};
