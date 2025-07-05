
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      avatar: "",
      rating: 5,
      review: "TakeUForward PLUS completely transformed my interview preparation. The company-specific questions were spot-on and helped me crack Google's interviews!",
      company: "Google"
    },
    {
      name: "Arjun Patel",
      role: "SDE-2 at Amazon",
      avatar: "",
      rating: 5,
      review: "The system design content is exceptional. I went from zero knowledge to confidently designing scalable systems. Landed my dream job at Amazon!",
      company: "Amazon"
    },
    {
      name: "Sneha Gupta",
      role: "Software Developer at Microsoft",
      avatar: "",
      rating: 5,
      review: "The structured learning path and premium questions make all the difference. The mock interviews gave me the confidence I needed.",
      company: "Microsoft"
    },
    {
      name: "Rahul Singh",
      role: "Full Stack Developer at Flipkart",
      avatar: "",
      rating: 5,
      review: "Amazing platform! The community support and detailed solutions helped me understand concepts deeply. Worth every penny!",
      company: "Flipkart"
    },
    {
      name: "Ananya Roy",
      role: "Frontend Engineer at Zomato",
      avatar: "",
      rating: 5,
      review: "The curated content saved me months of preparation time. Everything is organized perfectly and easy to follow.",
      company: "Zomato"
    },
    {
      name: "Vikash Kumar",
      role: "Backend Engineer at Paytm",
      avatar: "",
      rating: 5,
      review: "From a confused fresher to landing multiple offers - TakeUForward PLUS made it possible. Thank you team!",
      company: "Paytm"
    }
  ];

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            ⭐ Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful candidates who landed their dream jobs with TakeUForward PLUS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "{review.review}"
                </p>
                
                <Badge variant="outline" className="text-xs">
                  Now at {review.company}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-4 text-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 10,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
