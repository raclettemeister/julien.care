import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";

const Money = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8 mt-2">
        {lang === "fr" ? "Argent ?" : "Money?"}
      </h1>

      <div className="font-body text-base text-foreground leading-[1.8] space-y-6">
        <p>
          {lang === "fr"
            ? "Ce site et la newsletter seront toujours gratuits. Pas de paywall. Pas d'abonnement premium. Pas de produit digital à 97€. Rien."
            : "This website and the newsletter will always be free. No paywall. No premium subscription. No $97 digital product. Nothing."}
        </p>

        <p>
          {lang === "fr"
            ? "Pas de pubs non plus. Pas de bannières, pas de pop-ups, pas de « contenu sponsorisé ». Si quelqu'un me paie pour dire quelque chose, je ne le dirai pas."
            : "No ads either. No banners, no pop-ups, no \"sponsored content.\" If someone pays me to say something, I won't say it."}
        </p>

        <p>
          {lang === "fr"
            ? "Pas de big tech. Ce site ne te traque pas. Pas de cookies. Pas d'analytics qui vendent tes données. Tu n'es pas mon produit."
            : "No big tech. This site doesn't track you. No cookies. No analytics selling your data. You're not my product."}
        </p>

        <p>
          {lang === "fr"
            ? "La newsletter est non-addictive. Pas de dark patterns. Pas de « tu vas rater ça ! ». Pas de notifications push. Tu la lis quand tu veux, ou pas du tout."
            : "The newsletter is non-addictive. No dark patterns. No \"you're missing out!\" No push notifications. You read it when you want, or not at all."}
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground pt-4">
          {lang === "fr" ? "Alors pourquoi je fais ça ?" : "So why do I do this?"}
        </h2>

        <p>
          {lang === "fr" ? (
            <>J'écris depuis <a href="/about" className="text-accent hover:text-foreground transition-colors underline">sept ans</a>, et c'est la meilleure chose que j'aie jamais faite pour avancer. J'ai décidé de commencer à partager ces notes parce que la deuxième meilleure chose qui me soit arrivée est venue de gens réels qui partageaient leurs histoires et leurs idées.</>
          ) : (
            <>I've been writing for <a href="/about" className="text-accent hover:text-foreground transition-colors underline">seven years</a>, and it was the single best thing I ever did to move forward. I decided to start sharing these notes because the second best thing that happened to me came from reading real people who shared their stories and insights.</>
          )}
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground pt-4">
          {lang === "fr" ? "Un caveat." : "One caveat."}
        </h2>

        <p>
          {lang === "fr"
            ? "Si un jour je vends quelque chose, c'est parce que ça demande trop de temps et que je dois récupérer mon investissement. De la même manière que ces gens l'ont fait avec les livres, les thérapeutes et les programmes de développement personnel."
            : "If I ever have to sell something, it's because it takes too much time and I need to recoup my investment. The same way those people did with the books, therapists, and cheap self-discovery programs."}
        </p>

        <p>
          {lang === "fr"
            ? "Si je crée un jour quelque chose de payant, tu n'en entendras jamais parler dans la newsletter ni sur ce site. Ce sera uniquement référencé dans mon onglet Projets, qui liste tout ce sur quoi je travaille — sans jamais essayer de te pousser à payer."
            : "If I ever make anything that sells, it will never be pushed in the newsletter or on this website. It will only be referenced in my Projects tab, which lists everything I work on — without ever trying to push you to pay for any of it."}
        </p>
      </div>

      <SubscribeBox />
    </div>
  );
};

export default Money;
