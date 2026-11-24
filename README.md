<h1 align="center">Daniel Tafur</h1>

<p align="center">
<b>AI Agent Engineer · AI Solutions Architect (GCP)</b><br/>
Diseño, despliego y aseguro sistemas agénticos en Google Cloud: multiagente con ADK, A2A y MCP, RAG con quality gates de LLMOps y arquitectura serverless privada.
</p>

<p align="center">
<a href="https://danieltafur.vercel.app/es"><img src="https://img.shields.io/badge/Portafolio-danieltafur.vercel.app-D4471C?style=for-the-badge" alt="Portafolio" /></a>
<a href="https://www.linkedin.com/in/danielsantiagotafur/"><img src="https://img.shields.io/badge/LinkedIn-151412?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="https://tafvox.com"><img src="https://img.shields.io/badge/Tafvox-Live-151412?style=for-the-badge" alt="Tafvox" /></a>
</p>

---

## Sobre mí

AI Agent Engineer enfocado en llevar sistemas agénticos a producción en Google Cloud. Cuatro reglas guían cada proyecto:

- **Arquitectura primero**: diagramas, modelos de amenazas, modelos de costo y ADRs antes del código.
- **Privado por defecto**: sin endpoints de modelos públicos; OIDC entre servicios, IAM de mínimo privilegio y DLP antes de la inferencia.
- **El costo es un requisito**: infraestructura que escala a cero, enrutamiento Gemini Flash vs Pro y costo de tokens por petición.
- **Evaluado, no supuesto**: golden datasets y quality gates de alucinación, precisión y abstención.

## Arquitectura de IA en GCP — proyectos en producción

Código abierto, desplegado y con demo narrada en **español e inglés**. Cada app tiene selector de idioma EN / ES.

<table>
<tr>
<td width="50%" valign="top">
<a href="https://danieltafur.vercel.app/es#gcp"><img src="https://raw.githubusercontent.com/SantiTN77/enterprise-adk-a2a-mcp/main/docs/media/demo-poster.jpg" alt="Demo del sistema multiagente" /></a>
</td>
<td valign="top">

### Sistema multiagente de riesgo y cumplimiento
Orquestador con **Google ADK** que delega vía **A2A** a agentes especialistas, cada uno con sus herramientas **MCP**, sobre **Cloud Run privado**.

- Delegación A2A en paralelo con verificación OIDC por agente
- Servidores MCP sobre Cloud Storage, Secret Manager y Vertex AI
- Cero endpoints públicos, escala a cero y BFF con rate limiting

[App en vivo](https://enterprise-adk-a2a-mcp.vercel.app/?lang=es) · [Código](https://github.com/SantiTN77/enterprise-adk-a2a-mcp) · [Demo ES](https://github.com/SantiTN77/enterprise-adk-a2a-mcp/releases/download/v1.1.0/adk-demo-es.mp4) · [Demo EN](https://github.com/SantiTN77/enterprise-adk-a2a-mcp/releases/download/v1.1.0/adk-demo.mp4)

</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://danieltafur.vercel.app/es#gcp"><img src="https://raw.githubusercontent.com/SantiTN77/hybrid-rag-llmops-gcp/main/docs/media/demo-poster.jpg" alt="Demo del RAG híbrido" /></a>
</td>
<td valign="top">

### RAG híbrido con quality gate de LLMOps
**Firestore Vector Search + BM25** fusionadas con **RRF** y respuestas de **Gemini** con citas a nivel de fragmento.

- Golden dataset que bloquea despliegues por alucinación, precisión y recall
- Telemetría de latencia y costo de tokens por consulta
- Ingesta como Cloud Run job orquestado con Cloud Workflows

[App en vivo](https://hybrid-rag-llmops-gcp-web.vercel.app/?lang=es) · [Código](https://github.com/SantiTN77/hybrid-rag-llmops-gcp) · [Demo ES](https://github.com/SantiTN77/hybrid-rag-llmops-gcp/releases/download/v1.1.0/rag-demo-es.mp4) · [Demo EN](https://github.com/SantiTN77/hybrid-rag-llmops-gcp/releases/download/v1.1.0/rag-demo.mp4)

</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://danieltafur.vercel.app/es#gcp"><img src="https://raw.githubusercontent.com/SantiTN77/gcp-ai-reference-architectures/main/docs/media/demo-poster.jpg" alt="Demo de las arquitecturas de referencia" /></a>
</td>
<td valign="top">

### Arquitecturas de referencia GCP + IA y ADRs
Lo que un arquitecto entrega antes del código: **diagramas**, **modelos de costo**, **modelos de amenazas** y **registros de decisión**.

- Modelos FinOps en tres niveles y calculadora de costos interactiva
- STRIDE mapeado al OWASP Top 10 para LLMs, con VPC-SC y Cloud DLP
- ADRs cuantitativos: Cloud Run vs GKE, Flash vs Pro, MCP / A2A

[Portal](https://gcp-ai-reference-architectures.vercel.app/?lang=es) · [Código](https://github.com/SantiTN77/gcp-ai-reference-architectures) · [Demo ES](https://github.com/SantiTN77/gcp-ai-reference-architectures/releases/download/v1.1.0/arch-demo-es.mp4) · [Demo EN](https://github.com/SantiTN77/gcp-ai-reference-architectures/releases/download/v1.1.0/arch-demo.mp4)

</td>
</tr>
</table>

## Tafvox — fundador

**[Tafvox.com](https://tafvox.com)**: copiloto de IA multiagente para equipos de construcción. Agentes con **Google ADK** en **Vertex AI**, agente de voz en tiempo real con la **Gemini Live API**, RAG multimodal sobre planos y documentos de obra, aprobación humana y aislamiento por organización con trazabilidad auditable.

## Automatizaciones IA en producción — MetaBiblioteca

Asistentes conversacionales RAG (embeddings, chunking, base vectorial y orquestación de LLMs) con n8n y microservicios en Python, desplegados y verificables públicamente. El asistente aparece abajo a la derecha en cada sitio:

- [coruniamericana.metacatalogo.org](https://coruniamericana.metacatalogo.org/)
- [biblioteca.ecci.edu.co](https://biblioteca.ecci.edu.co/)
- [repositorio.unimagdalena.edu.co](https://repositorio.unimagdalena.edu.co/)

Por confidencialidad no comparto los flujos internos ni datos corporativos.

## Tech Stack

**Agentes & IA**

![Google ADK](https://img.shields.io/badge/Google_ADK-151412?style=flat-square&logo=google&logoColor=white)
![Vertex AI](https://img.shields.io/badge/Vertex_AI-151412?style=flat-square&logo=googlecloud&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-151412?style=flat-square&logo=googlegemini&logoColor=white)
![A2A](https://img.shields.io/badge/A2A_Protocol-151412?style=flat-square)
![MCP](https://img.shields.io/badge/Model_Context_Protocol-151412?style=flat-square&logo=anthropic&logoColor=white)
![RAG](https://img.shields.io/badge/Hybrid_RAG-151412?style=flat-square)
![LLMOps](https://img.shields.io/badge/LLMOps-151412?style=flat-square)
![Qdrant](https://img.shields.io/badge/Qdrant-151412?style=flat-square&logo=qdrant&logoColor=white)

**Google Cloud & Infra**

![Cloud Run](https://img.shields.io/badge/Cloud_Run-D4471C?style=flat-square&logo=googlecloud&logoColor=white)
![Firestore](https://img.shields.io/badge/Firestore_Vector_Search-D4471C?style=flat-square&logo=firebase&logoColor=white)
![Cloud Workflows](https://img.shields.io/badge/Cloud_Workflows-D4471C?style=flat-square&logo=googlecloud&logoColor=white)
![Secret Manager](https://img.shields.io/badge/Secret_Manager-D4471C?style=flat-square&logo=googlecloud&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-D4471C?style=flat-square&logo=terraform&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-D4471C?style=flat-square&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-D4471C?style=flat-square&logo=vercel&logoColor=white)

**Lenguajes & Frameworks**

![Python](https://img.shields.io/badge/Python-151412?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-151412?style=flat-square&logo=typescript&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-151412?style=flat-square&logo=fastapi&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-151412?style=flat-square&logo=nextdotjs&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-151412?style=flat-square&logo=n8n&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-151412?style=flat-square&logo=playwright&logoColor=white)

## Contacto

<p align="center">
<a href="https://danieltafur.vercel.app/es"><img src="https://img.shields.io/badge/Portafolio-D4471C?style=for-the-badge" alt="Portafolio" /></a>
<a href="https://www.linkedin.com/in/danielsantiagotafur/"><img src="https://img.shields.io/badge/LinkedIn-151412?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
</p>
