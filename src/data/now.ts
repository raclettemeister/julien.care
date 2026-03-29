// src/data/now.ts
// This file is auto-updated by Now Page Bot every Sunday night.
// Manual edits are welcome — the bot will overwrite on next run.
// Last bot run: 2026-03-30

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
  updatedDateEn: "Updated March 30th, 2026, from Brussels.",
  updatedDateFr: "Dernière mise à jour : 30 mars 2026, depuis Bruxelles.",
  source: "auto-generated",
  sections: [
      {
          "titleEn": "Building Games",
          "titleFr": "Je fais des jeux vidéo",
          "paragraphsEn": [
              "I'm making video games. Three already shipped: Chez Julien Simulator (about running my food shop), Sweden Odyssey (a two-week trip with friends), and now the big one — a WW2 101st Airborne RPG. Full LLM role-playing where you command a platoon. This is the childhood dream project.",
              "Setup docs are done. Ready to build."
          ],
          "paragraphsFr": [
              "Je fais des jeux vidéo. Trois déjà sortis : Chez Julien Simulator (gérer ma boutique), Sweden Odyssey (deux semaines de voyage avec des amis), et maintenant le gros morceau — un RPG sur la 101e aéroportée pendant la Seconde Guerre mondiale. Un jeu narratif complet piloté par IA où tu commandes un peloton. Le projet de mes rêves depuis l'enfance.",
              "La doc de setup est prête. On peut commencer à construire."
          ],
          "link": {
              "url": "https://julien.care/game",
              "labelEn": "Play Chez Julien Simulator",
              "labelFr": "Jouer au simulateur",
              "emoji": "🎮"
          }
      },
      {
          "titleEn": "Grassroot Hoppers",
          "titleFr": "Grassroot Hoppers",
          "paragraphsEn": [
              "The public site is live at grassroothopper.com. Open-source, cooperative software for communities and small businesses. David Toolkit is the first product — a shop operations tool built from my own workflow at Chez Julien.",
              "The repo is public (AGPL), the demo runs, contributor docs are ready. March was validation against real shop use. Now it's consolidation — letting it settle, no active development. Just running and watching."
          ],
          "paragraphsFr": [
              "Le site public est en ligne sur grassroothopper.com. Logiciel open-source et coopératif pour les communautés et les petites entreprises. David Toolkit est le premier produit — un outil de gestion de boutique construit à partir de mon propre workflow chez Chez Julien.",
              "Le repo est public (AGPL), la démo tourne, la doc contributeur est prête. Mars, c'était la validation contre l'usage réel en boutique. Maintenant c'est consolidation — laisser décanter, pas de dev actif. Juste observer et surveiller."
          ],
          "link": {
              "url": "https://grassroothopper.com",
              "labelEn": "Visit the movement",
              "labelFr": "Voir le mouvement",
              "emoji": "🌱"
          }
      },
      {
          "titleEn": "Writing",
          "titleFr": "J'écris",
          "paragraphsEn": [
              "Two places: julien.care (this site — personal, bilingual, like getting a drink with me) and The Dishwasher Generation on Substack (builder blog, AI tools, how I make things).",
              "Four posts live so far. The publishing pipeline works: brainstorm → extract → draft → review → publish to both places at once."
          ],
          "paragraphsFr": [
              "Deux endroits : julien.care (ce site — personnel, bilingue, comme prendre un verre avec moi) et The Dishwasher Generation sur Substack (blog de builder, outils IA, comment je fabrique les choses).",
              "Quatre articles déjà publiés. Le pipeline de publication fonctionne : brainstorm → extract → draft → review → publish sur les deux en même temps."
          ],
          "link": {
              "url": "https://dishwashergeneration.substack.com",
              "labelEn": "Read The Dishwasher Generation",
              "labelFr": "Lire The Dishwasher Generation",
              "emoji": "📝"
          }
      },
      {
          "titleEn": "Running",
          "titleFr": "Je fais tourner",
          "paragraphsEn": [
              "PRISM runs at 4 AM every night — reads 45+ RSS feeds, synthesizes an intelligence briefing, emails it to me. NightCrawler runs at 3 AM — scans my vault for stale files and inconsistencies, keeps the system coherent.",
              "Chez Julien (my specialty food shop in Brussels) still needs me operationally. Working on changing that.",
              "Infrastructure is solid. Mac migration system is ready. The Cockpit (my dev discipline harness) is working-ish — architecture is sound, still learning to ask for multiple passes instead of letting Cursor write huge docs in one go."
          ],
          "paragraphsFr": [
              "PRISM tourne tous les soirs à 4h — lit 45+ flux RSS, synthétise un briefing d'intelligence, me l'envoie par email. NightCrawler tourne à 3h — scanne mon vault pour les fichiers périmés et les incohérences, garde le système cohérent.",
              "Chez Julien (ma boutique de spécialités à Bruxelles) a encore besoin de moi opérationnellement. Je travaille à changer ça.",
              "L'infrastructure est solide. Le système de migration Mac est prêt. The Cockpit (mon harnais de discipline dev) fonctionne plus ou moins — l'architecture est bonne, j'apprends encore à demander plusieurs passes au lieu de laisser Cursor écrire des docs énormes d'un coup."
          ]
      },
      {
          "titleEn": "Life Disciplines",
          "titleFr": "Disciplines de vie",
          "paragraphsEn": [
              "Still mostly unchecked. Meditation, stretching, dancing, guitar — the habit structure exists but doesn't stick. Building projects gets all the energy. Life presence gets what's left.",
              "Working on it. Poncho's mental training protocols are documented. Mixtape project is alive (6 cassettes curated on real analog gear). Dancing practice commitment is 10-15 min/day. Guitar is 20-30 min/day.",
              "The 50/50 rule (half life, half investment) is still not close. But I see it."
          ],
          "paragraphsFr": [
              "Toujours en grande partie non-cochées. Méditation, étirements, danse, guitare — la structure d'habitude existe mais ne tient pas. Construire des projets prend toute l'énergie. La présence dans la vie prend ce qui reste.",
              "J'y travaille. Les protocoles d'entraînement mental de Poncho sont documentés. Le projet Mixtape est vivant (6 cassettes curées sur du vrai matos analogique). Engagement danse : 10-15 min/jour. Guitare : 20-30 min/jour.",
              "La règle 50/50 (moitié vie, moitié investissement) n'est toujours pas proche. Mais je la vois."
          ]
      },
      {
          "titleEn": "Not Doing",
          "titleFr": "Je ne fais pas",
          "paragraphsEn": [
              "No new launches. Extended consolidation since March 6. No commits, no sprints, no new projects. The pattern is clear: quiet nights, only NightCrawler moving. This is intentional.",
              "Staffing Calendar System exists but isn't being used. Tool is there, discipline isn't. Renpy game dev is postponed — thinking about the right cockpit for it first.",
              "Letting things settle before the next push."
          ],
          "paragraphsFr": [
              "Pas de nouveaux lancements. Consolidation étendue depuis le 6 mars. Pas de commits, pas de sprints, pas de nouveaux projets. Le pattern est clair : des nuits calmes, seul NightCrawler bouge. C'est intentionnel.",
              "Le système Staffing Calendar existe mais n'est pas utilisé. L'outil est là, la discipline non. Le dev de jeu Renpy est reporté — je réfléchis d'abord au bon cockpit pour ça.",
              "Laisser les choses décanter avant la prochaine poussée."
          ]
      }
  ],
};
