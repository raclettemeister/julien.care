import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/content";
import SubscribeBox from "@/components/SubscribeBox";

const tiltClasses = [
  "rotate-[-0.5deg]",
  "rotate-[0.7deg]",
  "rotate-[-0.3deg]",
];

const Projects = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[680px] mx-auto px-6 py-20">
      <h1 className="text-[2.5rem] font-bold text-foreground tracking-tight mb-3">
        {lang === "fr" ? "Ce que je construis" : "Things I've Built"}
      </h1>
      <p className="font-body text-lg text-muted-foreground mb-14 leading-relaxed">
        {lang === "fr"
          ? "Je suis un développeur de logiciels qui n'écrit pas de code. Je dis à l'IA ce que je veux, on se bat un peu, et quelque chose de réel en sort."
          : "I'm a software developer who doesn't write code. I tell AI what I want, we argue a bit, and something real comes out."}
      </p>

      {projects.map((p, i) => (
        <div
          key={i}
          className={`sketch-border p-8 mb-8 relative overflow-hidden bg-background hover:bg-accent-light/30 transition-colors ${tiltClasses[i % tiltClasses.length]}`}
        >
          {p.status === "Live" ? (
            <div className="absolute top-4 right-4 font-hand text-sm font-bold text-olive bg-secondary px-3 py-1 rounded-full">
              📌 {lang === "fr" ? "Disponible" : "Live"}
            </div>
          ) : (
            <div className="absolute top-4 right-4 font-hand text-sm font-bold text-terracotta bg-accent-light px-3 py-1 rounded-full">
              🔜 {p.status}
            </div>
          )}
          <div className="text-3xl mb-3">{p.emoji}</div>
          <h2 className="text-[1.4rem] font-bold text-foreground mb-2">
            {lang === "fr" ? p.titleFr : p.titleEn}
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            {lang === "fr" ? p.descFr : p.descEn}
          </p>
          {p.status === "Live" && (
            <button className="font-hand mt-5 bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-base font-bold cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
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
