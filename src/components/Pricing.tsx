import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Crown, Zap } from "lucide-react";
const Pricing = () => {
  const plans = [{
    name: "SPRINT PLAN",
    price: "₹4289",
    period: "12 MONTHS",
    description: "PERFECT FOR BEGINNERS",
    features: ["ALL FRATURES", "ONLY DSA, CORE AND APTITUDE"],
    limitations: ["No company-specific questions", "Limited system design content", "No mock interviews", "No priority support"],
    cta: "GET STARTED WITH SPRINT",
    popular: false,
    icon: <Zap className="h-5 w-5" />
  }, {
    name: "Pinnacle Plan",
    price: "₹5928",
    period: "LIFETIME",
    description: "Complete interview preparation",
    features: ["1000+ premium questions", "All subjects covered", "Company-specific prep", "System design masterclass", "Mock interviews", "Priority community support", "Mobile app access", "Progress tracking", "Personalized study plan", "Interview tips & tricks"],
    limitations: [],
    cta: "GET STARTED WITH PINNACLE",
    popular: true,
    icon: <Crown className="h-5 w-5" />
  }];
  return <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            💰 Simple Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="gradient-text">Success Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free or unlock everything with PLUS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-primary/50 shadow-lg scale-105 bg-gradient-to-br from-card to-primary/5' : 'border-border bg-card/50'}`}>
              {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="hero-gradient px-4 py-1 text-white">
                    <Crown className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>}
              
              <CardHeader className="text-center pb-8 pt-8">
                <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>)}
                  
                  {plan.limitations.map((limitation, limitationIndex) => <div key={limitationIndex} className="flex items-center gap-3 opacity-60">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </div>)}
                </div>
                
                <Button className={`w-full ${plan.popular ? 'hero-gradient hover:shadow-lg transform hover:scale-105' : 'variant-outline'} transition-all duration-300`} size="lg">
                  {plan.cta}
                </Button>
                
                
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12">
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>✅ Secure Payment</span>
            
            <span>✅ 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;