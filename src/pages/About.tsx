import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-accent hover:text-foreground transition-colors">
    {children}
  </a>
);

const About = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      <h1 className="text-[2rem] font-bold text-foreground tracking-tight mb-8">
        {lang === "fr" ? "L'histoire" : "The Story"}
      </h1>

      <div className="font-body text-base text-foreground leading-[1.85] space-y-5">
        {lang === "fr" ? (
          <>
            <p>J'ai grandi perdu et effrayé.</p>

            <p>Je ne trouvais rien qui méritait d'être poursuivi.</p>

            <p>Je buvais. Je fuyais. J'attendais des conditions parfaites qui ne viendraient jamais.</p>

            <p>
              Puis un poème m'a dit que je devais <A href="https://poets.org/poem/archaic-torso-apollo">changer ma vie</A>.
            </p>

            <p>Alors je l'ai fait.</p>

            <p>
              Je suis rentré d'un voyage au ski et j'ai tout brûlé. Mes trophées d'étudiant. Mes trophées de beuverie. Mes vieilles histoires. <A href="https://www.poetry-chaikhana.com/Poets/M/Masahide/Barnsburntdo/index.html">Ma grange a brûlé. Maintenant je pouvais voir la lune.</A>
            </p>

            <p>
              J'ai quitté mon job. J'ai dit <A href="https://sive.rs/hellyeah">hell yeah</A> à ce qui comptait et non à tout le reste. J'ai appris à <A href="https://en.wikiquote.org/wiki/Marcus_Aurelius">ne pas réagir</A>. À <A href="https://rilkepoetry.com/letters-to-a-young-poet/letter-eight/">être patient avec ce qui n'est pas résolu et à vivre les questions</A>.
            </p>

            <p>
              J'ai découvert <A href="https://en.wikipedia.org/wiki/The_unexamined_life_is_not_worth_living">la vie examinée</A>. J'ai lu <A href="https://en.wikipedia.org/wiki/Shadow_(psychology)">Jung</A>. J'ai lu <A href="https://en.wikipedia.org/wiki/Siddhartha_(novel)">Hesse</A> et <A href="https://rilkepoetry.com/letters-to-a-young-poet/letter-eight/">Rilke</A> et <A href="https://fr.wikipedia.org/wiki/Alexandre_Jollien">Jollien</A> et <A href="https://en.wikipedia.org/wiki/Matthieu_Ricard">Ricard</A>. J'ai appris que <A href="https://www.ted.com/talks/brene_brown_the_power_of_vulnerability">la vulnérabilité n'est pas une faiblesse</A>. Que <A href="https://en.wikipedia.org/wiki/Siddhartha_(novel)">la sagesse ne s'enseigne pas</A> — elle se vit. Que le sens de la vie est peut-être simplement <A href="https://www.goodreads.com/quotes/745-perhaps-all-the-dragons-in-our-lives-are-princesses-who">la bonté</A>.
            </p>

            <p>
              Puis je suis descendu dans mon sous-sol et j'ai eu une conversation avec mon <A href="https://www.goodreads.com/quotes/745-perhaps-all-the-dragons-in-our-lives-are-princesses-who">dragon</A>.
            </p>

            <p>Ce n'était pas un monstre. C'était l'enfant en moi. Il attendait.</p>

            <p>Je suis devenu plus libre que jamais. Libre de <A href="https://en.wikiquote.org/wiki/Friedrich_Nietzsche#Thus_Spoke_Zarathustra_(1883%E2%80%931885)">rejoindre la danse</A> et de laisser mon passé chaotique devenir le catalyseur.</p>

            <p>
              Maintenant je construis des choses — pas par <A href="https://www.goodreads.com/quotes/6693619-do-not-talk-about-giftedness-inborn-talents-one-can-name">talent</A>, mais avec le sérieux de l'artisan qui fait bien les petites choses. J'écris. Je code. Je découpe du papier et je colle des collages. Je <A href="https://www.goodreads.com/quotes/263898-would-you-like-me-to-give-you-a-formula-for">double mon taux d'échec</A>. J'<A href="https://www.goodreads.com/quotes/6-anyone-who-lives-within-their-means-suffers-from-a-lack">imagine au-delà de mes moyens</A>.
            </p>

            <p>
              <A href="https://julien.care">I care.</A>
            </p>

            <p className="font-heading font-bold">Ma vie en cinq lettres.</p>
          </>
        ) : (
          <>
            <p>I grew up lost and afraid.</p>

            <p>Found nothing worth pursuing.</p>

            <p>I drank. I ran. I waited for perfect conditions that would never come.</p>

            <p>
              Then a poem told me I had to <A href="https://poets.org/poem/archaic-torso-apollo">change my life</A>.
            </p>

            <p>So I did.</p>

            <p>
              I came home from a skiing trip and burned everything. My student trophies. My drinking trophies. My old stories. <A href="https://www.poetry-chaikhana.com/Poets/M/Masahide/Barnsburntdo/index.html">My barn burned down. Now I could see the moon.</A>
            </p>

            <p>
              I quit my job. I said <A href="https://sive.rs/hellyeah">hell yeah</A> to what mattered and no to everything else. I learned to <A href="https://en.wikiquote.org/wiki/Marcus_Aurelius">not react</A>. To <A href="https://rilkepoetry.com/letters-to-a-young-poet/letter-eight/">be patient with the unsolved and to live the questions</A>.
            </p>

            <p>
              I discovered <A href="https://en.wikipedia.org/wiki/The_unexamined_life_is_not_worth_living">the examined life</A>. I read <A href="https://en.wikipedia.org/wiki/Shadow_(psychology)">Jung</A>. I read <A href="https://en.wikipedia.org/wiki/Siddhartha_(novel)">Hesse</A> and <A href="https://rilkepoetry.com/letters-to-a-young-poet/letter-eight/">Rilke</A> and <A href="https://fr.wikipedia.org/wiki/Alexandre_Jollien">Jollien</A> and <A href="https://en.wikipedia.org/wiki/Matthieu_Ricard">Ricard</A>. I learned that <A href="https://www.ted.com/talks/brene_brown_the_power_of_vulnerability">vulnerability is not weakness</A>. That <A href="https://en.wikipedia.org/wiki/Siddhartha_(novel)">wisdom can't be taught</A> — only lived. That the meaning of life might just be <A href="https://en.wikipedia.org/wiki/The_Boy,_the_Mole,_the_Fox_and_the_Horse">kindness</A>.
            </p>

            <p>
              Then I went down to my basement and had a conversation with my <A href="https://www.goodreads.com/quotes/745-perhaps-all-the-dragons-in-our-lives-are-princesses-who">dragon</A>.
            </p>

            <p>It wasn't a monster. It was the kid inside me. It had been waiting.</p>

            <p>I got freer than I've ever been. Free to <A href="https://en.wikiquote.org/wiki/Friedrich_Nietzsche#Thus_Spoke_Zarathustra_(1883%E2%80%931885)">join the dance</A> and let my chaotic past become the catalyst.</p>

            <p>
              Now I build things — not from <A href="https://www.goodreads.com/quotes/6693619-do-not-talk-about-giftedness-inborn-talents-one-can-name">talent</A>, but from the seriousness of the workman who makes the small things well. I write. I code. I cut paper and glue collages. I <A href="https://www.goodreads.com/quotes/263898-would-you-like-me-to-give-you-a-formula-for">double my rate of failure</A>. I <A href="https://www.goodreads.com/quotes/6-anyone-who-lives-within-their-means-suffers-from-a-lack">imagine beyond my means</A>.
            </p>

            <p>
              <A href="https://julien.care">I care.</A>
            </p>

            <p className="font-heading font-bold">My life in five letters.</p>
          </>
        )}
      </div>

      <SubscribeBox />
    </div>
  );
};

export default About;
