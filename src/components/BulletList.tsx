import type { ReactNode } from "react";
import { Text } from "./Text";

interface BulletListProps {
  children: ReactNode;
  className?: string;
}

export function BulletList({ children, className = "" }: BulletListProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <ul className={`list-none ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start items-center">
          <span className="mr-2 mt-[4px] text-[7px]" aria-hidden="true">
            ◆
          </span>
          <Text>{item}</Text>
        </li>
      ))}
    </ul>
  );
}
