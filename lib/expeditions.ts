import type { IconName } from "@/components/art/tool-icons";

export interface Expedition {
  when: string;
  title: string;
  role: string;
  desc: string;
  stack: readonly string[];
  icon: IconName;
}

export const expeditions: readonly Expedition[] = [
  {
    when: "DEC 2025 → NOW",
    title: "Otto — productivity, three ways",
    role: "Software Engineer · Sonoka.asia",
    desc: "Promoted from intern. Leading full-stack development of a productivity app spanning web, mobile, and desktop — type-safe data models, real-time sync, and end-to-end feature ownership from API to UI.",
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    icon: "Frontend",
  },
  {
    when: "JUN 2024 → DEC 2025",
    title: "WhatsApp → Resume, automated",
    role: "Full Stack Intern · Sonoka.asia",
    desc: "A SaaS platform that automates resume & portfolio creation through a WhatsApp chatbot. FastAPI services, PostgreSQL data layers, Docker-based deploys on AWS EC2/S3.",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
      "AWS",
      "WhatsApp API",
    ],
    icon: "Backend",
  },
  {
    when: "OPEN PROJECT · 2024",
    title: "Real-time Speech-to-Text",
    role: "Streaming audio pipeline",
    desc: "FastAPI + Whisper with chunked transcription, async preprocessing, and a low-latency WebSocket layer that doesn't drop syllables when the network blinks.",
    stack: [
      "Python",
      "FastAPI",
      "WebSockets",
      "Whisper",
      "Librosa",
      "NumPy",
    ],
    icon: "Async",
  },
  {
    when: "OPEN PROJECT · 2024",
    title: "Tech News Intelligence Scraper",
    role: "Async web scraping & classification",
    desc: "Async pipeline that collects, classifies, and summarizes tech news and company data. Custom content classifiers, modular services, and a regex layer that actually behaves itself.",
    stack: [
      "Python",
      "FastAPI",
      "Asyncio",
      "HTTPX",
      "BeautifulSoup",
      "Regex",
    ],
    icon: "AI",
  },
];
