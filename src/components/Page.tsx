import type { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Page({ children, className = "", id }: PageProps) {
  return (
    <div
      id={id}
      className={`w-full p-4 flex flex-col md:flex-row items-start gap-[15px] ${className}`}
    >
      {children}
    </div>
  );
}
