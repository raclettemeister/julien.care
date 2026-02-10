import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import SubscribeBox from "@/components/SubscribeBox";
import { essays } from "@/data/content";

const analogEssays = essays.filter((e) => e.tags.includes("Analog"));

const PIN_ROTATIONS = ["-1.5deg", "1.2deg", "-0.8deg", "1.8deg", "-1deg"];

const Analog = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="text-[2rem] font-bold text-foreground tracking-tight mb-2">
        {lang === "fr" ? "Créativité Analogique" : "Analog Creativity"}
      </h1>
      <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
        {lang === "fr"
          ? "Faire les choses avec ses mains, lentement, c'est plus important que jamais. À l'ère du vite et facile. Lent et difficile, c'est le nouveau sexy."
          : "Doing things with your hand, slowly, is more important than ever. In the age of fast and easy. Slow and hard is the new sexy."}
      </p>

      {/* Essays tagged "Analog" */}
      {analogEssays.map((essay) => (
        <Link
          key={essay.id}
          to={essay.slug}
          className="block mb-10 pb-10 border-b border-border/40 group"
        >
          {essay.thumbnail && (
            <div className="rounded-lg overflow-hidden border border-border/40 mb-3">
              <img
                src={essay.thumbnail}
                alt={lang === "fr" ? essay.titleFr : essay.titleEn}
                className="w-full h-44 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
            </div>
          )}
          <div className="flex gap-2 mb-1">
            {(lang === "fr" ? essay.tagsFr : essay.tags).map((t) => (
              <span key={t} className="font-body text-xs text-accent font-semibold">{t}</span>
            ))}
          </div>
          <h2 className="text-lg font-bold text-foreground leading-snug tracking-tight mb-1.5 group-hover:text-accent transition-colors">
            {lang === "fr" ? essay.titleFr : essay.titleEn}
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {lang === "fr" ? essay.subtitleFr : essay.subtitleEn}
          </p>
        </Link>
      ))}

      {/* Cork board — 5 coolest analog things */}
      <h2 className="text-lg font-bold text-foreground mb-4">
        {lang === "fr" ? "5 trucs analogiques du moment" : "5 analog things right now"}
      </h2>
      <div
        className="relative rounded-lg p-6 mb-10"
        style={{
          background: "linear-gradient(135deg, hsl(30 40% 62%), hsl(28 35% 55%))",
          boxShadow: "inset 0 2px 8px rgba(0,0,0,0.25), 0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        {/* Cork texture dots */}
        <div
          className="absolute inset-0 rounded-lg opacity-30 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(25 30% 40%) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
        />

        <div className="relative flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((n, i) => (
            <div
              key={n}
              className="relative"
              style={{ transform: `rotate(${PIN_ROTATIONS[i]})` }}
            >
              {/* Pin */}
              <div
                className="absolute -top-2 left-6 w-4 h-4 rounded-full z-10"
                style={{
                  background: "radial-gradient(circle at 35% 35%, hsl(0 70% 55%), hsl(0 60% 38%))",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.3)",
                }}
              />
              {/* Post-it note */}
              <div
                className="bg-white rounded-sm px-5 py-4"
                style={{
                  boxShadow: "2px 3px 8px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.1)",
                }}
              >
                <p className="font-body text-sm text-muted-foreground italic">
                  {lang === "fr" ? "Bientôt..." : "Coming soon..."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SubscribeBox />
    </div>
  );
};

export default Analog;
