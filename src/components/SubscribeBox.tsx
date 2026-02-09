import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SubscribeBox = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="sketch-border tilt-slight bg-accent-light p-8 text-center max-w-[520px] mx-auto my-12">
        <p className="font-hand text-2xl font-bold text-foreground">
          {lang === "fr" ? "Bienvenue dans le groupe. 🤝" : "Welcome to the crew. 🤝"}
        </p>
        <p className="font-body text-[0.95rem] text-muted-foreground mt-2">
          {lang === "fr"
            ? "Check tes mails. Pas de spam, promis. Juste des trucs vrais."
            : "Check your inbox. No spam, I promise. Just real stuff."}
        </p>
      </div>
    );
  }

  return (
    <div className="sketch-border tilt-slight bg-accent-light p-8 max-w-[520px] mx-auto my-12">
      <p className="font-hand text-xl font-bold text-foreground mb-1">
        {lang === "fr" ? "Un essai par semaine. En français et en anglais." : "One essay a week. In French and English."}
      </p>
      <p className="font-body text-sm text-muted-foreground mb-4">
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
          className="font-body flex-1 px-4 py-3 rounded-sm border-[1.5px] border-border text-[0.95rem] outline-none bg-background focus:border-accent transition-colors"
        />
        <button
          onClick={() => email && setSubmitted(true)}
          className="font-hand px-6 py-3 rounded-sm bg-primary text-primary-foreground text-lg font-bold cursor-pointer whitespace-nowrap hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          {lang === "fr" ? "J'embarque" : "I'm in"}
        </button>
      </div>
    </div>
  );
};

export default SubscribeBox;
