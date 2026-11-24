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
  demo: "tafvox",
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
  ["Google ADK", "Vertex AI · Gemini Live", "Multimodal RAG", "Cloud Run", "Multi-tenant RLS"],
  ["n8n", "Python microservices", "Conversational AI", "RAG pipelines"],
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

const gcpProjectsData = [
  {
    url: "https://enterprise-adk-a2a-mcp.vercel.app",
    repo: "https://github.com/SantiTN77/enterprise-adk-a2a-mcp",
    demo: "adk",
    stack: ["Google ADK", "A2A", "MCP", "Vertex AI Gemini", "Cloud Run", "Secret Manager", "Terraform", "Next.js BFF"],
  },
  {
    url: "https://hybrid-rag-llmops-gcp-web.vercel.app",
    repo: "https://github.com/SantiTN77/hybrid-rag-llmops-gcp",
    demo: "rag",
    stack: ["Firestore Vector Search", "BM25 + RRF", "Vertex AI Gemini", "Cloud Run Jobs", "Cloud Workflows", "LLMOps Gate", "Terraform"],
  },
  {
    url: "https://gcp-ai-reference-architectures.vercel.app",
    repo: "https://github.com/SantiTN77/gcp-ai-reference-architectures",
    demo: "arch",
    stack: ["Reference Architectures", "ADRs", "FinOps", "STRIDE", "OWASP LLM Top 10", "VPC-SC", "Cloud DLP"],
  },
];

const techItems = [
  [
    "Google Cloud (GCP)",
    "Vertex AI",
    "Google ADK",
    "Cloud Run",
    "Terraform",
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
      title: "Daniel Tafur — AI Agent Engineer · AI Solutions Architect (GCP)",
      description:
        "AI Agent Engineer and AI Solutions Architect on Google Cloud: multi-agent systems with ADK, A2A and MCP, production RAG with LLMOps gates, and secure serverless architecture on Cloud Run.",
    },
    nav: {
      gcp: "GCP AI",
      work: "Work",
      experience: "Experience",
      automations: "Automations",
      approach: "Approach",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      badge: "Open to AI Agent Engineer & GCP AI Architect roles",
      role: "AI Agent Engineer · AI Solutions Architect (GCP)",
      headline: { pre: "Agentic AI systems", em: "built for production", post: "on Google Cloud." },
      location: "Colombia · Remote",
      ctaWork: "See the work",
      scroll: "Scroll to explore",
      facts: [
        { k: "3", v: "systems live on GCP" },
        { k: "0", v: "public endpoints" },
        { k: "$0", v: "idle cost" },
      ],
      bio: "I design, ship and secure agentic systems on Google Cloud: multi-agent orchestration with Google ADK, A2A and MCP, hybrid RAG with automated LLMOps quality gates, and private, scale-to-zero infrastructure on Cloud Run with Terraform. Architecture, production, security and cost — not just demos.",
    },
    gcp: {
      sectionTitle: "GCP AI Architecture — Production Builds",
      sectionSubtitle:
        "Open-source, deployed and narrated: multi-agent systems, RAG with an LLMOps gate, and the architecture documentation behind them.",
      watch: "Narrated demo",
      live: "Live app",
      code: "Source code",
      play: "Play demo",
      highlightsLabel: "What it proves",
      stackLabel: "Stack",
      items: [
        {
          title: "Enterprise Multi-Agent Risk & Compliance",
          tagline: "Google ADK orchestrator delegating to specialist agents over A2A, each with its own MCP tools, on private Cloud Run.",
          highlights: [
            "Parallel A2A delegation with per-agent OIDC audience verification",
            "Stdio MCP servers over Cloud Storage, Secret Manager and Vertex AI",
            "Zero public endpoints, scale-to-zero, rate-limited public BFF",
          ],
        },
        {
          title: "Hybrid RAG with an LLMOps Quality Gate",
          tagline: "Firestore vector search + BM25 fused with RRF, grounded Gemini answers with chunk-level citations.",
          highlights: [
            "Golden-dataset gate blocks releases on hallucination, precision and recall",
            "Per-query latency and token-cost telemetry",
            "Ingestion as a Cloud Run job orchestrated by Cloud Workflows",
          ],
        },
        {
          title: "GCP + AI Reference Architectures & ADRs",
          tagline: "Blueprints an architect delivers before code: diagrams, cost models, threat models and decision records.",
          highlights: [
            "Three-tier FinOps models and an interactive cost calculator",
            "STRIDE threat models mapped to the OWASP Top 10 for LLMs",
            "Quantitative ADRs: Cloud Run vs GKE, Flash vs Pro routing, MCP/A2A",
          ],
        },
      ],
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
      highlights: [
        "Low-latency conversational voice interface",
        "Computer vision blueprint analysis (Gemini API)",
        "Semantic RAG indexing & retrieval",
        "Real-time version conflict detection",
      ],
    },
    approach: {
      sectionTitle: "How I build AI systems",
      sectionSubtitle: "Four rules that every project on this page follows.",
      items: [
        { k: "Architecture first", d: "Diagrams, threat models, cost models and ADRs before code — so every trade-off is explicit and reversible." },
        { k: "Private by default", d: "No public model endpoints. OIDC between services, least-privilege IAM, secrets in Secret Manager, DLP before inference." },
        { k: "Cost is a requirement", d: "Scale-to-zero infrastructure, Flash vs Pro routing and per-request token accounting — budgets are designed, not discovered." },
        { k: "Evaluated, not guessed", d: "Golden datasets and quality gates for hallucination, precision and abstention. A release that fails the gate does not ship." },
      ],
    },
    experience: {
      sectionTitle: "Experience",
      sectionSubtitle: "Core engineering outcomes shipped to production.",
      items: [
        {
          company: "Tafvox",
          role: "Founder · AI Solutions Architect",
          description:
            "Designing and shipping a multi-agent AI copilot for construction teams on Google Cloud: Google ADK agents on Vertex AI, a real-time voice agent on the Gemini Live API, multimodal RAG over blueprints and site documents, human-in-the-loop approvals and per-organization isolation with an auditable trail.",
        },
        {
          company: "MetaBiblioteca",
          role: "AI Agent Engineer",
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
      sub: "Open to AI Agent Engineer and GCP AI Solutions Architect roles.",
      getInTouch: "Get in touch",
      built: "Built with Next.js, Motion & Tailwind CSS.",
    },
  },
  es: {
    meta: {
      title: "Daniel Tafur — AI Agent Engineer · AI Solutions Architect (GCP)",
      description:
        "AI Agent Engineer y AI Solutions Architect en Google Cloud: sistemas multiagente con ADK, A2A y MCP, RAG en producción con quality gates de LLMOps y arquitectura serverless segura en Cloud Run.",
    },
    nav: {
      gcp: "GCP IA",
      work: "Proyecto",
      experience: "Experiencia",
      automations: "Automatizaciones",
      approach: "Enfoque",
      stack: "Stack",
      contact: "Contacto",
    },
    hero: {
      badge: "Abierto a roles de AI Agent Engineer y AI Architect en GCP",
      role: "AI Agent Engineer · AI Solutions Architect (GCP)",
      headline: { pre: "Sistemas de IA agéntica", em: "hechos para producción", post: "en Google Cloud." },
      location: "Colombia · Remoto",
      ctaWork: "Ver proyectos",
      scroll: "Desliza para explorar",
      facts: [
        { k: "3", v: "sistemas en vivo en GCP" },
        { k: "0", v: "endpoints públicos" },
        { k: "$0", v: "costo en reposo" },
      ],
      bio: "Diseño, despliego y aseguro sistemas agénticos en Google Cloud: orquestación multiagente con Google ADK, A2A y MCP, RAG híbrido con quality gates automáticos de LLMOps e infraestructura privada que escala a cero en Cloud Run con Terraform. Arquitectura, producción, seguridad y costos, no solo demos.",
    },
    gcp: {
      sectionTitle: "Arquitectura de IA en GCP — Proyectos en producción",
      sectionSubtitle:
        "Código abierto, desplegado y con demo narrada: sistemas multiagente, RAG con un quality gate de LLMOps y la documentación de arquitectura detrás.",
      watch: "Demo narrada",
      live: "App en vivo",
      code: "Código fuente",
      play: "Ver demo",
      highlightsLabel: "Qué demuestra",
      stackLabel: "Stack",
      items: [
        {
          title: "Sistema multiagente de riesgo y cumplimiento",
          tagline: "Orquestador con Google ADK que delega a agentes especialistas vía A2A, cada uno con sus herramientas MCP, sobre Cloud Run privado.",
          highlights: [
            "Delegación A2A en paralelo con verificación OIDC por agente",
            "Servidores MCP sobre Cloud Storage, Secret Manager y Vertex AI",
            "Cero endpoints públicos, escala a cero y BFF público con rate limiting",
          ],
        },
        {
          title: "RAG híbrido con quality gate de LLMOps",
          tagline: "Búsqueda vectorial en Firestore + BM25 fusionadas con RRF, respuestas de Gemini con citas a nivel de fragmento.",
          highlights: [
            "Golden dataset que bloquea despliegues por alucinación, precisión y recall",
            "Telemetría de latencia y costo de tokens por consulta",
            "Ingesta como Cloud Run job orquestado con Cloud Workflows",
          ],
        },
        {
          title: "Arquitecturas de referencia GCP + IA y ADRs",
          tagline: "Lo que un arquitecto entrega antes del código: diagramas, modelos de costo, modelos de amenazas y registros de decisión.",
          highlights: [
            "Modelos FinOps en tres niveles y calculadora de costos interactiva",
            "Modelos STRIDE mapeados al OWASP Top 10 para LLMs",
            "ADRs cuantitativos: Cloud Run vs GKE, Flash vs Pro, MCP/A2A",
          ],
        },
      ],
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
      highlights: [
        "Interfaz de voz conversacional de baja latencia",
        "Análisis de planos con visión por computador (Gemini API)",
        "Indexación y recuperación semántica RAG",
        "Detección de conflictos de versión en tiempo real",
      ],
    },
    approach: {
      sectionTitle: "Cómo construyo sistemas de IA",
      sectionSubtitle: "Cuatro reglas que siguen todos los proyectos de esta página.",
      items: [
        { k: "Arquitectura primero", d: "Diagramas, modelos de amenazas, modelos de costo y ADRs antes del código: cada trade-off queda explícito y es reversible." },
        { k: "Privado por defecto", d: "Sin endpoints de modelos públicos. OIDC entre servicios, IAM de mínimo privilegio, secretos en Secret Manager y DLP antes de la inferencia." },
        { k: "El costo es un requisito", d: "Infraestructura que escala a cero, enrutamiento Flash vs Pro y costo de tokens por petición: el presupuesto se diseña, no se descubre." },
        { k: "Evaluado, no supuesto", d: "Golden datasets y quality gates de alucinación, precisión y abstención. Un release que no pasa el gate no se despliega." },
      ],
    },
    experience: {
      sectionTitle: "Experiencia",
      sectionSubtitle: "Resultados de ingeniería llevados a producción.",
      items: [
        {
          company: "Tafvox",
          role: "Founder · AI Solutions Architect",
          description:
            "Diseño y despliego un copiloto de IA multiagente para equipos de construcción sobre Google Cloud: agentes con Google ADK en Vertex AI, un agente de voz en tiempo real con la Gemini Live API, RAG multimodal sobre planos y documentos de obra, aprobación humana y aislamiento por organización con trazabilidad auditable.",
        },
        {
          company: "MetaBiblioteca",
          role: "AI Agent Engineer",
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
      sub: "Abierto a roles de AI Agent Engineer y AI Solutions Architect en GCP.",
      getInTouch: "Hablemos",
      built: "Hecho con Next.js, Motion y Tailwind CSS.",
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
    gcp: {
      ...d.gcp,
      items: d.gcp.items.map((item, i) => {
        const data = gcpProjectsData[i];
        const suffix = lang === "es" ? "-es" : "";
        return {
          ...item,
          ...data,
          url: `${data.url}${lang === "es" ? "?lang=es" : ""}`,
          video: `/videos/${data.demo}-demo${suffix}.mp4`,
          poster: `/videos/${data.demo}-poster${suffix}.jpg`,
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
      video: `/videos/${tafvoxMedia.demo}-demo${lang === "es" ? "-es" : ""}.mp4`,
      poster: `/videos/${tafvoxMedia.demo}-poster${lang === "es" ? "-es" : ""}.jpg`,
      play: lang === "es" ? "Ver video" : "Watch video",
    },
    approach: d.approach,
    experience: {
      sectionTitle: d.experience.sectionTitle,
      sectionSubtitle: d.experience.sectionSubtitle,
      items: d.experience.items.map((item, i) => ({
        ...item,
        tags: experienceTags[i] ?? [],
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
