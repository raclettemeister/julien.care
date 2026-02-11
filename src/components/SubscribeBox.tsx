import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

const SubscribeBox = () => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "subscribed" | "already" | "error">("idle");

  const handleSubmit = async () => {
    if (!email || state === "loading") return;
    setState("loading");
    try {
      const { data, error } = await supabase.functions.invoke("subscribe", {
        body: { email },
      });
      if (error) throw error;
      if (data?.message === "already_subscribed") {
        setState("already");
      } else {
        setState("subscribed");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "subscribed") {
    return (
      <div className="border-t border-border/40 pt-8 mt-12 max-w-[640px] mx-auto">
        <p className="font-heading text-lg font-semibold text-foreground">
          {lang === "fr" ? "Bienvenue. 🤝" : "Welcome! You're in. 🤝"}
        </p>
        <p className="font-body text-sm text-muted-foreground mt-1">
          {lang === "fr"
            ? "Check tes mails. Pas de spam, promis."
            : "Check your inbox. No spam, I promise."}
        </p>
      </div>
    );
  }

  if (state === "already") {
    return (
      <div className="border-t border-border/40 pt-8 mt-12 max-w-[640px] mx-auto">
        <p className="font-heading text-lg font-semibold text-foreground">
          {lang === "fr" ? "Tu es déjà inscrit(e) ! 😎" : "You're already on the list! 😎"}
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-border/40 pt-8 mt-12 max-w-[640px] mx-auto">
      <p className="font-heading text-base font-semibold text-foreground mb-1">
        {lang === "fr" ? "Je suis persuadé que les newsletters gérées par des humains passionnés sont la meilleure façon d'apprendre quoi que ce soit aujourd'hui." : "I believe newsletters curated by real people are becoming the best way to learn anything."}
      </p>
      <p className="font-body text-sm text-muted-foreground mb-2">
        {lang === "fr"
          ? "Des news aux événements locaux près de chez vous en passant par des idées créatives à reproduire chez vous. Voici ma newsletter. Tu devrais en créer une aussi !"
          : "From news to local events to creative ideas. This is mine. You should make one too!"}
      </p>
      <p className="font-body text-xs text-muted-foreground/80 mb-4">
        {lang === "fr"
          ? "Attends-toi à des emails faciles à lire sur ce qui me passionne en ce moment : idées créatives, trucs que je construis, et ce que je suis en train de comprendre."
          : "Expect easy-to-read emails about stuff I'm passionate about at the moment: creative ideas, things I'm building, and what I'm figuring out."}
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder={lang === "fr" ? "ton@email.com" : "your@email.com"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="font-body flex-1 px-3 py-2 border border-border text-sm outline-none bg-background focus:border-foreground transition-colors"
        />
        <button
          onClick={handleSubmit}
          disabled={state === "loading"}
          className="font-body px-4 py-2 bg-foreground text-background text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === "loading"
            ? "..."
            : lang === "fr" ? "Oh que oui !" : "Hell yeah!"}
        </button>
      </div>
      {state === "error" && (
        <p className="font-body text-sm text-destructive mt-2">
          {lang === "fr" ? "Quelque chose s'est mal passé. Réessaie." : "Something went wrong. Try again."}
        </p>
      )}
    </div>
  );
};

export default SubscribeBox;
