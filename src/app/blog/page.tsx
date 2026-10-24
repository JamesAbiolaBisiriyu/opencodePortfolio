import type { Metadata } from "next";
import Link from "next/link";
import { Card, Container, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog about products, AI, and practical engineering",
  description:
    "Read ideas from James Abiola Bisiriyu about building practical products, responsible AI workflows, and digital growth for small teams.",
};

export default function BlogPage() {
  return <main id="main-content"><Section><Container>
    <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Notes on building useful things.</h1>
    {site.posts.length ? <div className="mt-12 grid gap-6 md:grid-cols-2">{site.posts.map((post) => <Card key={post.href}><p className="text-sm text-muted">{post.date}</p><h2 className="mt-3 text-2xl font-semibold"><Link href={post.href}>{post.title}</Link></h2><p className="mt-4 text-muted">{post.excerpt}</p></Card>)}</div> : <Card className="mt-12 max-w-2xl"><h2 className="text-2xl font-semibold">Posts coming soon</h2><p className="mt-3 text-muted">I am preparing notes on product development, AI-assisted workflows, and lessons from shipping.</p><Link className="mt-6 inline-block font-semibold text-accent hover:underline" href="/">Return home →</Link></Card>}
  </Container></Section></main>;
}
