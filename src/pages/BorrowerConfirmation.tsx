import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Home } from "lucide-react";

const BorrowerConfirmation = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="shadow-elegant">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-3xl">Application Submitted!</CardTitle>
              <p className="text-muted-foreground mt-2">
                We're now matching you with suitable lenders
              </p>
            </CardHeader>
            
            <CardContent className="p-8 space-y-6">
              <div className="bg-gradient-subtle p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-xl text-foreground">Loan Request Summary</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Loan Purpose</p>
                    <p className="font-medium text-foreground">{formData.loanPurpose || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Amount</p>
                    <p className="font-medium text-foreground">
                      ${formData.loanAmount ? Number(formData.loanAmount).toLocaleString() : "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Collateral</p>
                    <p className="font-medium text-foreground">{formData.collateralType || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Term</p>
                    <p className="font-medium text-foreground">{formData.desiredTerm || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Target Close Date</p>
                    <p className="font-medium text-foreground">{formData.closeDate || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Credit Range</p>
                    <p className="font-medium text-foreground">{formData.creditRange || "N/A"}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3 text-foreground">What Happens Next?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Our system is matching your profile with qualified lenders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Interested lenders will be notified within 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">You'll receive an email when lenders express interest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Our team will facilitate the connection process</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <Link to="/">
                  <Button className="w-full">
                    <Home className="mr-2 h-4 w-4" /> Return to Homepage
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BorrowerConfirmation;
