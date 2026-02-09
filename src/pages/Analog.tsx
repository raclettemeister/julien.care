import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import SubscribeBox from "@/components/SubscribeBox";
import visionBoardCollage from "@/assets/vision-board-collage.jpg";

const sections = [
  {
    titleEn: "Writing ✍️",
    titleFr: "Écriture ✍️",
    textEn: "I've been writing every day for seven years. Not on a blog — in notebooks, Google Docs, voice memos, and lost journals. Thousands of pages about life, pain, love, and the hard process of becoming someone I love. More on this coming soon.",
    textFr: "J'écris tous les jours depuis sept ans. Pas sur un blog — dans des carnets, des Google Docs, des mémos vocaux et des journaux perdus. Des milliers de pages sur la vie, la douleur, l'amour, et le difficile processus de devenir quelqu'un que j'aime. Plus à venir bientôt.",
  },
  {
    titleEn: "Lindy Hop 💃",
    titleFr: "Lindy Hop 💃",
    textEn: "Lucia introduced me to Lindy Hop. It's 1930s swing. It's physical, musical, social, and it requires losing yourself in the music with another human being. No phone. No screen. Just rhythm, connection, and sweat. It's the most anti-digital thing in my life and I need it.",
    textFr: "Lucia m'a fait découvrir le Lindy Hop. C'est du swing des années 1930. C'est physique, musical, social, et ça demande de se perdre dans la musique avec un autre être humain. Pas de téléphone. Pas d'écran. Juste le rythme, la connexion, et la sueur. C'est la chose la plus anti-numérique dans ma vie et j'en ai besoin.",
  },
  {
    titleEn: "The Shop 🏪",
    titleFr: "La boutique 🏪",
    textEn: "Chez Julien is a physical shop in Belgium. Real products, real customers, real problems. No SaaS. No VC money. Just honest commerce, dirty hands, and decisions that matter. This is where I learned everything I know about running a business. Rumors say the raclette there is the best on the planet.",
    textFr: "Chez Julien est une boutique physique en Belgique. Des vrais produits, des vrais clients, des vrais problèmes. Pas de SaaS. Pas de VC. Juste du commerce honnête, des mains sales, et des décisions qui comptent. C'est là que j'ai appris tout ce que je sais sur la gestion d'une entreprise. La rumeur dit que la raclette y est la meilleure de la planète.",
  },
];

const Analog = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="text-[2rem] font-bold text-foreground tracking-tight mb-2">
        {lang === "fr" ? "Créativité Analogique" : "Analog Creativity"}
      </h1>
      <p className="font-body text-base text-muted-foreground mb-10 leading-relaxed">
        {lang === "fr"
          ? "Tout ce que je fais ne se passe pas sur un écran. Dieu merci."
          : "Not everything I do happens on a screen. Thank God."}
      </p>

      {/* Vision Board essay reference */}
      <Link
        to="/essays/vision-board-creative-thinking-through-collage"
        className="block mb-10 pb-10 border-b border-border/40 group"
      >
        <div className="rounded-lg overflow-hidden border border-border/40 mb-3">
          <img
            src={visionBoardCollage}
            alt={lang === "fr" ? "Vision Board : la pensée créative par le collage" : "Vision Board Creative Thinking through Collage"}
            className="w-full h-44 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex gap-2 mb-1">
          <span className="font-body text-xs text-accent font-semibold">
            {lang === "fr" ? "Créativité" : "Creativity"}
          </span>
          <span className="font-body text-xs text-accent font-semibold">
            {lang === "fr" ? "Analogique" : "Analog"}
          </span>
        </div>
        <h2 className="text-lg font-bold text-foreground leading-snug tracking-tight mb-1.5 group-hover:text-accent transition-colors">
          {lang === "fr"
            ? "Vision Board : la pensée créative par le collage"
            : "Vision Board Creative Thinking through Collage"}
        </h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {lang === "fr"
            ? "J'ai UNE grande image d'un vision board fait main. L'essai vous guide morceau par morceau — et à la fin, le puzzle s'assemble."
            : "I have ONE large image of a handmade vision board. The essay walks you through it piece by piece — and at the end, the puzzle assembles."}
        </p>
      </Link>

      {sections.map((s, i) => (
        <div key={i} className={`pb-8 mb-8 ${i < sections.length - 1 ? "border-b border-border/40" : ""}`}>
          <h2 className="text-lg font-bold text-foreground mb-2">
            {lang === "fr" ? s.titleFr : s.titleEn}
          </h2>
          <p className="font-body text-base text-foreground leading-[1.8]">
            {lang === "fr" ? s.textFr : s.textEn}
          </p>
        </div>
      ))}

      <SubscribeBox />
    </div>
  );
};

export default Analog;
