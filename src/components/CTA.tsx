import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Trophy, Clock } from "lucide-react";
const CTA = () => {
  return <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-orange-500/20" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent transform rotate-12"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
          🚀 Ready to Start?
        </Badge>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Your Dream Job is Just <br />
          <span className="gradient-text">One Step Away</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Join 50,000+ students who transformed their careers with our comprehensive interview preparation platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="hero-gradient text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Your PLUS Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full">STRIVER'S TUF+</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Start immediately</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Join 50k+ students</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Land your dream job</p>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;