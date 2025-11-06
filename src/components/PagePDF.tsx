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
        minHeight: "257mm", // A4 height (297mm) - margins (20mm top + 20mm bottom)
        padding: "20mm",
        pageBreakAfter: "always",
        breakAfter: "page",
      }}
    >
      {children}
    </div>
  );
}
