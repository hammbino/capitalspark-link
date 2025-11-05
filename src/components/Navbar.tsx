import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">BridgeFund</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/#how-it-works" 
              className="text-foreground hover:text-accent transition-colors"
            >
              How It Works
            </Link>
            <Link 
              to="/#testimonials" 
              className="text-foreground hover:text-accent transition-colors"
            >
              Success Stories
            </Link>
            <Link 
              to="/#faq" 
              className="text-foreground hover:text-accent transition-colors"
            >
              FAQ
            </Link>
            <Link to="/admin">
              <Button variant="outline" size="sm">
                Admin
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Link to="/borrower">
              <Button variant="outline">
                Get Funding
              </Button>
            </Link>
            <Link to="/lender">
              <Button>
                Become a Lender
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
