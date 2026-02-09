import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/content";
import SubscribeBox from "@/components/SubscribeBox";

const Projects = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[680px] mx-auto px-6 py-20">
      <h1 className="text-[2.5rem] font-bold text-foreground tracking-tight mb-3">
        {lang === "fr" ? "Ce que je construis" : "Things I've Built"}
      </h1>
      <p className="text-lg text-muted-foreground mb-14 leading-relaxed">
        {lang === "fr"
          ? "Je suis un développeur de logiciels qui n'écrit pas de code. Je dis à l'IA ce que je veux, on se bat un peu, et quelque chose de réel en sort."
          : "I'm a software developer who doesn't write code. I tell AI what I want, we argue a bit, and something real comes out."}
      </p>

      {projects.map((p, i) => (
        <div
          key={i}
          className="border-[1.5px] border-border rounded-2xl p-8 mb-6 relative overflow-hidden transition-all hover:border-accent/40"
        >
          {p.status === "Live" ? (
            <div className="absolute top-4 right-4 bg-secondary text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {lang === "fr" ? "Disponible" : "Live"}
            </div>
          ) : (
            <div className="absolute top-4 right-4 bg-accent-light text-muted-foreground text-xs font-bold px-3 py-1 rounded-full tracking-wide">
              {p.status}
            </div>
          )}
          <div className="text-3xl mb-3">{p.emoji}</div>
          <h2 className="text-[1.4rem] font-bold text-foreground mb-2">
            {lang === "fr" ? p.titleFr : p.titleEn}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {lang === "fr" ? p.descFr : p.descEn}
          </p>
          {p.status === "Live" && (
            <button className="mt-5 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold cursor-pointer hover:opacity-90 transition-opacity">
              {lang === "fr" ? "Jouer maintenant →" : "Play now →"}
            </button>
          )}
        </div>
      ))}

      <SubscribeBox />
    </div>
  );
};

export default Projects;
