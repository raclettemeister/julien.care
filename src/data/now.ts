// src/data/now.ts
// This file is auto-updated by Now Page Bot every Sunday night.
// Manual edits are welcome — the bot will overwrite on next run.
// Last bot run: 2026-03-15

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
  updatedDateEn: "Updated March 15th, 2026, from Brussels.",
  updatedDateFr: "Dernière mise à jour : 15 mars 2026, depuis Bruxelles.",
  source: "auto-generated",
  sections: [
      {
          "titleEn": "Building in Public",
          "titleFr": "Je construis en public",
          "paragraphsEn": [
              "Grassroot Hoppers just went live. The website is up at grassroothopper.com, the David Toolkit has a real public repo with working demo code, and I'm running a five-day sprint (March 9–13) to validate it against actual shop use. This is my startup thesis: open-source, cooperatively owned software for small businesses. The demo is in French, the repo stays English. It's real now.",
              "The sprint week has been quiet — no commits since launch day. That's intentional. I'm observing, validating, not widening scope."
          ],
          "paragraphsFr": [
              "Grassroot Hoppers vient de sortir en public. Le site est en ligne sur grassroothopper.com, David Toolkit a un vrai repo public avec du code qui marche, et je fais un sprint de cinq jours (9–13 mars) pour le valider avec une vraie utilisation boutique. C'est ma thèse de startup : des logiciels open source, en propriété coopérative, pour les petites entreprises. La démo est en français, le repo reste en anglais. C'est réel maintenant.",
              "La semaine de sprint a été calme — pas de commits depuis le jour du lancement. C'est intentionnel. J'observe, je valide, je n'élargis pas le scope."
          ],
          "link": {
              "url": "https://grassroothopper.com",
              "labelEn": "See the Movement",
              "labelFr": "Voir le mouvement",
              "emoji": "🌱"
          }
      },
      {
          "titleEn": "Games Are the Dream",
          "titleFr": "Les jeux sont le rêve",
          "paragraphsEn": [
              "The WW2 101st Airborne RPG is the project I've wanted to make my entire life. Full LLM role-playing game where you play a captain leading a platoon through World War II. Setup plan is done, ready to start building. This is childhood dream meets adult capability.",
              "Chez Julien Simulator is live and playable. Sweden Odyssey demo is finished. I'm becoming a game maker and that feels right."
          ],
          "paragraphsFr": [
              "Le RPG 101st Airborne WW2 est le projet que j'ai voulu faire toute ma vie. Un jeu de rôle complet piloté par LLM où tu joues un capitaine qui dirige un peloton pendant la Seconde Guerre mondiale. Le plan de setup est fini, prêt à commencer la construction. C'est le rêve d'enfance qui rencontre la capacité d'adulte.",
              "Chez Julien Simulator est en ligne et jouable. La démo de Sweden Odyssey est terminée. Je deviens game maker et ça fait du sens."
          ]
      },
      {
          "titleEn": "Infrastructure Running Itself",
          "titleFr": "L'infrastructure tourne toute seule",
          "paragraphsEn": [
              "PRISM runs at 4 AM every night — 45+ RSS feeds synthesized into a morning briefing. NightCrawler runs at 3 AM — scans the vault for stale files and keeps the system coherent. The blog publishing pipeline works: idea → draft → review → live on both julien.care and The Dishwasher Generation Substack.",
              "The Mac migration system went from concept to working code in one day. Scripts, docs, error handling — it's a real system now."
          ],
          "paragraphsFr": [
              "PRISM tourne à 4h du matin chaque nuit — 45+ flux RSS synthétisés en briefing matinal. NightCrawler tourne à 3h — scanne le vault pour les fichiers obsolètes et garde le système cohérent. Le pipeline de publication du blog fonctionne : idée → brouillon → relecture → en ligne sur julien.care et The Dishwasher Generation Substack.",
              "Le système de migration Mac est passé de concept à code fonctionnel en une journée. Scripts, docs, gestion d'erreurs — c'est un vrai système maintenant."
          ]
      },
      {
          "titleEn": "Writing & Sharing",
          "titleFr": "Écrire & partager",
          "paragraphsEn": [
              "The Dishwasher Generation Substack is live with three posts shipped. The blog launched February 23 with Vision Board, AI Vampire, and PRISM. The positioning is \"builder, not authority\" and it feels right. People follow along because the things I build are interesting, not because I'm an expert.",
              "The blog-Substack sync works. The publishing pipeline scales. Now it's about proving I can keep showing up."
          ],
          "paragraphsFr": [
              "Le Substack The Dishwasher Generation est en ligne avec trois posts publiés. Le blog a été lancé le 23 février avec Vision Board, AI Vampire et PRISM. Le positionnement est \"builder, pas autorité\" et ça fait du sens. Les gens suivent parce que les choses que je construis sont intéressantes, pas parce que je suis un expert.",
              "La synchro blog-Substack fonctionne. Le pipeline de publication scale. Maintenant il s'agit de prouver que je peux continuer à me montrer."
          ],
          "link": {
              "url": "https://dishwashergeneration.substack.com",
              "labelEn": "Read the Substack",
              "labelFr": "Lire le Substack",
              "emoji": "📰"
          }
      },
      {
          "titleEn": "Not Doing (And That's the Point)",
          "titleFr": "Ce que je ne fais pas (et c'est voulu)",
          "paragraphsEn": [
              "Life disciplines are still mostly unchecked. Meditation, stretching, dancing, guitar — they're on the list, not in the habit. The 50/50 rule (half life, half investment) is nowhere close. Building dominates. I know this.",
              "March 7–8 were rest days. No work, no commits. The sprint week has been quiet since then. I'm learning that rest is part of the system, not a failure of it."
          ],
          "paragraphsFr": [
              "Les disciplines de vie sont encore majoritairement pas cochées. Méditation, étirements, danse, guitare — c'est sur la liste, pas dans l'habitude. La règle 50/50 (moitié vie, moitié investissement) est loin d'être proche. La construction domine. Je le sais.",
              "Les 7–8 mars étaient des jours de repos. Pas de travail, pas de commits. La semaine de sprint a été calme depuis. J'apprends que le repos fait partie du système, ce n'est pas un échec."
          ]
      }
  ],
};
