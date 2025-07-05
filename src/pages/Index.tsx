
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Syllabus from "@/components/Syllabus";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="takeuforward-theme">
      <div className="min-h-screen bg-background text-foreground">
        {/* Placeholder image at the top */}
        <div className="w-full flex justify-center bg-muted/30 py-4">
          <img
            src="/placeholder.png"
            alt="Main page placeholder"
            className="max-w-full h-auto rounded-xl shadow-md border border-border"
            style={{ maxHeight: 400 }}
          />
        </div>
        <Navbar />
        <Hero />
        <Companies />
        <Features />
        <Syllabus />
        <Reviews />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
