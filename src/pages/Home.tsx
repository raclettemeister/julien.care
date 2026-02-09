import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";
import PostalCardModal from "@/components/PostalCardModal";

const Home = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      {/* Hero: Name + photo */}
      <div className="flex items-center gap-6 mb-10 mt-2">
        <PostalCardModal />
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
              ? "Entrepreneur, écrivain, meilleur ami de Poncho, possibiliste dans l'âme et taré créatif. Fraîchement-ish libéré de mes addictions/anesthésiants et le plus heureux que j'aie jamais été."
              : "Successful business owner, writer, Poncho's best friend, possibilist at heart and creative freak. Freshly-ish addiction/numbing free and the happiest I've ever been."}
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
              ? "En train de construire un blog, tu es ici. (Surpriiise.)"
              : "Currently building a blog, you are here. (Surpriiise.)"}
          </p>
          <p>
            {lang === "fr"
              ? "Je lance un jeu vidéo. Le jeu s'appelle Chez Julien Simulator — c'est littéralement ma boutique transformée en jeu."
              : "I'm launching a video game. The game is called Chez Julien Simulator — it's literally my shop turned into a game."}
          </p>
          <p>
            {lang === "fr"
              ? "En parallèle, je gère toujours ma boutique, j'apprends à construire des logiciels, et j'écris chaque jour depuis 7 ans."
              : "Meanwhile, I'm still running my shop, learning to build software, and writing every day for the past 7 years."}
          </p>
          <p>
            {lang === "fr"
              ? "Hobbylingly en train d'apprendre la guitare country/songwriter et danseur de Lindy Hop/voleur de piste de danse... et je cours mon premier 10K en mars !"
              : "Hobbylingly learning to become a country guitar player/songwriter and Lindy Hop dancer/dancefloor stealer... and running my first 10K in march!"}
            {" "}
            <a href="https://www.runfornature.be/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-foreground transition-colors">
              ({lang === "fr" ? "Run For Nature Rivierenland" : "Run For Nature Rivierenland"})
            </a>
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
              ? "J'adorerais discuter et partager ! J'essaie de lancer des conversations et de construire une communauté — horizontalement, pas du haut vers le bas."
              : "I'd love to talk and share! I'm trying to stir conversations and build a community — horizontally, not top-down."}
          </p>
          <p>
            {lang === "fr"
              ? "Écris-moi un email, réponds à une newsletter, ou envoie-moi un message. Je lis tout comme un gamin qui ouvre ses cadeaux !"
              : "Send me an email, reply to a newsletter, or drop me a message. I read everything like a kid opening presents!"}
          </p>
        </div>
      </section>

      <SubscribeBox />
    </div>
  );
};

export default Home;
