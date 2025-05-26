"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/utils";
import { Check } from "lucide-react";

const eventTypes = [
  {
    id: "casamento",
    title: "Casamentos",
    description:
      "A Pousada Docas é o cenário perfeito para tornar seu casamento inesquecível, com uma paisagem deslumbrante, espaço amplo e equipe dedicada.",
    capacity: "Até 150 pessoas",
    facilities: [
      "Espaço para cerimônia ao ar livre",
      "Salão para recepção",
      "Suíte especial para os noivos",
      "Decoração personalizada",
      "Som e iluminação",
      "Estacionamento",
      "Hospedagem para convidados",
    ],
    images: [
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
    ],
  },
  {
    id: "corporativo",
    title: "Eventos Corporativos",
    description:
      "Um ambiente tranquilo e inspirador para reuniões, workshops e treinamentos corporativos, com estrutura tecnológica completa.",
    capacity: "Até 80 pessoas",
    facilities: [
      "Salas de reunião equipadas",
      "Internet de alta velocidade",
      "Projetor e equipamentos audiovisuais",
      "Coffee break personalizado",
      "Atividades de team building",
      "Hospedagem para participantes",
      "Serviço de alimentação",
    ],
    images: [
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
    ],
  },
  {
    id: "social",
    title: "Eventos Sociais",
    description:
      "O lugar ideal para celebrar aniversários, formaturas, bodas e outros momentos especiais com sua família e amigos.",
    capacity: "Até 120 pessoas",
    facilities: [
      "Espaço versátil para decoração",
      "Área para buffet",
      "Sistema de som ambiente",
      "Iluminação especial",
      "Lounge para convidados",
      "Espaço kids",
      "Serviço de bar",
    ],
    images: [
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
    ],
  },
];

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(eventTypes[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedEvent.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedEvent.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="eventos" className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background" />
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">
            Eventos <span className="text-gradient">Memoráveis</span>
          </h2>
          <p className="text-slate-700 text-sm sm:text-base">
            Realize seu evento em um cenário deslumbrante, com infraestrutura completa 
            e uma equipe dedicada a tornar seu momento ainda mais especial.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          {eventTypes.map((event) => (
            <button
              key={event.id}
              onClick={() => {
                setSelectedEvent(event);
                setCurrentImageIndex(0);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all ${
                selectedEvent.id === event.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:scale-105"
              }`}
            >
              {event.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative px-4 sm:px-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                <Image
                  src={selectedEvent.images[currentImageIndex]}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute left-0 right-0 bottom-0 p-4 sm:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2">
                      {selectedEvent.title}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base max-w-lg">
                      {selectedEvent.description}
                    </p>
                  </div>
                  <Button 
                    size="sm"
                    className="w-full sm:w-auto"
                    onClick={() => window.open(getWhatsAppLink(), "_blank")}
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation controls - Moved outside the image */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={prevImage}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 transition-all hover:scale-110 shadow-sm"
              >
                ←
              </button>

              {/* Image indicators */}
              <div className="flex gap-2">
                {selectedEvent.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentImageIndex === index
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextImage}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 transition-all hover:scale-110 shadow-sm"
              >
                →
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-4 sm:px-0"
          >
            <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-slate-900">Capacidade</h4>
                  <p className="text-sm sm:text-base text-slate-600">{selectedEvent.capacity}</p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-base sm:text-lg font-medium text-slate-900">
                  Estrutura disponível
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {selectedEvent.facilities.map((facility) => (
                    <div 
                      key={facility}
                      className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl"
                    >
                      <Check className="text-primary flex-shrink-0" size={16} />
                      <span className="text-xs sm:text-sm text-slate-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-slate-100">
                <h4 className="text-base sm:text-lg font-medium text-primary mb-2">
                  Planejamento personalizado
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mb-4">
                  Nossa equipe está disponível para criar uma experiência totalmente 
                  personalizada, atendendo às suas necessidades específicas.
                </p>
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = "#contato"}
                >
                  Entre em Contato
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}