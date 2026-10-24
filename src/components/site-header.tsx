import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded-md focus:bg-accent focus:px-4 focus:py-3 focus:text-accent-foreground"
        href="#main-content"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4"
      >
        <Link className="font-semibold tracking-tight" href="/">
          {site.name}
        </Link>
        <details className="relative sm:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold">
            Menu
          </summary>
          <div className="absolute right-0 top-14 z-10 min-w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            {site.navigation.map((item) => (
              <Link
                className="block rounded-md px-4 py-3 text-sm font-medium hover:bg-slate-100"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mt-1 block rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
              href="/contact"
            >
              Hire me
            </Link>
          </div>
        </details>
        <div className="hidden items-center gap-6 sm:flex">
          {site.navigation.map((item) => (
            <Link
              className="text-sm font-medium text-slate-600 hover:text-slate-950"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
            href="/contact"
          >
            Hire me
          </Link>
        </div>
      </nav>
    </header>
  );
}
