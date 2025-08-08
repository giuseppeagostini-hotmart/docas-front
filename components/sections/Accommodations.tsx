"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, getAssetPath } from "@/lib/utils";
import { FaBed, FaUsers, FaBath, FaSnowflake, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const accommodations = [
  {
    id: 1,
    name: "Suíte de 3 Camas",
    description:
      "Suíte espaçosa com três camas de solteiro, ideal para grupos de amigos ou famílias pequenas. Conta com banheiro privativo e varanda com vista para o jardim.",
    images: [
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
    ],
    capacity: 3,
    bedType: "3 Camas de Solteiro",
    hasAC: true,
    hasWifi: true,
    amenities: ["Varanda", "Mini frigobar", "TV 32\"", "Mesa de trabalho"],
  },
  {
    id: 2,
    name: "Suíte de 5 Camas",
    description:
      "Nossa maior suíte, perfeita para grupos grandes ou famílias. Equipada com cinco camas de solteiro, amplo espaço de convivência e banheiro privativo.",
    images: [
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
    ],
    capacity: 5,
    bedType: "5 Camas de Solteiro",
    hasAC: true,
    hasWifi: true,
    amenities: ["Área de convivência", "Mini frigobar", "TV 42\"", "Mesa de jantar"],
  },
  {
    id: 3,
    name: "Suíte de 3 Camas",
    description:
      "Suíte confortável com três camas de solteiro, ideal para pequenos grupos. Ambiente acolhedor com banheiro privativo e todas as comodidades necessárias.",
    images: [
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
      "/assets/nature-house.webp",
    ],
    capacity: 3,
    bedType: "3 Camas de Solteiro",
    hasAC: true,
    hasWifi: true,
    amenities: ["Área de trabalho", "Mini frigobar", "TV 32\"", "Armário amplo"],
  },
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
        <div className="lg:hidden px-4 mb-8">
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
            <div ref={sliderRef} key={selectedRoom.id} className="keen-slider relative rounded-lg overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[545px]">
              {selectedRoom.images.map((img, idx) => (
                <div key={idx} className="keen-slider__slide relative w-full !min-w-full">
                  <Image
                    src={getAssetPath(img)}
                    alt={`${selectedRoom.name} - imagem ${idx + 1}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-1/3" />
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
            {/* Image indicators (igual ao EventsSection) */}
            <div className="flex justify-center mt-4 gap-2">
              {selectedRoom.images.map((_, index) => (
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
            
            <div className="mt-6 sm:mt-8 px-4 sm:px-0">
              <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">{selectedRoom.name}</h3>
              <p className="text-slate-700 text-sm sm:text-base mb-6">{selectedRoom.description}</p>
              
              <div className="grid grid-cols-2 gap-2 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <FaBed className="text-primary flex-shrink-0" size={16} />
                  <span className="text-slate-700 text-sm sm:text-base">{selectedRoom.bedType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-primary flex-shrink-0" size={16} />
                  <span className="text-slate-700 text-sm sm:text-base">Até {selectedRoom.capacity} pessoas</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-primary flex-shrink-0" size={16} />
                  <span className="text-slate-700 text-sm sm:text-base">Banheiro privativo</span>
                </div>
                <div className="flex items-center gap-2">
                  {selectedRoom.hasAC ? (
                    <FaSnowflake className="text-primary flex-shrink-0" size={16} />
                  ) : (
                    <FaSnowflake className="text-slate-400 flex-shrink-0" size={16} />
                  )}
                  <span className={`text-sm sm:text-base ${selectedRoom.hasAC ? "text-slate-700" : "text-slate-400"}`}>
                    {selectedRoom.hasAC ? "Ar-condicionado" : "Sem ar-condicionado"}
                  </span>
                </div>
              </div>
              
              <h4 className="text-base sm:text-lg font-medium mb-3">Comodidades:</h4>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {selectedRoom.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">{amenity}</span>
                  </li>
                ))}
              </ul>
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
              <h3 className="text-lg sm:text-xl font-medium mb-4">Todas as Acomodações</h3>
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
                        <FaBed className="text-primary" size={16} />
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
      </div>
    </section>
  );
}