import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-foreground transition-colors">
    {children}
  </a>
);

const Money = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8 mt-2">
        {lang === "fr" ? "Argent ?" : "Money?"}
      </h1>

      <div className="font-body text-base text-foreground leading-[1.85] space-y-5">
        {lang === "fr" ? (
          <>
            <p>Si c'est gratuit, c'est toi le produit, pas vrai ?</p>

            <p>
              Ce site est un pur hobby, il n'utilise ni analytics, ni cookies, ni scripts de tracking. Le code source est ouvert pour que tu puisses vérifier par toi-même ici : <A href="https://github.com/raclettemeister/julien.care">GitHub</A>. La newsletter est gratuite, sans plans de monétisation. Pas de cours digital à 197€ en préparation. Pas de tactiques FOMO pour te vendre des trucs.
            </p>

            <p>(Pas de pubs. Pas de bannières. Pas de pop-ups. Pas de « contenu sponsorisé » non plus, mais ça va de soi.)</p>

            <h2 className="font-heading text-xl font-bold text-foreground pt-4">
              Alors pourquoi avoir un blog ?
            </h2>

            <p>Réfléchis. On passe tous nos journées à jouer les journalistes amateurs — on scrolle, on filtre, on essaie de comprendre le bruit. C'est épuisant et ça ne marche pas. Mais s'abonner à quelques personnes passionnées qui font ce travail de curation pour toi — qui lisent, cherchent, réfléchissent, puis t'écrivent un email hebdomadaire sur ce qui compte vraiment — ça, c'est cool.</p>

            <p>J'écris depuis sept ans. C'est la meilleure chose que j'aie jamais faite pour avancer. J'ai commencé à partager parce que la deuxième meilleure chose qui me soit arrivée, c'est de lire des gens réels qui partageaient leurs histoires et leurs idées.</p>

            <p>Maintenant, c'est le moment où la plupart des créateurs te demanderaient de l'argent. Je ne vais pas faire ça.</p>

            <p>Je parie sur quelque chose de plus ancien et de plus simple : la réciprocité.</p>

            <p>Je te donne tout ça gratuitement parce que je fais confiance au fait que si je t'apporte assez de valeur, et si tu peux, tu trouveras un moyen de rendre la pareille. Peut-être que tu partageras un essai avec un ami. Peut-être que tu m'enverras un email qui illuminera ma journée. Peut-être qu'un jour tu achèteras quelque chose que je construis. Peut-être pas. C'est très bien aussi.</p>

            <p>Ça ne peut pas marcher si j'essaie de monétiser ton attention ou de convertir ta confiance en ventes. Tout se casse au moment où je te traite comme un client plutôt que comme une personne.</p>

            <p>Alors je ne le ferai pas.</p>

            <p>Je construirai peut-être des choses. Je vendrai peut-être des choses — un jeu, un produit, un projet. Tu les verras sous <a href="/projects" className="text-accent hover:text-foreground transition-colors underline">Projets</a>. Mais je n'utiliserai jamais la newsletter ou ton attention pour te pousser vers un achat. Si quelque chose que je fais vaut ton argent, tu le sauras sans que j'aie besoin de te le dire.</p>

            <p>Lis le blog. Abonne-toi à la newsletter. Lançons une conversation.</p>

            <p className="font-heading font-bold">Voilà le deal.</p>
          </>
        ) : (
          <>
            <p>If it's free, you're the product, right?</p>

            <p>
              This website is pure hobby, it doesn't use analytics, cookies, or tracking scripts. The source code is open for you to verify here: <A href="https://github.com/raclettemeister/julien.care">GitHub</A>. The newsletter is free without monetization plans. No 197€ digital course incoming. No FOMO tactics to sell you stuff.
            </p>

            <p>(No ads. No banners. No pop-ups. No "sponsored content" either, but that's obvious.)</p>

            <h2 className="font-heading text-xl font-bold text-foreground pt-4">
              So why having a blog?
            </h2>

            <p>Think about it. We all spend our days acting as amateur journalists — scrolling, filtering, trying to make sense of the noise. It's exhausting and it doesn't work. But subscribing to a few passionate people who do that gathering for you — who read, research, think, and then write you a weekly email about what actually matters — that's cool.</p>

            <p>I've been writing for seven years. It was the single best thing I ever did to move forward. I started sharing because the second best thing ever was reading real people who shared their stories and insights.</p>

            <p>Now, here's the part where most creators would ask you for money. I'm not going to do that.</p>

            <p>I'm betting on something older and simpler: reciprocity.</p>

            <p>I give this to you for free because I trust that if I give you enough value, and if you can, you'll find a way to give back. Maybe you'll share an essay with a friend. Maybe you'll send me an email that makes my day. Maybe one day you'll buy something I build. Maybe not. That's fine too.</p>

            <p>It can't work if I try to monetize your attention or convert your trust into sales. The whole thing breaks the moment I treat you as a customer instead of a person.</p>

            <p>So I won't.</p>

            <p>I might build things. I might sell things — a game, a product, a project. You'll see them under <a href="/projects" className="text-accent hover:text-foreground transition-colors underline">Projects</a>. But I will never use the newsletter or your attention to push you toward a purchase. If something I make is worth your money, you'll know without me telling you.</p>

            <p>Read the blog. Subscribe to the newsletter. Let's start a conversation.</p>

            <p className="font-heading font-bold">That's the deal.</p>
          </>
        )}
      </div>

      <SubscribeBox />
    </div>
  );
};

export default Money;
