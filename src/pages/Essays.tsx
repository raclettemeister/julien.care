import { useLanguage } from "@/contexts/LanguageContext";
import { essays } from "@/data/content";
import SubscribeBox from "@/components/SubscribeBox";

const Essays = () => {
  const { lang } = useLanguage();

  return (
    <div>
      <div className="text-center pt-20 pb-10 px-6">
        <h1 className="text-[clamp(2rem,5vw,3.2rem)] font-bold text-foreground leading-tight tracking-tight max-w-[700px] mx-auto">
          {lang === "fr"
            ? "J'ai construit un jeu vidéo sur ma boutique. Sans écrire une seule ligne de code."
            : "I built a video game about my shop. Without writing a single line of code."}
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-[560px] mx-auto mt-6 leading-relaxed">
          {lang === "fr"
            ? "J'écris sur la vie examinée, la discipline, et construire des choses avec l'IA. En français et en anglais. Chaque semaine."
            : "I write about the examined life, getting tough with yourself, and building things with AI. In French and English. Every week."}
        </p>
      </div>

      <SubscribeBox />

      <div className="max-w-[680px] mx-auto px-6 pt-10 pb-20">
        <p className="font-hand text-lg text-muted-foreground mb-8">
          {lang === "fr" ? "~ Derniers essais ~" : "~ Latest essays ~"}
        </p>
        {essays.map((essay, i) => (
          <article
            key={essay.id}
            className="pb-8 mb-6 cursor-pointer group"
          >
            <div className="sketch-border p-6 bg-background hover:bg-accent-light/40 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <span className="font-hand text-base text-accent font-bold">
                  {lang === "fr" ? essay.tagFr : essay.tag}
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  {lang === "fr" ? essay.dateFr : essay.date}
                </span>
              </div>
              <h2 className="text-[1.3rem] font-bold text-foreground leading-snug tracking-tight mb-2.5 group-hover:text-accent transition-colors">
                {lang === "fr" ? essay.titleFr : essay.titleEn}
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {lang === "fr" ? essay.excerptFr : essay.excerptEn}
              </p>
            </div>
            {i < essays.length - 1 && (
              <div className="doodle-divider mt-6 mx-auto w-24" />
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Essays;
