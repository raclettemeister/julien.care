import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/SiteLayout";
import Home from "./pages/Home";
import Essays from "./pages/Essays";
import Now from "./pages/Now";
import Projects from "./pages/Projects";
import Analog from "./pages/Analog";
import About from "./pages/About";
import Money from "./pages/Money";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <SiteLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/essays" element={<Essays />} />
              <Route path="/now" element={<Now />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/analog" element={<Analog />} />
              <Route path="/about" element={<About />} />
              <Route path="/money" element={<Money />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SiteLayout>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
