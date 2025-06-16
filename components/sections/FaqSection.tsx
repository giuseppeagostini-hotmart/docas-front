"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
	{
		question: "Quais são as opções de locação disponíveis?",
		answer:
			"Trabalhamos com duas opções principais: Casa principal (até 15 pessoas, 6 quartos) e Casa + Chalé (até 23 pessoas, 10 quartos). Não alugamos os chalés separadamente; a locação é sempre da casa inteira ou do pacote completo.",
	},
	{
		question: "Vocês ainda oferecem hospedagem em quartos individuais?",
		answer:
			"Sim, mas apenas em datas específicas ao longo do ano. Avisamos com antecedência no nosso Instagram. Você também pode consultar disponibilidade pelo WhatsApp.",
	},
	{
		question: "O que está incluso na locação?",
		answer:
			"Área gourmet equipada (2 geladeiras, cervejeira, fogão industrial, churrasqueira, micro-ondas, forno elétrico e utensílios), piscina, área verde, parquinho (casinha na árvore, gangorra, balanço) e estacionamento interno para até 5 carros.",
	},
	{
		question: "O que não está incluso?",
		answer:
			"Café da manhã, produtos alimentícios e de higiene pessoal, toalhas de banho e piscina. Indicamos parceiros locais para café da manhã e compras, para você escolher o que preferir.",
	},
	{
		question: "Como verifico a disponibilidade?",
		answer:
			"Entre em contato pelo WhatsApp ou Instagram informando a data desejada, quantidade de pessoas e opção de locação (casa inteira ou quarto individual, se disponível). Nossa equipe responderá com as opções e valores.",
	},
	{
		question: "Quanto custa a diária?",
		answer:
			"Os valores variam conforme a data, número de pessoas e tipo de uso (descanso, eventos, comemorações). Envie suas informações pelo WhatsApp para receber um orçamento personalizado.",
	},
	{
		question: "Quais são as formas de pagamento aceitas?",
		answer:
			"Aceitamos Pix, transferência bancária e, em alguns casos, cartão de crédito (com taxa). O pagamento pode ser dividido em 50% na reserva e 50% na data contratada.",
	},
	{
		question: "Existe política de cancelamento?",
		answer:
			"Cancelamentos com mais de 30 dias de antecedência têm devolução integral (Art. 49 da Lei 8.078/1990). Cancelamentos com menos de 30 dias não têm devolução.",
	},
	{
		question: "A pousada tem estacionamento?",
		answer:
			"Sim, contamos com área interna para até 5 veículos com segurança. Também há espaço adicional na rua em frente, que é tranquila e segura.",
	},
	{
		question: "A pousada fica longe do centro da cidade?",
		answer:
			"Não. Estamos localizados no alto da cidade, a cerca de 5 minutos de carro do centro. Perto o suficiente para conveniência, mas com silêncio e clima de interior.",
	},
	{
		question: "Qual o horário de check-in e check-out?",
		answer:
			"Hospedagem: check-in às 17h e check-out às 17h do dia seguinte. Eventos: período de 24 horas, sendo 6 horas para o evento e o restante para montagem e desmontagem. O imóvel deve ser desocupado até o final do primeiro dia útil após o evento. Atrasos na entrega das chaves geram multa de 30% por hora.",
	},
	{
		question: "Há regras específicas para uso da piscina?",
		answer:
			"Sim. É proibido levar garrafas e copos de vidro na área da piscina. Caso ocorra quebra e seja necessário esvaziar e limpar, os custos serão repassados ao hóspede responsável.",
	},
	{
		question: "A pousada é adequada para crianças?",
		answer:
			"Sim. Temos bastante espaço ao ar livre, piscina e área verde. Não oferecemos berço ou itens infantis, mas indicamos fornecedores locais para esse suporte, se necessário.",
	},
	{
		question: "Aceitam pets?",
		answer:
			"Animais de pequeno porte são bem-vindos, mediante aviso prévio. Temos orientações para garantir conforto a todos os hóspedes. Fale conosco antes da reserva para avaliarmos a melhor forma.",
	},
	{
		question: "Posso fazer eventos na pousada?",
		answer:
			"Sim. Recebemos aniversários, encontros familiares, jantares, ensaios, pré-wedding e casamentos intimistas. Nossa estrutura integrada entre áreas internas e externas é ideal para celebrações que valorizam afeto, natureza e privacidade.",
	},
	{
		question: "Qual o horário permitido para música e barulho?",
		answer:
			"Música ambiente e som moderado são permitidos durante o dia. Após as 22h, o som deve ser desligado. Eventos com som alto, estrutura externa ou fornecedores precisam ser previamente autorizados pela equipe.",
	},
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
						Perguntas{" "}
						<span className="text-gradient">Frequentes</span>
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
								<h3
									className={`text-lg font-medium transition-colors duration-200 ${
										activeIndex === index
											? "text-primary"
											: "text-slate-900"
									}`}
								>
									{faq.question}
								</h3>
								<span
									className={`text-2xl transition-transform duration-200 ${
										activeIndex === index ? "rotate-45 text-primary" : ""
									}`}
								>
									+
								</span>
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 ${
									activeIndex === index ? "max-h-96" : "max-h-0"
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