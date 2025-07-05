
import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Syllabus from "@/components/Syllabus";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";

function ThemeTransitionLayer() {
  const { themeTransition, theme } = useTheme();
  if (!themeTransition.active) return null;
  // Calculate max radius to cover the viewport
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxRadius = Math.sqrt(vw * vw + vh * vh);
  const isToDark = themeTransition.nextTheme === "dark";
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          left: themeTransition.x - maxRadius,
          top: themeTransition.y - maxRadius,
          width: maxRadius * 2,
          height: maxRadius * 2,
          borderRadius: "50%",
          background: isToDark
            ? "radial-gradient(circle, #18181b 0%, #18181b 80%, rgba(24,24,27,0.85) 100%)"
            : "radial-gradient(circle, #fff 0%, #fff 80%, rgba(255,255,255,0.85) 100%)",
          transition: "transform 0.7s cubic-bezier(0.77,0,0.175,1)",
          transform: "scale(1)",
          animation: "theme-ripple-premium 0.7s cubic-bezier(0.77,0,0.175,1) forwards"
        }}
      />
      <style>{`
        @keyframes theme-ripple-premium {
          from { transform: scale(0.01); opacity: 0.7; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

const Index = () => {
  const { transitionActive } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="takeuforward-theme">
      <ThemeTransitionLayer />
      <div
        className={`min-h-screen bg-background text-foreground transition-all duration-700 ${transitionActive ? "opacity-60 blur-sm" : "opacity-100 blur-0"}`}
        style={{ transition: "opacity 0.7s cubic-bezier(0.77,0,0.175,1), filter 0.7s cubic-bezier(0.77,0,0.175,1)" }}
      >
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
      
      {/* Scroll to Top Button - visible across all sections */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9998] p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </ThemeProvider>
  );
};

export default Index;
