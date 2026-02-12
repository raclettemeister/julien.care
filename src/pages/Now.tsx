import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";

const Now = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="text-[2rem] font-bold text-foreground tracking-tight mb-1">
        {lang === "fr" ? "Ce que je fais maintenant" : "What I'm doing now"}
      </h1>

      <p className="font-body text-sm text-muted-foreground mb-2">
        {lang === "fr" ? (
          <>
            (Ceci est une page now, et si vous avez votre propre site, <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-foreground">vous devriez en faire une aussi</a>.)
          </>
        ) : (
          <>
            (This is a now page, and if you have your own site, <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-foreground">you should make one, too</a>.)
          </>
        )}
      </p>

      <p className="font-body text-sm text-muted-foreground mb-12">
        {lang === "fr"
          ? "Dernière mise à jour : 12 février 2026, depuis Bruxelles, où c'est la fin de l'hiver."
          : "Updated February 12th, 2026, from Brussels, where it's late winter."}
      </p>

      {/* Section 1: Chez Julien Simulator */}
      <div className="mb-10">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          {lang === "fr" ? "lancé Chez Julien Simulator" : "launched Chez Julien Simulator"}
        </h2>
        <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
          <p>
            {lang === "fr"
              ? "J'ai transformé ma vraie boutique en jeu vidéo. Construit entièrement avec des workflows agentic no-code. C'est la chose la plus cool que j'ai jamais faite — jusqu'ici. C'est un rêve d'enfance devenu réalité."
              : "I turned my real shop into a video game. Built entirely with agentic no-code workflows. It's the coolest thing I've ever made — yet. It's a childhood dream come true."}
          </p>
          <p>
            {lang === "fr"
              ? "Le jeu simule ce que ça m'a fait de démarrer ma boutique, le sacrifice que ça a demandé et l'excitation que ça a généré — servir les clients, gérer le stock, composer avec l'inattendu. C'est une biographie déguisée en jeu de gestion de boutique."
              : "The game simulates what it felt like for me to start my shop, the sacrifice it took and the excitement it generated — serving customers, managing stock, dealing with the unexpected. It's a biography disguised as a shop management game."}
          </p>
          <a
            href="https://raclettemeister.github.io/claude-vibe_repo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-md hover:bg-primary/90 transition-colors"
          >
            🎮 {lang === "fr" ? "Essayer maintenant" : "Try it now"}
          </a>
        </div>
      </div>

      {/* Section 2: Building with AI */}
      <div className="mb-10">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          {lang === "fr" ? "construire des choses avec l'IA" : "building things with AI"}
        </h2>
        <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
          <p>
            {lang === "fr"
              ? "Ce site web en est un exemple. Ça a l'air effrayant, mais écoutez-moi. En construisant mon propre site avec du code que je ne code pas moi-même, je me rends indépendant de tout hébergeur et de toute source de big tech et de tracking par cookies. Ce site m'appartient entièrement. Je peux donc vous assurer qu'il n'y a aucun tracking ni vol de données. Je n'aurais jamais pu le faire sans les workflows de génération no-code. C'est révolutionnaire et extraordinaire."
              : "This website is one example. Sounds scary, but hear me out. By building my own site with code that I don't actually code myself, I'm making myself independent of any website hoster and any source of big tech and cookie tracking. So this site is fully owned by me. I can assure there is no tracking or data stealing. I would never be able to do it if not with no-code gen workflows. This is revolutionary and amazing."}
          </p>
        </div>
      </div>

      {/* Section 3: The shop */}
      <div className="mb-10">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          {lang === "fr" ? "toujours à la boutique" : "still running the shop"}
        </h2>
        <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
          <p>
            {lang === "fr"
              ? "D'habitude, je cours encore à fond. J'apprends à mon équipe à pouvoir gérer une boutique prospère et dynamique sans moi. J'ai hâte de voir leur propre développement personnel, et j'espère pouvoir jouer un rôle positif dans leur propre épanouissement."
              : "Usually I'm still running hard. I'm teaching my team to be able to manage a successful and vibrant shop without me. Can't wait to witness their own personal growth, and I hope I can be a positive part in their own personal blooming."}
          </p>
        </div>
      </div>

      {/* Section 4: Dancing */}
      <div className="mb-10">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          {lang === "fr" ? "danser le Lindy Hop" : "dancing Lindy Hop"}
        </h2>
        <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
          <p>
            {lang === "fr"
              ? "J'ai commencé à danser le Lindy Hop en septembre. Je suis accro, et j'ai hâte de progresser."
              : "I started dancing Lindy Hop in September. I'm hooked to it, and I can't wait to become better."}
          </p>
        </div>
      </div>

      {/* Section 5: Writing */}
      <div className="mb-12">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          {lang === "fr" ? "écrire chaque jour" : "writing every day"}
        </h2>
        <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
          <p>
            {lang === "fr"
              ? "Sept ans sans manquer un seul jour (j'aimerais bien). C'est comme ça que je pense. C'est comme ça que je reste sain d'esprit et que je génère des idées cool."
              : "Seven years without missing a single day (I wish). It's how I think. It's how I stay sane and generate cool ideas."}
          </p>
        </div>
      </div>

      <SubscribeBox />
    </div>
  );
};

export default Now;
