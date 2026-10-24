import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, Container, Section } from "@/components/ui";
import { site } from "@/content/site";

export function generateStaticParams() {
  return site.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = site.projects.find((item) => item.slug === slug);
  return project ? { title: `${project.name} case study and approach`, description: project.description } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = site.projects.find((item) => item.slug === slug);
  const details = site.projectDetails[slug as keyof typeof site.projectDetails];
  if (!project || !details) notFound();
  return <main id="main-content"><Section><Container className="max-w-4xl">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{project.type}</p><h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{project.name}</h1><p className="mt-6 text-xl leading-8 text-muted">{project.description}</p>
    <div className="mt-12 grid gap-10 sm:grid-cols-2">{[["Problem", details.problem], ["Approach", details.approach], ["Stack", details.stack.join(", ")], ["Outcome", details.outcome], ["What I learned", details.learned]].map(([heading, text]) => <div key={heading}><h2 className="text-xl font-semibold">{heading}</h2><p className="mt-3 leading-7 text-muted">{text}</p></div>)}</div>
    <div className="mt-12"><Button href="/projects" variant="secondary">Back to projects</Button></div>
  </Container></Section></main>;
}
