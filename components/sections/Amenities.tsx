"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWind, FaCar, FaCoffee, FaUtensils } from "react-icons/fa";
import { getAssetPath } from "@/lib/utils";

const amenities = [
  {
    title: "Estacionamento",
    description: "Gratuito e seguro no local",
    icon: <FaCar className="w-8 h-8 text-primary" />
  },
  {
    title: "Ar-condicionado",
    description: "Temperatura ideal em todos os quartos",
    icon: <FaWind className="w-8 h-8 text-primary" />
  },
  {
    title: "Cozinha Equipada",
    description: "Cozinha completa para você cozinhar e curtir",
    icon: <FaUtensils className="w-8 h-8 text-primary" />
  },
  {
    title: "Café da Manhã",
    description: "Opcional com parceiros locais",
    icon: <FaCoffee className="w-8 h-8 text-primary" />
  }
];

export default function Amenities() {
  return (
    <section id="estrutura" className="py-15 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-8">
            Nossa <span className="text-gradient">Estrutura</span>
          </h2>
          <p className="text-slate-700">
            A Pousada Docas oferece uma infraestrutura completa, pensada para proporcionar 
            conforto e bem-estar durante toda a sua estadia. Conheça nossos diferenciais 
            e comodidades disponíveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-soft text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{amenity.title}</h3>
              <p className="text-sm text-slate-600 mb-0">{amenity.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full aspect-[14/9] md:aspect-[3/2] overflow-hidden">
                <Image
                  src={getAssetPath('/assets/piscina.webp')}
                  alt="Piscina da pousada"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-lg font-medium mb-2">Piscina</h4>
                <p className="text-sm text-slate-600 mb-0">Relaxe e aproveite momentos de lazer com vista para a natureza ao redor</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full aspect-[14/9] md:aspect-[3/2] overflow-hidden">
                <Image
                  src={getAssetPath('/assets/area-gourmet.webp')}
                  alt="Área gourmet da pousada"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-lg font-medium mb-2">Área Gourmet</h4>
                <p className="text-sm text-slate-600 mb-0">Espaço amplo e aconchegante para refeições e confraternizações, com estrutura completa</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full aspect-[14/9] md:aspect-[3/2] overflow-hidden">
                <Image
                  src={getAssetPath('/assets/playground.webp')}
                  alt="Playground da pousada"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-lg font-medium mb-2">Playground</h4>
                <p className="text-sm text-slate-600 mb-0">Diversão ao ar livre para as crianças, em espaço seguro integrado à área verde</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}