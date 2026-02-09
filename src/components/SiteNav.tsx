import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/essays", labelEn: "Essays", labelFr: "Essais" },
  { path: "/now", labelEn: "Now", labelFr: "Maintenant" },
  { path: "/projects", labelEn: "Projects", labelFr: "Projets" },
  { path: "/analog", labelEn: "Analog", labelFr: "Analog" },
  { path: "/about", labelEn: "About", labelFr: "À propos" },
];

const SiteNav = () => {
  const { lang, toggleLang } = useLanguage();
  const location = useLocation();

  return (
    <nav className="border-b border-border/40 mb-8">
      <div className="max-w-[640px] mx-auto px-6 py-5 flex justify-between items-center">
        <Link
          to="/"
          className="font-heading text-xl font-bold text-foreground no-underline"
        >
          Julien
        </Link>
        <div className="flex items-center gap-4 flex-wrap justify-end">
          {navItems.map(({ path, labelEn, labelFr }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`font-body text-sm no-underline transition-colors ${
                  isActive
                    ? "font-semibold text-foreground"
                    : "font-normal text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang === "fr" ? labelFr : labelEn}
              </Link>
            );
          })}
          <button
            onClick={toggleLang}
            className="font-body text-xs font-semibold text-muted-foreground hover:text-foreground border-none bg-transparent cursor-pointer px-0"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
