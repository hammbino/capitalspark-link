import { Building2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold">BridgeFund</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Connecting money to opportunity through smart, secure lending connections.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Borrowers</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/borrower" className="hover:text-accent transition-colors">Apply for Funding</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-accent transition-colors">How It Works</Link></li>
              <li><Link to="/#faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">For Lenders</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/lender" className="hover:text-accent transition-colors">Register as Lender</Link></li>
              <li><Link to="/lender-dashboard" className="hover:text-accent transition-colors">Lender Dashboard</Link></li>
              <li><Link to="/#testimonials" className="hover:text-accent transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/#contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-accent transition-colors">Admin Portal</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 BridgeFund. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-primary-foreground/60">Built by</span>
            <div className="flex items-center gap-1 font-semibold text-accent">
              <Zap className="h-4 w-4" />
              Nerd-Hero
            </div>
            <span className="text-primary-foreground/60">| Software that moves business forward</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
