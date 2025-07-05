"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DSATopic {
  title: string;
  description: string;
  difficulty: string;
}

export const ThreeDMarquee = ({
  topics,
  className,
}: {
  topics: DSATopic[];
  className?: string;
}) => {
  // Split the topics array into 6 equal parts
  const chunkSize = Math.ceil(topics.length / 6);
  const chunks = Array.from({ length: 6 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return topics.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100 bg-gradient-to-br from-neutral-900 to-neutral-800",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1800px] shrink-0 scale-90 sm:scale-100 lg:scale-100">
          <div
            style={{
              transform: "rotateX(40deg) rotateY(0deg) rotateZ(-25deg)",
            }}
            className="relative top-40 right-[30%] grid size-full origin-top-left grid-cols-6 gap-4 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((topic, topicIndex) => (
                  <div className="relative" key={topicIndex + topic.title}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                                         <motion.div
                       whileHover={{
                         y: -10,
                         scale: 1.05,
                       }}
                       transition={{
                         duration: 0.3,
                         ease: "easeInOut",
                       }}
                       key={topicIndex + topic.title}
                       className={cn(
                         "w-56 h-40 rounded-xl bg-black shadow-xl hover:shadow-2xl hover:ring-8 hover:ring-primary/20 transition-all duration-300 p-6 flex flex-col justify-center items-center text-center",
                         // No border, no ring
                       )}
                     >
                       <h3 className="text-lg font-bold text-white mb-2 tracking-tight leading-snug">{topic.title}</h3>
                       <p className="text-white/70 text-xs mb-3 leading-normal">{topic.description}</p>
                       <div className={cn(
                         "px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mt-1",
                         topic.difficulty === "Easy" && "bg-green-500/10 text-green-300",
                         topic.difficulty === "Medium" && "bg-yellow-500/10 text-yellow-300",
                         topic.difficulty === "Hard" && "bg-red-500/10 text-red-300"
                       )}>
                         {topic.difficulty}
                       </div>
                     </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px",
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
}; 