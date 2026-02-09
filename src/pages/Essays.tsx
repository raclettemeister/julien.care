import { useLanguage } from "@/contexts/LanguageContext";
import { essays } from "@/data/content";
import { Link } from "react-router-dom";
import SubscribeBox from "@/components/SubscribeBox";
import essayThumbnail from "@/assets/essays/thumbnail-essay-1.jpg";

const Essays = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-bold text-foreground leading-tight tracking-tight mb-4">
        {lang === "fr"
          ? "C'est un blog. Il y a du texte. Lis-le. C'est fun. C'est cool. C'est sain."
          : "It's a blog. There is text. Read it. It's fun. It's cool. It's healthy."}
      </h1>
      <p className="font-body text-base text-muted-foreground mb-12 leading-relaxed">
        {lang === "fr"
          ? "J'écris sur la créativité, le courage, et trouver un sens dans un monde qui accélère. En français et en anglais. Du nouveau chaque semaine."
          : "I write about creativity, courage, and finding purpose in an accelerating world. In French and English. New stuff every week."}
      </p>

      <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
        {lang === "fr" ? "Derniers essais" : "Latest essays"}
      </p>

      {essays.map((essay, i) => {
        const content = (
          <>
            {essay.slug === "/essays/vision-board-creative-thinking-through-collage" && (
              <div className="mb-3 rounded-lg overflow-hidden border border-border/40">
                <img
                  src={essayThumbnail}
                  alt={lang === "fr" ? essay.titleFr : essay.titleEn}
                  className="w-full h-40 object-cover object-center"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex justify-between items-center mb-1">
              <div className="flex gap-2">
                {(lang === "fr" ? essay.tagsFr : essay.tags).map((t) => (
                  <span key={t} className="font-body text-xs text-accent font-semibold">{t}</span>
                ))}
              </div>
              <span className="font-body text-xs text-muted-foreground">
                {lang === "fr" ? essay.dateFr : essay.date}
              </span>
            </div>
            <h2 className="text-lg font-bold text-foreground leading-snug tracking-tight mb-1.5 group-hover:text-accent transition-colors">
              {lang === "fr" ? essay.titleFr : essay.titleEn}
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {lang === "fr" ? "Collage vision board, un voyage créatif" : "Vision board collage, a creativity journey"}
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
