import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import KostFinder from "./pages/KostFinder";
import Roommate from "./pages/Roommate";
import SplitReminder from "./pages/SplitReminder";
import Forum from "./pages/Forum";
import Owner from "./pages/Owner";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";

const queryClient = new QueryClient();

const Layout = () => (
  <div className="relative w-full min-h-screen">
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/kost-finder" element={<KostFinder />} />
      <Route path="/roommate" element={<Roommate />} />
      <Route path="/split-reminder" element={<SplitReminder />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/owner" element={<Owner />} />
      <Route path="/profile" element={<Profile />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <BottomNav />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
