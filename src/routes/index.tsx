import { Link, createFileRoute } from "@tanstack/react-router";
import "@/styles.css";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-3">
          {/* <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
            Welcome
          </p> */}
          <h1 className="text-3xl font-semibold tracking-[0.08em] sm:text-4xl">
            Draw Steel Echoes
          </h1>
          <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
            A compendium of Draw Steel homebrew made by SurfingBird, including
            the Scion.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="block">
              <div className="relative">
                <img
                  src="/Scion_itch_banner.png"
                  alt="The Scion banner"
                  className="h-48 w-full object-cover sm:h-64"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="flex flex-col gap-3 p-5 sm:p-6">
                {/* <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                  Featured
                </span> */}
                <h2 className="text-xl font-semibold sm:text-2xl">Scion</h2>
                <p className="text-sm text-gray-600 sm:text-base">
                  Become the scion of an ancient mystic art. Weave magic and
                  steel into a single, fluid dance.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-900">
                  <Link to="/scion" className="underline decoration-gray-300">
                    Free preview →
                  </Link>
                  <a
                    href="https://surfingbird.itch.io/the-scion"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-gray-300"
                  >
                    Full class on itch.io →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/conduit-rebound"
            className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">Conduit Rebound</h3>
            <p className="text-sm text-gray-600">
              A Minimal Rework for Conduit.
            </p>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Open →
            </span>
          </Link>

          <Link
            to="/shadow-reshade"
            className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">Shadow Reshade</h3>
            <p className="text-sm text-gray-600">
              A Minimal Rework for Shadow.
            </p>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Open →
            </span>
          </Link>

          <Link
            to="/fury-recharged"
            className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">Fury Recharged</h3>
            <p className="text-sm text-gray-600">
              A Minimal Rework for Fury.
            </p>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Open →
            </span>
          </Link>

          <Link
            to="/censor-reformed"
            className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">Censor Reformed</h3>
            <p className="text-sm text-gray-600">
              A Minimal Rework for Censor.
            </p>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Open →
            </span>
          </Link>
        </section>
      </main>
    </div>
  );
}
