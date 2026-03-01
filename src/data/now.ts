// src/data/now.ts
// This file is auto-updated by Now Page Bot every Sunday night.
// Manual edits are welcome — the bot will overwrite on next run.
// Last bot run: 2026-03-01

export interface NowSection {
  titleEn: string;
  titleFr: string;
  paragraphsEn: string[];
  paragraphsFr: string[];
  link?: {
    url: string;
    labelEn: string;
    labelFr: string;
    emoji?: string;
  };
}

export interface NowPageData {
  updatedDateEn: string;
  updatedDateFr: string;
  source: "manual" | "auto-generated";
  sections: NowSection[];
}

export const nowData: NowPageData = {
  updatedDateEn: "Updated March 1st, 2026, from Brussels.",
  updatedDateFr: "Dernière mise à jour : 1er mars 2026, depuis Bruxelles.",
  source: "manual",
  sections: [
      {
          "titleEn": "# What I'm Doing Now",
          "titleFr": "# What I'm Doing Now",
          "paragraphsEn": [
              "*Last updated: 2026-02-26*",
              "This page feeds my [julien.care/now](https://julien.care/now) page. I update it weekly. If I forget, the Now Page Bot generates one from my activity log.",
              "Inspired by [Derek Sivers' /now page movement](https://nownownow.com/about).",
              "---"
          ],
          "paragraphsFr": [
              "*Last updated: 2026-02-26*",
              "This page feeds my [julien.care/now](https://julien.care/now) page. I update it weekly. If I forget, the Now Page Bot generates one from my activity log.",
              "Inspired by [Derek Sivers' /now page movement](https://nownownow.com/about).",
              "---"
          ]
      },
      {
          "titleEn": "This Week",
          "titleFr": "This Week",
          "paragraphsEn": [
              "Post-launch settling. julien.care went live on February 23 — the blog, the Chez Julien Simulator game, and The Dishwasher Generation on Substack. The stealth phase is over. Now I'm refining systems, doing business research, and trying to get my disciplines back in order."
          ],
          "paragraphsFr": [
              "Post-launch settling. julien.care went live on February 23 — the blog, the Chez Julien Simulator game, and The Dishwasher Generation on Substack. The stealth phase is over. Now I'm refining systems, doing business research, and trying to get my disciplines back in order."
          ]
      },
      {
          "titleEn": "Building",
          "titleFr": "Building",
          "paragraphsEn": [
              "- **julien.care** — my friend blog. Launched Feb 23. Built with Lovable, deployed on Vercel.\n- **Chez Julien Simulator** — a video game about running my specialty food shop. Finished and shipped.\n- **The Dishwasher Generation** — monetized Substack. European, anti-hustle-culture, AI-forward.\n- **The Cockpit** — my dev discipline system. Checklists, AI enforcement rules, and a multi-pass co-pilot skill to make sure I think before I build.\n- **Mixtapes** — personal music collection. Old-school curation of meaningful albums. 6 entries and growing.\n- **Sweden Odyssey** — video game about a two-week trip to Sweden with ~20 friends. Demo finished and playable. My first real \"learning to code\" project."
          ],
          "paragraphsFr": [
              "- **julien.care** — my friend blog. Launched Feb 23. Built with Lovable, deployed on Vercel.\n- **Chez Julien Simulator** — a video game about running my specialty food shop. Finished and shipped.\n- **The Dishwasher Generation** — monetized Substack. European, anti-hustle-culture, AI-forward.\n- **The Cockpit** — my dev discipline system. Checklists, AI enforcement rules, and a multi-pass co-pilot skill to make sure I think before I build.\n- **Mixtapes** — personal music collection. Old-school curation of meaningful albums. 6 entries and growing.\n- **Sweden Odyssey** — video game about a two-week trip to Sweden with ~20 friends. Demo finished and playable. My first real \"learning to code\" project."
          ]
      },
      {
          "titleEn": "Running",
          "titleFr": "Running",
          "paragraphsEn": [
              "- **Chez Julien** — my specialty food shop in Brussels.\n- **PRISM** — daily AI briefing, runs at 4 AM every night. 45+ RSS feeds, synthesized by Claude.\n- **NightCrawler** — overnight vault health bot. Runs at 3 AM, scans MylifeOS for stale files and inconsistencies."
          ],
          "paragraphsFr": [
              "- **Chez Julien** — my specialty food shop in Brussels.\n- **PRISM** — daily AI briefing, runs at 4 AM every night. 45+ RSS feeds, synthesized by Claude.\n- **NightCrawler** — overnight vault health bot. Runs at 3 AM, scans MylifeOS for stale files and inconsistencies."
          ]
      },
      {
          "titleEn": "Learning",
          "titleFr": "Learning",
          "paragraphsEn": [
              "Learning to code through real projects instead of tutorials. Also learning management — running a team, building SOPs, delegating. And learning how to use AI as a real tool, not a toy: architecture before code, iteration before shipping, discipline before velocity."
          ],
          "paragraphsFr": [
              "Learning to code through real projects instead of tutorials. Also learning management — running a team, building SOPs, delegating. And learning how to use AI as a real tool, not a toy: architecture before code, iteration before shipping, discipline before velocity."
          ]
      },
      {
          "titleEn": "Hobbies",
          "titleFr": "Hobbies",
          "paragraphsEn": [
              "- Mixtapes — bought an old Pioneer cassette deck, making old-school mixes (Austin Kleon style)\n- Lindy hop and guitar (less than I want, working on it)\n- Training for a 10K run, May 1"
          ],
          "paragraphsFr": [
              "- Mixtapes — bought an old Pioneer cassette deck, making old-school mixes (Austin Kleon style)\n- Lindy hop and guitar (less than I want, working on it)\n- Training for a 10K run, May 1"
          ]
      }
  ],
};
