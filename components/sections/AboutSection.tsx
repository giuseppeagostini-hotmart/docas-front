"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getAssetPath, getWhatsAppLink } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-15 bg-background">
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
              Escondidinha numa charmosa cidade mineira, a apenas 2 horas de Belo Horizonte, 30 minutos de Pitangui e 40 minutos de Divinópolis, a Pousada Docas é o refúgio perfeito para quem busca tranquilidade, conforto e aquele jeitinho mineiro de receber.
            </p>
            <p className="text-slate-700 mb-4">
              Aqui, em meio à natureza exuberante de Minas Gerais, juntamos a hospitalidade de raiz com uma estrutura completa para receber casais, famílias e grupos de amigos, sempre com muita simplicidade e cuidado.
            </p>
            <p className="text-slate-700 mb-6">
              Seja para um fim de semana de descanso, férias prolongadas ou para celebrar momentos especiais, nossa pousada é o cantinho ideal para criar memórias que vão ficar no coração.
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