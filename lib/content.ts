/**
 * Bilingual content source for the portfolio.
 *
 * Translated copy lives in `dict` (en / es). Language-neutral data (URLs,
 * image paths, tech names) lives in the shared constants and is merged in by
 * `getContent(lang)`, so there is a single source of truth per value.
 */

export const LANGS = ["en", "es"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

// ---------------- language-neutral data ----------------
const socials = {
  github: "https://github.com/SantiTN77",
  linkedin: "https://www.linkedin.com/in/danielsantiagotafur/",
};

const tafvoxMedia = {
  url: "https://tafvox.com",
  youtubeId: "BpHpvWGqkKs",
};

const flows = (lang: Lang) => ({
  rag: `/automations/rag-chatbot-flow-${lang}.svg`,
  mockup: `/automations/chatbot-live-${lang}.svg`,
  logs: `/automations/server-logs-flow-${lang}.svg`,
});

const deploymentUrls = [
  "https://coruniamericana.metacatalogo.org/",
  "https://biblioteca.ecci.edu.co/",
  "https://repositorio.unimagdalena.edu.co/",
];

const deploymentNames = [
  "Coruniamericana",
  "Biblioteca ECCI",
  "Repositorio Unimagdalena",
];

const experienceTags = [
  "n8n",
  "Python Microservices",
  "Conversational AI",
  "RAG Pipelines",
];

const ragStack = [
  "n8n",
  "Embeddings",
  "Chunking",
  "RAG",
  "Qdrant",
  "LLM · GPT-4o / Gemini",
];

const logsStack = [
  "n8n",
  "SSH",
  "Cron",
  "Indexing",
  "Gmail API",
  "Slack / Telegram",
];

const ghostWriter = {
  url: "https://agent-ghost-writer.vercel.app/dashboard",
  stack: [
    "Model Context Protocol (MCP)",
    "Qdrant Hybrid Search (RRF)",
    "Gemini Embeddings",
    "n8n",
    "Next.js",
    "Supabase",
  ],
  pageUrls: [
    "https://agent-ghost-writer.vercel.app/dashboard",
    "https://agent-ghost-writer.vercel.app/inspector",
    "https://agent-ghost-writer.vercel.app/flow",
  ],
};

const orionAi = {
  url: "https://orion-ai-jade.vercel.app",
  githubUrl: "https://github.com/SantiTN77/orion-ai",
  stack: ["Next.js", "Edge Functions", "FastAPI", "OpenRouter", "TypeScript"],
};

const projectsData = [ghostWriter, orionAi];

const techItems = [
  [
    "Python",
    "FastAPI",
    "Gemini API",
    "OpenAI API",
    "RAG",
    "Prompt Engineering",
    "Qdrant (Vector DB)",
  ],
  [
    "Model Context Protocol (MCP)",
    "Vercel API",
    "GitHub API",
    "Supabase",
    "Playwright (E2E)",
    "Agentic Validation",
  ],
  [
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "n8n",
    "Make",
    "REST APIs",
    "Webhooks",
  ],
];

// ---------------- translated copy ----------------
const dict = {
  en: {
    meta: {
      title: "Daniel Tafur — Full Stack AI Developer & Automation Architect",
      description:
        "I design and ship autonomous agents, RAG systems and AI-augmented workflows that eliminate manual enterprise processes through advanced LLM orchestration.",
    },
    nav: {
      work: "Work",
      projects: "Projects",
      experience: "Experience",
      automations: "Automations",
      stack: "Stack",
    },
    hero: {
      badge: "Available for AI automation projects",
      role: "Full Stack AI Developer & AI Automation Architect",
      bio: "I build autonomous agents, RAG systems and AI-augmented workflows that eliminate manual enterprise processes through advanced LLM orchestration. My focus is turning slow, error-prone operations into reliable, self-running software.",
    },
    featured: {
      sectionTitle: "Featured Project",
      sectionSubtitle: "The flagship build — where multimodal AI meets the field.",
      badge: "Featured",
      title: "Tafvox.com — AI Multimodal Copilot for AEC",
      description:
        "An advanced AI-driven conversational voice copilot designed for the Architecture, Engineering, and Construction (AEC) industry. It automates and manages onsite blueprint documentation, executes semantic RAG indexing, analyzes complex blueprints via computer vision (Gemini API), and flags version conflicts or errors in real-time through low-latency voice interactions.",
      visit: "Visit live site",
      comingSoon: "Demo video — coming soon",
      videoNote:
        'Demo recorded when the project was still branded "Rufat AI" — same voice architecture & AEC use-case, now shipped as Tafvox.',
      highlights: [
        "Low-latency conversational voice interface",
        "Computer vision blueprint analysis (Gemini API)",
        "Semantic RAG indexing & retrieval",
        "Real-time version conflict detection",
      ],
    },
    projects: {
      sectionTitle: "Side Projects",
      sectionSubtitle: "Independent builds, shipped end-to-end outside client work.",
      liveBadge: "Live",
      codeCta: "View code",
      items: [
        {
          title: "Agentic Ghost-Writer — Evolving Code Memory",
          badge: "Hackathon build",
          description:
            "An MCP (Model Context Protocol) server that gives coding agents long-term memory. It intercepts a live runtime error from an AI agent, embeds it, and runs a hybrid dense + sparse search (RRF-fused) over a Qdrant collection of 50+ past success contexts — auto-correcting the agent's next step before a human ever sees the failure. Orchestrated with n8n, embedded with Gemini, logged to Supabase in real time, and visualized in a live observability dashboard with a one-click error-recovery demo.",
          cta: "Open live dashboard",
          pagesLabel: "Explore the system",
          pages: [
            { name: "Health Dashboard" },
            { name: "Context Inspector" },
            { name: "Interception Flow" },
          ],
        },
        {
          title: "Orion AI — Voice Agent",
          badge: null as string | null,
          description:
            "A conversational voice agent built on the Next.js Edge runtime, talking to LLMs through OpenRouter for low-latency, single-deploy inference without a separate backend service.",
          cta: "Visit live demo",
          pagesLabel: null as string | null,
          pages: [] as { name: string }[],
        },
      ],
    },
    experience: {
      sectionTitle: "Enterprise Experience & Automations",
      sectionSubtitle: "Core engineering outcomes shipped to production.",
      items: [
        {
          company: "MetaBiblioteca",
          role: "Full Stack AI & Automation",
          description:
            "Engineered scalable internal orchestration workflows using n8n and Python microservices. Deployed production-ready conversational chatbots currently servicing high-traffic public university platforms, optimizing document ingestion and auditing pipelines.",
        },
      ],
    },
    automations: {
      sectionTitle: "AI Automations & n8n Workflows",
      sectionSubtitle:
        "Autonomous agents and automations in production with n8n, RAG and LLM orchestration.",
      note: "Projects developed in my current role at MetaBiblioteca. Due to internal confidentiality policies I don't share the full n8n flows or corporate data: the diagrams are reference representations of the real architecture. The deployments, however, are public and verifiable — the AI assistant appears at the bottom-right of each site.",
      metaBadge: "MetaBiblioteca",
      productionBadge: "In production",
      flowLabel: "n8n workflow · reference diagram",
      mockupLabel: "AI assistant deployed on the catalog — reference view",
      deployHeading: "Deployed in production · public & verifiable",
      projects: [
        {
          title: "RAG University Chatbot — AI Librarian 24/7",
          description:
            "A conversational assistant deployed across university catalogs and repositories. The architecture, orchestrated in n8n, ingests documents, splits them into overlapping chunks, generates embeddings and indexes them in a vector database (Qdrant). On each query it runs semantic retrieval (RAG) and orchestrates the LLM to deliver grounded, cited answers, serving thousands of students 24/7.",
        },
        {
          title: "Server Monitoring — Logs, Stats & Reports",
          description:
            "An n8n workflow that runs scheduled remote SSH commands across the servers, collects and parses logs and metrics (CPU, RAM, uptime, errors), indexes and stores them for history, and generates automatic reports dispatched via Gmail (PDF/CSV attachment) plus Slack/Telegram notifications. It turns manual monitoring into an autonomous, auditable process.",
        },
      ],
      deploymentLabels: [
        "Catalog + AI assistant",
        "Bibliographic assistant",
        "Repository + RAG",
      ],
    },
    techStack: {
      sectionTitle: "Tech Stack, Tools & Paradigms",
      sectionSubtitle:
        "The toolkit behind autonomous, production-grade AI systems.",
      categories: [
        "Backend & AI",
        "Infrastructure, Tools & MCPs",
        "Frontend & Workflow",
      ],
    },
    footer: {
      headline: "Let's build something autonomous.",
      sub: "Open to AI automation and full-stack engineering collaborations.",
      getInTouch: "Get in touch",
      built: "Built with Next.js & Tailwind CSS.",
    },
  },
  es: {
    meta: {
      title: "Daniel Tafur — Desarrollador Full Stack de IA & Arquitecto de Automatización",
      description:
        "Diseño y despliego agentes autónomos, sistemas RAG y flujos aumentados con IA que eliminan procesos manuales en la empresa mediante orquestación avanzada de LLMs.",
    },
    nav: {
      work: "Proyecto",
      projects: "Proyectos",
      experience: "Experiencia",
      automations: "Automatizaciones",
      stack: "Stack",
    },
    hero: {
      badge: "Disponible para proyectos de automatización con IA",
      role: "Desarrollador Full Stack de IA & Arquitecto de Automatización IA",
      bio: "Construyo agentes autónomos, sistemas RAG y flujos aumentados con IA que eliminan procesos manuales en la empresa mediante orquestación avanzada de LLMs. Mi enfoque es convertir operaciones lentas y propensas a errores en software confiable que se ejecuta solo.",
    },
    featured: {
      sectionTitle: "Proyecto Destacado",
      sectionSubtitle:
        "El proyecto insignia — donde la IA multimodal llega al terreno.",
      badge: "Destacado",
      title: "Tafvox.com — Copiloto Multimodal de IA para AEC",
      description:
        "Un copiloto de voz conversacional avanzado impulsado por IA para la industria de Arquitectura, Ingeniería y Construcción (AEC). Automatiza y gestiona la documentación de planos en obra, ejecuta indexación semántica RAG, analiza planos complejos mediante visión por computador (Gemini API) y detecta conflictos de versión o errores en tiempo real mediante interacciones de voz de baja latencia.",
      visit: "Ver sitio en vivo",
      comingSoon: "Video demo — próximamente",
      videoNote:
        'Demo grabada cuando el proyecto se llamaba «Rufat AI» — misma arquitectura de voz y caso de uso AEC, ahora como Tafvox.',
      highlights: [
        "Interfaz de voz conversacional de baja latencia",
        "Análisis de planos con visión por computador (Gemini API)",
        "Indexación y recuperación semántica RAG",
        "Detección de conflictos de versión en tiempo real",
      ],
    },
    projects: {
      sectionTitle: "Proyectos Personales",
      sectionSubtitle: "Builds independientes, llevados de cero a producción fuera del trabajo con clientes.",
      liveBadge: "En vivo",
      codeCta: "Ver código",
      items: [
        {
          title: "Agentic Ghost-Writer — Memoria Evolutiva de Código",
          badge: "Proyecto de hackathon",
          description:
            "Un servidor MCP (Model Context Protocol) que le da memoria de largo plazo a agentes de codificación. Intercepta en tiempo real el error que lanza un agente de IA, lo embebe y ejecuta una búsqueda híbrida densa + dispersa (fusionada con RRF) sobre una colección Qdrant con más de 50 contextos de éxito previos — auto-corrigiendo el siguiente paso del agente antes de que un humano vea el error. Orquestado con n8n, embebido con Gemini, registrado en tiempo real en Supabase y visualizado en un dashboard de observabilidad en vivo con una demo de recuperación de errores con un solo clic.",
          cta: "Ver dashboard en vivo",
          pagesLabel: "Explorar el sistema",
          pages: [
            { name: "Dashboard de Salud" },
            { name: "Inspector de Contexto" },
            { name: "Flujo de Intercepción" },
          ],
        },
        {
          title: "Orion AI — Agente de Voz",
          badge: null as string | null,
          description:
            "Un agente de voz conversacional construido sobre el runtime Edge de Next.js, que se comunica con LLMs a través de OpenRouter para una inferencia de baja latencia en un único despliegue, sin backend separado.",
          cta: "Ver demo en vivo",
          pagesLabel: null as string | null,
          pages: [] as { name: string }[],
        },
      ],
    },
    experience: {
      sectionTitle: "Experiencia Empresarial & Automatizaciones",
      sectionSubtitle: "Resultados de ingeniería llevados a producción.",
      items: [
        {
          company: "MetaBiblioteca",
          role: "Full Stack IA & Automatización",
          description:
            "Desarrollé flujos de orquestación internos escalables con n8n y microservicios en Python. Desplegué chatbots conversacionales en producción que hoy atienden plataformas universitarias públicas de alto tráfico, optimizando la ingesta de documentos y los pipelines de auditoría.",
        },
      ],
    },
    automations: {
      sectionTitle: "Automatizaciones IA & Flujos n8n",
      sectionSubtitle:
        "Agentes y automatizaciones en producción con n8n, RAG y orquestación de LLMs.",
      note: "Proyectos desarrollados en mi rol actual en MetaBiblioteca. Por políticas internas de confidencialidad no comparto los flujos n8n completos ni datos corporativos: los diagramas son representaciones de referencia de la arquitectura real. Los despliegues, en cambio, son públicos y verificables — el asistente IA aparece abajo a la derecha en cada sitio.",
      metaBadge: "MetaBiblioteca",
      productionBadge: "En producción",
      flowLabel: "n8n workflow · diagrama de referencia",
      mockupLabel: "Asistente IA desplegado en el catálogo — vista de referencia",
      deployHeading: "Desplegado en producción · público y verificable",
      projects: [
        {
          title: "Chatbot RAG Universitario — Bibliotecólogo IA 24/7",
          description:
            "Asistente conversacional desplegado sobre catálogos y repositorios universitarios. La arquitectura, orquestada en n8n, ingesta documentos, los divide en chunks con solapamiento, genera embeddings y los indexa en una base vectorial (Qdrant). En cada consulta ejecuta recuperación semántica (RAG) y orquesta el LLM para entregar respuestas fundamentadas y citadas, atendiendo a miles de estudiantes 24/7.",
        },
        {
          title: "Monitoreo de Servidores — Logs, Estadísticas & Reportes",
          description:
            "Workflow de n8n que ejecuta comandos remotos por SSH de forma programada sobre los servidores, recolecta y parsea logs y métricas (CPU, RAM, uptime, errores), los indexa y almacena para histórico, y genera reportes automáticos que despacha por Gmail (PDF/CSV adjunto) junto con notificaciones a Slack/Telegram. Convierte el monitoreo manual en un proceso autónomo y auditable.",
        },
      ],
      deploymentLabels: [
        "Catálogo + Asistente IA",
        "Asistente bibliográfico",
        "Repositorio + RAG",
      ],
    },
    techStack: {
      sectionTitle: "Stack Técnico, Herramientas & Paradigmas",
      sectionSubtitle:
        "El conjunto de herramientas detrás de sistemas de IA autónomos y listos para producción.",
      categories: [
        "Backend & IA",
        "Infraestructura, Herramientas & MCPs",
        "Frontend & Workflow",
      ],
    },
    footer: {
      headline: "Construyamos algo autónomo.",
      sub: "Abierto a colaboraciones de automatización con IA e ingeniería full-stack.",
      getInTouch: "Hablemos",
      built: "Hecho con Next.js & Tailwind CSS.",
    },
  },
} as const;

// ---------------- assembled content ----------------
export function getContent(lang: Lang) {
  const d = dict[lang];
  const flow = flows(lang);
  return {
    lang,
    meta: d.meta,
    nav: { ...d.nav, githubUrl: socials.github },
    projects: {
      sectionTitle: d.projects.sectionTitle,
      sectionSubtitle: d.projects.sectionSubtitle,
      liveBadge: d.projects.liveBadge,
      codeCta: d.projects.codeCta,
      items: d.projects.items.map((item, i) => {
        const data = projectsData[i];
        const pageUrls = "pageUrls" in data ? data.pageUrls : [];
        return {
          ...item,
          url: data.url,
          stack: data.stack,
          githubUrl: "githubUrl" in data ? data.githubUrl : null,
          pages: item.pages.map((p, j) => ({ ...p, url: pageUrls[j] })),
        };
      }),
    },
    hero: {
      ...d.hero,
      name: "Daniel Tafur",
      github: "GitHub",
      linkedin: "LinkedIn",
      githubUrl: socials.github,
      linkedinUrl: socials.linkedin,
    },
    featured: {
      ...d.featured,
      url: tafvoxMedia.url,
      youtubeId: tafvoxMedia.youtubeId,
    },
    experience: {
      sectionTitle: d.experience.sectionTitle,
      sectionSubtitle: d.experience.sectionSubtitle,
      items: d.experience.items.map((item) => ({
        ...item,
        tags: experienceTags,
      })),
    },
    automations: {
      sectionTitle: d.automations.sectionTitle,
      sectionSubtitle: d.automations.sectionSubtitle,
      note: d.automations.note,
      metaBadge: d.automations.metaBadge,
      productionBadge: d.automations.productionBadge,
      flowLabel: d.automations.flowLabel,
      mockupLabel: d.automations.mockupLabel,
      deployHeading: d.automations.deployHeading,
      projects: [
        {
          ...d.automations.projects[0],
          stack: ragStack,
          flow: flow.rag,
          mockup: flow.mockup,
          live: true,
        },
        {
          ...d.automations.projects[1],
          stack: logsStack,
          flow: flow.logs,
          mockup: null as string | null,
          live: false,
        },
      ],
      deployments: deploymentNames.map((name, i) => ({
        name,
        url: deploymentUrls[i],
        label: d.automations.deploymentLabels[i],
      })),
    },
    techStack: {
      sectionTitle: d.techStack.sectionTitle,
      sectionSubtitle: d.techStack.sectionSubtitle,
      groups: d.techStack.categories.map((category, i) => ({
        category,
        items: techItems[i],
      })),
    },
    footer: {
      ...d.footer,
      name: "Daniel Tafur",
      githubUrl: socials.github,
      linkedinUrl: socials.linkedin,
    },
  };
}

export type Content = ReturnType<typeof getContent>;
