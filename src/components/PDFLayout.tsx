import type { ReactNode } from "react";
import { Children } from "react";

interface PDFLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PDFLayout({ children, className = "" }: PDFLayoutProps) {
  const pages = Children.toArray(children).filter(Boolean);

  return (
    <main
      className={`flex flex-col items-center w-full ${className}`}
      style={{ backgroundColor: "#ffffff" }}
    >
      {pages.map((child, idx) => (
        <div key={idx} className="pdf-page-wrapper">
          {child}
        </div>
      ))}
    </main>
  );
}

