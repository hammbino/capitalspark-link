import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Borrower from "./pages/Borrower";
import BorrowerConfirmation from "./pages/BorrowerConfirmation";
import Lender from "./pages/Lender";
import LenderDashboard from "./pages/LenderDashboard";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/capitalspark-link">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/borrower" element={<Borrower />} />
          <Route path="/borrower-confirmation" element={<BorrowerConfirmation />} />
          <Route path="/lender" element={<Lender />} />
          <Route path="/lender-dashboard" element={<LenderDashboard />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
