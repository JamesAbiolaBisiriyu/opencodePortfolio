import type { Metadata } from "next";
import { Button, Card, Container, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About James Abiola Bisiriyu and his work",
  description:
    "Learn about James Abiola Bisiriyu, his Tollybis background, GOMYCODE training, skills, and thoughtful AI-native way of working.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <Section><Container>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{site.title}</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Building useful products with care.</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">{site.about.intro}</p>
      </Container></Section>
      <Section className="bg-white"><Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold">Background</h2>
          <div className="mt-5 space-y-4 text-muted">{site.about.background.map((item) => <p key={item}>{item}</p>)}</div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">{site.about.skillsByCategory.map((group) => <Card key={group.category}><h3 className="font-semibold">{group.category}</h3><ul className="mt-3 space-y-2 text-sm text-muted">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></Card>)}</div>
        </div>
      </Container></Section>
      <Section><Container className="max-w-3xl">
        <h2 className="text-2xl font-semibold">How I work with AI</h2>
        <p className="mt-5 text-lg leading-8 text-muted">{site.about.ai}</p>
        <div className="mt-8"><Button href="/contact">Start a conversation</Button></div>
      </Container></Section>
    </main>
  );
}
