import { useRef, useEffect, useState, type ReactNode } from "react";
import collageImg from "@/assets/vision-board-collage.jpg";
import SubscribeBox from "@/components/SubscribeBox";

/* ─── scroll-reveal hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, vis };
}

/* ─── styled link ─── */
function EssayLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-accent/50 underline-offset-2 hover:decoration-accent transition-colors"
    >
      {children}
    </a>
  );
}

/* ─── collage piece ─── */
function Piece({
  bgPos,
  bgSize = "300%",
  aspect = "4/3",
  annotation,
  notePos = "top-2 right-2",
  noteRotate = -3,
}: {
  bgPos: string;
  bgSize?: string;
  aspect?: string;
  annotation?: string;
  notePos?: string;
  noteRotate?: number;
}) {
  const { ref, vis } = useReveal(0.2);
  return (
    <div ref={ref} className="relative my-8">
      <div
        className={`w-full overflow-hidden transition-all duration-700 ease-out
          ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        style={{
          aspectRatio: aspect,
          boxShadow: vis
            ? "4px 6px 18px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)"
            : "none",
          borderRadius: "2px",
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${collageImg})`,
            backgroundPosition: bgPos,
            backgroundSize: bgSize,
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      {annotation && (
        <div
          className={`absolute font-hand text-foreground text-lg md:text-xl pointer-events-none
            transition-opacity duration-500 delay-300 ${vis ? "opacity-100" : "opacity-0"} ${notePos}`}
          style={{ transform: `rotate(${noteRotate}deg)` }}
        >
          {annotation}
        </div>
      )}
    </div>
  );
}

/* ─── assembly grid ─── */
function Assembly() {
  const { ref, vis } = useReveal(0.1);
  const [lightbox, setLightbox] = useState(false);

  const scatter = [
    { x: -40, y: -30, r: -5 },
    { x: 20, y: -50, r: 4 },
    { x: 50, y: -20, r: -3 },
    { x: -30, y: 10, r: 5 },
    { x: 30, y: -15, r: -4 },
    { x: -45, y: 20, r: 6 },
    { x: 35, y: 5, r: -5 },
    { x: -25, y: 25, r: 3 },
    { x: 55, y: 15, r: -7 },
    { x: -35, y: 35, r: 4 },
    { x: 25, y: 20, r: -3 },
    { x: 45, y: 40, r: 5 },
  ];

  const colPos = [0, 50, 100];
  const rowPos = [0, 33.33, 66.67, 100];

  return (
    <>
      <div
        ref={ref}
        className="my-12 cursor-pointer overflow-visible"
        onClick={() => vis && setLightbox(true)}
      >
        <div className="grid grid-cols-3 gap-[2px]">
          {scatter.map((o, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            return (
              <div
                key={i}
                className="overflow-hidden transition-all ease-out"
                style={{
                  aspectRatio: "3/4",
                  transitionDuration: `${700 + i * 80}ms`,
                  transitionDelay: vis ? `${i * 60}ms` : "0ms",
                  transform: vis
                    ? "translate(0,0) rotate(0deg)"
                    : `translate(${o.x}px, ${o.y}px) rotate(${o.r}deg)`,
                  opacity: vis ? 1 : 0,
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${collageImg})`,
                    backgroundSize: "300% 400%",
                    backgroundPosition: `${colPos[col]}% ${rowPos[row]}%`,
                  }}
                />
              </div>
            );
          })}
        </div>
        <p className="font-hand text-center text-muted-foreground text-sm mt-3">
          click to view full size
        </p>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(false)}
        >
          <img
            src={collageImg}
            alt="Full vision board collage"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
}

/* ─── text section wrapper ─── */
function Section({
  children,
  extraSpace,
}: {
  children: ReactNode;
  extraSpace?: boolean;
}) {
  const { ref, vis } = useReveal(0.1);
  return (
    <section
      ref={ref}
      className={`transition-all duration-600 ease-out
        ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${extraSpace ? "my-24" : "my-14"}`}
    >
      {children}
    </section>
  );
}

/* ─── paragraph helper ─── */
const P = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <p className={`font-body text-base text-foreground leading-relaxed mb-4 ${className}`}>
    {children}
  </p>
);

/* ════════════════════════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════════════════════════ */
const VisionBoard = () => {
  return (
    <article className="max-w-[640px] mx-auto px-6 pb-20">
      {/* ── 1. Title + Hero ── */}
      <header className="pt-8 pb-20">
        <p className="font-body text-xs text-muted-foreground mb-3 uppercase tracking-widest">
          Feb 2026
        </p>
        <h1 className="font-hand text-[clamp(2.4rem,7vw,3.8rem)] text-foreground leading-[1.05] tracking-tight">
          Vision Board Creative Thinking through Collage
        </h1>
      </header>

      {/* ── 2. Ta Prohm + WHO? ── */}
      <Section>
        <P>
          I found this image of the dark entry to the temple of{" "}
          <EssayLink href="https://en.wikipedia.org/wiki/Ta_Prohm">Ta Prohm</EssayLink>{" "}
          in a National Geographic magazine. It called me. I cut it out and I pasted
          it on my vision board. And without conscious action, right next to it, I
          cut the word: <em>WHO?</em>
        </P>
        <P>
          And the questions start flowing. Who am I to start a blog? Who do I think
          I am? And if not me — then who?
        </P>
        <p className="font-hand text-3xl text-foreground mb-4">WHO?</p>
        <P className="text-muted-foreground">
          That's the question. The only question on my vision board. Can you find it
          too? <span className="italic">(Bottom right corner)</span>
        </P>
        <Piece
          bgPos="88% 95%"
          bgSize="260%"
          aspect="4/3"
          annotation="WHO? →"
          notePos="bottom-4 right-4"
          noteRotate={-5}
        />
      </Section>

      {/* ── 3. Collage explanation ── */}
      <Section extraSpace>
        <P>
          <EssayLink href="https://artfulparent.com/make-vision-board-works-10-steps/">
            Collage vision boards
          </EssayLink>{" "}
          are a funny thing. When a loved one or a family member asks you to sit
          down and do one with them, you feel very awkward. How the hell am I gonna
          express myself with this? There's surely not enough materials in a few
          magazines to tell everything about what I want. The answer from whoever is
          leading the collage is always the same. <em>Just start.</em> And
          surprisingly, there's always enough. An image, call another one. A
          sentence, bring to life. Ideas. The whole creative process starts going,
          and all of a sudden, your creation takes life and your vision board is
          done. It's a lesson in{" "}
          <EssayLink href="https://www.psychologytoday.com/us/blog/maximizing-relationships-and-happiness-in-life/202503/how-scarcity-hijacks-your-brain">
            scarcity and abundance
          </EssayLink>
          . In the end, as all creativity exercises teach you, it's all just a
          mindset.
        </P>
      </Section>

      {/* ── 4. Temple metaphor ── */}
      <Section>
        <P>And that mindset? It goes deeper than a collage.</P>
        <P>
          Deep inside us, inside our own temples, there are sacred things that need
          to come out. But we've been taught our whole life to not dare to enter.{" "}
          <em>
            "Don't go in there. You'll be cursed. Stay outside. Stay safe."
          </em>
        </P>
        <P>
          Here's what I know now: that feeling keeping you out of the temple? It's
          self-imposed — or more accurately, learned through early traumas. Brené
          Brown spent years studying this. In her research, 85% of people could
          recall a school event so shaming it changed how they saw themselves — and
          half of those wounds were about creativity. <em>Half.</em> The reason they
          never created ever again.
        </P>
        <P>
          Someone laughed at you singing. Someone told you your drawing was shit.
          Someone told you to stop being an idiot and start to be realistic. And you
          listened. We all listened. We were — most of us — all traumatized into
          staying in line.
        </P>
        <p className="font-body text-sm text-muted-foreground italic mb-6">
          (Brené Brown, <em>The Gifts of Imperfection</em>, 2010)
        </p>
        <P>Today I'm entering the temple. Are you coming with me?</P>
        <Piece
          bgPos="82% 100%"
          bgSize="300%"
          aspect="3/2"
          annotation="enter here →"
          notePos="top-3 left-3"
          noteRotate={-4}
        />
      </Section>

      {/* ── 5. The climb ── */}
      <Section>
        <P>
          So we enter. Inside our temple, we find a little kid. Hey — that's me.
          That's you. That's the kid we need to start having a conversation with.
          Start having fun with. Play with. Love.
        </P>
        <P>So let's grab that kid. Baby backpack style.</P>
        <P>
          He's sitting next to a giant tree that starts from the bottom of the
          temple, all the way up through the bricks, through the stones — and you
          can see the light upstairs.
        </P>
        <P>
          <em>"Let's start climbing that tree,"</em> said the little kid.
        </P>
        <P>All right, motherfucker. Let's go.</P>
        <P>
          So we climb. And you can follow on the vision board — you can see people
          climbing that tree. (You can't see the backpack baby, but just imagine
          it.) The climbers — that's me. That's you if you want. That's us, our
          community, finding our way as we go <strong>UP</strong>.
        </P>
        <Piece
          bgPos="85% 40%"
          bgSize="250%"
          aspect="3/4"
          annotation="that's us ↗"
          notePos="bottom-4 left-4"
          noteRotate={-6}
        />
      </Section>

      {/* ── 6. The vision ── */}
      <Section>
        <P>
          Not just up through hustle. Up through effort, through nature, through
          play, through rest, through love, through purpose. All of it. The whole
          shebang. I'm climbing toward my vision — if you're still following my
          collage. And my vision is this: I have decided that I want to spend my
          life trying to inspire courage, health, happiness, and purpose into other
          people's lives.
        </P>
        <Piece
          bgPos="70% 8%"
          bgSize="250%"
          aspect="5/2"
          annotation=""
          notePos=""
          noteRotate={0}
        />
        <p className="font-hand text-center text-2xl text-foreground mt-2">
          vision · storyteller
        </p>
      </Section>

      {/* ── 7. The backstory — WHO am I? ── */}
      <Section extraSpace>
        <P>
          Well, <em>WHO</em> do I think I am? To start teaching people?
        </P>
        <P>
          Well, first — in the last five years, I have shown an incredible amount of
          courage. I have completely changed my health. I have become happier than I
          ever thought was possible. And I found an incredible amount of purpose.
          But most importantly, and the reason why I might be a good teacher, is not
          where I am now. It's where I come from.
        </P>
        <P>
          I was 24 years old. Addicted. Numbing. No skills, no degrees, no hobbies,
          no passion, no nothing. I was extremely scared and fearful. Unassertive,
          unempathic, pathologically unorganized. Lazy and unindustrious with a very
          bad mindset. My life could have been summed up in a few sentences:{" "}
          <em>
            He depended on his parents. Lived for alcoholic parties. Tried to climb
            the ladder of social hierarchy in a dysfunctional micro-society. To no
            success. His world was small, which made his failures all the more
            bitter.
          </em>
        </P>
        <P>
          The fact that I'm now 31 years old, a successful business owner — but most
          importantly, a successful human — can tell you a little bit about the
          drastic and extremely fast change that happened in five years. I think
          that's worth writing about. I've been writing consistently since the day I
          decided to change my life at 24. That's 7 years of writing behind me. And
          I attribute most of my success to the fact that I kept writing my journey.
          So all the more interesting. Are you sold?
        </P>
      </Section>

      {/* ── 8. Poncho the wolf ── */}
      <Section>
        <P>
          Good. Because we're not done. Look at the vision board again — can you
          find the wolf?
        </P>
        <P>
          That's Poncho. My dog. His charismatic face that I see every morning when
          I wake up. His jaw dropped on the bed sheet, asking me: are you gonna wake
          up so we can both partake in the dance of life today? My answer is always
          yes.
        </P>
        <Piece
          bgPos="18% 92%"
          bgSize="300%"
          aspect="4/3"
          annotation="good morning, Poncho ♡"
          notePos="top-3 right-3"
          noteRotate={-3}
        />
      </Section>

      {/* ── 9. Central America + the wild ── */}
      <Section>
        <P>
          Everybody who knows me personally will tell you that I'm a wild person.
          And I keep on being wild during 2026. At the center you can see a little
          map of Central America, representing my past — my crazy, extremely
          dangerous hitchhiking journey with a 5kg backpack through Central America
          and into no-go zones. It reminds me what I achieved and the risks I took.
          It helped me ground myself.
        </P>
        <P>
          And I need grounding for what I'm about to do in 2026. Because I'm about
          to jump off the cliff and into a new world. A new career, new business,
          new creativity. This blog is only the beginning.
        </P>
        <P>
          Look at the rest of the collage. A river forming a question mark. A kid
          dangling in the air. A cobra. None of it is safe. None of it is certain.
          And that's exactly where I am right now. Where I think you are too. Where
          the whole world is.
        </P>
        <Piece
          bgPos="35% 55%"
          bgSize="220%"
          aspect="1/1"
          annotation=""
          notePos=""
          noteRotate={0}
        />
      </Section>

      {/* ── 10. Rhythm + cosmos ── */}
      <Section>
        <P>
          This blog is about showing you my rhythm. I have been dancing to the
          rhythm of life, but it is time for me to start my own rhythm and see if
          people like the music I can make. And if they want to dance with me on it.
        </P>
        <P>I'm in the cosmos. It is time for me to reinvent my life.</P>
        <Piece
          bgPos="12% 10%"
          bgSize="260%"
          aspect="4/3"
          annotation="RÉINVENTE"
          notePos="bottom-3 left-3"
          noteRotate={-2}
        />
      </Section>

      {/* ── 11. Grand reveal ── */}
      <Section>
        <P>
          And if you think it's time for you to reinvent your life too, you should
          probably come around a few times to this blog. Because there's many things
          coming.
        </P>
        <P>
          Here's the 2026 vision board of Julien, the storyteller.
        </P>
        <p className="font-hand text-2xl text-foreground text-center my-6">
          Let's soar.
        </p>
        <Assembly />
      </Section>

      {/* ── 12. Dedication ── */}
      <Section extraSpace>
        <p className="font-body text-base text-muted-foreground italic text-center py-16">
          For Lucia — who gave me left-handed scissors. No one else ever did.
        </p>
      </Section>

      {/* ── Subscribe ── */}
      <SubscribeBox />
    </article>
  );
};

export default VisionBoard;
