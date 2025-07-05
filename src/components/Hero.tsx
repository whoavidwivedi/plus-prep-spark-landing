import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Users, Trophy, BookOpen } from "lucide-react";
const Hero = () => {
  return <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10" />
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent transform -rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">🚀 Join 10,46,563+ Learners Today</Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Your <span className="gradient-text">ONE STOP</span><br />
            Interview Prep Platform
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Master coding interviews with our curated syllabus, company-specific questions, 
            and premium content designed by ex-FAANG engineers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="hero-gradient text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full font-normal">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Striver's Introduction Section */}
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-border/50 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
                <img alt="Striver - Founder & FAANG Expert" className="w-full h-full object-cover" src="https://preview.redd.it/what-should-i-do-know-my-money-got-wasted-v0-dnybyip6j7ld1.png?width=868&format=png&auto=webp&s=2678d4a4242ec44304bbb4f23045e3363dacb134" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2 shadow-lg">
                <Trophy className="h-6 w-6" />
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Meet <span className="gradient-text">Striver</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-4 font-medium">
                Ex-FAANG Engineer & Your Interview Success Partner
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                "I've helped 50,000+ students crack their dream jobs at top tech companies. 
                My structured approach and company-specific preparation strategies have a proven track record 
                of turning coding interview nightmares into success stories."
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                <Badge variant="secondary" className="px-3 py-1">Ex-Google</Badge>
                <Badge variant="secondary" className="px-3 py-1">10M+ YouTube Views</Badge>
                <Badge variant="secondary" className="px-3 py-1">Coding Expert</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">10,46,563+</h3>
            <p className="text-muted-foreground">Students Placed</p>
          </div>
          
          <div className="text-center animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-muted-foreground">Companies Covered</p>
          </div>
          
          <div className="text-center animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">1000+</h3>
            <p className="text-muted-foreground">Premium Questions</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;