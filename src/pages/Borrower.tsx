import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Borrower = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanPurpose: "",
    loanAmount: "",
    collateralType: "",
    desiredTerm: "",
    closeDate: "",
    creditRange: "",
    projectDescription: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We're matching you with suitable lenders. You'll receive updates via email.",
    });
    navigate("/borrower-confirmation", { state: { formData } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => step > 1 ? setStep(step - 1) : navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Borrower Application
              </CardTitle>
              <div className="flex justify-center mt-6 gap-2">
                {[1, 2, 3].map(i => (
                  <div 
                    key={i}
                    className={`h-2 w-16 rounded-full transition-colors ${
                      i <= step ? 'bg-accent' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={e => updateField("name", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={e => updateField("email", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={e => updateField("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label htmlFor="loanPurpose">Loan Purpose</Label>
                      <Select 
                        value={formData.loanPurpose}
                        onValueChange={value => updateField("loanPurpose", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="real-estate">Real Estate Purchase</SelectItem>
                          <SelectItem value="fix-flip">Fix and Flip</SelectItem>
                          <SelectItem value="business">Business Acquisition</SelectItem>
                          <SelectItem value="inventory">Inventory Financing</SelectItem>
                          <SelectItem value="refinance">Refinancing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="loanAmount">Loan Amount Needed</Label>
                      <Input 
                        id="loanAmount"
                        type="number"
                        placeholder="$"
                        value={formData.loanAmount}
                        onChange={e => updateField("loanAmount", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="collateralType">Collateral Type</Label>
                      <Select 
                        value={formData.collateralType}
                        onValueChange={value => updateField("collateralType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select collateral" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Property</SelectItem>
                          <SelectItem value="commercial">Commercial Property</SelectItem>
                          <SelectItem value="land">Land</SelectItem>
                          <SelectItem value="equipment">Equipment</SelectItem>
                          <SelectItem value="inventory">Inventory</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="desiredTerm">Desired Loan Term</Label>
                      <Select 
                        value={formData.desiredTerm}
                        onValueChange={value => updateField("desiredTerm", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3-months">3 Months</SelectItem>
                          <SelectItem value="6-months">6 Months</SelectItem>
                          <SelectItem value="12-months">12 Months</SelectItem>
                          <SelectItem value="24-months">24 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <Label htmlFor="closeDate">Target Close Date</Label>
                      <Input 
                        id="closeDate"
                        type="date"
                        value={formData.closeDate}
                        onChange={e => updateField("closeDate", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="creditRange">Credit Score Range</Label>
                      <Select 
                        value={formData.creditRange}
                        onValueChange={value => updateField("creditRange", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent (750+)</SelectItem>
                          <SelectItem value="good">Good (700-749)</SelectItem>
                          <SelectItem value="fair">Fair (650-699)</SelectItem>
                          <SelectItem value="building">Building (Below 650)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="projectDescription">Project Description</Label>
                      <Textarea 
                        id="projectDescription"
                        placeholder="Describe your project and how you plan to use the funds..."
                        rows={5}
                        value={formData.projectDescription}
                        onChange={e => updateField("projectDescription", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setStep(step - 1)}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                  )}
                  
                  {step < 3 ? (
                    <Button 
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="ml-auto"
                    >
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto">
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Borrower;
