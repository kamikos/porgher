"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OurServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Image animations that follow scroll
  const leftImageY = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], ["150%", "50%", "0%", "-50%", "-150%"]);
  const rightImageY = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], ["-150%", "-50%", "0%", "50%", "150%"]);
  
  // Text horizontal scroll animations
  const topTextX = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const bottomTextX = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-background text-foreground py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] sm:min-h-[90vh] lg:min-h-[100vh] flex items-center font-albert-sans scroll-smooth"
    >
      {/* Mobile Layout */}
      <div className="lg:hidden w-full flex flex-col items-center justify-center space-y-8 sm:space-y-12 z-10">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-stone-900 leading-tight">
            Wedding & Engagement
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-stone-900 leading-tight">
            Branding Photography
          </h3>
        </div>
        
        {/* Mobile Images */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center">
          <div className="w-32 h-48 sm:w-40 sm:h-60 bg-[#c4c4c4] transform -rotate-12 shadow-2xl" />
          <div className="w-32 h-48 sm:w-40 sm:h-60 bg-[#c4c4c4] transform rotate-12 shadow-2xl" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="h-full flex flex-col justify-center items-center">
          <motion.div
            style={{ x: topTextX }}
            className="opacity-80 text-center text-stone-900 text-[12vw] md:text-[15vw] lg:text-[200px] font-bold uppercase whitespace-nowrap leading-none"
          >
            Wedding & Engagement
          </motion.div>
          <motion.div
            style={{ x: bottomTextX }}
            className="opacity-80 text-center text-stone-900 text-[12vw] md:text-[15vw] lg:text-[200px] font-bold uppercase whitespace-nowrap leading-none -mt-8"
          >
            Branding Photography
          </motion.div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
        {/* Left Image - starts from top */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-1/4 lg:-translate-x-0">
          <motion.div
            style={{ y: leftImageY }}
            className="w-48 h-72 md:w-60 md:h-80 bg-[#c4c4c4] transform -rotate-12 flex-shrink-0 shadow-2xl pointer-events-auto"
          />
        </div>
        
        {/* Right Image - starts from bottom */}
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 lg:right-1/4 lg:translate-x-0">
          <motion.div
            style={{ y: rightImageY }}
            className="w-48 h-72 md:w-60 md:h-80 bg-[#c4c4c4] transform rotate-12 flex-shrink-0 shadow-2xl pointer-events-auto"
          />
        </div>
      </div>
    </section>
  );
}
