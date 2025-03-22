
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FindTrucks from "./pages/FindTrucks";
import TruckDetails from "./pages/TruckDetails";
import Events from "./pages/Events";
import VendorLogin from "./pages/VendorLogin";
import UserLogin from "./pages/UserLogin";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import About from "./pages/AboutUs";
import Sustainability from "./pages/Sustainability";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/find-trucks" element={<FindTrucks />} />
          <Route path="/trucks/:id" element={<TruckDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/sustainability" element={<Sustainability />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
