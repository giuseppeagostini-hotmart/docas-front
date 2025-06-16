"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Testimonial {
  name: string;
  comment: string;
  ratings: { quartos: number; servico: number; local: number };
  highlights: string[];
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Vanessa Tatiana",
    comment: 'A pousada é PERFEITA! Clima muito agradável. Tudo muito limpo, cama confortável, chuveiro excelente, café da manhã delicioso e muito caprichado. É tudo exatamente como nas fotos, mas a sensação lá é maravilhosa!\nEstadia excelente, o local é muito agradável e a Luciene nos fez nos sentirmos em casa.',
    ratings: { quartos: 5, servico: 5, local: 5 },
    highlights: ["Muito limpo", "Café delicioso", "Como em casa"]
  },
  {
    name: "Conceição Santos",
    comment: "Passamos o fim de semana e ficamos muito satisfeitos com tudo. Os quartos são aconchegantes, banheiros muito bons, piscina excelente, tudo muito bem cuidado. Luciene quem nos recepcionou é um amor de pessoa, muito receptiva e ficou disponível o tempo todo caso fosse necessário. Só elogios mesmo.",
    ratings: { quartos: 5, servico: 5, local: 5 },
    highlights: ["Vista linda", "Tranquilo", "Ideal para crianças"]
  },
  {
    name: "Júnior Soares",
    comment: "É a segunda vez que alugamos e só temos elogios. Espaço lindo, aconchegante, desde as acomodações até a recepção, pessoas atenciosas, humildes e muito comprometidas com o bem estar dos hóspedes, amei o período que passamos aí, esperamos voltar em breve! Luciene que nos atendeu, super atenciosa, o tempo todo disponível.",
    ratings: { quartos: 5, servico: 5, local: 5 },
    highlights: ["Espaço lindo", "Muito aconchegante"]
  },
  {
    name: "Carol Souza",
    comment: "Espaço lindo, aconchegante, desde as acomodações até a recepção, pessoas atenciosas, humildes e muito compromissadas com o bem estar dos hóspedes, amei o período que passamos aí, esperamos voltar em breve!! 🙏",
    ratings: { quartos: 5, servico: 5, local: 5 },
    highlights: ["Espaço lindo", "Pessoas atenciosas", "Muito aconchegante"]
  },
  {
    name: "Thaís Sousa",
    comment: "A pousada é super aconchegante, quartos com roupas de cama e banho limpinhas e cheirosas. O café da manhã sensacional, piscina limpinha.\nFoi maravilhoso nosso final de semana e com certeza pretendemos voltar.",
    ratings: { quartos: 5, servico: 5, local: 5 },
    highlights: ["Super aconchegante", "Café sensacional", "Piscina limpinha"]
  }
];

function RatingRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-1 text-xs text-slate-600">
      <span className="font-medium">{label}:</span>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < value ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ name, comment, ratings, highlights }: Testimonial) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full max-w-md lg:max-w-lg mx-auto">
      <h4 className="font-semibold text-lg mb-3">{name}</h4>
      
      <div className="space-y-1 mb-3">
        <RatingRow label="Quartos" value={ratings.quartos} />
        <RatingRow label="Serviço" value={ratings.servico} />
        <RatingRow label="Local" value={ratings.local} />
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {highlights.map((highlight, i) => (
          <span
            key={i}
            className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
          >
            {highlight}
          </span>
        ))}
      </div>

      <p className="text-slate-700 text-sm italic whitespace-pre-line">
        {comment}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    loop: true,
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 }
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 }
      }
    }
  });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Avaliações <span className="text-gradient">da Pousada</span>
          </h2>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div ref={sliderRef} className="keen-slider min-h-96">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="keen-slider__slide flex items-stretch p-3"
              >
                <ReviewCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              className="p-2 rounded-full bg-white border shadow hover:bg-gray-50 transition-colors"
              onClick={() => instanceRef.current?.prev()}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 w-6 rounded-full transition-colors ${
                    idx === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                />
              ))}
            </div>
            
            <button
              className="p-2 rounded-full bg-white border shadow hover:bg-gray-50 transition-colors"
              onClick={() => instanceRef.current?.next()}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
