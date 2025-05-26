"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/utils";
import { Bed, Users, Bath, Snowflake } from "lucide-react";

const accommodations = [
  {
    id: 1,
    name: "Suíte de 3 Camas",
    description:
      "Suíte espaçosa com três camas de solteiro, ideal para grupos de amigos ou famílias pequenas. Conta com banheiro privativo e varanda com vista para o jardim.",
    images: [
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
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
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
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
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
      "/assets/nature-house.jpg",
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

  return (
    <section id="acomodacoes" className="py-12 sm:py-20 bg-white">
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
                  <Bed size={20} className={selectedRoom.id === room.id ? "text-white" : "text-primary"} />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{room.name}</span>
                    <span className={`text-xs ${
                      selectedRoom.id === room.id ? "text-white/90" : "text-slate-500"
                    }`}>
                      {room.capacity} pessoas
                    </span>
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
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src={selectedRoom.images[currentImageIndex]}
                alt={selectedRoom.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-1/3"></div>
              
              <div className="absolute left-0 right-0 bottom-0 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-white">
                    {selectedRoom.name}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base">
                    {selectedRoom.bedType}
                  </p>
                </div>
                <Button 
                  size="sm"
                  className="w-full sm:w-auto"
                  onClick={() => window.open(getWhatsAppLink(), "_blank")}
                >
                  Reservar
                </Button>
              </div>
              
              {/* Image navigation arrows */}
              <button
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-1.5 sm:p-2 rounded-full"
                onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedRoom.images.length - 1 : prev - 1))}
                aria-label="Imagem anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-1.5 sm:p-2 rounded-full"
                onClick={() => setCurrentImageIndex((prev) => (prev === selectedRoom.images.length - 1 ? 0 : prev + 1))}
                aria-label="Próxima imagem"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              
              {/* Image indicators */}
              <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {selectedRoom.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                      index === currentImageIndex ? "bg-white" : "bg-white/40"
                    }`}
                    aria-label={`Ver imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 px-4 sm:px-0">
              <h3 className="text-xl sm:text-2xl font-medium mb-3 sm:mb-4">{selectedRoom.name}</h3>
              <p className="text-slate-700 text-sm sm:text-base mb-6">{selectedRoom.description}</p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <Bed className="text-primary flex-shrink-0" size={16} />
                  <span className="text-slate-700 text-sm sm:text-base">{selectedRoom.bedType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-primary flex-shrink-0" size={16} />
                  <span className="text-slate-700 text-sm sm:text-base">Até {selectedRoom.capacity} pessoas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="text-primary flex-shrink-0" size={16} />
                  <span className="text-slate-700 text-sm sm:text-base">Banheiro privativo</span>
                </div>
                <div className="flex items-center gap-2">
                  {selectedRoom.hasAC ? (
                    <Snowflake className="text-primary flex-shrink-0" size={16} />
                  ) : (
                    <Snowflake className="text-slate-400 flex-shrink-0" size={16} />
                  )}
                  <span className={`text-sm sm:text-base ${selectedRoom.hasAC ? "text-slate-700" : "text-slate-400"}`}>
                    {selectedRoom.hasAC ? "Ar-condicionado" : "Sem ar-condicionado"}
                  </span>
                </div>
              </div>
              
              <h4 className="text-base sm:text-lg font-medium mb-3">Comodidades:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
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
            <div className="bg-background p-4 sm:p-6 rounded-lg shadow-soft">
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
                        <Bed className="text-primary" size={16} />
                        <span className="text-xs sm:text-sm text-slate-600">{room.capacity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 bg-secondary/20 p-3 sm:p-4 rounded-lg">
                <h4 className="font-medium text-primary text-sm sm:text-base mb-2">Informação importante</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  Para garantir sua reserva ou verificar a disponibilidade, entre em contato conosco.
                  Teremos prazer em atendê-lo e esclarecer todas as suas dúvidas.
                </p>
              </div>
              
              <Button className="w-full mt-4 sm:mt-6" onClick={() => window.open(getWhatsAppLink(), "_blank")}>
                Verificar Disponibilidade
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}