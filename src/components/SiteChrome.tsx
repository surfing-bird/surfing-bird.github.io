import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import "@/publisher.css";
const groups = [
  { title: "Publications", links: [["https://steel-echoes.itch.io/mythic-treasures", "Mythic Treasures on itch.io ↗"], ["https://surfingbird.itch.io/the-scion", "The Scion on itch.io ↗"], ["/scion", "Scion · Free class preview"]] },
  { title: "Class reworks", links: [["/conduit-rebound", "Conduit Rebound"], ["/shadow-reshade", "Shadow Reshade"], ["/fury-recharged", "Fury Recharged"], ["/troubadour-reprise", "Troubadour Reprise"]] },
  { title: "Rules & tools", links: [["/alternate-tests", "Alternate Tests"], ["/stamina-scaling-tweaks", "Stamina Scaling"]] },
];
const resources: Record<string, { title: string; category: string }> = {
  "/scion": { title: "The Scion", category: "Class preview" },
  "/conduit-rebound": { title: "Conduit Rebound", category: "Class rework" },
  "/shadow-reshade": { title: "Shadow Reshade", category: "Class rework" },
  "/fury-recharged": { title: "Fury Recharged", category: "Class rework" },
  "/troubadour-reprise": { title: "Troubadour Reprise", category: "Class rework" },
  "/alternate-tests": { title: "Alternate Tests", category: "Rules variant" },
  "/stamina-scaling-tweaks": { title: "Stamina Scaling", category: "Rules tool" },
};
export function SiteChrome({ children }: { children: ReactNode }) {
  const location = useRouterState({ select: (state) => state.location });
  const pathname = location.pathname;
  const resource = resources[pathname];
  const isPrintLayout = pathname.endsWith("-pdf");
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => { if (menu.current) menu.current.open = false; }, [pathname]);
  return (
    <div className={`se-shell min-h-screen text-gray-950 ${pathname === "/" ? "se-is-home" : "se-is-reading"} ${isPrintLayout ? "se-is-print-layout" : ""}`}>
      <a href="#se-content" className="se-skip">Skip to content</a>
      <header className="se-header print:hidden"><div className="se-header-inner">
        <Link to="/" aria-label="Steel Echoes home" className="se-brand"><img src="/steel-echoes-brand.png" alt="Steel Echoes" width="240" height="92" /></Link>
        <nav aria-label="Main navigation" className="se-nav">
          <a href="/#publications" className="se-nav-publications" aria-current={pathname === "/" && location.hash === "publications" ? "location" : undefined}>Supplements</a><a href="/#homebrew" className="se-nav-library" aria-current={pathname === "/" && location.hash === "homebrew" ? "location" : undefined}>Homebrew</a>
          <details ref={menu} className="se-browse" onKeyDown={(event) => { if (event.key === "Escape") { event.currentTarget.open = false; event.currentTarget.querySelector("summary")?.focus(); } }}>
            <summary>Browse <span aria-hidden="true">+</span></summary>
            <div className="se-menu"><Link to="/" className="se-menu-home" onClick={() => { if (menu.current) menu.current.open = false; }}>Home <span aria-hidden="true">→</span></Link>
              <div className="se-menu-grid">{groups.map((group) => <div key={group.title}><p>{group.title}</p>{group.links.map(([href, label]) => href.startsWith("https://") ? <a key={href} href={href} target="_blank" rel="noreferrer" onClick={() => { if (menu.current) menu.current.open = false; }}>{label}</a> : <Link key={href} to={href} activeProps={{ "aria-current": "page" }} onClick={() => { if (menu.current) menu.current.open = false; }}>{label}</Link>)}</div>)}</div>
            </div>
          </details>
        </nav>
      </div></header>
      {resource && (
        <nav className="se-resource-bar print:hidden" aria-label="Resource navigation">
          <div className="se-resource-context"><Link to="/">Home</Link><span aria-hidden="true">/</span><span className="se-resource-title">{resource.title}</span><span className="se-resource-kind">{resource.category}</span></div>
          <div className="se-resource-actions">
            {pathname === "/scion" ? <a href="https://surfingbird.itch.io/the-scion" target="_blank" rel="noreferrer">Full class on itch.io ↗</a> : <a href="/#homebrew">All homebrew</a>}
          </div>
        </nav>
      )}
      <div id="se-content" className="se-content" tabIndex={-1}>{children}</div>
      <footer className="se-footer print:hidden"><div><Link to="/">Steel Echoes</Link><p>Third-party supplements and homebrew for Draw Steel.</p></div><a href="/#homebrew">Back to homebrew ↑</a></footer>
    </div>
  );
}
