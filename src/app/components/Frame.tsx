import { ReactNode } from "react";

interface FrameProps {
      children: ReactNode;
      className?: string;
}

export function Frame({ children, className = "" }: FrameProps) {
      return (
            <figure
                  className={` my-6 rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-white transition-all duration-200 ${className}`}
            >
                  {children}
            </figure>
      );
}
