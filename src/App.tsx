import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SiteLayout from "@/components/SiteLayout";
import Home from "./pages/Home";
import Essays from "./pages/Essays";
import Now from "./pages/Now";
import Projects from "./pages/Projects";
import Analog from "./pages/Analog";
import About from "./pages/About";
import Money from "./pages/Money";
import VisionBoard from "./pages/essays/VisionBoard";
import Game from "./pages/Game";
import MixtapeRebellion from "./pages/essays/MixtapeRebellion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LayoutWrapper = () => (
  <SiteLayout>
    <Outlet />
  </SiteLayout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/game" element={<Game />} />
            <Route element={<LayoutWrapper />}>
              <Route path="/" element={<Home />} />
              <Route path="/essays" element={<Essays />} />
              <Route path="/essays/vision-board-creative-thinking-through-collage" element={<VisionBoard />} />
              <Route path="/essays/the-mixtape-rebellion" element={<MixtapeRebellion />} />
              <Route path="/now" element={<Now />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/analog" element={<Analog />} />
              <Route path="/about" element={<About />} />
              <Route path="/money" element={<Money />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
