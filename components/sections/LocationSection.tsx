"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Bus, Car } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-8">
            Nossa <span className="text-gradient">Localização</span>
          </h2>
          <p className="text-slate-700">
            A Pousada Docas está localizada em Leandro Ferreira, Minas Gerais, oferecendo um ambiente 
            tranquilo e acolhedor para sua estadia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* <iframe
  src="https://maps.google.com/maps?q=-19.6721973,-45.0307883&z=15&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Mapa de localização da Pousada Docas"
/> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-soft h-full">
              <h3 className="text-xl font-medium mb-6 border-b border-slate-200 pb-4">
                Como Chegar
              </h3>
              
              <div className="space-y-8">
                <div className="flex">
                  <MapPin className="text-primary flex-shrink-0 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Endereço</h4>
                    <p className="text-slate-700">
                      R. Profa. Cecília de Freitas Lobato, 486<br />
                      Leandro Ferreira - MG<br />
                      CEP: 35657-000
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps/dir//R.+Profa.+Cecília+de+Freitas+Lobato,+486+-+Leandro+Ferreira,+MG,+35657-000",
                      "_blank"
                    );
                  }}
                >
                  Ver Rotas no Google Maps
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}