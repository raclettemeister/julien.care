// src/data/now.ts
// This file is auto-updated by Now Page Bot every Sunday night.
// Manual edits are welcome — the bot will overwrite on next run.
// Last bot run: 2026-02-18

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
  updatedDateEn: "Updated February 12th, 2026, from Brussels, where it's late winter.",
  updatedDateFr: "Dernière mise à jour : 12 février 2026, depuis Bruxelles, où c'est la fin de l'hiver.",
  source: "manual",
  sections: [
    {
      titleEn: "launched Chez Julien Simulator",
      titleFr: "lancé Chez Julien Simulator",
      paragraphsEn: [
        "I turned my real shop into a video game. Built entirely with agentic no-code workflows. It's the coolest thing I've ever made — yet. It's a childhood dream come true.",
        "The game simulates what it felt like for me to start my shop, the sacrifice it took and the excitement it generated — serving customers, managing stock, dealing with the unexpected. It's a biography disguised as a shop management game.",
      ],
      paragraphsFr: [
        "J'ai transformé ma vraie boutique en jeu vidéo. Construit entièrement avec des workflows agentic no-code. C'est la chose la plus cool que j'ai jamais faite — jusqu'ici. C'est un rêve d'enfance devenu réalité.",
        "Le jeu simule ce que ça m'a fait de démarrer ma boutique, le sacrifice que ça a demandé et l'excitation que ça a généré — servir les clients, gérer le stock, composer avec l'inattendu. C'est une biographie déguisée en jeu de gestion de boutique.",
      ],
      link: {
        url: "https://raclettemeister.github.io/claude-vibe_repo/",
        labelEn: "Try it now",
        labelFr: "Essayer maintenant",
        emoji: "🎮",
      },
    },
    {
      titleEn: "building things with AI",
      titleFr: "construire des choses avec l'IA",
      paragraphsEn: [
        "This website is one example. Sounds scary, but hear me out. By building my own site with code that I don't actually code myself, I'm making myself independent of any website hoster and any source of big tech and cookie tracking. So this site is fully owned by me. I can assure there is no tracking or data stealing. I would never be able to do it if not with no-code gen workflows. This is revolutionary and amazing.",
      ],
      paragraphsFr: [
        "Ce site web en est un exemple. Ça a l'air effrayant, mais écoutez-moi. En construisant mon propre site avec du code que je ne code pas moi-même, je me rends indépendant de tout hébergeur et de toute source de big tech et de tracking par cookies. Ce site m'appartient entièrement. Je peux donc vous assurer qu'il n'y a aucun tracking ni vol de données. Je n'aurais jamais pu le faire sans les workflows de génération no-code. C'est révolutionnaire et extraordinaire.",
      ],
    },
    {
      titleEn: "still running the shop",
      titleFr: "toujours à la boutique",
      paragraphsEn: [
        "Usually I'm still running hard. I'm teaching my team to be able to manage a successful and vibrant shop without me. Can't wait to witness their own personal growth, and I hope I can be a positive part in their own personal blooming.",
      ],
      paragraphsFr: [
        "D'habitude, je cours encore à fond. J'apprends à mon équipe à pouvoir gérer une boutique prospère et dynamique sans moi. J'ai hâte de voir leur propre développement personnel, et j'espère pouvoir jouer un rôle positif dans leur propre épanouissement.",
      ],
    },
    {
      titleEn: "dancing Lindy Hop",
      titleFr: "danser le Lindy Hop",
      paragraphsEn: [
        "I started dancing Lindy Hop in September. I'm hooked to it, and I can't wait to become better.",
      ],
      paragraphsFr: [
        "J'ai commencé à danser le Lindy Hop en septembre. Je suis accro, et j'ai hâte de progresser.",
      ],
    },
    {
      titleEn: "writing every day",
      titleFr: "écrire chaque jour",
      paragraphsEn: [
        "Seven years without missing a single day (I wish). It's how I think. It's how I stay sane and generate cool ideas.",
      ],
      paragraphsFr: [
        "Sept ans sans manquer un seul jour (j'aimerais bien). C'est comme ça que je pense. C'est comme ça que je reste sain d'esprit et que je génère des idées cool.",
      ],
    },
  ],
};
