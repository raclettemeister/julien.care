import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// Essay metadata — keep in sync with src/data/content.ts
const ESSAYS = [
  {
    slug: "vision-board-creative-thinking-through-collage",
    title: "Who do you think you are?",
    description: "Vision board collage, a creativity journey. I have ONE large image of a handmade vision board. The essay walks you through it piece by piece — and at the end, the puzzle assembles.",
    image: "https://vmhwyzwuwfshlqgdunkd.supabase.co/storage/v1/object/public/images//thunbnail-essai-1.jpg",
  },
];

const DEFAULT_OG = {
  title: "julien.care — Life, creativity, and figuring things out",
  description: "A blog about the examined life. Creativity, tough love, real stories. Honest stuff, no bullshit. Written from Brussels with love, by Julien.",
  image: "https://vmhwyzwuwfshlqgdunkd.supabase.co/storage/v1/object/public/images//julienOG.jpg",
  url: "https://julien.care",
};

// Known social-media / crawler user-agent substrings
const CRAWLER_UA = [
  "facebookexternalhit", "Facebot", "Twitterbot", "LinkedInBot",
  "WhatsApp", "Slackbot", "Discordbot", "TelegramBot",
  "Applebot", "Googlebot", "bingbot", "Pinterestbot",
  "vkShare", "W3C_Validator", "Embedly", "Quora Link Preview",
  "Showyoubot", "outbrain", "rogerbot", "SocialFlow",
];

function isCrawler(ua: string | null): boolean {
  if (!ua) return false;
  const lower = ua.toLowerCase();
  return CRAWLER_UA.some(c => lower.includes(c.toLowerCase()));
}

function buildOgHtml(og: { title: string; description: string; image: string; url: string; type: string }): string {
  return `<!DOCTYPE html><html><head>
<meta charset="UTF-8">
<meta property="og:type" content="${og.type}" />
<meta property="og:url" content="${og.url}" />
<meta property="og:title" content="${og.title}" />
<meta property="og:description" content="${og.description}" />
<meta property="og:image" content="${og.image}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${og.title}" />
<meta name="twitter:description" content="${og.description}" />
<meta name="twitter:image" content="${og.image}" />
<title>${og.title}</title>
</head><body></body></html>`;
}

serve(async (req) => {
  const url = new URL(req.url);
  // The path param tells us which page is being requested
  const path = url.searchParams.get("path") || "/";
  const ua = req.headers.get("user-agent");

  // Only serve OG HTML to crawlers
  if (!isCrawler(ua)) {
    return new Response("Not a crawler", { status: 404 });
  }

  // Check if it's the game page
  if (path === "/game") {
    return new Response(buildOgHtml({
      title: "Chez Julien Simulator — Play the Game",
      description: "Run a specialty food shop in Brussels. Make decisions, face events, try not to go bankrupt. A simulation game by Julien.",
      image: DEFAULT_OG.image,
      url: "https://julien.care/game",
      type: "website",
    }), { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  // Check if it's an essay page
  const essayMatch = path.match(/^\/essays\/(.+)$/);
  if (essayMatch) {
    const slug = essayMatch[1];
    const essay = ESSAYS.find(e => e.slug === slug);
    if (essay) {
      return new Response(buildOgHtml({
        title: essay.title,
        description: essay.description,
        image: essay.image,
        url: `https://julien.care/essays/${essay.slug}`,
        type: "article",
      }), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
  }

  // Default: homepage OG
  return new Response(buildOgHtml({
    ...DEFAULT_OG,
    type: "website",
  }), { headers: { "Content-Type": "text/html; charset=utf-8" } });
});

