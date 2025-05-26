import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

export function getWhatsAppLink(
  phone: string = "5537988513237",
  message: string = "Olá, gostaria de obter mais informações sobre a Pousada Docas."
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getAssetPath(path: string) {
  const isProd = process.env.NODE_ENV === 'production';
  return isProd ? `/docas-front${path}` : path;
}