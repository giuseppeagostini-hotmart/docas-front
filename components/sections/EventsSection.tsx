"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getAssetPath } from "@/lib/utils";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface EventItem {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
}

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Casamentos",
    description: "Realize seu sonho em um cenário deslumbrante, com todo o suporte necessário para tornar seu dia especial inesquecível.",
    image: "/assets/nature-house.webp",
    images: [
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
    ],
  },
  {
    id: 2,
    title: "Eventos Corporativos",
    description: "Espaço ideal para reuniões, workshops e team buildings, com infraestrutura completa e ambiente inspirador.",
    image: "/assets/nature-house.webp",
    images: [
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
    ],
  },
  {
    id: 3,
    title: "Festas",
    description: "Comemore momentos especiais em um ambiente acolhedor e elegante, com serviço personalizado.",
    image: "/assets/nature-house.webp",
    images: [
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
    ],
  },
];

type EventCardProps = {
  event: EventItem;
  // eslint-disable-next-line no-unused-vars
  onClick: (eventItem: EventItem) => void;
};

const EventCard = ({ event, onClick }: EventCardProps) => (
  <button onClick={() => onClick(event)} className="relative h-[500px] w-full overflow-hidden rounded-2xl text-left focus:outline-none">
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
  </button>
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const openModal = (event: EventItem) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const imagesForSelectedEvent = useMemo(() => {
    if (!selectedEvent) return [] as string[];
    return selectedEvent.images;
  }, [selectedEvent]);

  const [modalCurrentIndex, setModalCurrentIndex] = useState(0);
  const [modalSliderRef, modalInstanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    rubberband: true,
    mode: "snap",
    slideChanged(slider) {
      setModalCurrentIndex(slider.track.details.rel);
    },
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
                <EventCard event={event} onClick={openModal} />
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 sm:left-4 sm:right-4 z-10 flex justify-between mx-4">
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
        {/* Modal: somente carrossel de fotos */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl w-[96vw] p-0 border-none bg-transparent">
            <div ref={modalSliderRef} className="keen-slider relative h-[70vh] min-h-[320px] rounded-md">
              {/* Dots */}
              {imagesForSelectedEvent.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
                  {imagesForSelectedEvent.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => modalInstanceRef.current?.moveToIdx(idx)}
                      aria-label={`Ir para imagem ${idx + 1}`}
                      className={`${
                        modalCurrentIndex === idx
                          ? "w-4 h-2 bg-white"
                          : "w-2 h-2 bg-white/60 hover:bg-white/80"
                      } rounded-full transition-all`}
                    />
                  ))}
                </div>
              )}
              {imagesForSelectedEvent.map((img, idx) => (
                <div key={idx} className="keen-slider__slide relative">
                  <Image
                    src={getAssetPath(img)}
                    alt={`Imagem ${idx + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
              {imagesForSelectedEvent.length > 1 && (
                <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-3 right-3 sm:left-4 sm:right-4 flex justify-between">
                  <button
                    onClick={() => modalInstanceRef.current?.prev()}
                    className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center text-white/90 bg-black/40 hover:bg-black/60 transition-all hover:scale-110 shadow-lg"
                    aria-label="Imagem anterior"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => modalInstanceRef.current?.next()}
                    className="pointer-events-auto w-10 h-10 rounded-full flex items-center justify-center text-white/90 bg-black/40 hover:bg-black/60 transition-all hover:scale-110 shadow-lg"
                    aria-label="Próxima imagem"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}