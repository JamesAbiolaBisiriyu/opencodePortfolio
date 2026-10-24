# James Abiola Bisiriyu — Portfolio

Personal portfolio site for James Abiola Bisiriyu, an AI-native full-stack
developer based in Lagos, Nigeria. The site presents his background, selected
projects, services, contact details, and a print-friendly resume.

The project is intentionally content-first: page copy, navigation, project
summaries, contact details, and resume information live in one typed content
object instead of being scattered across page components.

## Contents

- [Features](#features)
- [Technology](#technology)
- [Routes](#routes)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Updating site content](#updating-site-content)
- [Adding a project](#adding-a-project)
- [Contact form behavior](#contact-form-behavior)
- [Styling and responsive behavior](#styling-and-responsive-behavior)
- [Accessibility](#accessibility)
- [Production build and deployment](#production-build-and-deployment)
- [Validation](#validation)
- [Known placeholders](#known-placeholders)
- [Troubleshooting](#troubleshooting)

## Features

- Responsive portfolio layout from 320px and up.
- Shared site header with desktop navigation and a mobile menu.
- Shared footer with links to the resume and contact page.
- About page covering background, skills, and AI-assisted working practices.
- Projects index with cards for:
  - NaijaCV AI
  - Tollybis digital presence
- Dynamic project case-study pages with:
  - Problem
  - Approach
  - Stack
  - Outcome
  - What I learned
- Static project generation with `generateStaticParams`.
- Custom not-found page with branded navigation links.
- Blog route with an empty-state message until posts are added.
- Contact page with:
  - Email link
  - GitHub link
  - LinkedIn link
  - Optional Twitter link
  - Accessible required fields
- Print-friendly resume page with print-specific CSS.
- Per-page metadata for titles and descriptions.
- No secrets or API credentials are required by the application.

## Technology

### Runtime and framework

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Node.js 18.18 or newer is recommended for current Next.js releases

### Styling and build tooling

- [Tailwind CSS](https://tailwindcss.com/) v4
- `@tailwindcss/postcss`
- PostCSS
- ESLint with the Next.js configuration

### Content and optional MDX support

The Next.js configuration allows `.md` and `.mdx` page extensions, and the
repository includes MDX-related dependencies. The current pages are regular
TypeScript React pages; no blog MDX files are required for the current empty
blog state.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page and primary call to action |
| `/about` | Bio, background, skills, and AI working approach |
| `/projects` | Project card grid |
| `/projects/naijacv-ai` | NaijaCV AI case study |
| `/projects/tollybis-digital-presence` | Tollybis case study |
| `/blog` | Blog index or “Posts coming soon” state |
| `/contact` | Contact details and message form |
| `/resume` | Experience, education, skills, and print view |
| Any unknown route | Branded 404 page |

The main navigation is defined in `src/content/site.ts`. The footer also links
to `/resume`, so that route is part of the supported site surface even though
it is not in the primary header navigation.

## Project structure

```text
.
├── src
│   ├── app
│   │   ├── about/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── projects/[slug]/page.tsx
│   │   ├── resume/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── ui.tsx
│   └── content
│       └── site.ts
├── next.config.ts
├── postcss.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

### Important files

- `src/content/site.ts` — canonical site data and editable copy.
- `src/app/layout.tsx` — global metadata, header, footer, and global styles.
- `src/components/site-header.tsx` — responsive primary navigation.
- `src/components/site-footer.tsx` — footer navigation and copyright.
- `src/components/ui.tsx` — small shared `Container`, `Section`, `Button`,
  and `Card` primitives.
- `src/app/projects/[slug]/page.tsx` — generated case-study pages and unknown
  slug handling.
- `src/app/globals.css` — design tokens, focus styles, selection styles, and
  print rules.

## Getting started

### Prerequisites

- Node.js 18.18 or newer
- npm 9 or newer
- Git, if cloning the repository

### Install dependencies

From the project root:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. Next.js
supports fast refresh, so changes to pages and content should appear
automatically during development.

### Start the production server locally

Build first, then start the generated application:

```bash
npm run build
npm run start
```

The production server is available at
[http://localhost:3000](http://localhost:3000) by default.

## Available commands

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies from the lockfile and manifest |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Compile, type-check, and generate the production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint across the repository |

## Updating site content

Most personal and site-specific content belongs in
[`src/content/site.ts`](./src/content/site.ts).

The `site` object currently contains:

- Identity:
  - `name`
  - `title`
  - `description`
  - `location`
  - `availability`
- Contact:
  - `email`
  - `socials.github`
  - `socials.linkedin`
  - `socials.twitter`
- Navigation:
  - `navigation`
- Services:
  - `services`
- Project cards:
  - `projects`
- About page content:
  - `about`
- Project case-study content:
  - `projectDetails`
- Resume content:
  - `resume`
- Blog entries:
  - `posts`

After changing content, run:

```bash
npm run build
```

This catches TypeScript errors and confirms that project pages can be
pre-rendered successfully.

### Metadata

Each page exports its own `metadata` object. When adding a page:

1. Add a unique, descriptive title.
2. Add a useful description suitable for search previews.
3. Keep the metadata aligned with the visible page content.
4. Do not place private information or credentials in metadata.

The root metadata and metadata template are defined in
`src/app/layout.tsx`.

## Adding a project

Project data is split into two related entries in `site.ts`.

### 1. Add the project card

Add an object to `site.projects`:

```ts
{
  slug: "my-project",
  name: "My project",
  type: "Project type",
  description: "A concise description of the project.",
  tags: ["React", "APIs"],
}
```

### 2. Add the case-study details

Add a matching key to `site.projectDetails`:

```ts
"my-project": {
  problem: "The user or business problem addressed.",
  approach: "The approach taken to address it.",
  stack: ["React", "APIs"],
  outcome: "The observed or intended outcome.",
  learned: "A specific lesson from the work.",
  link: "[EDIT]",
},
```

The dynamic route automatically includes the slug in
`generateStaticParams()`. Unknown slugs call `notFound()` and render the
custom 404 page.

Only include outcomes that are known and supportable. Use `[EDIT]` for
information that still needs to be supplied instead of inventing metrics.

## Contact form behavior

The contact page uses a standard HTML form with:

- A required name field
- A required email field
- A required message field
- Explicit labels
- Native browser validation
- Visually hidden error descriptions connected with `aria-describedby`

The form submits through a `mailto:` action using `site.email`. This keeps the
project backend-free, but it depends on the visitor having a mail application
configured. For a production workflow that needs reliable delivery, replace
the mailto action with a server-side endpoint or trusted form provider. Do not
put provider API keys in client-side code.

To update the contact details, edit:

```ts
email: "your-address@example.com",
socials: {
  github: "https://github.com/your-handle",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  twitter: "https://twitter.com/your-handle",
},
```

Leave `socials.twitter` empty if no public Twitter/X profile should be shown.
The contact page omits that link when it is empty.

## Styling and responsive behavior

Tailwind utility classes provide the page layout and component styling.
Global design tokens are declared in `src/app/globals.css`:

- `--background`
- `--foreground`
- `--muted`
- `--accent`
- `--accent-foreground`

The shared UI primitives in `src/components/ui.tsx` should be reused when
building new pages:

- `Container` keeps content centered and readable.
- `Section` applies consistent vertical spacing.
- `Button` provides the two site button treatments.
- `Card` provides the shared bordered surface used for projects and states.

Pages use responsive Tailwind breakpoints and flexible layouts. When adding
new content, test narrow widths around 320px as well as desktop widths. Avoid
fixed-width content that can cause horizontal scrolling.

## Accessibility

The site includes:

- A skip-to-content link in the header.
- A labeled primary navigation landmark.
- A single main content landmark with `id="main-content"` on each page.
- Visible focus outlines for links and buttons.
- Semantic headings and lists.
- Explicit form labels and required controls.
- Accessible navigation on the not-found page.
- Print styles that remove the site chrome from the resume.

When adding UI:

1. Keep heading levels in a logical order.
2. Use links for navigation and buttons for actions.
3. Preserve keyboard focus visibility.
4. Add labels to every form control.
5. Avoid using color as the only way to communicate meaning.
6. Check the layout at keyboard zoom and narrow viewport widths.

## Production build and deployment

The app uses standard Next.js output and can be deployed to platforms that
support Node.js applications, including Vercel and self-hosted environments.

Typical deployment steps are:

```bash
npm ci
npm run build
npm run start
```

For a managed deployment, configure:

- The Node.js version supported by the deployment platform.
- The build command: `npm run build`.
- The start command: `npm run start`, if the platform requires it.
- The project root, if deploying from a monorepo.

There are currently no required runtime environment variables. If a future
integration adds environment variables:

1. Document their names and purpose here.
2. Keep secrets in the hosting provider's secret manager.
3. Do not commit `.env` files containing real credentials.
4. Use `NEXT_PUBLIC_` only for values that are safe to expose in browser code.

Before deploying, replace the placeholder `site.url` value in
`src/content/site.ts` with the real canonical site URL. The root layout uses
that value for `metadataBase`.

## Validation

Run the production build before opening a pull request:

```bash
npm run build
```

Run linting when modifying JSX, TypeScript, or styling:

```bash
npm run lint
```

For a manual route smoke test after `npm run start`, check:

```text
/
/about
/projects
/projects/naijacv-ai
/projects/tollybis-digital-presence
/blog
/contact
/resume
/an-unknown-route
```

The first eight routes should render successfully. The final route should
render the branded not-found page with a 404 response.

## Known placeholders

The content model intentionally uses `[EDIT]` where project information has
not yet been supplied. Review these values before publishing:

- `site.url`
- Resume organization and dates
- GOMYCODE education date
- Contact response time
- Project external links

The Twitter/X URL is currently empty because no Twitter handle was provided.
It is not rendered on the contact page until a real URL is added.

Do not replace unknown facts with invented numbers, employers, dates, client
claims, testimonials, or performance metrics.

## Troubleshooting

### Port 3000 is already in use

Start Next.js on another port:

```bash
npm run dev -- --port 3001
```

For the production server:

```bash
npm run start -- --port 3001
```

### Changes are not appearing

Stop the development server and restart it. If the generated build is stale,
remove only the generated `.next` directory and rebuild:

```bash
npm run build
```

The `.next` directory is generated output and should not be committed.

### A project route returns not found

Check that the same slug exists in both:

- `site.projects`
- `site.projectDetails`

The slug must be URL-safe and must match exactly.

### Contact links look incorrect

Check `email` and the three `socials` values in `src/content/site.ts`.
External social links should include their complete `https://` URL. Empty
optional social values are intentionally not rendered.

## License

No license has been declared for this project yet. Add a license file and
update this section before distributing the source publicly.
