
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Target, 
  Building2, 
  BookOpen, 
  Users, 
  Trophy,
  Clock,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Curated Syllabus",
      description: "Structured learning path covering all essential topics for technical interviews",
      badge: "Essential",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Company-Specific Prep",
      description: "Tailored questions and insights for top tech companies like Google, Amazon, Microsoft",
      badge: "Premium",
      color: "bg-green-500/10 text-green-500"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Premium Questions",
      description: "Hand-picked problems that frequently appear in real interviews",
      badge: "Exclusive",
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Detailed Solutions",
      description: "Step-by-step explanations with multiple approaches and complexity analysis",
      badge: "Comprehensive",
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Support",
      description: "Connect with peers and mentors in our exclusive community",
      badge: "Social",
      color: "bg-pink-500/10 text-pink-500"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Mock Interviews",
      description: "Practice with real interview scenarios and get personalized feedback",
      badge: "Practice",
      color: "bg-yellow-500/10 text-yellow-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            ✨ Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and resources you need 
            to ace your technical interviews and land your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>All features included in PLUS membership</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
