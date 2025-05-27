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
        alt="Pousada Docas"
        fill
        priority
        className="object-cover"
        fetchPriority="high" // Adicione esta linha
        quality={85} // Reduza ligeiramente a qualidade
        sizes="100vw" // Importante para imagens full-width
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative h-full container-custom flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-4">
            Pousada Docas
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-xl mx-auto">
            Sua experiência única em meio à natureza
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-8 sm:bottom-12 cursor-pointer animate-bounce"
          onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown className="text-white w-8 h-8 sm:w-10 sm:h-10" />
        </motion.div>
      </div>
    </section>
  );
}