/**
 * Central site configuration.
 *
 * Update the values below to personalise the portfolio. The most common edit
 * is `tafvox.youtubeId` — paste the ID of the YouTube demo video (the part
 * after `?v=` in the URL) to wire up the featured project player.
 */

export const site = {
  name: "Daniel Tafur",
  role: "Full Stack AI Developer & AI Automation Architect",
  bio: "I build autonomous agents, RAG systems and AI-augmented workflows that eliminate manual enterprise processes through advanced LLM orchestration. My focus is turning slow, error-prone operations into reliable, self-running software.",
  socials: {
    github: "https://github.com/SantiTN77",
    linkedin:
      "https://www.linkedin.com/in/daniel-santiago-tafur-numpaque",
  },
} as const;

export const tafvox = {
  title: "Tafvox.com — AI Multimodal Copilot for AEC",
  url: "https://tafvox.com",
  description:
    "An advanced AI-driven conversational voice copilot designed for the Architecture, Engineering, and Construction (AEC) industry. It automates and manages onsite blueprint documentation, executes semantic RAG indexing, analyzes complex blueprints via computer vision (Gemini API), and flags version conflicts or errors in real-time through low-latency voice interactions.",
  // 👉 Paste the YouTube video ID here (e.g. "dQw4w9WgXcQ").
  // Leave empty to show a polished placeholder card.
  youtubeId: "",
  highlights: [
    "Low-latency conversational voice interface",
    "Computer vision blueprint analysis (Gemini API)",
    "Semantic RAG indexing & retrieval",
    "Real-time version conflict detection",
  ],
} as const;

export const experience = [
  {
    company: "MetaBiblioteca",
    role: "Full Stack AI & Automation",
    description:
      "Engineered scalable internal orchestration workflows using n8n and Python microservices. Deployed production-ready conversational chatbots currently servicing high-traffic public university platforms, optimizing document ingestion and auditing pipelines.",
    tags: ["n8n", "Python Microservices", "Conversational AI", "RAG Pipelines"],
  },
] as const;

export const techStack = [
  {
    category: "Backend & AI",
    items: [
      "Python",
      "FastAPI",
      "Gemini API",
      "OpenAI API",
      "RAG",
      "Prompt Engineering",
      "Qdrant (Vector DB)",
    ],
  },
  {
    category: "Infrastructure, Tools & MCPs",
    items: [
      "Model Context Protocol (MCP)",
      "Vercel API",
      "GitHub API",
      "Supabase",
      "Playwright (E2E)",
      "Agentic Validation",
    ],
  },
  {
    category: "Frontend & Workflow",
    items: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "n8n",
      "Make",
      "REST APIs",
      "Webhooks",
    ],
  },
] as const;
