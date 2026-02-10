import { useLanguage } from "@/contexts/LanguageContext";
import { essays } from "@/data/content";
import { Link } from "react-router-dom";
import SubscribeBox from "@/components/SubscribeBox";
import essayThumbnail from "@/assets/essays/thumbnail-essay-1.jpg";
import { useEffect, useRef, useState } from "react";

const TYPEWRITER_SESSION_KEY = "essays_typewriter_seen";
const CHAR_BASE_SPEED = 70; // ms per character
const CHAR_VARIATION = 15; // ±ms random variation

const PAUSE_AFTER_PUNCTUATION = 400; // ms pause after ? or !

const heroText = {
  en: "You? here? That's Awesome! Welcome to my blog. I'm happy you came! I write about lots of stuff\nTell me what you think",
  fr: "Toi ? ici ? C'est génial ! Bienvenue sur mon blog. Je suis content que tu sois là ! J'écris sur plein de trucs\nDis-moi ce que t'en penses",
};

const Essays = () => {
  const { lang } = useLanguage();
  const fullText = heroText[lang];
  const alreadySeen = useRef(sessionStorage.getItem(TYPEWRITER_SESSION_KEY) === "1");
  const [displayedText, setDisplayedText] = useState(alreadySeen.current ? fullText : "");
  const [typingDone, setTypingDone] = useState(alreadySeen.current);
  const [circleDrawn, setCircleDrawn] = useState(false);
  const [showAnnotation, setShowAnnotation] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (alreadySeen.current) {
      // Skip typing, go straight to circle animation
      const t = setTimeout(() => setCircleDrawn(true), 100);
      return () => clearTimeout(t);
    }

    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const type = () => {
      if (i < fullText.length) {
        i++;
        setDisplayedText(fullText.slice(0, i));
        const justTyped = fullText[i - 1];
        const pause = (justTyped === "?" || justTyped === "!") ? PAUSE_AFTER_PUNCTUATION : 0;
        const delay = CHAR_BASE_SPEED + (Math.random() * 2 - 1) * CHAR_VARIATION + pause;
        timeout = setTimeout(type, delay);
      } else {
        setTypingDone(true);
        sessionStorage.setItem(TYPEWRITER_SESSION_KEY, "1");
        // Pause before circle
        timeout = setTimeout(() => setCircleDrawn(true), 300);
      }
    };
    timeout = setTimeout(type, 400);
    return () => clearTimeout(timeout);
  }, [fullText]);

  // Show annotation after circle finishes drawing
  useEffect(() => {
    if (circleDrawn) {
      const t = setTimeout(() => setShowAnnotation(true), 900);
      return () => clearTimeout(t);
    }
  }, [circleDrawn]);

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      {/* Typewriter Hero */}
      <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-bold italic text-foreground leading-tight tracking-tight mb-12 min-h-[3.6em]">
        {displayedText.split("\n").map((line, idx, arr) => (
          <span key={idx}>
            {line}
            {idx < arr.length - 1 && <br />}
          </span>
        ))}
        {!typingDone && (
          <span className="inline-block w-[2px] h-[1.1em] bg-foreground ml-0.5 align-text-bottom animate-[blink_1s_step-end_infinite]" />
        )}
      </h1>

      {/* Latest Essay label with sharpie circle */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="relative inline-block">
          <Link
            to={essays[0]?.slug || "#"}
            className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors relative z-10 px-2 py-1"
          >
            {lang === "fr" ? "Dernier essai" : "Latest essay"}
          </Link>

          {/* Sharpie circle SVG */}
          <svg
            className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none overflow-visible"
            viewBox="0 0 200 50"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 30 8 C 10 6, 3 15, 5 28 C 7 42, 30 46, 100 45 C 170 44, 195 38, 197 25 C 199 12, 175 4, 100 5 C 50 5.5, 20 8, 30 8"
              stroke="#3D2B1F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={circleDrawn ? "sharpie-circle-animate" : "sharpie-circle-hidden"}
            />
          </svg>
        </div>

        {/* "Try this one" annotation */}
        <span
          className={`font-hand text-lg whitespace-nowrap transition-all duration-500 ${
            showAnnotation ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          }`}
          style={{ color: "#3D2B1F", transform: "rotate(-2deg)" }}
        >
          ← {lang === "fr" ? "Essaie celui-ci" : "Try this one"}
        </span>
      </div>

      {essays.map((essay, i) => {
        const content = (
          <>
            {essay.slug === "/essays/vision-board-creative-thinking-through-collage" && (
              <div className="mb-3 rounded-lg overflow-hidden border border-border/40">
                <img
                  src={essayThumbnail}
                  alt={lang === "fr" ? essay.titleFr : essay.titleEn}
                  className="w-full h-40 object-cover object-center"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex justify-between items-center mb-1">
              <div className="flex gap-2">
                {(lang === "fr" ? essay.tagsFr : essay.tags).map((t) => (
                  <span key={t} className="font-body text-xs text-accent font-semibold">{t}</span>
                ))}
              </div>
              <span className="font-body text-xs text-muted-foreground">
                {lang === "fr" ? essay.dateFr : essay.date}
              </span>
            </div>
            <h2 className="text-lg font-bold text-foreground leading-snug tracking-tight mb-1.5 group-hover:text-accent transition-colors">
              {lang === "fr" ? essay.titleFr : essay.titleEn}
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {lang === "fr" ? "Collage vision board, un voyage créatif" : "Vision board collage, a creativity journey"}
            </p>
          </>
        );
        const cls = `pb-6 mb-6 cursor-pointer group block ${i < essays.length - 1 ? "border-b border-border/40" : ""}`;
        return 'slug' in essay && essay.slug ? (
          <Link key={essay.id} to={essay.slug} className={cls}>{content}</Link>
        ) : (
          <article key={essay.id} className={cls}>{content}</article>
        );
      })}

      <SubscribeBox />

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .sharpie-circle-hidden {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
        }
        .sharpie-circle-animate {
          stroke-dasharray: 600;
          stroke-dashoffset: 0;
          transition: stroke-dashoffset 0.9s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Essays;
