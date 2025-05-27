import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const faviconSvg = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏠</text></svg>`;

export const metadata: Metadata = {
  title: "Pousada Docas | Conforto e Natureza em Minas Gerais",
  description:
    "Uma pousada aconchegante em Minas Gerais, próxima a Belo Horizonte. Rodeada pela natureza, com piscina, ar-condicionado, área de lazer e estrutura para eventos e casamentos.",
  keywords: [
    "pousada minas gerais",
    "hotel próximo belo horizonte",
    "casamento minas gerais",
    "pousada com piscina",
    "pousada natureza",
    "pousada docas",
    "hospedagem minas gerais",
  ],
  icons: {
    icon: faviconSvg,
    shortcut: faviconSvg,
  },
  authors: [{ name: "Pousada Docas" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.pousadadocas.com.br",
    siteName: "Pousada Docas",
    title: "Pousada Docas | Conforto e Natureza em Minas Gerais",
    description:
      "Uma pousada aconchegante em Minas Gerais, próxima a Belo Horizonte. Rodeada pela natureza, com piscina, ar-condicionado, área de lazer e estrutura para eventos e casamentos.",
    images: [
      {
        url: "https://www.pousadadocas.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pousada Docas - Vista da piscina",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Determine o caminho base baseado no ambiente
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/docas-front' : '';
  
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Preload da imagem hero crítica para melhorar LCP */}
        <link 
          rel="preload" 
          as="image" 
          href={`${basePath}/assets/nature-house.webp`}
          fetchPriority="high"
        />
      </head>
      <body
        className={`${inter.variable} ${lora.variable} font-sans bg-background text-slate-800`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}