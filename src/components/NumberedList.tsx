import type { ReactNode } from "react";
import { Text } from "./Text";

interface NumberedListProps {
  children: ReactNode;
  className?: string;
}

export function NumberedList({ children, className = "" }: NumberedListProps) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <ol className={`list-none ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start items-center">
          <Text>{item}</Text>
        </li>
      ))}
    </ol>
  );
}
