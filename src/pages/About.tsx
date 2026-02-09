import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import SubscribeBox from "@/components/SubscribeBox";
import oursMeme from "@/assets/ours-meme.jpg";

const OurPopover = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline">
      <button
        onClick={() => setShow((s) => !s)}
        className="italic underline decoration-dotted underline-offset-2 cursor-pointer hover:text-accent transition-colors"
      >
        {children}
      </button>
      {show && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShow(false)} />
          <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 rounded-md overflow-hidden shadow-lg border border-border/40 bg-card">
            <img src={oursMeme} alt="Our" className="w-full" />
          </span>
        </>
      )}
    </span>
  );
};

const About = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="text-[2rem] font-bold text-foreground tracking-tight mb-8">
        {lang === "fr" ? "L'histoire" : "The Story"}
      </h1>

      <div className="font-body text-base text-foreground leading-[1.85] space-y-5">
        <p>
          {lang === "fr"
            ? "Bonne histoire : j'ai 31 ans, j'écris depuis mon appartement décoré de façon créative. Je gère la boutique en bas qui fait ~500K€ par an. Je suis propriétaire de 48% de l'immeuble dans lequel je dors. Je vis avec l'amour de ma vie, et "
            : "Good story: I'm 31, writing from my creative decorated apartment. I run the shop downstairs that does ~€500K a year. I own 48% of the building I'm sleeping in. I live with the love of my life, and "}
          <OurPopover>{lang === "fr" ? "notre" : "our"}</OurPopover>
          {lang === "fr" ? " chien Poncho." : " dog Poncho."}
        </p>
        <p>
          {lang === "fr"
            ? "Sur le papier, ça a l'air bien. Ce que le papier ne montre pas, c'est les 7 années que j'ai passées à me battre pour arriver ici."
            : "On paper, it looks nice. What paper doesn't show is the 7 years I spent fighting to get here."}
        </p>
        <p>
          {lang === "fr" ? (
            <>
              J'avais des addictions. J'étais un athlète de l'engourdissement. J'avais toutes les excuses du monde et zéro discipline. Puis j'ai découvert Carl Jung, et d'autres{" "}
              <a href="https://en.wikipedia.org/wiki/Bren%C3%A9_Brown" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-foreground transition-colors">
                mecs et meufs cool en soirée
              </a>
              , et l'idée que si tu n'examines pas ta vie, tu ne vis pas — tu réagis.
            </>
          ) : (
            <>
              I had addictions. I was a numbing athlete. I had every excuse in the world and zero discipline. Then I found Carl Jung, and other{" "}
              <a href="https://en.wikipedia.org/wiki/Bren%C3%A9_Brown" target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-foreground transition-colors">
                cool at party dudes and dudettes
              </a>
              , and the idea that if you don't examine your life, you're not living — you're reacting.
            </>
          )}
        </p>
        <p>
          {lang === "fr"
            ? "J'ai commencé à écrire tous les jours. J'ai construit des systèmes. J'ai confronté mon ombre. J'ai arrêté de me mentir. Ça a tout changé."
            : "I started writing every day. I built systems. I confronted my shadow. I stopped lying to myself. It changed everything."}
        </p>
      </div>

      <blockquote className="my-10 pl-4 border-l-2 border-accent font-heading text-lg text-foreground italic leading-relaxed">
        {lang === "fr" ? (
          <>
            Je ne suis pas un gourou. Je n'essaie pas de te convaincre de suivre mes cours en ligne. Mais j'ai vécu une expérience qui a changé ma vie et tu peux au moins m'écouter si tu sens que ça te parle. Je ne m'en suis pas sorti seul. Je m'en suis sorti avec du soutien, et le seul soutien que j'ai trouvé, c'était dans des livres que j'ai payés. Je ne propose rien de payant pour l'instant, et si je le fais, ce sera pas cher et à fort impact.{" "}
            <Link to="/money" className="underline text-accent hover:text-foreground transition-colors">
              Rien sur ce site ne sera jamais payant
            </Link>
            .
          </>
        ) : (
          <>
            I'm not a guru. I'm not trying to convince you to go through my online courses. But I got a life changing experience and you can at least hear me out if you feel like this is talking to you. I got through it not on my own. I got through it with support, and the only support I found was in books that I paid for. I'm not proposing anything paying at the moment, and if I will, it will be cheap and high impact.{" "}
            <Link to="/money" className="underline text-accent hover:text-foreground transition-colors">
              Nothing on this website will ever be paying
            </Link>
            .
          </>
        )}
      </blockquote>

      <div className="font-body text-base text-foreground leading-[1.85] space-y-5">
        <p>
          {lang === "fr" ? (
            <>
              Chaque semaine, j'écris sur tout ça. La vie examinée. La discipline. Construire des choses, résoudre des problèmes. Les histoires vraies. Pas de conseils à la con. Juste la vérité. La prochaine étape est une vraie communauté vivante, bottom up, horizontale, auto-fondée.{" "}
              <span className="italic text-muted-foreground">
                (Si cette dernière partie n'a pas de sens pour vous, ne vous inquiétez pas, elle n'en a pas non plus pour moi — <em>pas encore</em>.)
              </span>
            </>
          ) : (
            <>
              Every week, I write about all of this. The examined life. Discipline. Building things, solving problems. The real stories. No bullshit advice. Just the truth. The next phase is an actual alive community, bottom up, horizontal, self founded.{" "}
              <span className="italic text-muted-foreground">
                (If that last part doesn't make sense to you, don't worry, it doesn't make sense to me neither <em>yet</em>.)
              </span>
            </>
          )}
        </p>
      </div>

      <SubscribeBox />
    </div>
  );
};

export default About;
