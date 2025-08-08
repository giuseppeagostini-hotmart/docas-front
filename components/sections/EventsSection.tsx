"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getAssetPath } from "@/lib/utils";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
}

const EVENTS: Event[] = [
  {
    id: 1,
    title: "Casamentos",
    description: "Realize seu sonho em um cenário deslumbrante, com todo o suporte necessário para tornar seu dia especial inesquecível.",
    image: "/assets/nature-house.webp",
  },
  {
    id: 2,
    title: "Eventos Corporativos",
    description: "Espaço ideal para reuniões, workshops e team buildings, com infraestrutura completa e ambiente inspirador.",
    image: "/assets/nature-house.webp",
  },
  {
    id: 3,
    title: "Festas",
    description: "Comemore momentos especiais em um ambiente acolhedor e elegante, com serviço personalizado.",
    image: "/assets/nature-house.webp",
  },
];

const EventCard = ({ event }: { event: Event }) => (
  <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
    <Image
      src={getAssetPath(event.image)}
      alt={event.title}
      fill
      className="object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
      <h3 className="text-2xl sm:text-3xl mb-3 text-slate-200 font-bold">{event.title}</h3>
      <p className="text-slate-200 text-sm sm:text-base mb-6">{event.description}</p>
    </div>
  </div>
);

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentIndex(slider.track.details.rel);
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
          <p className="text-slate-600 text-base sm:text-lg">
            O lugar perfeito para celebrar momentos especiais com infraestrutura completa e atendimento personalizado.
          </p>
        </motion.div>

        <div className="relative px-4 sm:px-0">
          <div ref={sliderRef} className="keen-slider">
            {EVENTS.map((event) => (
              <div key={event.id} className="keen-slider__slide">
                <EventCard event={event} />
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-200 transition-all hover:scale-110 shadow-lg"
              aria-label="Evento anterior"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-200 transition-all hover:scale-110 shadow-lg"
              aria-label="Próximo evento"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {EVENTS.map((_, index) => (
              <button
                key={index}
                onClick={() => instanceRef.current?.moveToIdx(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Ir para evento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}