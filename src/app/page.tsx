import Link from "next/link";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {site.location} · {site.availability}
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-7xl">
          {site.title} freelancing for small businesses and startups.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          I turn ambitious ideas into useful, accessible web products with
          thoughtful engineering and AI-assisted workflows.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground"
            href="/projects"
          >
            View my work
          </Link>
          <Link
            className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900"
            href="/contact"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
