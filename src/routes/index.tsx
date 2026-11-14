import { Link, createFileRoute } from "@tanstack/react-router";
import "@/styles.css";
import "@/publisher.css";
export const Route = createFileRoute("/")({ component: App });
const reworks = [
  { title: "Conduit Rebound", to: "/conduit-rebound", text: "A minimal rework for Conduit." },
  { title: "Shadow Reshade", to: "/shadow-reshade", text: "A minimal rework for Shadow." },
  { title: "Fury Recharged", to: "/fury-recharged", text: "A minimal rework for Fury." },
  { title: "Troubadour Reprise", to: "/troubadour-reprise", text: "A minimal rework for Troubadour." },
];
function App() {
  return (
    <main className="se-home">
      <section className="se-hero">
        <div className="se-hero-label"><span className="se-small-cross" aria-hidden="true">✦</span> Steel Echoes · Third-party Draw Steel publishing</div>
        <h1>Draw Steel<br /><em>homebrew</em></h1>
        <div className="se-hero-bottom"><p>Steel Echoes publishes high-quality third-party supplements for Draw Steel. Here’s what we’ve been working on.</p><a className="se-button" href="#publications">See the supplements <span aria-hidden="true">↓</span></a></div>
      </section>
      <section id="publications" className="se-publications">
        <div className="se-section-heading"><div><p className="se-eyebrow">01 / Supplements</p><h2>Published supplements</h2></div><p>Available on itch.io</p></div>
        <article className="se-feature se-treasures">
          <a href="https://steel-echoes.itch.io/mythic-treasures" target="_blank" rel="noreferrer" className="se-art-link" aria-label="Explore Mythic Treasures on itch.io"><img src="/mythic-treasures.avif" alt="Illustrated Mythic Treasures cover artwork" width="1600" height="900" /></a>
          <div className="se-feature-copy"><p className="se-eyebrow">Treasures / Draw Steel</p><h3>Mythic <br />Treasures</h3><p>Mythic Treasures is a massive collection of new treasures for Draw Steel, designed to define your character and shape how it fights.</p><a className="se-text-link" href="https://steel-echoes.itch.io/mythic-treasures" target="_blank" rel="noreferrer">View on itch.io <span aria-hidden="true">↗</span></a></div>
        </article>
        <article className="se-feature se-scion">
          <div className="se-feature-copy"><p className="se-eyebrow">Hero class / Draw Steel</p><h3>The Scion</h3><p>Become the scion of an ancient mystic art. Weave magic and steel into a single, fluid dance.
          </p><div className="se-feature-actions"><Link className="se-button" to="/scion">Read the free preview <span aria-hidden="true">→</span></Link><a className="se-text-link" href="https://surfingbird.itch.io/the-scion" target="_blank" rel="noreferrer">Full class on itch.io ↗</a></div></div>
          <Link to="/scion" className="se-art-link" aria-label="Read the Scion preview"><img src="/scion_banner.png" alt="The Scion, a hero who weaves magic and steel" width="1200" height="675" loading="lazy" /></Link>
        </article>
      </section>
      <section id="homebrew" className="se-library">
        <div className="se-section-heading"><div><p className="se-eyebrow">02 / Homebrew</p><h2>Homebrew <em>& tools</em></h2></div></div>
        <div className="se-library-layout"><div className="se-library-intro"><h3>Class reworks</h3><p>Our takes on a few of the core classes. Each page has the changes and revised abilities.</p></div><div className="se-resource-list">{reworks.map((item, index) => <Link key={item.to} to={item.to} className="se-resource"><span className="se-resource-number">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><span aria-hidden="true" className="se-arrow">→</span></Link>)}</div></div>
        <div className="se-tools"><Link to="/alternate-tests"><span className="se-eyebrow">Rules variant</span><h3>Alternate Tests <span aria-hidden="true">→</span></h3><p>An alternative approach to tests.</p></Link><Link to="/stamina-scaling-tweaks" search={{ s: undefined }}><span className="se-eyebrow">Interactive tool</span><h3>Stamina Scaling <span aria-hidden="true">→</span></h3><p>Compare stamina scaling and adjust the numbers.</p></Link></div>
      </section>
    </main>
  );
}
