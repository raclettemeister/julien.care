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
            (Ceci est une <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-foreground">page now</a>, et si vous avez votre propre site, <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-foreground">vous devriez en faire une aussi</a>.)
          </>
        ) : (
          <>
            (This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-foreground">now page</a>, and if you have your own site, <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-foreground">you should make one, too</a>.)
          </>
        )}
      </p>

      <p className="font-body text-sm text-muted-foreground mb-12">
        {lang === "fr"
          ? "Dernière mise à jour : 9 février 2026, depuis Bruxelles, où c'est la fin de l'hiver."
          : "Updated February 9th, 2026, from Brussels, where it's late winter."}
      </p>

      {/* Section 1: Chez Julien Simulator */}
      <div className="mb-10">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          {lang === "fr" ? "lancé Chez Julien Simulator" : "launched Chez Julien Simulator"}
        </h2>
        <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
          <p>
            {lang === "fr"
              ? "J'ai transformé ma vraie boutique en jeu vidéo. Construit entièrement avec l'IA en deux semaines. Zéro ligne de code écrite par moi. C'est la chose la plus cool que j'ai jamais faite."
              : "I turned my real shop into a video game. Built entirely with AI in two weeks. Zero lines of code written by me. It's the coolest thing I've ever made."}
          </p>
          <p>
            {lang === "fr"
              ? "Le jeu simule une vraie journée de travail à Chez Julien — servir les clients, gérer le stock, composer avec l'inattendu. C'est un casse-tête déguisé en gestion de boutique."
              : "The game simulates a real work day at Chez Julien — serving customers, managing stock, dealing with the unexpected. It's a puzzle disguised as a shop management game."}
          </p>
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
              ? "Ce site web en est un exemple. J'apprends Lovable, Vercel, les automatisations Zapier, et l'API Buttondown. Je ne sais pas coder — j'apprends à dire aux machines quoi construire."
              : "This website is one example. I'm learning Lovable, Vercel, Zapier automations, and the Buttondown API. I don't know how to code — I'm learning to tell machines what to build."}
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
              ? "Chez Julien tourne autour de ~500K€/an de ventes. C'est mon labo. C'est là que je teste des idées, que j'observe les gens, et que je gagne ma vie. Huit ans et ça continue."
              : "Chez Julien does ~€500K/year in sales. It's my lab. It's where I test ideas, observe people, and make a living. Eight years and counting."}
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
              ? "Lucia et moi, on danse autant que possible. Elle quitte son poste à la Fondation Menuhin en mai. De grandes choses arrivent."
              : "Lucia and I are dancing as much as we can. She's leaving her position at the Menuhin Foundation in May. Big things coming."}
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
              ? "Sept ans sans manquer un seul jour. C'est comme ça que je pense. C'est comme ça que je reste sain d'esprit."
              : "Seven years without missing a single day. It's how I think. It's how I stay sane."}
          </p>
        </div>
      </div>

      <SubscribeBox />
    </div>
  );
};

export default Now;
