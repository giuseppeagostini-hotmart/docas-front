"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, getAssetPath } from "@/lib/utils";
import { FaBed, FaUsers, FaChevronLeft, FaChevronRight, FaTv, FaBath, FaSnowflake, FaWifi, FaShower } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type SuiteSlide = {
  name: string;
  people: string;
  beds: string;
  tv: boolean;
  image: string;
};

type Accommodation = {
  id: number;
  name: string;
  description: string;
  images?: string[];
  capacity: number;
  bedType: string;
  capacityLabel?: string;
  hasAC: boolean;
  hasWifi: boolean;
  amenities: string[];
  suites?: SuiteSlide[];
  heroTitle?: string;
  heroDescription?: string;
};

const accommodations: Accommodation[] = [
  {
    id: 1,
    name: "Casa principal",
    description:
      "Locação exclusiva da casa principal com 7 suítes – ideal para famílias e grupos (até 20 pessoas).",
    capacity: 15,
    bedType: "Casa principal",
    capacityLabel: "Até 15 pessoas",
    hasAC: true,
    hasWifi: true,
    amenities: ["Área de convivência", "Mini frigobar", "TV 42\"", "Mesa de jantar"],
    heroTitle: "Casa Principal",
    heroDescription:
      "Locação da casa principal com 6 suítes. Ideal para famílias e grupos de até 15 pessoas. Desfrute de total privacidade em um ambiente cercado pela natureza, com comodidades completas para uma estadia inesquecível.",
    suites: [
      { name: "Suíte Girasol", people: "2 pessoas", beds: "1 cama de casal", tv: false, image: "/assets/girasol.webp" },
      { name: "Suíte Bougainvillea", people: "2 pessoas", beds: "1 cama de casal", tv: true, image: "/assets/area-gourmet.webp" },
      { name: "Suíte Hibisco", people: "2 pessoas", beds: "2 camas de solteiro", tv: false, image: "/assets/playground.webp" },
      { name: "Suíte Alamanda", people: "2 pessoas", beds: "2 camas de solteiro", tv: false, image: "/assets/nature-house.webp" },
      { name: "Suíte Margarida", people: "4 pessoas", beds: "1 casal + 2 solteiro", tv: true, image: "/assets/piscina.webp" },
      { name: "Suíte Cosmos Amarelo", people: "3 pessoas", beds: "1 casal + 1 solteiro", tv: true, image: "/assets/area-gourmet.webp" },
    ],
  },
  {
    id: 2,
    name: "Casa principal + Chalé",
    description:
      "Locação completa da casa principal somada ao chalé – ideal para grupos e eventos (até 31 pessoas).",
    capacity: 23,
    bedType: "Casa principal + chalé",
    capacityLabel: "Até 23 pessoas",
    hasAC: true,
    hasWifi: true,
    amenities: ["Varanda", "Mini frigobar", "TV 32\"", "Mesa de trabalho"],
    heroTitle: "Casa principal + Chalé - Locação Exclusiva",
    heroDescription:
      "Locação exclusiva da casa principal + chalé com 6 suítes temáticas – ideal para famílias e grupos (até 23 pessoas). Desfrute de total privacidade em um ambiente cercado pela natureza, com comodidades completas para uma estadia inesquecível.",
    suites: [
      { name: "Suíte 1", people: "4 pessoas", beds: "1 casal + 2 solteiro", tv: true, image: "/assets/piscina.webp" },
      { name: "Suíte 2", people: "3 pessoas", beds: "1 casal + 1 solteiro", tv: true, image: "/assets/area-gourmet.webp" },
      { name: "Suíte 3", people: "2 pessoas", beds: "1 cama de casal", tv: true, image: "/assets/playground.webp" },
      { name: "Suíte 4", people: "2 pessoas", beds: "2 camas de solteiro", tv: false, image: "/assets/nature-house.webp" },
      { name: "Suíte 5", people: "2 pessoas", beds: "1 cama de casal", tv: false, image: "/assets/area-gourmet.webp" },
      { name: "Suíte 6", people: "2 pessoas", beds: "2 camas de solteiro", tv: false, image: "/assets/piscina.webp" },
    ],
  }
];

export default function Accommodations() {
  const [selectedRoom, setSelectedRoom] = useState(accommodations[0]);
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

  useEffect(() => {
    setCurrentImageIndex(0);
    instanceRef.current?.update();
    instanceRef.current?.moveToIdx(0);
  }, [selectedRoom, instanceRef]);

  const slides: Array<{ image: string } & Partial<SuiteSlide>> = (selectedRoom.suites ?? []).map((s) => s);

  return (
    <section id="acomodacoes" className="py-12 sm:py-15 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">
            Nossas <span className="text-gradient">Acomodações</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base">
            Todos os nossos quartos foram cuidadosamente projetados para 
            proporcionar o máximo de conforto durante sua estadia.
          </p>
        </motion.div>

        {/* Mobile Room Selection */}
        <div className="lg:hidden mb-8">
          <div className="flex flex-col items-center gap-3">
            {accommodations.map((room) => (
              <button
                key={room.id}
                onClick={() => {
                  setSelectedRoom(room);
                  setCurrentImageIndex(0);
                }}
                className={`w-full max-w-sm flex items-center justify-between p-4 rounded-xl transition-all ${
                  selectedRoom.id === room.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-slate-50 text-slate-900 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FaBed size={20} className={selectedRoom.id === room.id ? "text-white" : "text-primary"} />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{room.name}</span>
                  </div>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  selectedRoom.id === room.id ? "bg-white" : "bg-primary"
                }`} />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div ref={sliderRef} key={selectedRoom.id} className="keen-slider relative rounded-lg overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[475px]">
              {slides.map((slide, idx) => (
                <div key={idx} className="keen-slider__slide relative w-full !min-w-full">
                  <Image
                    src={getAssetPath(slide.image)}
                    alt={`${selectedRoom.name}${slide.name ? ` - ${slide.name}` : ` - imagem ${idx + 1}`}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent h-1/3" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white">
                    <div className="flex items-center justify-between">
                      <h4 className=" text-white text-base sm:text-lg font-medium m-0">{slide.name}</h4>
                      {slide.tv && <FaTv aria-label="TV disponível" className="w-4 h-4 text-white/90" />}
                    </div>
                    <div className="mt-1 flex items-center gap-4 text-white/90 text-xs sm:text-sm">
                      {slide.people && (
                        <span className="inline-flex items-center gap-1"><FaUsers className="w-3.5 h-3.5" />{slide.people}</span>
                      )}
                      {slide.beds && (
                        <span className="inline-flex items-center gap-1"><FaBed className="w-3.5 h-3.5" />{slide.beds}</span>
                      )}
                    </div>
                  </div>
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
            {/* Image indicators (alinha com a fonte de slides atual) */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: slides.length }).map((_, index) => (
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
          
          {/* Desktop Room Selection */}
          <motion.div 
            className="hidden lg:block lg:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-lg sm:text-xl font-medium mb-4">Locação</h3>
              <div className="space-y-3 sm:space-y-4">
                {accommodations.map((room) => (
                  <div 
                    key={room.id}
                    className={`p-3 sm:p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedRoom.id === room.id 
                        ? "border-primary bg-primary/5" 
                        : "border-slate-200 hover:border-primary/50"
                    }`}
                    onClick={() => {
                      setSelectedRoom(room);
                      setCurrentImageIndex(0);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm sm:text-base">{room.name}</h4>
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-primary" size={16} />
                        <span className="text-xs sm:text-sm text-slate-600">{room.capacity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-7 bg-secondary/20 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-primary text-sm sm:text-base mb-2">Informação importante</h4>
                <p className="text-xs sm:text-sm text-slate-700 mb-0">
                  Para garantir sua reserva ou verificar a disponibilidade, entre em contato conosco.
                  Teremos prazer em atendê-lo e esclarecer todas as suas dúvidas.
                </p>
              </div>
              
              <Button className="w-full mt-4 sm:mt-5" onClick={() => window.open(getWhatsAppLink(), "_blank")}>
                Verificar Disponibilidade
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Conteúdo textual em largura total abaixo do slider + menu */}
        <div className="mt-8 sm:mt-12 px-4 sm:px-0">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-medium">{(selectedRoom as any).heroTitle}</h3>
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {(selectedRoom as any).capacityLabel}
            </span>
          </div>
          <p className="text-slate-700 text-sm sm:text-base mb-0">
            {(selectedRoom as any).heroDescription}
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="inline-flex items-center gap-2 text-slate-700 text-sm">
              <FaBath className="text-primary" />
              <span>Banheiro privativo</span>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-700 text-sm">
              <FaSnowflake className="text-primary" />
              <span>Ar-condicionado</span>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-700 text-sm">
              <FaWifi className="text-primary" />
              <span>Wi‑Fi gratuito</span>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-700 text-sm">
              <FaShower className="text-primary" />
              <span>Chuveiro com aquecimento solar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
