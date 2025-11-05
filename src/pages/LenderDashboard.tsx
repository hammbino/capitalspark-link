import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bell, TrendingUp, DollarSign, Users, Mail } from "lucide-react";

const LenderDashboard = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  const mockMatches = [
    {
      id: 1,
      amount: "$250,000",
      term: "12 months",
      type: "Fix and Flip",
      closeDate: "30 days",
      creditRange: "Good (700-749)",
      status: "new"
    },
    {
      id: 2,
      amount: "$500,000",
      term: "24 months",
      type: "Real Estate Purchase",
      closeDate: "45 days",
      creditRange: "Excellent (750+)",
      status: "new"
    },
    {
      id: 3,
      amount: "$150,000",
      term: "6 months",
      type: "Inventory Financing",
      closeDate: "15 days",
      creditRange: "Good (700-749)",
      status: "interested"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Welcome, {formData.name || "Lender"}!
            </h1>
            <p className="text-muted-foreground">
              Your lender dashboard
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Available Capital</p>
                    <p className="text-2xl font-bold text-foreground">
                      ${formData.capitalAvailable ? Number(formData.capitalAvailable).toLocaleString() : "0"}
                    </p>
                  </div>
                  <DollarSign className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">New Matches</p>
                    <p className="text-2xl font-bold text-foreground">3</p>
                  </div>
                  <Bell className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Loans</p>
                    <p className="text-2xl font-bold text-foreground">5</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Borrowers</p>
                    <p className="text-2xl font-bold text-foreground">12</p>
                  </div>
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Email Alert Preview */}
          <Card className="shadow-elegant mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Alert Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-gradient-subtle p-6 rounded-lg m-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground">
                  New Borrower Match - $250,000 Fix & Flip Opportunity
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Loan Amount:</span>
                    <p className="font-medium text-foreground">$250,000</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Term:</span>
                    <p className="font-medium text-foreground">12 months</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Close Date:</span>
                    <p className="font-medium text-foreground">30 days</p>
                  </div>
                </div>
                <Button className="mt-4">I'm Interested</Button>
              </div>
            </CardContent>
          </Card>

          {/* Matches Table */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Potential Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMatches.map(match => (
                  <div 
                    key={match.id}
                    className="p-6 border border-border rounded-lg hover:border-accent transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">
                          {match.type}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {match.creditRange}
                        </p>
                      </div>
                      <Badge 
                        variant={match.status === "new" ? "default" : "secondary"}
                      >
                        {match.status === "new" ? "New Match" : "Interest Expressed"}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <p className="font-semibold text-foreground">{match.amount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Term</p>
                        <p className="font-semibold text-foreground">{match.term}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Close Date</p>
                        <p className="font-semibold text-foreground">{match.closeDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Type</p>
                        <p className="font-semibold text-foreground">{match.type}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm">Express Interest</Button>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LenderDashboard;
