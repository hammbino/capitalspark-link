import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Lender = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    capitalAvailable: "",
    minLoan: "",
    maxLoan: "",
    interestRateMin: "",
    interestRateMax: "",
    loanTypes: [] as string[],
    states: "",
    riskTolerance: "",
  });

  const updateField = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleLoanType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      loanTypes: prev.loanTypes.includes(type)
        ? prev.loanTypes.filter(t => t !== type)
        : [...prev.loanTypes, type]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "Welcome to BridgeFund. Redirecting to your dashboard...",
    });
    setTimeout(() => {
      navigate("/lender-dashboard", { state: { formData } });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Lender Registration
              </CardTitle>
              <p className="text-center text-muted-foreground mt-2">
                Join our network of private lenders
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name / Company Name</Label>
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

                  <div>
                    <Label htmlFor="capitalAvailable">Total Capital Available</Label>
                    <Input 
                      id="capitalAvailable"
                      type="number"
                      placeholder="$"
                      value={formData.capitalAvailable}
                      onChange={e => updateField("capitalAvailable", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="minLoan">Minimum Loan Amount</Label>
                      <Input 
                        id="minLoan"
                        type="number"
                        placeholder="$"
                        value={formData.minLoan}
                        onChange={e => updateField("minLoan", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxLoan">Maximum Loan Amount</Label>
                      <Input 
                        id="maxLoan"
                        type="number"
                        placeholder="$"
                        value={formData.maxLoan}
                        onChange={e => updateField("maxLoan", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="interestRateMin">Min Interest Rate (%)</Label>
                      <Input 
                        id="interestRateMin"
                        type="number"
                        step="0.1"
                        value={formData.interestRateMin}
                        onChange={e => updateField("interestRateMin", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="interestRateMax">Max Interest Rate (%)</Label>
                      <Input 
                        id="interestRateMax"
                        type="number"
                        step="0.1"
                        value={formData.interestRateMax}
                        onChange={e => updateField("interestRateMax", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Preferred Loan Types</Label>
                    <div className="space-y-3">
                      {["Real Estate Purchase", "Fix and Flip", "Business Acquisition", "Inventory Financing", "Refinancing"].map(type => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox 
                            id={type}
                            checked={formData.loanTypes.includes(type)}
                            onCheckedChange={() => toggleLoanType(type)}
                          />
                          <label htmlFor={type} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="states">Lending States (comma separated)</Label>
                    <Input 
                      id="states"
                      placeholder="e.g., CA, NY, TX"
                      value={formData.states}
                      onChange={e => updateField("states", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="riskTolerance">Risk Tolerance</Label>
                    <Select 
                      value={formData.riskTolerance}
                      onValueChange={value => updateField("riskTolerance", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select risk tolerance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conservative">Conservative - Prime borrowers only</SelectItem>
                        <SelectItem value="moderate">Moderate - Some flexibility</SelectItem>
                        <SelectItem value="aggressive">Aggressive - Higher risk/return</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-6">
                  <Button type="submit" className="w-full">
                    Complete Registration
                  </Button>
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

export default Lender;
