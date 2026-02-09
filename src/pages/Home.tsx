import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";

const Home = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      {/* Hero: Name + photo */}
      <div className="flex items-center gap-6 mb-10 mt-2">
        <div className="w-24 h-24 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 overflow-hidden">
          <span className="font-body text-xs text-muted-foreground">
            {lang === "fr" ? "Photo bientôt" : "Photo soon"}
          </span>
        </div>
        <div>
          <h1 className="text-[clamp(1.8rem,5vw,2.6rem)] font-bold text-foreground leading-tight tracking-tight">
            Julien Thibaut
          </h1>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Brussels, Belgium
          </p>
        </div>
      </div>

      {/* Who am I */}
      <section className="mb-10">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          {lang === "fr" ? "Qui suis-je ?" : "Who am I?"}
        </h2>
        <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
          <p>
            {lang === "fr"
              ? "J'ai 31 ans. Je vis en Belgique. Je gère une boutique qui fait ~500K€ par an. Je vis avec Lucia, l'amour de ma vie, et notre chien Poncho."
              : "I'm 31. I live in Belgium. I run a shop that does ~€500K a year. I live with Lucia, the love of my life, and our dog Poncho."}
          </p>
          <p>
            {lang === "fr"
              ? "J'avais des addictions. J'avais de la complaisance. Puis j'ai découvert Carl Jung, la thérapie, et l'idée que si tu n'examines pas ta vie, tu ne vis pas — tu réagis. Ça a tout changé."
              : "I had addictions. I had complacency. Then I found Carl Jung, and therapy, and the idea that if you don't examine your life, you're not living — you're reacting. It changed everything."}
          </p>
          <p>
            {lang === "fr"
              ? "Maintenant je construis des logiciels sans savoir coder. Je dis à l'IA ce que je veux et on se bat jusqu'à ce que ça existe."
              : "Now I build software without knowing how to code. I tell AI what I want and we fight until it exists."}
          </p>
          <p className="text-sm text-muted-foreground">
            <a href="/about" className="text-accent hover:text-foreground transition-colors">
              {lang === "fr" ? "→ Lire toute l'histoire" : "→ Read the full story"}
            </a>
          </p>
        </div>
      </section>

      {/* What am I doing right now */}
      <section className="mb-10">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          {lang === "fr" ? "Qu'est-ce que je fais en ce moment ?" : "What am I doing right now?"}
        </h2>
        <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
          <p>
            {lang === "fr"
              ? "Je lance un jeu vidéo et un site web en même temps. Parce que pourquoi pas. Le jeu s'appelle Chez Julien Simulator — c'est littéralement ma boutique transformée en jeu."
              : "I'm launching a video game and a website at the same time. Because why not. The game is called Chez Julien Simulator — it's literally my shop turned into a game."}
          </p>
          <p>
            {lang === "fr"
              ? "En parallèle, je gère toujours ma boutique, j'apprends à construire des logiciels avec l'IA, et j'écris chaque jour depuis 7 ans."
              : "Meanwhile, I'm still running my shop, learning to build software with AI, and writing every day for the past 7 years."}
          </p>
          <p className="text-sm text-muted-foreground">
            <a href="/now" className="text-accent hover:text-foreground transition-colors">
              {lang === "fr" ? "→ Voir ma page /now complète" : "→ See my full /now page"}
            </a>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-6">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          {lang === "fr" ? "Contacte-moi" : "Contact me"}
        </h2>
        <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
          <p>
            {lang === "fr"
              ? "J'adorerais discuter et partager. J'essaie de lancer des conversations et de construire une communauté — horizontalement, pas du haut vers le bas."
              : "I'd love to talk and share. I'm trying to stir conversations and build a community — horizontally, not top-down."}
          </p>
          <p>
            {lang === "fr"
              ? "Écris-moi un email, réponds à une newsletter, ou envoie-moi un message. Je lis tout."
              : "Send me an email, reply to a newsletter, or drop me a message. I read everything."}
          </p>
        </div>
      </section>

      <SubscribeBox />
    </div>
  );
};

export default Home;
