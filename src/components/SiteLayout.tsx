import { type ReactNode } from "react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background text-foreground">
    <SiteNav />
    <main>{children}</main>
    <SiteFooter />
  </div>
);

export default SiteLayout;
