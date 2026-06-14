import type { ReactNode } from "react";
import { useState } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  onReset?: () => void;
  defaultOpen?: boolean;
}

export function Section({
  title,
  children,
  onReset,
  defaultOpen = true,
}: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-gray-100 px-4 py-3">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex flex-1 items-center gap-2 text-left text-sm font-semibold text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
        >
          <span className="text-gray-500">{open ? "▾" : "▸"}</span>
          {title}
        </button>
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="rounded-lg px-2 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          >
            Reset
          </button>
        )}
      </div>
      {open && <div className="flex flex-col gap-4 px-4 py-4">{children}</div>}
    </section>
  );
}
