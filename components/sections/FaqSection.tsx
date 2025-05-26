"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Qual o horário de check-in e check-out?",
    answer: "O check-in pode ser realizado das 14h às 22h. O check-out deve ser feito até às 12h. Para horários diferentes, entre em contato conosco."
  },
  {
    question: "A pousada aceita animais de estimação?",
    answer: "Sim, aceitamos animais de estimação de pequeno porte. É necessário informar no momento da reserva e seguir nossas políticas para pets."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartões de crédito e débito das principais bandeiras, PIX e dinheiro. Parcelamos em até 6x sem juros no cartão de crédito."
  },
  {
    question: "O café da manhã está incluso na diária?",
    answer: "Sim, todas as nossas diárias incluem café da manhã completo, servido das 7h às 10h no restaurante da pousada."
  },
  {
    question: "Como funciona o estacionamento?",
    answer: "Oferecemos estacionamento gratuito para todos os hóspedes, com vagas cobertas e monitoramento 24 horas."
  },
  {
    question: "Qual a distância do centro da cidade?",
    answer: "A pousada está localizada a apenas 5 minutos de carro do centro histórico da cidade."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white to-background" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-8">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-slate-700">
            Encontre respostas para as dúvidas mais comuns sobre nossa pousada. 
            Se sua pergunta não estiver aqui, não hesite em nos contatar.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <h3 className={`text-lg font-medium transition-colors duration-200 ${
                  activeIndex === index ? 'text-primary' : 'text-slate-900'
                }`}>
                  {faq.question}
                </h3>
                <span className={`text-2xl transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-45 text-primary' : ''
                }`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-slate-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}