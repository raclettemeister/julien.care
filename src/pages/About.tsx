import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";

const About = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[680px] mx-auto px-6 py-20">
      <h1 className="text-[2.5rem] font-bold text-foreground tracking-tight mb-10">
        {lang === "fr" ? "L'histoire" : "The Story"}
      </h1>

      <div className="text-lg text-foreground leading-[1.85] space-y-6">
        <p>
          {lang === "fr"
            ? "J'ai 31 ans. Je vis en Belgique. Je gère une boutique qui fait ~500K€ par an. Je suis propriétaire de 48% de l'immeuble. Je vis avec Lucia, l'amour de ma vie, et notre chien Poncho."
            : "I'm 31. I live in Belgium. I run a shop that does ~€500K a year. I own 48% of the building. I live with Lucia, the love of my life, and our dog Poncho."}
        </p>
        <p>
          {lang === "fr"
            ? "Sur le papier, ça a l'air bien. Ce que le papier ne montre pas, c'est les 7 années que j'ai passées à me battre pour arriver ici."
            : "On paper, it looks nice. What paper doesn't show is the 7 years I spent fighting to get here."}
        </p>
        <p>
          {lang === "fr"
            ? "J'avais des addictions. J'avais de la complaisance. J'avais toutes les excuses du monde et zéro discipline. Puis j'ai découvert Carl Jung, et la thérapie, et l'idée que si tu n'examines pas ta vie, tu ne vis pas — tu réagis."
            : "I had addictions. I had complacency. I had every excuse in the world and zero discipline. Then I found Carl Jung, and therapy, and the idea that if you don't examine your life, you're not living — you're reacting."}
        </p>
        <p>
          {lang === "fr"
            ? "J'ai commencé à écrire tous les jours. J'ai construit des systèmes. J'ai confronté mon ombre. J'ai arrêté de me mentir. Ça a tout changé."
            : "I started writing every day. I built systems. I confronted my shadow. I stopped lying to myself. It changed everything."}
        </p>

        <blockquote className="border-l-4 border-accent pl-6 my-10 italic text-xl leading-relaxed">
          {lang === "fr"
            ? "Je ne suis pas un gourou. Je suis un mec qui a fait le travail et qui te dit exactement comment ça s'est passé. Si tu veux du soft, tu es au mauvais endroit."
            : "I'm not a guru. I'm a guy who did the work and is telling you exactly how it went. If you want soft, you're in the wrong place."}
        </blockquote>

        <p>
          {lang === "fr"
            ? "Maintenant je construis des logiciels sans savoir coder. Je dis à l'IA ce que je veux et on se bat jusqu'à ce que ça existe. J'ai fait un jeu vidéo en deux semaines. Je construis des apps. Je construis ce site."
            : "Now I build software without knowing how to code. I tell AI what I want and we fight until it exists. I made a video game in two weeks. I'm building apps. I'm building this site."}
        </p>
        <p>
          {lang === "fr"
            ? "Chaque semaine, j'écris sur tout ça. La vie examinée. La discipline. Construire avec l'IA. Les histoires vraies. Pas de conseils à la con. Juste la vérité."
            : "Every week, I write about all of this. The examined life. Discipline. Building with AI. The real stories. No bullshit advice. Just the truth."}
        </p>
      </div>

      <SubscribeBox />
    </div>
  );
};

export default About;
