import type { ReactNode } from "react";
import { MatrixBackground } from "./MatrixBackground";
import { cn } from "@/lib/utils";

export const Background = ({
  matrix = false,
  children,
}: {
  children: ReactNode;
  matrix?: boolean;
}) => (
  <div
    className={cn(
      "flex flex-col w-full h-full items-center justify-center",
      !matrix && "bg-gradient-to-tr from-[#23272e] via-[#3a3f47] to-[#40c96e]"
    )}
  >
    {matrix && <MatrixBackground color="#1e2939" />}
    {children}
  </div>
);
