import type { ReactNode } from "react";

interface PagePDFProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function PagePDF({ children, className = "", id }: PagePDFProps) {
  return (
    <div
      id={id}
      className={`pdf-page w-full flex flex-row items-start gap-[15px] ${className}`}
      style={{
        width: "210mm",
        height: "297mm", // Full A4 height
        padding: "20mm",
        pageBreakAfter: "always",
        breakAfter: "page",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}
