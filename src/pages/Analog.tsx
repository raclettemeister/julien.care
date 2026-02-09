import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";

const sections = [
  {
    titleEn: "Writing ✍️",
    titleFr: "Écriture ✍️",
    textEn: "I've been writing every day for 7 years. Not on a blog. In notebooks, documents, voice memos. Thousands of pages about life, discipline, pain, love, and becoming someone I'm not embarrassed by. Writing is how I think. Without it, I don't know who I am.",
    textFr: "J'écris tous les jours depuis 7 ans. Pas sur un blog. Dans des carnets, des documents, des notes vocales. Des milliers de pages sur la vie, la discipline, la douleur, l'amour, et le fait de devenir quelqu'un dont je ne suis pas gêné. L'écriture est la façon dont je pense. Sans ça, je ne sais pas qui je suis.",
  },
  {
    titleEn: "Lindy Hop 💃",
    titleFr: "Lindy Hop 💃",
    textEn: "Lucia and I dance Lindy Hop. It's 1930s swing. It's physical, musical, social, and it requires losing yourself in the music with another human being. No phone. No screen. Just rhythm, connection, and sweat. It's the most anti-digital thing in my life and I need it.",
    textFr: "Lucia et moi, on danse le Lindy Hop. C'est du swing des années 1930. C'est physique, musical, social, et ça demande de se perdre dans la musique avec un autre être humain. Pas de téléphone. Pas d'écran. Juste le rythme, la connexion, et la sueur. C'est la chose la plus anti-numérique dans ma vie et j'en ai besoin.",
  },
  {
    titleEn: "The Shop 🏪",
    titleFr: "La boutique 🏪",
    textEn: "Chez Julien is a physical shop in Belgium. Real products, real customers, real problems. No SaaS. No VC money. Just honest commerce, dirty hands, and decisions that matter. This is where I learned everything I know about running a business.",
    textFr: "Chez Julien est une boutique physique en Belgique. Des vrais produits, des vrais clients, des vrais problèmes. Pas de SaaS. Pas de VC. Juste du commerce honnête, des mains sales, et des décisions qui comptent. C'est là que j'ai appris tout ce que je sais sur la gestion d'une entreprise.",
  },
];

const Analog = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[680px] mx-auto px-6 py-20">
      <h1 className="text-[2.5rem] font-bold text-foreground tracking-tight mb-3">
        {lang === "fr" ? "Créativité Analogique" : "Analog Creativity"}
      </h1>
      <p className="font-body text-lg text-muted-foreground mb-14 leading-relaxed">
        {lang === "fr"
          ? "Tout ce que je fais ne se passe pas sur un écran. Dieu merci."
          : "Not everything I do happens on a screen. Thank God."}
      </p>

      {sections.map((s, i) => (
        <div key={i} className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            {lang === "fr" ? s.titleFr : s.titleEn}
          </h2>
          <p className="font-body text-[1.05rem] text-foreground leading-[1.8]">
            {lang === "fr" ? s.textFr : s.textEn}
          </p>
          {i < sections.length - 1 && (
            <div className="doodle-divider mt-10 mx-auto w-20" />
          )}
        </div>
      ))}

      <SubscribeBox />
    </div>
  );
};

export default Analog;
