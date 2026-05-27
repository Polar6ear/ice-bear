import type { IconName } from "@/components/art/tool-icons";

export type SkillVariant = "" | "coral" | "mint" | "sun" | "pink";

export interface Skill {
  kind: string;
  variant: SkillVariant;
  tag: string;
  title: string;
  icon: IconName;
  desc: string;
  items: readonly string[];
}

export const skills: readonly Skill[] = [
  {
    kind: "Frontend",
    variant: "",
    tag: "01",
    title: "The Window",
    icon: "Frontend",
    desc: "What the user actually sees.",
    items: ["React", "TypeScript", "JavaScript"],
  },
  {
    kind: "Backend",
    variant: "mint",
    tag: "02",
    title: "The Engine Room",
    icon: "Backend",
    desc: "Where the work happens.",
    items: ["Node.js", "Express", "TypeScript", "FastAPI", "Python"],
  },
  {
    kind: "AI & Tools",
    variant: "coral",
    tag: "03",
    title: "The Brain",
    icon: "AI",
    desc: "RAG, LLMs, and bots that behave.",
    items: ["RAG Systems", "LLM Integrations", "Vercel AI SDK", "Chatbots"],
  },
  {
    kind: "Databases",
    variant: "sun",
    tag: "04",
    title: "Cold Storage",
    icon: "Database",
    desc: "Schemas that won't melt under load.",
    items: ["PostgreSQL", "Supabase", "SQLAlchemy", "Alembic"],
  },
  {
    kind: "Cloud & DevOps",
    variant: "pink",
    tag: "05",
    title: "The Sky",
    icon: "Cloud",
    desc: "Containers and clouds, no yaml soup.",
    items: ["AWS EC2", "S3", "Docker", "Git", "GitHub"],
  },
  {
    kind: "Async, Scraping & APIs",
    variant: "",
    tag: "06",
    title: "The Currents",
    icon: "Async",
    desc: "Concurrency without disrespect.",
    items: ["Asyncio", "HTTPX", "BeautifulSoup", "Regex", "WebSockets"],
  },
  {
    kind: "Exploring",
    variant: "mint",
    tag: "07",
    title: "The Wilderness",
    icon: "Explore",
    desc: "Currently on the bench.",
    items: ["Scraping @ scale", "ML basics"],
  },
  {
    kind: "Fuel",
    variant: "coral",
    tag: "08",
    title: "Cold Brew",
    icon: "Mug",
    desc: "Without which, nothing ships.",
    items: ["Black coffee", "More coffee"],
  },
];

export const traits = [
  { e: "🐻‍❄️", l: "Ships solo & in teams" },
  { e: "📦", l: "API → UI ownership" },
  { e: "🌊", l: "Async-first by default" },
  { e: "🧊", l: "Calm under deadlines" },
] as const;
