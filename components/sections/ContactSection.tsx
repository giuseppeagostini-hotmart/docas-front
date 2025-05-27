"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPhoneNumber, getWhatsAppLink } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactInfo = () => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-100">
    <div className="space-y-6 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Phone className="text-primary" size={20} />
        </div>
        <div>
          <h4 className="font-medium text-slate-900">Telefone</h4>
          <a
            href={`tel:+5537988513237`}
            className="text-sm text-slate-600 hover:text-primary transition-colors"
          >
            {formatPhoneNumber("37988513237")}
          </a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Mail className="text-primary" size={20} />
        </div>
        <div>
          <h4 className="font-medium text-slate-900">E-mail</h4>
          <a
            href="mailto:contato@pousadadocas.com.br"
            className="text-sm text-slate-600 hover:text-primary transition-colors"
          >
            contato@pousadadocas.com.br
          </a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <MapPin className="text-primary" size={20} />
        </div>
        <div>
          <h4 className="font-medium text-slate-900">Endereço</h4>
          <p className="text-sm text-slate-600">
            R. Profa. Cecília de Freitas Lobato, 486, Leandro Ferreira - MG, 35657-000
          </p>
        </div>
      </div>
    </div>
    
    <Button
      className="w-full"
      onClick={() => window.open(getWhatsAppLink(), "_blank")}
    >
      Entrar em contato via WhatsApp
    </Button>
  </div>
);

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Aqui você pode implementar o envio do formulário
      console.log(data);
      reset();
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name", { required: "Nome é obrigatório" })}
          type="text"
          placeholder="Nome completo"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </div>

      <div>
        <input
          {...register("email", { 
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "E-mail inválido"
            }
          })}
          type="email"
          placeholder="E-mail"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Telefone (opcional)"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>

      <div>
        <textarea
          {...register("message", { required: "Mensagem é obrigatória" })}
          placeholder="Sua mensagem"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
};

export default function ContactSection() {
  return (
    <section id="contato" className="py-12 sm:py-20 bg-background">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-100">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}