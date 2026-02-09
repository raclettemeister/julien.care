import { useLanguage } from "@/contexts/LanguageContext";

const SiteFooter = () => {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-[640px] mx-auto">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {lang === "fr"
            ? "Ce site a été construit par un mec qui ne sait pas coder, avec de l'IA. C'est tout le concept."
            : "This website was built by a guy who can't code, using AI. That's kind of the whole point."}
        </p>
        <p className="font-body text-xs text-muted-foreground/50 mt-3">
          Brussels, Belgium · {lang === "fr" ? "Pas de pubs. Pas de cookies. Pas de conneries." : "No ads. No cookies. No nonsense."}
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
