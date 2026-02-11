import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import SubscribeBox from "@/components/SubscribeBox";
import PostalCardModal from "@/components/PostalCardModal";
import IntroSequence from "@/components/IntroSequence";
import ponchoPhoto from "@/assets/poncho-photo.jpg";
// thumbnail now comes from essay data
import { essays } from "@/data/content";

const Home = () => {
  const { lang } = useLanguage();
  const [showPoncho, setShowPoncho] = useState(false);
  return (
    <IntroSequence>
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

      {/* Latest essay */}
      {essays[0] && (
        <Link to={essays[0].slug} className="block mb-10 group">
          <div className="rounded-lg overflow-hidden border border-border/40 mb-3">
            <img
              src={essays[0].thumbnail}
              alt={lang === "fr" ? essays[0].titleFr : essays[0].titleEn}
              className="w-full h-40 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            {lang === "fr" ? "Dernier essai" : "Latest essay"}
          </p>
          <h2 className="text-lg font-bold text-foreground leading-snug tracking-tight group-hover:text-accent transition-colors">
            {lang === "fr" ? essays[0].titleFr : essays[0].titleEn}
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-0.5">
            {lang === "fr" ? essays[0].subtitleFr : essays[0].subtitleEn}
          </p>
        </Link>
      )}

      {/* Who am I */}
      <section className="mb-10">
        <h2 className="font-heading text-lg font-bold text-foreground mb-3">
          {lang === "fr" ? "Qui suis-je ?" : "Who am I?"}
        </h2>
        <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
          <p>
            {lang === "fr"
              ? <>Entrepreneur, écrivain, meilleur ami de <button onClick={() => setShowPoncho(true)} className="text-accent hover:text-foreground transition-colors cursor-pointer underline underline-offset-2">Poncho</button>, possibiliste dans l'âme et taré créatif. Fraîchement-ish libéré de mes addictions/anesthésiants et le plus heureux que j'aie jamais été.</>
              : <>Successful business owner, writer, <button onClick={() => setShowPoncho(true)} className="text-accent hover:text-foreground transition-colors cursor-pointer underline underline-offset-2">Poncho's</button> best friend, possibilist at heart and creative freak. Freshly-ish addiction/numbing free and the happiest I've ever been.</>}
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
            {" "}
            <Link to="/game" className="text-accent hover:text-foreground transition-colors font-semibold">
              {lang === "fr" ? "🎮 Jouer maintenant" : "🎮 Play it now"}
            </Link>
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
      {/* Poncho photo popup */}
      {showPoncho && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowPoncho(false)}
        >
          <div className="relative max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <img src={ponchoPhoto} alt="Poncho" className="w-full rounded-lg" />
            <button
              onClick={() => setShowPoncho(false)}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center text-sm hover:bg-black/70 transition-colors z-10"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
    </IntroSequence>
  );
};

export default Home;
