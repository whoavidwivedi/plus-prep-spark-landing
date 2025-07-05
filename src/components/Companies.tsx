import { Badge } from "@/components/ui/badge";
import { LogoMarquee } from "@/components/ui/logo-marquee";

const Companies = () => {
  const companies = [
    {
      name: "Google",
      logo: "/logos/google.png"
    },
    {
      name: "Apple",
      logo: "/logos/apple.png"
    },
    {
      name: "Meta",
      logo: "/logos/meta.png"
    },
    {
      name: "Netflix",
      logo: "/logos/netflix logo.png"
    },
    {
      name: "Uber",
      logo: "/logos/uber.png"
    },
    {
      name: "Adobe",
      logo: "/logos/adobe.png"
    },
    {
      name: "NVIDIA",
      logo: "/logos/nvidia.png"
    },
    {
      name: "Spotify",
      logo: "/logos/spotify.jpeg"
    },
    {
      name: "Samsung",
      logo: "/logos/samsung.jpeg"
    },
    {
      name: "Mastercard",
      logo: "/logos/mastercard.png"
    },
    {
      name: "Morgan Stanley",
      logo: "/logos/morgan stanley.jpeg"
    },
    {
      name: "Goldman Sachs",
      logo: "/logos/goldman sachs.jpeg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            🏢 Company Focus
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prepare for <span className="gradient-text">Top Tech Companies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get company-specific interview questions and insights from engineers who've been there.
          </p>
        </div>

        <div className="mb-8">
          <LogoMarquee companies={companies} speed={40} />
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">500+</span> companies covered with specific prep materials
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;