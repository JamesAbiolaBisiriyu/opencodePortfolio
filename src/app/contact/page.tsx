import type { Metadata } from "next";
import { Button, Container, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact James Abiola Bisiriyu for your project",
  description:
    "Contact James Abiola Bisiriyu about product development, business automation, or an AI-enabled experience for your team.",
};

export default function ContactPage() {
  return <main id="main-content"><Section><Container className="grid gap-12 lg:grid-cols-2">
    <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contact</p><h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Let&apos;s make the next step useful.</h1><p className="mt-6 text-lg leading-8 text-muted">{site.contact.intro}</p><div className="mt-8 space-y-3 text-muted"><p>Email: <a className="text-accent hover:underline" href={`mailto:${site.email}`}>{site.email}</a></p><p>GitHub: <a className="text-accent hover:underline" href={site.socials.github}>{site.socials.github}</a></p><p>LinkedIn: <a className="text-accent hover:underline" href={site.socials.linkedin}>{site.socials.linkedin}</a></p>{site.socials.twitter ? <p>Twitter: <a className="text-accent hover:underline" href={site.socials.twitter}>{site.socials.twitter}</a></p> : null}</div></div>
    <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" action={`mailto:${site.email}`} method="post" encType="text/plain"><div className="space-y-5">
      <div><label className="font-semibold" htmlFor="name">Name</label><input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3" id="name" name="name" required aria-describedby="name-error" /><p className="sr-only" id="name-error">Name is required.</p></div>
      <div><label className="font-semibold" htmlFor="email">Email</label><input className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3" id="email" name="email" type="email" required aria-describedby="email-error" /><p className="sr-only" id="email-error">A valid email is required.</p></div>
      <div><label className="font-semibold" htmlFor="message">Message</label><textarea className="mt-2 min-h-36 w-full rounded-md border border-slate-300 px-3 py-3" id="message" name="message" required aria-describedby="message-error" /><p className="sr-only" id="message-error">Message is required.</p></div>
      <button className="inline-flex rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground" type="submit">Send an email</button>
    </div></form>
  </Container></Section></main>;
}
