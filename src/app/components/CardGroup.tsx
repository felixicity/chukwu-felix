import { ReactNode } from "react";

interface CardGroupProps {
      children: ReactNode;
      cols?: 1 | 2 | 3 | 4;
}

export function CardGroup({ children, cols = 2 }: CardGroupProps) {
      const gridCols = {
            1: "md:grid-cols-1",
            2: "md:grid-cols-2",
            3: "md:grid-cols-3",
            4: "md:grid-cols-4",
      };

      return <div className={`grid grid-cols-1 gap-4 ${gridCols[cols]}`}>{children}</div>;
}
