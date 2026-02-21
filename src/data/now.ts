// src/data/now.ts
// This file is auto-updated by Now Page Bot every Sunday night.
// Manual edits are welcome — the bot will overwrite on next run.
// Last bot run: 2026-02-21

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
  updatedDateEn: "Updated February 21st, 2026, from Brussels.",
  updatedDateFr: "Dernière mise à jour : 21 février 2026, depuis Bruxelles.",
  source: "manual",
  sections: [
      {
          "titleEn": "# What I'm Doing Now",
          "titleFr": "# What I'm Doing Now",
          "paragraphsEn": [
              "*Last updated: 2026-02-18*",
              "This page feeds my [julien.care/now](https://julien.care/now) page. I update it weekly. If I forget, the Now Page Bot generates one from my activity log.",
              "Inspired by [Derek Sivers' /now page movement](https://nownownow.com/about).",
              "---"
          ],
          "paragraphsFr": [
              "*Last updated: 2026-02-18*",
              "This page feeds my [julien.care/now](https://julien.care/now) page. I update it weekly. If I forget, the Now Page Bot generates one from my activity log.",
              "Inspired by [Derek Sivers' /now page movement](https://nownownow.com/about).",
              "---"
          ]
      },
      {
          "titleEn": "This Week",
          "titleFr": "This Week",
          "paragraphsEn": [
              "Launching julien.care publicly on Sunday February 23. Triple launch: the blog, the Chez Julien Simulator game, and The Dishwasher Generation on Substack. Five days out. Polishing the website's text and voice"
          ],
          "paragraphsFr": [
              "Launching julien.care publicly on Sunday February 23. Triple launch: the blog, the Chez Julien Simulator game, and The Dishwasher Generation on Substack. Five days out. Polishing the website's text and voice"
          ]
      },
      {
          "titleEn": "Building",
          "titleFr": "Building",
          "paragraphsEn": [
              "- **julien.care** — my friend blog. Live, being polished before public launch. Built with Lovable, deployed on Vercel.\n- **Chez Julien Simulator** — a video game about running my specialty food shop. Built in two weeks with no code. Shipping with the blog launch.\n- **The Dishwasher Generation** — monetized Substack. European, anti-hustle-culture, AI-forward. Stealth skeleton live.\n- **PRISM v3.0** — upgrading my automated morning intelligence briefing. 10x more articles, multi-pass analysis, anti-hallucination validation, more topics\n- **Nightcrawler** — a bot that clean, nurture and keep healthy MyLifeOS during the night( this is creepy hey ;) )\n- **NOW page BOT**  — a weekly bot that make sure my /Now page stay up-to-date, reminders, and autonomous edits based on journaling entries if i forgot to manually do it"
          ],
          "paragraphsFr": [
              "- **julien.care** — my friend blog. Live, being polished before public launch. Built with Lovable, deployed on Vercel.\n- **Chez Julien Simulator** — a video game about running my specialty food shop. Built in two weeks with no code. Shipping with the blog launch.\n- **The Dishwasher Generation** — monetized Substack. European, anti-hustle-culture, AI-forward. Stealth skeleton live.\n- **PRISM v3.0** — upgrading my automated morning intelligence briefing. 10x more articles, multi-pass analysis, anti-hallucination validation, more topics\n- **Nightcrawler** — a bot that clean, nurture and keep healthy MyLifeOS during the night( this is creepy hey ;) )\n- **NOW page BOT**  — a weekly bot that make sure my /Now page stay up-to-date, reminders, and autonomous edits based on journaling entries if i forgot to manually do it"
          ]
      },
      {
          "titleEn": "Running",
          "titleFr": "Running",
          "paragraphsEn": [
              "- **Chez Julien** — my specialty food shop in Brussels. \n- **PRISM** — daily AI briefing, runs at 4 AM every night. 45+ RSS feeds, synthesized by Claude."
          ],
          "paragraphsFr": [
              "- **Chez Julien** — my specialty food shop in Brussels. \n- **PRISM** — daily AI briefing, runs at 4 AM every night. 45+ RSS feeds, synthesized by Claude."
          ]
      },
      {
          "titleEn": "Learning",
          "titleFr": "Learning",
          "paragraphsEn": [
              "A LOT"
          ],
          "paragraphsFr": [
              "A LOT"
          ]
      },
      {
          "titleEn": "Hobbies",
          "titleFr": "Hobbies",
          "paragraphsEn": [
              "- bought an old pioneer cassette deck and can't wait to start making my own old school mix tapes ( Austin Kleon style )\n  \n- lindy hop, guitar ( less than i wanted )\n  \n- still training for the 10k run 1st of may"
          ],
          "paragraphsFr": [
              "- bought an old pioneer cassette deck and can't wait to start making my own old school mix tapes ( Austin Kleon style )\n  \n- lindy hop, guitar ( less than i wanted )\n  \n- still training for the 10k run 1st of may"
          ]
      }
  ],
};
