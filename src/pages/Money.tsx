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
            ? "Je suis un résolveur de problèmes et un fondateur. Je vais probablement vendre plein de choses. Il m'arrivera peut-être d'en parler dans un article ou dans la newsletter — pas pour te faire acheter, mais parce que le processus créatif derrière mérite d'être raconté pour tes propres projets."
            : "I'm a problem solver and a founder. I will probably sell a lot of things. I might talk about some of them in an article or the newsletter — not to make you buy it, but because I feel like the creative process behind it is worth sharing for your own projects."}
        </p>

        <p>
          {lang === "fr" ? (
            <>Ce blog est aussi un moyen de référencer et cataloguer tout ce que je construis, sous l'onglet <a href="/projects" className="text-accent hover:text-foreground transition-colors underline">Projets</a>. Tu y verras peut-être des projets payants à l'avenir, mais je t'assure que je n'utiliserai jamais la newsletter ni ton attention pour essayer de te convertir en vente.</>
          ) : (
            <>This blog is also a way to reference and catalog everything I'm building, under the <a href="/projects" className="text-accent hover:text-foreground transition-colors underline">Projects</a> tab. You might see projects that cost money in the future, but I assure you I will never use the newsletter or your attention to try to convert you into sales.</>
          )}
        </p>
      </div>

      <SubscribeBox />
    </div>
  );
};

export default Money;
