"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getAssetPath } from "@/lib/utils";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const EVENT_IMAGES = [
  "/assets/casamento.webp",
  "/assets/casamento.webp",
  "/assets/casamento.webp",
  "/assets/casamento.webp",
  "/assets/casamento.webp",
  "/assets/casamento.webp",
  "/assets/casamento.webp",
  "/assets/casamento.webp",
  "/assets/casamento.webp",
];

export default function EventsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentImageIndex(slider.track.details.rel);
    },
    loop: true,
    rubberband: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  return (
    <section className="py-12 sm:py-15 bg-white" id="eventos">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">
            Eventos <span className="text-gradient">Inesquecíveis</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base">
            O lugar perfeito para celebrar momentos especiais com infraestrutura completa e atendimento personalizado.
          </p>
        </motion.div>

        <motion.div
          className="px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div ref={sliderRef} className="keen-slider relative rounded-lg overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[475px]">
            {EVENT_IMAGES.map((image, idx) => (
              <div key={idx} className="keen-slider__slide relative w-full !min-w-full">
                <Image
                  src={getAssetPath(image)}
                  alt={`Evento - imagem ${idx + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ))}

            {/* Image navigation arrows */}
            <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              <button
                onClick={() => instanceRef.current?.prev()}
                className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center text-slate-200 transition-all hover:scale-110 shadow-lg"
                aria-label="Imagem anterior"
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center text-slate-200 transition-all hover:scale-110 shadow-lg"
                aria-label="Próxima imagem"
              >
                <FaChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Image indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: EVENT_IMAGES.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => instanceRef.current?.moveToIdx(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Ver imagem ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}