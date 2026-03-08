// src/data/now.ts
// This file is auto-updated by Now Page Bot every Sunday night.
// Manual edits are welcome — the bot will overwrite on next run.
// Last bot run: 2026-03-08

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
  updatedDateEn: "Updated March 8th, 2026, from Brussels.",
  updatedDateFr: "Dernière mise à jour : 8 mars 2026, depuis Bruxelles.",
  source: "auto-generated",
  sections: [
      {
          "titleEn": "Building",
          "titleFr": "En construction",
          "paragraphsEn": [
              "I'm running a personal five-day hackathon this week (March 9–13) to validate the David Toolkit — my first real open-source product. It's inventory management software built for small independent shops like mine. The public repo is live at github.com/Grassroot-hoppers/david-toolkit with contributor docs, a working demo, and real GitHub issues. The demo UI is in French, the code stays English.",
              "This isn't about building features. It's about proving the wedge works against real shop use.",
              "Also deep in business intelligence research — built a full prospecting suite for selling the retail operation. Got real buyer interest. Moving into outreach phase."
          ],
          "paragraphsFr": [
              "Je fais un hackathon personnel de cinq jours cette semaine (9–13 mars) pour valider le David Toolkit — mon premier vrai produit open-source. C'est un logiciel de gestion de stock pour petits commerces indépendants comme le mien. Le repo public est en ligne sur github.com/Grassroot-hoppers/david-toolkit avec docs contributeurs, démo fonctionnelle, et vrais issues GitHub. La démo est en français, le code reste anglais.",
              "Pas question d'ajouter des features. Il s'agit de prouver que le concept marche en vrai.",
              "Aussi en pleine recherche business intelligence — j'ai construit une suite complète de prospection pour vendre l'activité retail. J'ai de l'intérêt réel d'acheteurs. Phase de démarchage en cours."
          ],
          "link": {
              "url": "https://grassroothopper.com",
              "labelEn": "See the movement",
              "labelFr": "Voir le mouvement",
              "emoji": "🌱"
          }
      },
      {
          "titleEn": "Games & Creative",
          "titleFr": "Jeux & créatif",
          "paragraphsEn": [
              "Started my childhood dream project: a WW2 101st Airborne RPG. Full LLM role-playing game where you play a captain. Text-driven, AI-powered narrative. Setup plan is written, ready to build.",
              "Also making mixtapes on real cassettes. Bought a Pioneer deck, learning to curate like Austin Kleon. Six tapes done so far — jazz, Woodstock, Queen live, Buena Vista, country vibes.",
              "Chez Julien Simulator and Sweden Odyssey are both shipped and playable."
          ],
          "paragraphsFr": [
              "J'ai commencé le projet de mes rêves d'enfance : un RPG WW2 101st Airborne. Jeu de rôle complet alimenté par LLM où tu joues un capitaine. Narratif textuel, propulsé par IA. Le plan de setup est écrit, prêt à construire.",
              "Je fais aussi des mixtapes sur vraies cassettes. J'ai acheté une platine Pioneer, j'apprends à faire de la curation comme Austin Kleon. Six cassettes faites jusqu'ici — jazz, Woodstock, Queen live, Buena Vista, ambiances country.",
              "Chez Julien Simulator et Sweden Odyssey sont tous les deux finis et jouables."
          ]
      },
      {
          "titleEn": "Writing",
          "titleFr": "Écriture",
          "paragraphsEn": [
              "The blog launched February 23. Three pieces live: Vision Board, AI Vampire, PRISM. The positioning is \"builder, not authority\" — I show what I'm making, not what you should do.",
              "The Dishwasher Generation runs on Substack. European-centric, anti-hustle-culture, AI-forward. The blog and Substack sync automatically. Same voice, different audiences.",
              "Built a five-skill publishing pipeline: brainstorm → extract → draft → review → publish. The cockpit for getting ideas to live."
          ],
          "paragraphsFr": [
              "Le blog a lancé le 23 février. Trois articles en ligne : Vision Board, AI Vampire, PRISM. Le positionnement est \"builder, pas autorité\" — je montre ce que je construis, pas ce que tu devrais faire.",
              "The Dishwasher Generation tourne sur Substack. Centré Europe, anti-culture-du-hustle, orienté IA. Le blog et Substack se synchronisent automatiquement. Même voix, publics différents.",
              "J'ai construit un pipeline de publication en cinq compétences : brainstorm → extract → draft → review → publish. Le cockpit pour passer d'idée à publié."
          ],
          "link": {
              "url": "https://dishwashergeneration.substack.com",
              "labelEn": "Read the Substack",
              "labelFr": "Lire le Substack",
              "emoji": "📮"
          }
      },
      {
          "titleEn": "Infrastructure",
          "titleFr": "Infrastructure",
          "paragraphsEn": [
              "PRISM runs every night at 4 AM — automated intelligence briefing from 45+ RSS feeds. NightCrawler runs at 3 AM and keeps the vault healthy. Both deployed via GitHub Actions. Both working.",
              "The Cockpit is my dev discipline system. Cursor + Superpowers + custom skills + rules. Architecture is solid but I'm still learning to ask for multiple passes instead of letting it write huge docs in one go.",
              "Mac migration system built — design doc, scripts, automation for moving Mac Mini setup to MacBook Pro. Multiple code review passes done. Went from concept to working system in one day."
          ],
          "paragraphsFr": [
              "PRISM tourne toutes les nuits à 4h — briefing intelligence automatisé depuis 45+ flux RSS. NightCrawler tourne à 3h et maintient le vault en santé. Les deux déployés via GitHub Actions. Les deux fonctionnent.",
              "The Cockpit est mon système de discipline dev. Cursor + Superpowers + compétences custom + règles. L'architecture est solide mais j'apprends encore à demander plusieurs passes au lieu de le laisser écrire des docs énormes d'un coup.",
              "Système de migration Mac construit — doc de design, scripts, automation pour transférer le setup Mac Mini vers MacBook Pro. Plusieurs passes de revue de code faites. Passé de concept à système fonctionnel en un jour."
          ]
      },
      {
          "titleEn": "Not Doing",
          "titleFr": "Pas en train de faire",
          "paragraphsEn": [
              "Disciplines are still mostly unchecked. Meditation, stretching, dancing, guitar — the tools are there, the practice isn't. The 50/50 rule (half life, half investment) is still way off. Building dominates. I'm obsessed, and that's not balanced.",
              "Staffing Calendar exists but isn't being used. Tool works, discipline doesn't.",
              "Renpy game creation postponed. Good time to think about the right cockpit for game dev. Will circle back."
          ],
          "paragraphsFr": [
              "Les disciplines sont encore largement non cochées. Méditation, étirements, danse, guitare — les outils sont là, la pratique non. La règle 50/50 (moitié vie, moitié investissement) est encore loin du compte. Le building domine. Je suis obsédé, et ce n'est pas équilibré.",
              "Le Calendrier Staffing existe mais n'est pas utilisé. L'outil marche, la discipline non.",
              "Création de jeux Renpy reportée. Bon moment pour réfléchir au bon cockpit pour le game dev. Je reviendrai."
          ]
      }
  ],
};
