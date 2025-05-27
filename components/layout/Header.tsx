"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, getAssetPath } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Acomodações", href: "#acomodacoes" },
  { name: "Estrutura", href: "#estrutura" },
  { name: "Galeria", href: "#galeria" },
  { name: "Eventos", href: "#eventos" },
  { name: "Localização", href: "#localizacao" },
  { name: "Contato", href: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={getAssetPath("assets/docas-logo-comp.webp")}
              alt="Pousada Docas"
              width={40}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex lg:space-x-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm rounded-md hover:bg-secondary/40 transition-colors ${
                      isScrolled ? "text-slate-800" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              size="sm"
              className="ml-4"
              onClick={() => window.open(getWhatsAppLink(), "_blank")}
            >
              Reservar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="!text-slate-800" />
            ) : (
              <Menu className={`${isScrolled ? "text-slate-800" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-slate-800 rounded-md hover:bg-secondary/40"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  className="w-full"
                  onClick={() => {
                    window.open(getWhatsAppLink(), "_blank");
                    setIsOpen(false);
                  }}
                >
                  Reservar Agora
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}