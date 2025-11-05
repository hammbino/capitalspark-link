import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Building2, Link as LinkIcon, TrendingUp, CheckCircle2, Clock } from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("borrowers");

  const mockBorrowers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      loanAmount: "$250,000",
      purpose: "Fix and Flip",
      status: "pending",
      submittedDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@example.com",
      loanAmount: "$500,000",
      purpose: "Real Estate Purchase",
      status: "matched",
      submittedDate: "2024-01-14"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily@example.com",
      loanAmount: "$150,000",
      purpose: "Inventory Financing",
      status: "pending",
      submittedDate: "2024-01-13"
    }
  ];

  const mockLenders = [
    {
      id: 1,
      name: "Capital Ventures LLC",
      email: "contact@capitalventures.com",
      capitalAvailable: "$5,000,000",
      activeLoans: 5,
      status: "active"
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@example.com",
      capitalAvailable: "$2,000,000",
      activeLoans: 3,
      status: "active"
    },
    {
      id: 3,
      name: "Private Lending Group",
      email: "info@plending.com",
      capitalAvailable: "$10,000,000",
      activeLoans: 12,
      status: "active"
    }
  ];

  const mockMatches = [
    {
      id: 1,
      borrower: "Sarah Johnson",
      lender: "Capital Ventures LLC",
      amount: "$250,000",
      status: "pending",
      matchDate: "2024-01-15"
    },
    {
      id: 2,
      borrower: "Michael Chen",
      lender: "John Smith",
      amount: "$500,000",
      status: "approved",
      matchDate: "2024-01-14"
    },
    {
      id: 3,
      borrower: "Emily Rodriguez",
      lender: "Private Lending Group",
      amount: "$150,000",
      status: "in-review",
      matchDate: "2024-01-13"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage borrowers, lenders, and connections
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Borrowers</p>
                    <p className="text-2xl font-bold text-foreground">24</p>
                  </div>
                  <Users className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Lenders</p>
                    <p className="text-2xl font-bold text-foreground">12</p>
                  </div>
                  <Building2 className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Matches</p>
                    <p className="text-2xl font-bold text-foreground">8</p>
                  </div>
                  <LinkIcon className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Volume</p>
                    <p className="text-2xl font-bold text-foreground">$4.2M</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs for different sections */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="borrowers">Borrowers</TabsTrigger>
              <TabsTrigger value="lenders">Lenders</TabsTrigger>
              <TabsTrigger value="matches">Active Matches</TabsTrigger>
            </TabsList>

            <TabsContent value="borrowers">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Borrower Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockBorrowers.map(borrower => (
                      <div 
                        key={borrower.id}
                        className="p-6 border border-border rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg text-foreground">
                              {borrower.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {borrower.email}
                            </p>
                          </div>
                          <Badge 
                            variant={borrower.status === "matched" ? "default" : "secondary"}
                          >
                            {borrower.status}
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Loan Amount</p>
                            <p className="font-semibold text-foreground">{borrower.loanAmount}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Purpose</p>
                            <p className="font-semibold text-foreground">{borrower.purpose}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Status</p>
                            <p className="font-semibold text-foreground">{borrower.status}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Submitted</p>
                            <p className="font-semibold text-foreground">{borrower.submittedDate}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button size="sm">View Details</Button>
                          <Button size="sm" variant="outline">Find Matches</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lenders">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Registered Lenders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockLenders.map(lender => (
                      <div 
                        key={lender.id}
                        className="p-6 border border-border rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg text-foreground">
                              {lender.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {lender.email}
                            </p>
                          </div>
                          <Badge variant="default">
                            {lender.status}
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Capital Available</p>
                            <p className="font-semibold text-foreground">{lender.capitalAvailable}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Active Loans</p>
                            <p className="font-semibold text-foreground">{lender.activeLoans}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Status</p>
                            <p className="font-semibold text-foreground">{lender.status}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button size="sm">View Profile</Button>
                          <Button size="sm" variant="outline">Match with Borrower</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="matches">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Connection Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockMatches.map(match => (
                      <div 
                        key={match.id}
                        className="p-6 border border-border rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg text-foreground">
                              {match.borrower} ↔ {match.lender}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Match created: {match.matchDate}
                            </p>
                          </div>
                          <Badge 
                            variant={
                              match.status === "approved" ? "default" : 
                              match.status === "pending" ? "secondary" : 
                              "outline"
                            }
                          >
                            {match.status === "approved" ? (
                              <><CheckCircle2 className="h-3 w-3 mr-1" /> {match.status}</>
                            ) : match.status === "pending" ? (
                              <><Clock className="h-3 w-3 mr-1" /> {match.status}</>
                            ) : (
                              match.status
                            )}
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Loan Amount</p>
                            <p className="font-semibold text-foreground">{match.amount}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Status</p>
                            <p className="font-semibold text-foreground">{match.status}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Match Date</p>
                            <p className="font-semibold text-foreground">{match.matchDate}</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          {match.status === "pending" && (
                            <>
                              <Button size="sm">Approve Connection</Button>
                              <Button size="sm" variant="outline">Request More Info</Button>
                            </>
                          )}
                          {match.status === "in-review" && (
                            <Button size="sm">Review Details</Button>
                          )}
                          {match.status === "approved" && (
                            <Button size="sm" variant="outline">View Contract</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
