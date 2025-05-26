"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Uma experiência incrível! A pousada é linda, o atendimento é excelente e a localização é perfeita para quem busca tranquilidade.",
    image: "/assets/nature-house.jpg",
  },
  {
    id: 2,
    name: "Carlos Santos",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Lugar maravilhoso para relaxar. Os quartos são muito confortáveis e a equipe é super atenciosa. Voltarei com certeza!",
    image: "/assets/nature-house.jpg",
  },
  {
    id: 3,
    name: "Mariana Costa",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Realizamos nosso casamento na pousada e foi perfeito! A estrutura é excelente e a organização foi impecável.",
    image: "/assets/nature-house.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? testimonials.length - 1 : nextIndex;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < testimonials.length; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2 mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">
            O que dizem <span className="text-gradient">nossos hóspedes</span>
          </h2>
        </motion.div>

        <div className="relative px-4 sm:px-0">
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 sm:gap-8 transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                >
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-soft h-full">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-3 sm:mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-base sm:text-lg">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-slate-500">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-slate-700 text-sm sm:text-base italic">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                prevSlide();
              }}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 transition-all hover:scale-110 shadow-sm"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                setIsAutoPlaying(false);
                nextSlide();
              }}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 transition-all hover:scale-110 shadow-sm"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}