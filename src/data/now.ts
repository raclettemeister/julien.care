// src/data/now.ts
// This file is auto-updated by Now Page Bot every Sunday night.
// Manual edits are welcome — the bot will overwrite on next run.
// Last bot run: 2026-03-22

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
  updatedDateEn: "Updated March 22nd, 2026, from Brussels.",
  updatedDateFr: "Dernière mise à jour : 22 mars 2026, depuis Bruxelles.",
  source: "auto-generated",
  sections: [
      {
          "titleEn": "Building",
          "titleFr": "En construction",
          "paragraphsEn": [
              "I'm in quiet mode right now. No new launches, no active development — just letting systems settle after the big March push.",
              "**Grassroot Hoppers** went fully public March 6: movement website live at grassroothopper.com, David Toolkit in its own AGPL repo with a working demo, contributor docs, and GitHub issues seeded. The March 9–13 sprint validated it against real shop use. Now it's just running. No commits since March 6. That's intentional.",
              "The **WW2 101st Airborne RPG** is the dream project — childhood obsession meets adult capability. Full LLM role-playing game where you command a platoon. Setup docs are done, ready to start when the next building wave hits.",
              "**Chez Julien Simulator** shipped and live. **Sweden Odyssey** demo works. **The Cockpit** (my dev discipline system) is working-ish — Cursor still wants to write huge docs instead of chunking, but I'm learning to ask for multiple passes.",
              "Blog and Substack are synced and publishing. PRISM runs every morning at 4 AM. NightCrawler keeps the vault healthy at 3 AM. Infrastructure is solid."
          ],
          "paragraphsFr": [
              "Je suis en mode calme en ce moment. Pas de nouveaux lancements, pas de développement actif — je laisse les systèmes se stabiliser après la grosse poussée de mars.",
              "**Grassroot Hoppers** est devenu complètement public le 6 mars : site du mouvement en ligne sur grassroothopper.com, David Toolkit dans son propre repo AGPL avec une démo fonctionnelle, docs contributeurs, et issues GitHub amorcées. Le sprint du 9–13 mars l'a validé contre l'usage réel du magasin. Maintenant ça tourne. Aucun commit depuis le 6 mars. C'est intentionnel.",
              "Le **WW2 101st Airborne RPG** est le projet rêvé — obsession d'enfance rencontre capacité d'adulte. Jeu de rôle complet propulsé par LLM où tu commandes un peloton. Les docs de setup sont faits, prêt à démarrer quand la prochaine vague de construction arrive.",
              "**Chez Julien Simulator** livré et en ligne. **Sweden Odyssey** démo fonctionne. **The Cockpit** (mon système de discipline dev) fonctionne-ish — Cursor veut encore écrire d'énormes docs au lieu de découper, mais j'apprends à demander plusieurs passes.",
              "Blog et Substack sont synchronisés et publient. PRISM tourne chaque matin à 4h. NightCrawler maintient le vault en santé à 3h. L'infrastructure est solide.",
              "---"
          ],
          "link": {
              "url": "https://julien.care",
              "labelEn": "Read the blog",
              "labelFr": "Lire le blog",
              "emoji": "📝"
          }
      },
      {
          "titleEn": "Running",
          "titleFr": "En gestion",
          "paragraphsEn": [
              "**Chez Julien** — the specialty food shop in Brussels. Still needs me operationally. Working on changing that through business intelligence research and prospect outreach. Got real buyer interest. Built a full Sale Intelligence suite in February: valuation modeling, buyer profiles, prospect list. Moving from research to serious conversations.",
              "**The Dishwasher Generation** — monetized Substack. European, anti-hustle-culture, AI-forward. Four posts live. Synced with julien.care blog content. The positioning is \"builder, not authority\" — and that feels right."
          ],
          "paragraphsFr": [
              "**Chez Julien** — le magasin d'alimentation spécialisée à Bruxelles. A encore besoin de moi opérationnellement. Je travaille à changer ça via recherche d'intelligence commerciale et démarchage de prospects. J'ai de l'intérêt réel d'acheteurs. J'ai construit une suite complète de Sale Intelligence en février : modélisation de valorisation, profils d'acheteurs, liste de prospects. Je passe de la recherche aux conversations sérieuses.",
              "**The Dishwasher Generation** — Substack monétisé. Européen, anti-culture-du-hustle, orienté IA. Quatre articles en ligne. Synchronisé avec le contenu du blog julien.care. Le positionnement est \"builder, pas autorité\" — et ça sonne juste.",
              "---"
          ],
          "link": {
              "url": "https://dishwashergeneration.substack.com",
              "labelEn": "Subscribe",
              "labelFr": "S'abonner",
              "emoji": "📬"
          }
      },
      {
          "titleEn": "Learning",
          "titleFr": "En apprentissage",
          "paragraphsEn": [
              "Learning to code through real projects. Not tutorials — actual games. Chez Julien Simulator taught me how AI builds things. Sweden Odyssey is teaching me to write code myself. The WW2 RPG will be the synthesis.",
              "Also learning management. Running a team, building SOPs, delegating. The shop sale research is teaching me business valuation and prospecting. And I'm learning the discipline of multi-pass AI work — ask for architecture first, then chunks, then review. Not everything in one shot."
          ],
          "paragraphsFr": [
              "J'apprends à coder via de vrais projets. Pas des tutoriels — de vrais jeux. Chez Julien Simulator m'a appris comment l'IA construit des choses. Sweden Odyssey m'apprend à écrire du code moi-même. Le RPG WW2 sera la synthèse.",
              "J'apprends aussi le management. Gérer une équipe, construire des SOPs, déléguer. La recherche de vente du magasin m'apprend la valorisation d'entreprise et le démarchage. Et j'apprends la discipline du travail IA multi-passes — demander d'abord l'architecture, puis les morceaux, puis réviser. Pas tout d'un coup.",
              "---"
          ]
      },
      {
          "titleEn": "Hobbies",
          "titleFr": "Loisirs",
          "paragraphsEn": [
              "**Mixtapes** — bought an old Pioneer cassette deck, making analog mixes Austin Kleon style. Six entries so far: jazz, Woodstock, Queen live, Buena Vista, calm country, cowboy country. Old-school curation of meaningful albums.",
              "**Lindy hop and guitar** — less than I want, working on it. The pattern is clear: creative projects get energy, life disciplines get neglected. Dance is the keystone habit for community presence. Guitar is the country singer-songwriter journey (Tyler Childers, Zach Bryan voice). Both need more consistency.",
              "Training for a 10K run, May 1."
          ],
          "paragraphsFr": [
              "**Mixtapes** — j'ai acheté une vieille platette cassette Pioneer, je fais des mix analogiques style Austin Kleon. Six entrées jusqu'ici : jazz, Woodstock, Queen live, Buena Vista, calm country, cowboy country. Curation old-school d'albums qui comptent.",
              "**Lindy hop et guitare** — moins que je voudrais, je travaille dessus. Le pattern est clair : les projets créatifs reçoivent de l'énergie, les disciplines de vie sont négligées. La danse est l'habitude clé pour la présence communautaire. La guitare est le parcours country singer-songwriter (voix Tyler Childers, Zach Bryan). Les deux ont besoin de plus de consistance.",
              "Je m'entraîne pour un 10K, 1er mai.",
              "---"
          ]
      },
      {
          "titleEn": "Not Doing",
          "titleFr": "Pas en train de faire",
          "paragraphsEn": [
              "**Renpy game dev** — postponed. Good time to think about the right cockpit for visual novel creation. Will circle back.",
              "**Staffing Calendar System** — built (Notion + Cloudflare + HTML dashboard) but not being used consistently. Tool exists, discipline doesn't.",
              "**PRISM v2.0** — spec is complete, but v1.0 works well enough. Not priority.",
              "**Letta agents** (Brain, Coach, Queue) — built, documented, parked. Not in active use. Interesting learning project, but NightCrawler does what I need right now.",
              "Daily disciplines (meditation, stretching, dancing, guitar) are still mostly unchecked. The 50/50 rule (half life, half investment) is not close. Building dominates. I know this. Working on it."
          ],
          "paragraphsFr": [
              "**Développement de jeux Renpy** — reporté. Bon moment pour réfléchir au bon cockpit pour la création de visual novels. Je reviendrai dessus.",
              "**Système de calendrier de staffing** — construit (Notion + Cloudflare + tableau de bord HTML) mais pas utilisé de manière consistante. L'outil existe, pas la discipline.",
              "**PRISM v2.0** — les specs sont complètes, mais v1.0 fonctionne assez bien. Pas prioritaire.",
              "**Agents Letta** (Brain, Coach, Queue) — construits, documentés, mis de côté. Pas en usage actif. Projet d'apprentissage intéressant, mais NightCrawler fait ce dont j'ai besoin maintenant.",
              "Les disciplines quotidiennes (méditation, étirements, danse, guitare) sont encore majoritairement non cochées. La règle 50/50 (moitié vie, moitié investissement) n'est pas proche. La construction domine. Je le sais. Je travaille dessus."
          ]
      }
  ],
};
