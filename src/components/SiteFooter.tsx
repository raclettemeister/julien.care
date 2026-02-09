import { useLanguage } from "@/contexts/LanguageContext";

const SiteFooter = () => {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-border py-10 px-6 text-center">
      <p className="text-sm text-muted-foreground max-w-[500px] mx-auto leading-relaxed">
        {lang === "fr"
          ? "Ce site a été construit par un mec qui ne sait pas coder, avec de l'IA. C'est tout le concept."
          : "This website was built by a guy who can't code, using AI. That's kind of the whole point."}
      </p>
      <p className="text-xs text-muted-foreground/60 mt-4">
        Brussels, Belgium · {lang === "fr" ? "Pas de pubs. Pas de cookies. Pas de conneries." : "No ads. No cookies. No nonsense."}
      </p>
    </footer>
  );
};

export default SiteFooter;
