"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Company {
  name: string;
  logo: string;
}

interface LogoMarqueeProps {
  companies: Company[];
  className?: string;
  speed?: number;
}

export const LogoMarquee = ({ 
  companies, 
  className,
  speed = 20 
}: LogoMarqueeProps) => {
  // Duplicate companies array multiple times to create seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies];

  return (
    <div className={cn("relative overflow-hidden py-8", className)}>
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div 
        className="flex items-center relative"
        style={{
          animation: `scroll ${speed}s linear infinite`,
        }}
      >
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex-shrink-0 mx-8 group relative"
          >
            <img 
              src={company.logo} 
              alt={company.name} 
              className="w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out" 
              style={{
                minHeight: '40px',
                maxHeight: '60px'
              }}
            />
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </div>
  );
}; 