import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";

const Now = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[680px] mx-auto px-6 py-20">
      <h1 className="text-[2.5rem] font-bold text-foreground tracking-tight mb-2">
        {lang === "fr" ? "Maintenant" : "Now"}
      </h1>
      <p className="text-sm text-muted-foreground mb-12">
        {lang === "fr" ? "Dernière mise à jour : 9 fév. 2026 · Bruxelles" : "Last updated: Feb 9, 2026 · Brussels"}
      </p>

      <div className="text-lg text-foreground leading-[1.8] space-y-7">
        <p>
          {lang === "fr"
            ? "Je lance un jeu vidéo et un site web en même temps. Parce que pourquoi pas."
            : "I'm launching a video game and a website at the same time. Because why not."}
        </p>
        <p>
          {lang === "fr"
            ? "Le jeu s'appelle Chez Julien Simulator — c'est littéralement ma boutique transformée en jeu. Je l'ai construit avec l'IA en deux semaines. Zéro ligne de code. C'est la chose la plus cool que j'ai jamais faite."
            : "The game is called Chez Julien Simulator — it's literally my shop turned into a game. I built it with AI in two weeks. Zero lines of code. It's the coolest thing I've ever made."}
        </p>
        <p>
          {lang === "fr"
            ? "En parallèle, je gère toujours ma boutique (~500K€/an de ventes), j'apprends à construire des logiciels avec l'IA, et j'écris chaque jour depuis 7 ans."
            : "Meanwhile, I'm still running my shop (~€500K/year in sales), learning to build software with AI, and writing every day for the past 7 years."}
        </p>
        <p>
          {lang === "fr"
            ? "Lucia et moi, on danse le Lindy Hop autant que possible. Elle quitte son poste à la Fondation Menuhin en mai. De grandes choses arrivent."
            : "Lucia and I are dancing Lindy Hop as much as we can. She's leaving her position at the Menuhin Foundation in May. Big things coming."}
        </p>

        <div className="bg-accent-light rounded-xl p-7 mt-10 mb-10">
          <p className="font-semibold mb-3">
            {lang === "fr" ? "Ce que j'apprends en ce moment :" : "What I'm learning right now:"}
          </p>
          <ul className="list-disc pl-5 leading-[2]">
            <li>{lang === "fr" ? "Lovable & Vercel — construire des sites web avec l'IA" : "Lovable & Vercel — building websites with AI"}</li>
            <li>{lang === "fr" ? "Zapier & automatisations — connecter mes outils" : "Zapier & automations — connecting my tools"}</li>
            <li>{lang === "fr" ? "Buttondown API — newsletters programmables" : "Buttondown API — programmable newsletters"}</li>
          </ul>
        </div>

        <p className="text-muted-foreground text-sm italic">
          {lang === "fr"
            ? "Inspiré par la page /now de Derek Sivers. Si tu ne le connais pas, cherche-le. Tu me remercieras."
            : "Inspired by Derek Sivers' /now page. If you don't know him, look him up. You'll thank me."}
        </p>
      </div>

      <SubscribeBox />
    </div>
  );
};

export default Now;
