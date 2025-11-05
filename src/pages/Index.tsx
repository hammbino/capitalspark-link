import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Building2, TrendingUp, Shield, Clock, Users, Briefcase } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Connecting Money to <span className="text-accent">Opportunity</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Smart, simple, and secure lending connections powered by Nerd-Hero
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Link to="/borrower" className="group">
                <Card className="h-full shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent">
                  <CardContent className="p-8">
                    <Building2 className="h-12 w-12 text-accent mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold mb-3 text-foreground">I Need Funding</h3>
                    <p className="text-muted-foreground mb-6">
                      Get matched with private lenders for your project
                    </p>
                    <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/lender" className="group">
                <Card className="h-full shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent">
                  <CardContent className="p-8">
                    <TrendingUp className="h-12 w-12 text-accent mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold mb-3 text-foreground">I Want to Lend</h3>
                    <p className="text-muted-foreground mb-6">
                      Connect with quality borrowers seeking funding
                    </p>
                    <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to connect</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-3xl font-bold mx-auto mb-6 shadow-elegant">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Create Profile</h3>
              <p className="text-muted-foreground">
                Share your funding needs or lending preferences through our simple forms
              </p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-3xl font-bold mx-auto mb-6 shadow-elegant">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Get Matched</h3>
              <p className="text-muted-foreground">
                Our platform intelligently connects borrowers with suitable lenders
              </p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-3xl font-bold mx-auto mb-6 shadow-elegant">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Fund Your Deal</h3>
              <p className="text-muted-foreground">
                Connect directly and close your funding in record time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Secure & Trusted</h3>
                <p className="text-muted-foreground">
                  Bank-level security and verified connections
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Fast Matching</h3>
                <p className="text-muted-foreground">
                  Connect with lenders in as little as 24 hours
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-accent mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Vetted Network</h3>
                <p className="text-muted-foreground">
                  Quality borrowers and experienced lenders
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real results from our community</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="h-5 w-5 text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "BridgeFund connected me with the perfect lender for my fix-and-flip project. Closed in 3 weeks!"
                </p>
                <p className="font-semibold text-foreground">- Sarah M., Real Estate Investor</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="h-5 w-5 text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "As a lender, I love the quality of borrowers and the transparency of the platform."
                </p>
                <p className="font-semibold text-foreground">- Michael T., Private Lender</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg px-6 shadow-elegant">
                <AccordionTrigger className="text-lg font-semibold text-foreground">
                  How long does the matching process take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Most borrowers receive initial lender interest within 24-48 hours of submitting their application. The complete funding process typically takes 2-4 weeks depending on the complexity of your project.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-card rounded-lg px-6 shadow-elegant">
                <AccordionTrigger className="text-lg font-semibold text-foreground">
                  What types of projects can be funded?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We support real estate purchases, fix-and-flip projects, business acquisitions, inventory financing, refinancing, and other short-term project funding needs typically ranging from $50,000 to $5,000,000.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-card rounded-lg px-6 shadow-elegant">
                <AccordionTrigger className="text-lg font-semibold text-foreground">
                  Is there a fee to apply?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, there is no upfront fee to submit a borrower application or register as a lender. BridgeFund only succeeds when successful connections are made.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-card rounded-lg px-6 shadow-elegant">
                <AccordionTrigger className="text-lg font-semibold text-foreground">
                  How are lenders vetted?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  All lenders undergo a verification process including proof of funds, background checks, and reference validation to ensure they meet our quality standards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">Have questions? We're here to help</p>
            </div>
            
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                    <Textarea placeholder="Tell us how we can help" rows={5} />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
