import type { Metadata } from "next";
import { Container, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume of James Abiola Bisiriyu",
  description:
    "Print-friendly resume for James Abiola Bisiriyu, an AI-native full-stack developer with product, automation, and web skills.",
};

export default function ResumePage() {
  return <main id="main-content"><Section><Container className="max-w-4xl print:max-w-none print:px-0">
    <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{site.title}</p><h1 className="mt-3 text-4xl font-semibold">{site.name}</h1><p className="mt-3 text-muted">{site.location} · {site.availability}</p></div>
    <p className="mt-10 max-w-2xl text-lg leading-8 text-muted">{site.resume.summary}</p>
    <div className="mt-12 grid gap-12 sm:grid-cols-[1.4fr_1fr]"><div><h2 className="text-2xl font-semibold">Experience</h2><div className="mt-6 space-y-8">{site.resume.experience.map((item) => <div key={item.role}><h3 className="font-semibold">{item.role}</h3><p className="text-sm text-muted">{item.organization} · {item.period}</p><p className="mt-2 text-muted">{item.details}</p></div>)}</div></div><div><h2 className="text-2xl font-semibold">Education</h2><div className="mt-6 space-y-6">{site.resume.education.map((item) => <div key={item.name}><h3 className="font-semibold">{item.name}</h3><p className="text-sm text-muted">{item.organization} · {item.period}</p></div>)}</div><h2 className="mt-10 text-2xl font-semibold">Skills</h2><ul className="mt-4 flex flex-wrap gap-2">{site.skills.map((skill) => <li className="rounded-full bg-teal-50 px-3 py-1 text-sm text-teal-900" key={skill}>{skill}</li>)}</ul></div></div>
  </Container></Section></main>;
}
