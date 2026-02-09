import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", labelEn: "Essays", labelFr: "Essais" },
  { path: "/now", labelEn: "Now", labelFr: "Maintenant" },
  { path: "/projects", labelEn: "Projects", labelFr: "Projets" },
  { path: "/analog", labelEn: "Analog", labelFr: "Analog" },
  { path: "/about", labelEn: "About", labelFr: "À propos" },
];

const SiteNav = () => {
  const { lang, toggleLang } = useLanguage();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-foreground tracking-tight no-underline hover:opacity-80 transition-opacity"
        >
          Julien
        </Link>
        <div className="flex items-center gap-1 flex-wrap justify-end">
          {navItems.map(({ path, labelEn, labelFr }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`text-sm px-3 py-1.5 rounded-md no-underline transition-all ${
                  isActive
                    ? "font-semibold text-foreground bg-accent-light"
                    : "font-normal text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang === "fr" ? labelFr : labelEn}
              </Link>
            );
          })}
          <button
            onClick={toggleLang}
            className="ml-2 border-[1.5px] border-accent text-accent text-xs font-semibold px-2.5 py-1 rounded-full bg-transparent cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
