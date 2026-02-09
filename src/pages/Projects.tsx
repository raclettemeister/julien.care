import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/content";
import SubscribeBox from "@/components/SubscribeBox";

const Projects = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="text-[2rem] font-bold text-foreground tracking-tight mb-2">
        {lang === "fr" ? "Ce que je construis" : "Things I've Built"}
      </h1>
      <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
        {lang === "fr"
          ? "Je suis un développeur de logiciels qui n'écrit pas de code. Je dis à l'IA ce que je veux, on se bat un peu, et quelque chose de réel en sort."
          : "I'm a software developer who doesn't write code. I tell AI what I want, we argue a bit, and something real comes out."}
      </p>

      {projects.map((p, i) => (
        <div
          key={i}
          className={`pb-6 mb-6 ${i < projects.length - 1 ? "border-b border-border/40" : ""}`}
        >
          <div className="flex items-start justify-between mb-1">
            <span className="text-xl mr-3">{p.emoji}</span>
            <span className={`font-body text-xs font-semibold px-2 py-0.5 rounded-sm ${
              p.status === "Live"
                ? "text-olive bg-secondary"
                : "text-terracotta bg-accent-light"
            }`}>
              {p.status === "Live" ? (lang === "fr" ? "Disponible" : "Live") : p.status}
            </span>
          </div>
          <h2 className="text-lg font-bold text-foreground mb-1">
            {lang === "fr" ? p.titleFr : p.titleEn}
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {lang === "fr" ? p.descFr : p.descEn}
          </p>
          {p.status === "Live" && (
            <p className="font-body text-sm text-accent font-semibold mt-2 cursor-pointer hover:underline">
              {lang === "fr" ? "Jouer maintenant →" : "Play now →"}
            </p>
          )}
        </div>
      ))}

      <SubscribeBox />
    </div>
  );
};

export default Projects;
