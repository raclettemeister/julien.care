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
            ? "Ce site sera toujours gratuit. Pas de paywall. Pas d'abonnement premium. Pas de produit digital à 97€. Rien."
            : "This website will always be free. No paywall. No premium subscription. No $97 digital product. Nothing."}
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
          {lang === "fr"
            ? "Parce que je gagne déjà ma vie. J'ai une boutique. Elle paie mes factures. Ce site n'a pas besoin de me rapporter un centime."
            : "Because I already make a living. I have a shop. It pays my bills. This site doesn't need to make me a single cent."}
        </p>

        <p>
          {lang === "fr"
            ? "J'écris parce que ça me rend meilleur. Je partage parce que les meilleures choses qui me sont arrivées dans la vie sont venues de gens qui ont partagé gratuitement. Des livres, des blogs, des conversations. Je rends la pareille."
            : "I write because it makes me better. I share because the best things that happened to me in life came from people who shared freely. Books, blogs, conversations. I'm paying it forward."}
        </p>

        <p>
          {lang === "fr"
            ? "Le jour où je mets un prix sur ce contenu, c'est le jour où j'arrête d'être honnête. Et l'honnêteté, c'est tout ce que j'ai."
            : "The day I put a price on this content is the day I stop being honest. And honesty is all I have."}
        </p>

        <h2 className="font-heading text-xl font-bold text-foreground pt-4">
          {lang === "fr" ? "Un caveat." : "One caveat."}
        </h2>

        <p>
          {lang === "fr"
            ? "Il se peut que je vende des choses un jour. Mais jamais ici. Certains de mes projets — listés sur ma page Projets — pourraient être payants. Mais tu n'en entendras jamais parler dans la newsletter."
            : "I might sell things someday. But never here. Some of my projects — listed on my Projects page — might be paid. But you'll never hear about it in the newsletter."}
        </p>

        <p>
          {lang === "fr"
            ? "Si j'en parle dans un essai, c'est parce que le processus de création est intéressant, pas parce que j'essaie de te vendre le produit. La différence est importante."
            : "If I mention one in an essay, it's because the process of building it is interesting — not because I'm trying to sell you the product. The difference matters."}
        </p>
      </div>

      <SubscribeBox />
    </div>
  );
};

export default Money;
