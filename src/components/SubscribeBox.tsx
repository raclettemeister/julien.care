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
        {lang === "fr" ? "Un essai par semaine." : "One essay a week."}
      </p>
      <p className="font-body text-sm text-muted-foreground mb-4">
        {lang === "fr"
          ? "Pas de pubs. Pas d'IA slop. Juste la vérité."
          : "No ads. No AI slop. Just the truth."}
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
          {lang === "fr" ? "J'embarque" : "I'm in"}
        </button>
      </div>
    </div>
  );
};

export default SubscribeBox;
