import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}.</p>
        <div className="flex gap-5">
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
