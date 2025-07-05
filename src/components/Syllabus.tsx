
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Database, 
  TreePine, 
  Network, 
  Cpu, 
  BarChart3,
  Brain,
  ArrowRight
} from "lucide-react";

const Syllabus = () => {
  const subjects = [
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Data Structures",
      description: "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs",
      progress: 85,
      questions: 120,
      difficulty: "Beginner to Advanced",
      color: "bg-green-500"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Algorithms",
      description: "Sorting, Searching, Dynamic Programming, Greedy",
      progress: 78,
      questions: 150,
      difficulty: "Intermediate",
      color: "bg-blue-500"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "System Design",
      description: "Scalability, Load Balancing, Databases, Microservices",
      progress: 65,
      questions: 80,
      difficulty: "Advanced",
      color: "bg-purple-500"
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Operating Systems",
      description: "Processes, Threads, Memory Management, File Systems",
      progress: 72,
      questions: 90,
      difficulty: "Intermediate",
      color: "bg-orange-500"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Computer Networks",
      description: "TCP/IP, HTTP, DNS, Load Balancers, CDN",
      progress: 68,
      questions: 75,
      difficulty: "Intermediate",
      color: "bg-red-500"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Database Management",
      description: "SQL, NoSQL, Indexing, Transactions, ACID Properties",
      progress: 80,
      questions: 95,
      difficulty: "Beginner to Advanced",
      color: "bg-teal-500"
    }
  ];

  return (
    <section id="syllabus" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            📚 Complete Syllabus
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Curated Learning Path</span><br />
            for Every Subject
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertly designed curriculum covers all essential topics with 
            progressive difficulty levels and real interview questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {subjects.map((subject, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${subject.color}/10 text-${subject.color.split('-')[1]}-500`}>
                    {subject.icon}
                  </div>
                  <CardTitle className="text-lg">{subject.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {subject.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Questions</span>
                  <span className="font-medium">{subject.questions}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Difficulty</span>
                  <Badge variant="outline" className="text-xs">
                    {subject.difficulty}
                  </Badge>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="hero-gradient px-8 py-4 rounded-full">
            View Complete Syllabus
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
