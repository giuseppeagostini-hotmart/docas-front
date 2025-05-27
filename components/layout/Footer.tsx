import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { formatPhoneNumber, getAssetPath } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center md:items-start">
              <Image
                src={getAssetPath("assets/docas-logo-comp.webp")}
                alt="Pousada Docas"
                width={80}
                height={80}
                className="mb-4"
                loading="lazy"
              />
              <p className="text-slate-300 text-sm text-center md:text-left">
                Uma pousada aconchegante em Minas Gerais, cercada pela natureza.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="text-sm text-slate-300 flex items-center gap-2">
                <Phone size={16} />
                <a href={`tel:+5537988513237`} className="hover:text-secondary">
                  {formatPhoneNumber("37988513237")}
                </a>
              </div>
              <div className="text-sm text-slate-300 flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contato@pousadadocas.com.br" className="hover:text-secondary">
                  contato@pousadadocas.com.br
                </a>
              </div>
              <div className="text-sm text-slate-300 flex items-center gap-2">
                <MapPin size={16} className="flex-shrink-0" />
                <span>R. Profa. Cecília de Freitas Lobato, 486, Leandro Ferreira - MG, 35657-000</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <nav>
                <ul className="flex flex-wrap justify-center md:justify-end gap-4">
                  <li>
                    <Link href="#" className="text-slate-300 hover:text-secondary text-sm">
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link href="#acomodacoes" className="text-slate-300 hover:text-secondary text-sm">
                      Acomodações
                    </Link>
                  </li>
                  <li>
                    <Link href="#galeria" className="text-slate-300 hover:text-secondary text-sm">
                      Galeria
                    </Link>
                  </li>
                  <li>
                    <Link href="#eventos" className="text-slate-300 hover:text-secondary text-sm">
                      Eventos
                    </Link>
                  </li>
                  <li>
                    <Link href="#contato" className="text-slate-300 hover:text-secondary text-sm">
                      Contato
                    </Link>
                  </li>
                </ul>
              </nav>
              <Link 
                href="https://instagram.com/pousadadocas" 
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Pousada Docas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}