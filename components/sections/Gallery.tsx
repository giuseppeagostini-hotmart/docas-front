"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getAssetPath } from "@/lib/utils";

const categories = [
  { id: "all", label: "Todos" },
  { id: "rooms", label: "Quartos" },
  { id: "common", label: "Áreas Comuns" },
  { id: "events", label: "Eventos" },
  { id: "food", label: "Gastronomia" },
];

const images = [
  // Quartos
  {
    id: 1,
    src: "/assets/nature-house.jpg",
    alt: "Quarto Luxo com Vista",
    category: "rooms",
  },
  {
    id: 2,
    src: "/assets/nature-house.jpg",
    alt: "Suíte Master",
    category: "rooms",
  },
  {
    id: 3,
    src: "/assets/nature-house.jpg",
    alt: "Quarto Premium",
    category: "rooms",
  },
  // Áreas Comuns
  {
    id: 4,
    src: "/assets/nature-house.jpg",
    alt: "Piscina",
    category: "common",
  },
  {
    id: 5,
    src: "/assets/nature-house.jpg",
    alt: "Área de Lazer",
    category: "common",
  },
  {
    id: 6,
    src: "/assets/nature-house.jpg",
    alt: "Lobby",
    category: "common",
  },
  // Eventos
  {
    id: 7,
    src: "/assets/nature-house.jpg",
    alt: "Salão de Festas",
    category: "events",
  },
  {
    id: 8,
    src: "/assets/nature-house.jpg",
    alt: "Área de Eventos",
    category: "events",
  },
  {
    id: 9,
    src: "/assets/nature-house.jpg",
    alt: "Espaço para Casamentos",
    category: "events",
  },
  // Gastronomia
  {
    id: 10,
    src: "/assets/nature-house.jpg",
    alt: "Café da Manhã",
    category: "food",
  },
  {
    id: 11,
    src: "/assets/nature-house.jpg",
    alt: "Restaurante",
    category: "food",
  },
  {
    id: 12,
    src: "/assets/nature-house.jpg",
    alt: "Bar",
    category: "food",
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = images.filter(
    (image) => selectedCategory === "all" || image.category === selectedCategory
  );

  return (
    <section id="galeria" className="py-20 relative overflow-hidden">
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
            Nossa <span className="text-gradient">Galeria</span>
          </h2>
          <p className="text-slate-700">
            Conheça nossa pousada através de imagens. Cada foto conta uma história 
            de conforto, elegância e momentos especiais.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl text-base font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:scale-105"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={getAssetPath(image.src)}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={image.id <= 6}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-lg font-medium">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full aspect-[4/3]">
              <Image
                src={getAssetPath(images.find((img) => img.id === selectedImage)?.src || "")}
                alt={images.find((img) => img.id === selectedImage)?.alt || ""}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:opacity-75 transition-opacity"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
} 