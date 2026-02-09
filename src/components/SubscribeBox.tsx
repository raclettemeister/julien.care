import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SubscribeBox = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border-t border-border/40 pt-8 mt-12 max-w-[640px] mx-auto">
        <p className="font-heading text-lg font-semibold text-foreground">
          {lang === "fr" ? "Bienvenue. 🤝" : "Welcome to the crew. 🤝"}
        </p>
        <p className="font-body text-sm text-muted-foreground mt-1">
          {lang === "fr"
            ? "Check tes mails. Pas de spam, promis."
            : "Check your inbox. No spam, I promise."}
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-border/40 pt-8 mt-12 max-w-[640px] mx-auto">
      <p className="font-heading text-base font-semibold text-foreground mb-1">
        {lang === "fr" ? "La newsletter, c'est le nouveau cool." : "Newsletter is the new cool."}
      </p>
      <p className="font-body text-sm text-muted-foreground mb-2">
        {lang === "fr"
          ? "Pas de pubs. Pas de big tech. Non addictif. C'est gratuit et tu n'es pas mon produit. Je n'essaierai jamais de te vendre quoi que ce soit."
          : "No ads. No big tech. Non-addictive. It's free and you're not my product. I will never try to sell you anything."}
      </p>
      <p className="font-body text-sm text-muted-foreground mb-4">
        {lang === "fr"
          ? "Juste du contenu de qualité, facile à lire, pour ta propre créativité et ton parcours personnel vers la liberté et le succès."
          : "Just high quality, easily readable, insight for your own creativity and personal journey to freedom and success."}
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder={lang === "fr" ? "ton@email.com" : "your@email.com"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="font-body flex-1 px-3 py-2 border border-border text-sm outline-none bg-background focus:border-foreground transition-colors"
        />
        <button
          onClick={() => email && setSubmitted(true)}
          className="font-body px-4 py-2 bg-foreground text-background text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
        >
          {lang === "fr" ? "Oh que oui !" : "Hell yeah!"}
        </button>
      </div>
    </div>
  );
};

export default SubscribeBox;
