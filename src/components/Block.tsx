import type { ReactNode } from "react";

interface BlockProps {
  children: ReactNode;
}

export function Block({ children }: BlockProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
