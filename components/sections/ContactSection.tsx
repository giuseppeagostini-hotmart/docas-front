"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPhoneNumber, getWhatsAppLink } from "@/lib/utils";


const ContactInfo = () => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-100">
    <div className="flex flex-col sm:flex-row mb-6 gap-4">
      <div className="flex items-start gap-2">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
          <Phone className="text-primary" size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-slate-900">Telefone</h4>
          <a
            href={`tel:+5537988513237`}
            className="text-sm text-slate-600 hover:text-primary transition-colors"
          >
            {formatPhoneNumber("37988513237")}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
          <Mail className="text-primary" size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-slate-900">E-mail</h4>
          <a
            href="mailto:docaspousada@gmail.com"
            className="text-sm text-slate-600 hover:text-primary transition-colors"
          >
            docaspousada@gmail.com
          </a>
        </div>
      </div>
    </div>
    
    <Button
      className="w-full sm:w-fit"
      onClick={() => window.open(getWhatsAppLink(), "_blank")}
    >
      Entrar em contato via WhatsApp
    </Button>
  </div>
);

// Removido formulário

export default function ContactSection() {
  return (
    <section id="contato" className="py-12 sm:py-15 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Estamos à disposição para tirar suas dúvidas e ajudar a tornar sua
            experiência ainda mais especial.
          </p>
        </motion.div>

        <div className="px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}