import type { ReactNode } from "react";

interface ColumnPDFProps {
  children: ReactNode;
  className?: string;
}

export function ColumnPDF({ children, className = "" }: ColumnPDFProps) {
  return (
    <div className={`w-full h-full flex flex-col space-y-4 ${className}`}>
      {children}
    </div>
  );
}

