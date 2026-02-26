import { useLanguage } from "@/contexts/LanguageContext";
import SubscribeBox from "@/components/SubscribeBox";
import thumbnailImg from "@/assets/essays/thumbnail-essay-2.jpg";

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline text-accent hover:text-foreground transition-colors"
  >
    {children}
  </a>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-base text-foreground/90 leading-relaxed mb-5">{children}</p>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold text-foreground mt-10 mb-4">{children}</h2>
);

const MixtapeRebellion = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6 pb-20">
      {/* Header */}
      <div className="mb-2">
        <div className="flex gap-2 mb-2">
          {(lang === "fr" ? ["Analogique", "Créativité"] : ["Analog", "Creativity"]).map((t) => (
            <span key={t} className="font-body text-xs text-accent font-semibold">{t}</span>
          ))}
          <span className="font-body text-xs text-muted-foreground ml-auto">
            {lang === "fr" ? "fév. 2026" : "Feb 2026"}
          </span>
        </div>
      </div>

      <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-bold text-foreground leading-tight tracking-tight mb-2">
        {lang === "fr" ? "La Rébellion du Mixtape" : "The Mixtape Rebellion"}
      </h1>
      <p className="font-body text-sm text-muted-foreground mb-8 italic">
        {lang === "fr"
          ? "Comment j'ai quitté Spotify et redécouvert la musique grâce aux cassettes"
          : "How I quit Spotify and rediscovered music through cassettes"}
      </p>

      {/* Thumbnail */}
      <div className="mb-10 rounded-lg overflow-hidden border border-border/40">
        <img
          src={thumbnailImg}
          alt={lang === "fr" ? "Cassette vintage sur une table" : "Vintage cassette on a table"}
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      {lang === "fr" ? (
        <>
          <P>Un jour j'écoutais ma Discover Weekly, ce que je fais chaque semaine pour découvrir de nouvelles chansons sur Spotify. J'ai vraiment aimé une chanson. Je l'ai mise dans mes Likes et j'étais curieux de l'artiste parce que la musique était haïtienne. Je me suis dit c'est cool, regardons les gens qui ont fait ça.</P>
          <P>Vingt albums. En janvier 2026. On était en janvier 2026.</P>
          <P>What the fuck ?</P>
          <P>Les pochettes se ressemblaient toutes. En regardant bien, les pochettes étaient générées aussi. Il n'y avait personne derrière la chanson que j'avais aimée.</P>
          <P>Pendant des années j'ai dit aux gens que Spotify était les meilleurs dix euros par mois que j'aie jamais dépensés. Discover Weekly était sacré pour moi. Chaque lundi, un nouveau lot. J'avais confiance.</P>
          <P>Mais la colère n'était pas dirigée contre Spotify. La colère était dirigée contre moi-même. Parce que quand j'ai regardé honnêtement mes écoutes récentes, j'avais dérivé. De plus en plus de musique basique. Pas trop haute, pas trop basse, pas de cris. Good vibe. Le genre de musique qui n'est pas trop quoi que ce soit. Et j'ai réalisé : c'est exactement ce à quoi le slop IA ressemble. Mon goût avait été lentement façonné vers exactement le type de musique qu'une machine peut produire. Je ne l'avais même pas remarqué.</P>
          <P>Maintenant je l'ai remarqué. Et je ne peux plus ouvrir Spotify.</P>
          <P>Je n'aime plus mes playlists. Je n'aime plus les sons qui sortent de Spotify. Je suis totalement cramé de ces sons ennuyeux. Il y a encore de la super musique là-dehors, et toute la musique est sur Spotify, donc bien sûr Spotify est plein de bonne musique. Le problème c'est que je suis tombé dans la paresse, et ma connexion émotionnelle avec Spotify est maintenant totalement rompue. J'ai besoin d'autre chose parce que je ne peux pas vivre sans musique.</P>

          <H2>L'Élixir</H2>
          <P>Il y a un gars qui s'appelle <A href="https://austinkleon.com">Austin Kleon</A>, que je recommande de suivre. C'est un créatif fou et j'ai tous ses livres. Chaque mois il fait une cassette avec un lecteur de cassettes. La technique old school des années 70 et 80 où tu enregistres ta propre cassette avec une entrée audio et tu crées tes propres mixtapes. Chaque mois un nouveau mixtape et un petit collage sur la pochette. C'est très chouette.</P>
          <P>J'ai toujours pensé « quel intérêt ? J'ai Spotify. » Eh bien, maintenant je comprends l'intérêt. Quand la musique devient si facilement accessible, elle devient une commodité qui ne vaut rien.</P>
          <P>Il y a une belle phrase que j'ai lue dans un livre poétique que j'adore qui s'appelle <A href="https://www.babelio.com/livres/Carrere-dEncausse-Le-Chien-le-Loup-et-Dieu/1536994">« Le Chien, le Loup et Dieu »</A>. Elle dit, en parlant de l'eau, que l'eau est l'élixir de vie, et qu'il faut ne pas en boire pendant des semaines pour comprendre à quel point elle est délicieuse et puissante. C'est une question de commodité. Si tu as quelque chose tout le temps, tu ne réalises pas à quel point c'est bien. Mais si tu dois te battre pour de l'eau, tu la trouveras la chose la plus délicieuse de la planète. Parce que c'est le cas.</P>
          <P>La musique c'est pareil. Si c'est une commodité présente à chaque seconde de ta vie, elle ne vaut rien. Mais si c'est quelque chose pour lequel tu dois te battre, trouver des cassettes, enregistrer tes propres chansons, retourner le disque après 45 minutes, changer de cassette toutes les 90 minutes, ça devient quelque chose de précieux.</P>
          <P>J'avais des doutes. Jusqu'à ce que je décide d'essayer.</P>

          <H2>Et Si On Faisait une Expérience ?</H2>
          <P>Tout le monde pensait que j'étais stupide. Un lecteur de cassettes ? En 2026 ? Ce truc va être un gros monstre qui prend la poussière sur ton étagère. La plupart des gens à qui j'en ai parlé ont eu cette réaction.</P>
          <P>J'avais le même doute.</P>
          <P>Mais je tiens un journal que j'appelle Tiny Experiments. Un carnet vierge. Chaque fois que j'ai une idée que je veux essayer, je l'écris. Parce que tout le monde a de bonnes idées. Tu ne les fais juste jamais. « C'est stupide. » « C'est inutile. » « Ça va coûter de l'argent pour rien. » « Tu devrais te concentrer sur ton boulot. »</P>
          <P>Recadrer une idée comme une petite expérience la retire de ton identité. Si je dis « je veux être un mec à cassettes » et que ça échoue, mon identité en prend un coup. Mais si c'est juste l'expérience n°7 dans un journal ? Les enjeux baissent. Essaie, échoue, et ça ne te coûte rien d'autre que l'expérience elle-même.</P>
          <P>J'ai regardé mon compte en banque. J'ai regardé le budget pour un lecteur de cassettes. Deux cents euros. Je peux toujours le revendre pour au moins 150. Un pari de cinquante euros sur moi-même.</P>

          <H2>Sept Mixtapes en Une Semaine</H2>
          <P>J'ai trouvé un lecteur de cassettes d'occasion. J'ai rencontré un vendeur passionné et découvert qu'il y a tout un monde de gens à cassettes. J'ai pris une petite enceinte Marshall. Neuve, mais elle a un look vintage. Super son. Super look dans l'appart.</P>
          <P>Puis le flow est arrivé.</P>
          <P>Trois heures envolées. Chercher de la musique, trouver le bon enregistrement, chasser les versions live sur YouTube. Je pensais devoir télécharger des fichiers FLAC et gérer des installations compliquées. YouTube te donne tout. Enregistrements live, performances rares, différentes versions de la même chanson.</P>
          <P>J'ai fait un mixtape Woodstock. J'ai fait des recherches sur tout l'événement. J'ai trouvé les annonces qu'ils faisaient entre les sets et je les ai tissées entre les chansons. Quand tu écoutes la cassette, tu as l'impression d'y être. Honnêtement ça ressemble à être un artiste.</P>
          <P>Un mixtape country avec une session live autour d'un feu de camp où tu entends le feu crépiter et les grillons en fond. Un mixtape jazz avec tous mes hits favoris, en live. Le concert complet de Queen à Wembley, enregistré d'une traite. Mon concert préféré de tous les temps : Buena Vista Social Club au Carnegie Hall. Un mix de musique indienne pour la pratique de danse. Une cassette jazz pour s'endormir.</P>
          <P>Une semaine. Sept mixtapes. Le truc qui était censé prendre la poussière.</P>
          <P>Je les passe pour ma copine avec des commentaires. J'essaie de la mettre dans l'ambiance. C'est du storytelling. Le son est plus chaud et pas aussi parfait, et tous ceux qui ont écouté disent la même chose : c'est juste un son différent. Plus vivant.</P>
          <P>L'expérience n°7 est un énorme succès.</P>
        </>
      ) : (
        <>
          <P>One day I was listening to my Discover Weekly, which I do every week to discover new songs on Spotify. I really liked one song. I put it in my Likes and I was curious about the artist because the music was Haitian. I thought that's cool, let's look at the people who made that.</P>
          <P>Twenty albums. In January 2026. We were in January 2026.</P>
          <P>What the fuck?</P>
          <P>The covers all looked the same. When I looked carefully, the covers were generated too. There was nobody behind the song I loved.</P>
          <P>For years I told people that Spotify was the best ten euros a month I ever spent. Discover Weekly was sacred to me. Every Monday, a new batch. I trusted it.</P>
          <P>But the anger wasn't at Spotify. The anger was at myself. Because when I looked honestly at my recent listening, I had been drifting. More and more basic music. Not too high, not too low, no screams. Good vibe. The kind of music that's not too anything. And I realized: that's exactly what AI slop sounds like. My taste had been slowly shaped toward the exact kind of music a machine can produce. I didn't even notice.</P>
          <P>Now I noticed. And I cannot open Spotify anymore.</P>
          <P>I don't like my playlists anymore. I don't like the sounds that come out of Spotify. I am totally burned out of these boring sounds. There is still great music out there, and all music is on Spotify, so of course Spotify is full of good music. The problem is that I got trapped into laziness, and my emotional connection with Spotify is now totally ruptured. I need something else because I cannot live without music.</P>

          <H2>The Elixir</H2>
          <P>There is a guy called <A href="https://austinkleon.com">Austin Kleon</A>, which I recommend that you follow. He's a crazy creative and I have all his books. Every month he makes a cassette with a cassette deck. Old school technique from the '70s and '80s where you record your own cassette with an audio input and create your own mixtapes. Every month a new mixtape and a little collage on the cover. It's very nice.</P>
          <P>I always thought, "what's the point? I have Spotify." Well, now I understand the point. As music becomes so easily accessible, it becomes a commodity worth nothing.</P>
          <P>There is a beautiful phrase I read in a poetic book I love called <A href="https://www.babelio.com/livres/Carrere-dEncausse-Le-Chien-le-Loup-et-Dieu/1536994">"The Dog, The Wolf, and God."</A> It says, talking about water, that water is the elixir of life, and you have to not drink it for weeks to understand how delicious and how powerful it truly is. It's all about commodity. If you have something all the time, you don't realize how good it is. But if you have to fight for water, you will find it the most delicious thing on the planet. Because it is.</P>
          <P>Music is the same. If it's a commodity present at every second of your life, it's worth nothing. But if it's something you have to fight for, find cassettes, record your own songs, flip the disc after 45 minutes, change cassettes every 90 minutes, it becomes something precious.</P>
          <P>I had my doubts. Until I decided to try.</P>

          <H2>What About an Experiment?</H2>
          <P>Everybody thought I was stupid. A cassette deck? In 2026? That thing is going to be a big monster sitting on your shelf collecting dust. Most people I talked to had this reaction.</P>
          <P>I had the same doubt.</P>
          <P>But I keep a journal I call Tiny Experiments. A blank book. Every time I have an idea I want to try, I write it down. Because everybody has good ideas. You just never do them. "That's stupid." "It's useless." "It'll cost money for nothing." "You should focus on your job."</P>
          <P>Reframing an idea as a tiny experiment removes it from your identity. If I say "I want to be a cassette guy" and it fails, my identity takes a hit. But if it's just experiment #7 in a journal? The stakes drop. Try and fail and it costs you nothing but the experiment itself.</P>
          <P>I looked at my bank account. I looked at the budget for a cassette deck. Two hundred euros. I can always sell it back for at least 150. A fifty-euro bet on myself.</P>

          <H2>Seven Mixtapes in One Week</H2>
          <P>Found a cassette deck secondhand. Met a passionate seller and discovered there's a whole world of cassette people out there. Got a small Marshall speaker. Brand new, but it looks vintage. Sounds great. Looks great in the apartment.</P>
          <P>Then the flow hit.</P>
          <P>Three hours gone. Finding music, finding the right recording, hunting for live versions on YouTube. I thought I'd need to download FLAC files and deal with complicated setups. YouTube gives you everything. Live recordings, rare performances, different versions of the same song.</P>
          <P>I made a Woodstock mixtape. I researched the entire event. I found the announcements they made between sets and wove them between the songs. When you listen to the tape, you feel like you're there. It honestly feels like being an artist.</P>
          <P>A country mixtape with a live session around a campfire where you can hear the fire crackling and the crickets in the background. A jazz mixtape with all my favorite hits, live. The full Queen concert at Wembley, recorded straight through. My favorite concert of all time: Buena Vista Social Club at Carnegie Hall. An Indian music mix for dance practice. A sleepy time jazz tape.</P>
          <P>One week. Seven mixtapes. The thing that was supposed to collect dust.</P>
          <P>I play them for my girlfriend and give commentary. I try to put her into the scene. It's storytelling. The sound is warmer and not as perfect, and everyone who has listened says the same thing: it's just a different sound. More alive.</P>
          <P>Experiment #7 is a huge success.</P>
        </>
      )}

      <div className="mt-12">
        <SubscribeBox />
      </div>
    </div>
  );
};

export default MixtapeRebellion;
