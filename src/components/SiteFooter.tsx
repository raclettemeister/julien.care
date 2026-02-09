import { useLanguage } from "@/contexts/LanguageContext";

const SiteFooter = () => {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-[640px] mx-auto">
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {lang === "fr"
            ? "Hey, si tu lis ça, ça veut dire que tu lis vraiment mon blog. T'es mon premier fan ! (T'es sûr ?)"
            : "Hey, if you're reading this, it means you're really reading my blog. You're my first fan! (Are you?)"}
        </p>
        <p className="font-body text-xs text-muted-foreground/50 mt-3">
          {lang === "fr"
            ? "Pas de pubs. Pas de cookies (sauf ceux au chocolat noir et fleur de sel qu'on sert à la boutique). Pas d'IA slop, pas de conneries."
            : "No ads. No cookies (except the sea salt dark chocolate ones I serve at the shop). No AI slop, no nonsense."}
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
