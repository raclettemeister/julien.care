import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SubscribeBox = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-accent-light rounded-xl p-8 text-center max-w-[520px] mx-auto my-12">
        <p className="text-xl font-semibold text-foreground">
          {lang === "fr" ? "Bienvenue dans le groupe. 🤝" : "Welcome to the crew. 🤝"}
        </p>
        <p className="text-[0.95rem] text-muted-foreground mt-2">
          {lang === "fr"
            ? "Check tes mails. Pas de spam, promis. Juste des trucs vrais."
            : "Check your inbox. No spam, I promise. Just real stuff."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-accent-light rounded-xl p-8 max-w-[520px] mx-auto my-12">
      <p className="text-[1.05rem] font-semibold text-foreground mb-1">
        {lang === "fr" ? "Un essai par semaine. En français et en anglais." : "One essay a week. In French and English."}
      </p>
      <p className="text-sm text-muted-foreground mb-4">
        {lang === "fr"
          ? "Pas de pubs. Pas d'IA slop. Juste un mec qui écrit la vérité."
          : "No ads. No AI slop. Just a guy writing the truth."}
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder={lang === "fr" ? "ton@email.com" : "your@email.com"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border-[1.5px] border-border text-[0.95rem] outline-none bg-background"
        />
        <button
          onClick={() => email && setSubmitted(true)}
          className="px-6 py-3 rounded-lg bg-primary text-primary-foreground text-[0.95rem] font-semibold cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity"
        >
          {lang === "fr" ? "J'embarque" : "I'm in"}
        </button>
      </div>
    </div>
  );
};

export default SubscribeBox;
