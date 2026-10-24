import Link from "next/link";
import { Container, Section } from "@/components/ui";

export default function NotFound() {
  return <main id="main-content"><Section><Container className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">404</p><h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">That page is not here.</h1><p className="mt-6 text-lg text-muted">The link may be out of date, but there is plenty more to explore.</p><nav aria-label="Helpful links" className="mt-8 flex flex-wrap gap-5 font-semibold text-accent"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></nav></Container></Section></main>;
}
