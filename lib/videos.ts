export type VideoCoverKind = "v1" | "v2" | "v3" | "v4" | "v5" | "v6";

export interface VideoMeta {
  id: string;
  ep: string;
  title: string;
  dur: string;
  views: string;
  cover: VideoCoverKind;
  label: string;
  date: string;
  description: string;
  tags: readonly string[];
}

export const videos: readonly VideoMeta[] = [
  {
    id: "v1",
    ep: "EP 01",
    title: "Building Otto: Day 1, from blank repo to first commit",
    dur: "12:24",
    views: "8.2k",
    cover: "v1",
    label: "Day 1 · blank repo",
    date: "Mar 14, 2026",
    description:
      "From an empty directory to a deployable shell — Otto's first commit, narrated.",
    tags: ["Otto", "TypeScript", "Setup"],
  },
  {
    id: "v2",
    ep: "EP 02",
    title: "Live: a RAG chatbot in 45 minutes",
    dur: "47:11",
    views: "21.4k",
    cover: "v2",
    label: "RAG · 45 min build",
    date: "Apr 02, 2026",
    description:
      "Ice Bear builds a retrieval-augmented chatbot from a blank repo in forty-five minutes — recorded live, edited never. The stack is intentionally boring so you can focus on the parts that aren't.",
    tags: ["Live coding", "RAG", "FastAPI", "Vercel AI SDK"],
  },
  {
    id: "v3",
    ep: "EP 03",
    title: "Whisper streaming pipeline walkthrough",
    dur: "18:02",
    views: "5.1k",
    cover: "v3",
    label: "Whisper · stream",
    date: "Apr 18, 2026",
    description:
      "How the speech pipeline streams Whisper transcriptions without dropping syllables under bad networks.",
    tags: ["Whisper", "WebSockets", "Python"],
  },
  {
    id: "v4",
    ep: "EP 04",
    title: "PostgreSQL schema design for multi-platform SaaS",
    dur: "22:48",
    views: "4.6k",
    cover: "v4",
    label: "PG · schema",
    date: "May 02, 2026",
    description:
      "Otto's data model — designed for three clients, one engine, zero runtime drift.",
    tags: ["PostgreSQL", "Schema", "SaaS"],
  },
  {
    id: "v5",
    ep: "EP 05",
    title: "Ice Bear reviews: Vercel AI SDK — what's good",
    dur: "9:36",
    views: "11.0k",
    cover: "v5",
    label: "AI SDK · review",
    date: "May 12, 2026",
    description:
      "A cold-blooded review of the Vercel AI SDK — what shipped well, what surprised, and what to skip.",
    tags: ["Vercel AI SDK", "Review", "React"],
  },
  {
    id: "v6",
    ep: "EP 06",
    title: "12 tools every fullstack engineer keeps cold",
    dur: "14:55",
    views: "17.3k",
    cover: "v6",
    label: "12 tools",
    date: "May 21, 2026",
    description:
      "The 12 tools Ice Bear keeps within reach — battle-tested, opinionated, no fluff.",
    tags: ["Tools", "Productivity"],
  },
];

export function getVideo(id: string): VideoMeta | undefined {
  return videos.find((v) => v.id === id);
}

const FALLBACK_TRANSCRIPT_LINE = {
  t: "0:00",
  s: 0,
  text: "Transcript coming soon — Ice Bear is still typing.",
};

export const transcripts: Record<
  string,
  ReadonlyArray<{ t: string; s: number; text: string }>
> = {
  v2: [
    { t: "0:00", s: 0, text: "Ice Bear is live. We're building a retrieval-augmented chatbot in forty-five minutes — no slides, no edits. The clock starts now." },
    { t: "0:32", s: 32, text: "First thing: the stack. FastAPI for the API surface, Postgres with pgvector for the embedding store, and the Vercel AI SDK on the React side so streaming is one hook, not a homework assignment." },
    { t: "1:18", s: 78, text: "We'll skip the 'what is RAG' explainer. If you're here, you already know. Retrieve relevant chunks, stuff them into the prompt, generate. The hard part is everything around that one sentence." },
    { t: "2:04", s: 124, text: "Chunking strategy. Naive paragraph splitting works on day one and falls apart on day two. We're going with overlapping windows — 512 tokens with 64-token stride — so concepts that straddle boundaries don't get lost." },
    { t: "3:11", s: 191, text: "Embedding model. We're using OpenAI's small model because it's cheap, fast, and good enough for English-language docs. If you have multilingual content, you'll want something else." },
    { t: "4:25", s: 265, text: "Storage. pgvector lives in the same Postgres instance as the rest of the app. One database, one backup, one migration story. Ice Bear values simplicity." },
    { t: "6:02", s: 362, text: "Here's the ingestion endpoint. Async-first, of course. We chunk the input, embed each chunk, and upsert into the vectors table with a foreign key back to the source document." },
    { t: "8:14", s: 494, text: "Time for the retrieval query. Cosine similarity, top-k twenty, then a quick reranker pass to bring it down to five. That reranker is the difference between okay and useful." },
    { t: "10:30", s: 630, text: "Streaming responses. The AI SDK's useChat hook handles the WebSocket. Token by token, no fight with the framework, hover state included." },
    { t: "13:08", s: 788, text: "Now the part nobody warns you about: prompt injection. Anything in your retrieved chunks can pretend to be an instruction. We're going to sanitize and bracket." },
    { t: "16:42", s: 1002, text: "Citations. Always cite. Even if the user doesn't ask. The model lies more confidently when there's nothing to point at." },
    { t: "20:18", s: 1218, text: "Latency budget. From keystroke to first token, sub-800ms is the target. Embed the query, run the search, build the prompt, fire the call. Each step gets a slice." },
    { t: "24:55", s: 1495, text: "Caching. Embedding cache by SHA of the query. Result cache by the same. Most chatbots ask the same six questions over and over — the cache pays for itself in a week." },
    { t: "28:30", s: 1710, text: "Evaluation. We use a small set of ground-truth Q&A pairs and check precision-at-k on every deploy. If retrieval drops below 0.8, we hold the release." },
    { t: "32:14", s: 1934, text: "Cost. The cheapest token is the one you don't send. Trim the context, trim the conversation history, trim the system prompt. Then trim it again." },
    { t: "36:50", s: 2210, text: "Failure modes. The model doesn't know it doesn't know. We add a confidence threshold and a graceful 'I can't answer that from my sources' response." },
    { t: "40:22", s: 2422, text: "Deploy. Docker compose, three services, EC2. No fancy orchestration today. It scales fine for the first ten thousand users — past that, we'll talk." },
    { t: "44:08", s: 2648, text: "Wrap. The repo is in the description. Ice Bear is going to drink something cold and probably nap. Thanks for watching." },
    { t: "47:01", s: 2821, text: "Outro. See you in the next one." },
  ],
};

export function getTranscript(id: string) {
  return transcripts[id] ?? [FALLBACK_TRANSCRIPT_LINE];
}

export const chaptersByVideo: Record<
  string,
  ReadonlyArray<{ t: string; s: number; title: string }>
> = {
  v2: [
    { t: "0:00", s: 0, title: "Intro & stack overview" },
    { t: "2:04", s: 124, title: "Chunking strategy" },
    { t: "4:25", s: 265, title: "Choosing an embedding model" },
    { t: "6:02", s: 362, title: "Ingestion endpoint (async)" },
    { t: "8:14", s: 494, title: "Retrieval query + reranker" },
    { t: "10:30", s: 630, title: "Streaming responses (AI SDK)" },
    { t: "13:08", s: 788, title: "Prompt injection mitigation" },
    { t: "16:42", s: 1002, title: "Citations" },
    { t: "20:18", s: 1218, title: "Latency budget" },
    { t: "24:55", s: 1495, title: "Caching" },
    { t: "28:30", s: 1710, title: "Evaluation strategy" },
    { t: "40:22", s: 2422, title: "Deploy" },
    { t: "44:08", s: 2648, title: "Wrap" },
  ],
};

export function getChapters(id: string) {
  return chaptersByVideo[id] ?? [];
}
