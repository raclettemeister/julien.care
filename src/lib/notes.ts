import { marked } from "marked";

export interface Note {
  slug: string;
  title: string;
  date: string;
  html: string;
  raw: string;
}

/**
 * Parse frontmatter (---\nkey: value\n---) from a markdown string.
 * Returns { meta, body } where meta is a Record<string, string>.
 */
function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) {
      meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    }
  }
  return { meta, body: match[2] };
}

// Vite glob import – pulls every .md file from src/data/notes/ as raw text
const modules = import.meta.glob("/src/data/notes/*.md", { eager: true, query: "?raw", import: "default" }) as Record<string, string>;

function loadNotes(): Note[] {
  const notes: Note[] = [];

  for (const [path, raw] of Object.entries(modules)) {
    const filename = path.split("/").pop()!.replace(".md", "");
    const { meta, body } = parseFrontmatter(raw);

    notes.push({
      slug: filename,
      title: meta.title || filename,
      date: meta.date || filename.slice(0, 10),
      html: marked.parse(body, { async: false }) as string,
      raw: body,
    });
  }

  // Sort newest first
  notes.sort((a, b) => b.date.localeCompare(a.date));
  return notes;
}

export const notes = loadNotes();
