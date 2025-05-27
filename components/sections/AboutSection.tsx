"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getAssetPath, getWhatsAppLink } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title after:left-0 mb-8">
              Bem-vindo à <span className="text-gradient">Pousada Docas</span>
            </h2>
            <p className="text-slate-700 mb-4">
              Localizada em uma charmosa cidade mineira, a apenas 2 horas de Belo Horizonte, 
              a Pousada Docas oferece o refúgio perfeito para aqueles que buscam 
              tranquilidade sem abrir mão do conforto.
            </p>
            <p className="text-slate-700 mb-4">
              Em meio à exuberante natureza de Minas Gerais, nossa pousada combina a 
              hospitalidade mineira com uma estrutura completa, proporcionando momentos 
              inesquecíveis para casais, famílias e grupos de amigos.
            </p>
            <p className="text-slate-700 mb-6">
              Seja para um final de semana relaxante, férias prolongadas ou para 
              celebrar um evento especial, a Pousada Docas é o lugar ideal para 
              você criar memórias que durarão para sempre.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button onClick={() => window.open(getWhatsAppLink(), "_blank")}>
                Faça sua Reserva
              </Button>
              <Button 
                variant="outline" 
                onClick={() => document.getElementById("acomodacoes")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Acomodações
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={getAssetPath('/assets/nature-house.webp')}
                alt="Vista da Pousada Docas"
                width={600}
                height={500}
                className="w-full object-cover h-[500px]"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-8 -right-8 z-0 w-40 h-40 bg-primary/10 rounded-full hidden md:block"></div>
            <div className="absolute -bottom-4 right-20 z-0 w-20 h-20 bg-secondary/30 rounded-full hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}