import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface SiteChromeProps {
  children: ReactNode;
}

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <div className="min-h-screen text-gray-950">
      <header className="px-4 pt-4 print:hidden md:pt-0">
        <nav className="flex justify-center py-3">
          <Link
            to="/"
            aria-label="Steel Echoes home"
            className="group text-center"
          >
            <span
              className="inline-block bg-gradient-to-br from-gray-950 via-slate-700 to-gray-950 bg-clip-text text-3xl font-black uppercase tracking-[0.22em] text-transparent drop-shadow-sm transition-[transform,letter-spacing,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:-translate-y-1 group-hover:scale-[1.04] group-hover:tracking-[0.26em] group-hover:drop-shadow-[0_12px_18px_rgba(15,23,42,0.22)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:scale-100 sm:text-4xl"
              style={{
                fontFamily: '"Cinzel", "Fraunces", serif',
              }}
            >
              Steel Echoes
            </span>
          </Link>
        </nav>

        <div className="mx-auto mt-0 h-px max-w-2xl bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </header>

      <div className="w-full">{children}</div>
    </div>
  );
}
