import { useLanguage } from "@/contexts/LanguageContext";
import { notes } from "@/lib/notes";

const Notes = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-[640px] mx-auto px-6">
      <h1 className="font-heading text-2xl font-bold text-foreground mb-1">
        {lang === "fr" ? "Notes" : "Notes"}
      </h1>
      <p className="font-body text-sm text-muted-foreground mb-10">
        {lang === "fr"
          ? "Réflexions courtes, idées du jour, choses que je suis en train de comprendre."
          : "Short-form thinking, daily observations, things I'm figuring out."}
      </p>

      <div className="space-y-10">
        {notes.map((note) => (
          <article key={note.slug} className="border-b border-border/40 pb-8 last:border-b-0">
            <time className="font-body text-xs text-muted-foreground/70 uppercase tracking-wider">
              {new Date(note.date).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="font-heading text-lg font-semibold text-foreground mt-1 mb-3">
              {note.title}
            </h2>
            <div
              className="font-body text-sm text-foreground/90 leading-relaxed prose prose-sm max-w-none
                prose-p:my-2 prose-a:text-foreground prose-a:underline"
              dangerouslySetInnerHTML={{ __html: note.html }}
            />
          </article>
        ))}

        {notes.length === 0 && (
          <p className="font-body text-sm text-muted-foreground italic">
            {lang === "fr" ? "Aucune note pour l'instant." : "No notes yet."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Notes;
