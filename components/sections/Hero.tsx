"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative h-screen-85 min-h-[600px] md:min-h-[700px] w-full overflow-hidden">
      <Image
        src={getAssetPath('/assets/nature-house.webp')}
        alt="Pousada Docas rodeada pela natureza em Minas Gerais"
        fill
        priority
        className="object-cover"
        fetchPriority="high"
        sizes="100vw"
      />
      
      {/* Overlay com melhor performance */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"
        style={{ willChange: 'transform' }}
      />

      <div className="relative h-full container-custom flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart para suavidade
          }}
          className="text-center px-4"
          style={{ willChange: 'transform, opacity' }}
        >
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-4"
            style={{ 
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              willChange: 'transform'
            }}
          >
            Pousada Docas
          </h1>
          <p 
            className="text-white/90 text-base sm:text-lg md:text-xl max-w-xl mx-auto"
            style={{ 
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              willChange: 'transform'
            }}
          >
            Sua experiência única em meio à natureza
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute bottom-8 sm:bottom-12 cursor-pointer animate-bounce"
          onClick={() => {
            const element = document.getElementById("sobre");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{ willChange: 'transform' }}
          role="button"
          tabIndex={0}
          aria-label="Rolar para a seção sobre"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              const element = document.getElementById("sobre");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
        >
          <ChevronDown className="text-white w-8 h-8 sm:w-10 sm:h-10 drop-shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}
