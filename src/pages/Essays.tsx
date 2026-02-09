import { useLanguage } from "@/contexts/LanguageContext";
import { essays } from "@/data/content";
import { Link } from "react-router-dom";
import SubscribeBox from "@/components/SubscribeBox";

const Essays = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-bold text-foreground leading-tight tracking-tight mb-4">
        {lang === "fr"
          ? "J'ai construit un jeu vidéo sur ma boutique. Sans écrire une seule ligne de code."
          : "I built a video game about my shop. Without writing a single line of code."}
      </h1>
      <p className="font-body text-base text-muted-foreground mb-12 leading-relaxed">
        {lang === "fr"
          ? "J'écris sur la vie examinée, la discipline, et construire des choses avec l'IA. En français et en anglais. Chaque semaine."
          : "I write about the examined life, getting tough with yourself, and building things with AI. In French and English. Every week."}
      </p>

      <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
        {lang === "fr" ? "Derniers essais" : "Latest essays"}
      </p>

      {essays.map((essay, i) => {
        const content = (
          <>
            <div className="flex justify-between items-center mb-1">
              <span className="font-body text-xs text-accent font-semibold">
                {lang === "fr" ? essay.tagFr : essay.tag}
              </span>
              <span className="font-body text-xs text-muted-foreground">
                {lang === "fr" ? essay.dateFr : essay.date}
              </span>
            </div>
            <h2 className="text-lg font-bold text-foreground leading-snug tracking-tight mb-1.5 group-hover:text-accent transition-colors">
              {lang === "fr" ? essay.titleFr : essay.titleEn}
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {lang === "fr" ? essay.excerptFr : essay.excerptEn}
            </p>
          </>
        );
        const cls = `pb-6 mb-6 cursor-pointer group block ${i < essays.length - 1 ? "border-b border-border/40" : ""}`;
        return 'slug' in essay && essay.slug ? (
          <Link key={essay.id} to={essay.slug} className={cls}>{content}</Link>
        ) : (
          <article key={essay.id} className={cls}>{content}</article>
        );
      })}

      <SubscribeBox />
    </div>
  );
};

export default Essays;
