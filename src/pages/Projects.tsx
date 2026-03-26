import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { projects } from "@/data/content";
import SubscribeBox from "@/components/SubscribeBox";

const Projects = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="text-[2rem] font-bold text-foreground tracking-tight mb-2">
        {lang === "fr" ? "Ce que je construis" : "Things I'm Building"}
      </h1>
      <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
        🏴‍☠️ {lang === "fr"
          ? "Regardez-moi, c'est moi le développeur maintenant."
          : "Look at me, I'm the software developer now."}
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
                : p.status === "In progress"
                ? "text-terracotta bg-accent-light"
                : p.status === "On hold"
                ? "text-muted-foreground bg-muted"
                : p.status === "Not started"
                ? "text-muted-foreground bg-muted"
                : "text-terracotta bg-accent-light"
            }`}>
              {p.status === "Live" ? (lang === "fr" ? "Disponible" : "Live")
                : p.status === "On hold" ? (lang === "fr" ? "En pause" : "On hold")
                : p.status === "Not started" ? (lang === "fr" ? "Pas commencé" : "Not started")
                : p.status}
            </span>
          </div>
          <h2 className="text-lg font-bold text-foreground mb-1">
            {lang === "fr" ? p.titleFr : p.titleEn}
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {lang === "fr" ? p.descFr : p.descEn}
          </p>
          {p.status === "Live" && p.link && (
            p.link.startsWith("http") ? (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block font-body text-sm text-accent font-semibold mt-2 hover:underline no-underline">
                {lang === "fr" ? "Essayer →" : "Try it →"}
              </a>
            ) : (
              <Link to={p.link} className="inline-block font-body text-sm text-accent font-semibold mt-2 hover:underline no-underline">
                {lang === "fr" ? "Jouer maintenant →" : "Play now →"}
              </Link>
            )
          )}
          {"readMoreLink" in p && p.readMoreLink && (
            <a href={p.readMoreLink} target="_blank" rel="noopener noreferrer" className="inline-block font-body text-sm text-accent font-semibold mt-2 hover:underline no-underline">
              {lang === "fr" ? "Explication complète →" : "Full explanation →"}
            </a>
          )}
        </div>
      ))}

      <SubscribeBox />
    </div>
  );
};

export default Projects;
