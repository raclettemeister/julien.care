import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";
import { nowData } from "@/data/now";

const Now = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="text-[2rem] font-bold text-foreground tracking-tight mb-1">
        {lang === "fr" ? "Ce que je fais maintenant" : "What I'm doing now"}
      </h1>

      <p className="font-body text-sm text-muted-foreground mb-2">
        {lang === "fr" ? (
          <>
            (Ceci est une page now, et si vous avez votre propre site,{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-accent hover:text-foreground"
            >
              vous devriez en faire une aussi
            </a>
            .)
          </>
        ) : (
          <>
            (This is a now page, and if you have your own site,{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-accent hover:text-foreground"
            >
              you should make one, too
            </a>
            .)
          </>
        )}
      </p>

      <p className="font-body text-sm text-muted-foreground mb-12">
        {lang === "fr" ? nowData.updatedDateFr : nowData.updatedDateEn}
      </p>

      {nowData.sections.map((section, index) => (
        <div key={index} className={index === nowData.sections.length - 1 ? "mb-12" : "mb-10"}>
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">
            {lang === "fr" ? section.titleFr : section.titleEn}
          </h2>
          <div className="font-body text-base text-foreground leading-[1.8] space-y-4">
            {(lang === "fr" ? section.paragraphsFr : section.paragraphsEn).map(
              (paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              )
            )}
            {section.link && (
              <a
                href={section.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-md hover:bg-primary/90 transition-colors"
              >
                {section.link.emoji && <span>{section.link.emoji}</span>}
                {lang === "fr" ? section.link.labelFr : section.link.labelEn}
              </a>
            )}
          </div>
        </div>
      ))}

      <SubscribeBox />
    </div>
  );
};

export default Now;
