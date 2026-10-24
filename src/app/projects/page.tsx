import type { Metadata } from "next";
import Link from "next/link";
import { Card, Container, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects by James Abiola Bisiriyu",
  description:
    "Explore NaijaCV AI and Tollybis digital presence, practical projects built with responsive design, APIs, AI, and automation.",
};

export default function ProjectsPage() {
  return <main id="main-content"><Section><Container>
    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Selected work</p>
    <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Projects built for useful outcomes.</h1>
    <div className="mt-12 grid gap-6 md:grid-cols-2">{site.projects.map((project) => <Card key={project.slug} className="flex flex-col">
      <p className="text-sm font-semibold text-accent">{project.type}</p><h2 className="mt-3 text-2xl font-semibold">{project.name}</h2><p className="mt-4 text-muted">{project.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <li className="rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-900" key={tag}>{tag}</li>)}</ul>
      <Link className="mt-8 font-semibold text-accent hover:underline" href={`/projects/${project.slug}`}>Read the case study →</Link>
    </Card>)}</div>
  </Container></Section></main>;
}
