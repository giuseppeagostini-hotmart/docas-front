"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Wifi,
  Wind,
  Car,
  Coffee
} from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const amenities = [
  {
    title: "Wi-Fi",
    description: "Internet de alta velocidade",
    icon: <Wifi className="w-8 h-8 text-primary" />
  },
  {
    title: "Ar Condicionado",
    description: "Em todos os quartos",
    icon: <Wind className="w-8 h-8 text-primary" />
  },
  {
    title: "Estacionamento",
    description: "Gratuito e seguro",
    icon: <Car className="w-8 h-8 text-primary" />
  },
  {
    title: "Café da Manhã",
    description: "Buffet completo",
    icon: <Coffee className="w-8 h-8 text-primary" />
  }
];

export default function Amenities() {
  return (
    <section id="estrutura" className="py-20 bg-background">
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
              <p className="text-sm text-slate-600">{amenity.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl shadow-xl"
          >
            <Image
              src={getAssetPath('/assets/nature-house.webp')}
              alt="Vista panorâmica da pousada"
              width={1200}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
              <div className="p-6 md:p-10 text-white max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-medium mb-3">
                  Contato com a Natureza
                </h3>
                <p className="text-white/90">
                  Nossa pousada está situada em uma área privilegiada, onde você poderá desfrutar
                  de paisagens deslumbrantes, ar puro e total tranquilidade. O local ideal para
                  quem busca se reconectar com a natureza sem abrir mão do conforto.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={getAssetPath('/assets/nature-house.webp')}
                alt="Piscina da pousada"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-white">
                <h4 className="text-lg font-medium mb-2">Piscina</h4>
                <p className="text-sm text-slate-600">Relaxe em nossa piscina com vista panorâmica para as montanhas</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={getAssetPath('/assets/nature-house.webp')}
                alt="Restaurante da pousada"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-white">
                <h4 className="text-lg font-medium mb-2">Área de Restaurante</h4>
                <p className="text-sm text-slate-600">Saboreie pratos deliciosos em um ambiente aconchegante</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={getAssetPath('/assets/nature-house.webp')}
                alt="Jardins da pousada"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-white">
                <h4 className="text-lg font-medium mb-2">Jardins</h4>
                <p className="text-sm text-slate-600">Caminhe por nossos jardins bem cuidados e aprecie a natureza</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}