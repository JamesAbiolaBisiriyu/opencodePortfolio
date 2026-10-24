export const site = {
  name: "James Abiola Bisiriyu",
  title: "AI-Native Full-Stack Developer",
  description:
    "James Abiola Bisiriyu builds practical, polished digital products and automation for small businesses and startups.",
  location: "Lagos, Nigeria",
  availability: "Open to remote work",
  email: "emperor2g@gmail.com",
  url: "https://[EDIT]",
  socials: {
    github: "https://github.com/JamesAbiolaBisiriyu",
    linkedin: "https://www.linkedin.com/in/james-bisiriyu-807655299/",
    twitter: "",
  },
  navigation: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    {
      title: "Product development",
      description:
        "From first idea to a reliable, responsive product that is ready for real users.",
    },
    {
      title: "Business automation",
      description:
        "Practical workflows that reduce repetitive work and give small teams more room to grow.",
    },
    {
      title: "AI-enabled experiences",
      description:
        "Useful AI features designed around a clear business outcome, not novelty.",
    },
  ],
  projects: [
    {
      slug: "naijacv-ai",
      name: "NaijaCV AI",
      type: "Full-stack AI product",
      description:
        "A focused CV builder that helps job seekers turn their experience into clearer, more confident applications.",
      tags: ["React", "APIs", "AI"],
    },
    {
      slug: "tollybis-digital-presence",
      name: "Tollybis digital presence",
      type: "Business website and automation",
      description:
        "An online foundation for a family frozen-food business, with automation opportunities built into the next stage of growth.",
      tags: ["Responsive design", "Automation", "Content"],
    },
  ],
  skills: ["React", "Bootstrap", "Responsive design", "Git", "APIs", "Databases"],
  about: {
    intro:
      "I am James Abiola Bisiriyu, an AI-native full-stack developer based in Lagos, Nigeria. I build practical digital products for small businesses and startups.",
    background: [
      "My work is grounded in hands-on problem solving for Tollybis, a family frozen-food business, where a clearer digital presence and better workflows can create room for growth.",
      "I strengthened my web development foundation through the GOMYCODE bootcamp and continue to learn by shipping useful, accessible products.",
    ],
    ai:
      "I use AI as a thoughtful engineering partner: to explore ideas, shorten feedback loops, and automate repetitive work while keeping product decisions, review, and accountability human.",
    skillsByCategory: [
      { category: "Frontend", items: ["React", "Bootstrap", "Responsive design"] },
      { category: "Backend", items: ["APIs", "Databases"] },
      { category: "Delivery", items: ["Git", "AI-assisted workflows"] },
    ],
  },
  projectDetails: {
    "naijacv-ai": {
      problem:
        "Job seekers need a clearer way to turn their experience into focused, confident applications.",
      approach:
        "I shaped a focused CV-building flow around structured information, readable output, and AI assistance that supports the applicant rather than obscuring their voice.",
      stack: ["React", "APIs", "AI"],
      outcome:
        "A practical foundation for producing clearer applications with less repetitive formatting work.",
      learned:
        "Useful AI products start with a narrow user problem and make the human decision-maker more effective.",
      link: "[EDIT]",
    },
    "tollybis-digital-presence": {
      problem:
        "A family frozen-food business needs a trustworthy online foundation and less repetitive operational work.",
      approach:
        "I focused on a responsive business presence first, while identifying automation opportunities that can support the next stage of growth.",
      stack: ["Responsive design", "Automation", "Content"],
      outcome:
        "A clearer digital starting point for Tollybis and a practical path toward more efficient workflows.",
      learned:
        "Small businesses benefit most from digital work that connects presentation with the everyday work behind it.",
      link: "[EDIT]",
    },
  },
  contact: {
    intro:
      "Tell me what you are building, what is getting in the way, and what a useful next step would look like.",
    responseTime: "[EDIT]",
  },
  resume: {
    summary:
      "AI-native full-stack developer building practical, polished digital products and automation for small businesses and startups.",
    experience: [
      {
        role: "AI-Native Full-Stack Developer",
        organization: "[EDIT]",
        period: "[EDIT]",
        details: "Building responsive products, APIs, and AI-enabled workflows.",
      },
      {
        role: "Digital Product Builder",
        organization: "Tollybis",
        period: "[EDIT]",
        details: "Developing a stronger digital presence and identifying automation opportunities.",
      },
    ],
    education: [
      {
        name: "Web Development Bootcamp",
        organization: "GOMYCODE",
        period: "[EDIT]",
      },
    ],
  },
  posts: [] as ReadonlyArray<{
    title: string;
    date: string;
    excerpt: string;
    href: string;
  }>,
} as const;
