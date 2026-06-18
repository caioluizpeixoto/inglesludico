import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Check, a as ShieldCheck, b as ArrowRight, c as Palette, d as GraduationCap, f as Gift, g as ChevronDown, h as CookingPot, i as Sparkles, l as MessageCircle, m as Download, n as Telescope, o as Printer, p as Flower2, r as Star, s as Pizza, t as Users, u as Heart, v as BookOpen, x as ArrowDown, y as Backpack } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DESKp4XM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SectionTitle({ kicker, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [
			kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tag bg-sun mb-4",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-4xl md:text-5xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted-foreground",
				children: subtitle
			})
		]
	});
}
var benefits = [
	{
		icon: Sparkles,
		title: "Aprendizagem Interativa",
		desc: "As crianças participam ativamente da aula e aprendem fazendo.",
		color: "bg-sun"
	},
	{
		icon: Palette,
		title: "Método Visual",
		desc: "Imagens, abas, flores, binóculos e atividades práticas facilitam a compreensão.",
		color: "bg-accent"
	},
	{
		icon: MessageCircle,
		title: "Mais Speaking",
		desc: "Os alunos praticam inglês de forma natural durante as atividades.",
		color: "bg-leaf"
	},
	{
		icon: Printer,
		title: "Pronto para Imprimir",
		desc: "Baixe, imprima e aplique sem perder horas preparando aulas.",
		color: "bg-berry/70"
	}
];
var resources = [
	{
		icon: Flower2,
		label: "Action Verbs Flower",
		color: "bg-berry/60",
		img: "/produto1.png"
	},
	{
		icon: Telescope,
		label: "What Can You See?",
		color: "bg-accent",
		img: "/produto2.png"
	},
	{
		icon: Backpack,
		label: "What's In My Backpack?",
		color: "bg-sun",
		img: "/produto3.png"
	},
	{
		icon: Pizza,
		label: "What's Baking In My Oven?",
		color: "bg-secondary",
		img: "/produto4.png"
	},
	{
		icon: CookingPot,
		label: "What's Cooking In My Pot?",
		color: "bg-leaf",
		img: "/produto5.png"
	},
	{
		icon: Flower2,
		label: "Comparatives & Superlatives Flower",
		color: "bg-primary/70",
		img: "/produto6.png"
	},
	{
		icon: BookOpen,
		label: "50 Dinâmicas de Inglês para Crianças",
		color: "bg-accent",
		img: "/produto7.png"
	},
	{
		icon: Gift,
		label: "+100 Atividades Extras",
		color: "bg-sun",
		img: "/produto8.png"
	}
];
var faqs = [
	{
		q: "📥 Como recebo o material?",
		a: "O acesso é enviado imediatamente após a confirmação do pagamento."
	},
	{
		q: "🖨️ Preciso imprimir?",
		a: "Sim. Todos os materiais são digitais e foram criados para impressão."
	},
	{
		q: "👩‍🏫 Serve para professores?",
		a: "Sim. O material foi desenvolvido especialmente para professores de inglês infantil."
	},
	{
		q: "👨‍👩‍👧 Funciona para pais?",
		a: "Sim. Também é ideal para homeschooling e reforço escolar."
	},
	{
		q: "📚 Para qual idade é indicado?",
		a: "Crianças de 4 a 8 anos."
	},
	{
		q: "🔁 Posso usar quantas vezes quiser?",
		a: "Sim. O acesso é vitalício e os downloads são ilimitados."
	},
	{
		q: "💰 O pagamento é único?",
		a: "Sim. Você paga apenas uma vez."
	},
	{
		q: "📱 Posso acessar pelo celular?",
		a: "Sim. Você pode acessar e baixar os arquivos pelo celular, tablet ou computador."
	}
];
var fakeBuyers = [
	{
		name: "Mariana S.",
		city: "São Paulo, SP"
	},
	{
		name: "Juliana C.",
		city: "Rio de Janeiro, RJ"
	},
	{
		name: "Fernanda R.",
		city: "Belo Horizonte, MG"
	},
	{
		name: "Aline P.",
		city: "Curitiba, PR"
	},
	{
		name: "Camila B.",
		city: "Porto Alegre, RS"
	},
	{
		name: "Beatriz L.",
		city: "Brasília, DF"
	}
];
function PurchaseNotification() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [buyerIndex, setBuyerIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const showNotification = () => {
			setBuyerIndex((prev) => (prev + 1) % fakeBuyers.length);
			setVisible(true);
			setTimeout(() => {
				setVisible(false);
			}, 5e3);
		};
		const initialTimeout = setTimeout(showNotification, 3e3);
		const interval = setInterval(showNotification, 3e4);
		return () => {
			clearTimeout(initialTimeout);
			clearInterval(interval);
		};
	}, []);
	if (!visible) return null;
	const buyer = fakeBuyers[buyerIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-4 left-4 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-pop flex items-center gap-3 bg-card p-4 ring-2 ring-primary/20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sun border-[2px] border-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-foreground" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-bold text-foreground",
				children: [buyer.name, " comprou o Kit"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: buyer.city
			})] })]
		})
	});
}
function SalesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-4 py-3 text-center text-sm font-bold md:text-base",
					children: "🔥 Oferta especial por tempo limitado · acesso vitalício"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative px-4 pt-12 pb-20 md:pt-20 md:pb-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-4xl flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tag bg-sun",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), " Para Teachers da Educação Infantil"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-7xl",
							children: [
								"Suas aulas de inglês",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative z-10 text-primary",
										children: "nunca mais"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-2 left-0 right-0 h-3 -rotate-1 rounded-full bg-sun" })]
								}),
								" ",
								"serão as mesmas."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg text-muted-foreground md:text-xl",
							children: "Transforme o aprendizado em um momento divertido, interativo e inesquecível para seus alunos. Chega de atividades que não prendem a atenção das crianças."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative my-10 w-full max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-6 -top-6 -z-0 h-32 w-32 rounded-full bg-sun" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-8 -right-4 -z-0 h-24 w-24 rotate-12 rounded-3xl bg-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/hero.png",
									alt: "Hero Kit Inglês",
									className: "relative aspect-[4/3] w-full rounded-2xl border-[3px] border-foreground object-cover shadow-pop rotate-1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "card-pop absolute -bottom-6 left-6 flex items-center gap-3 rounded-full px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-full bg-leaf p-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold",
										children: "Pronto para imprimir"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#ofertas",
								className: "btn-pop bg-primary text-primary-foreground",
								children: "Quero meu Kit agora"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-leaf" }), " Garantia de 7 dias"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col items-center gap-3 md:flex-row md:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex -space-x-3",
								children: [
									1,
									2,
									3,
									4
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `/avaliacao${i}.png`,
									alt: `Avaliação ${i}`,
									className: "h-10 w-10 rounded-full border-[3px] border-foreground object-cover bg-card"
								}, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center md:text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center gap-0.5 text-secondary md:justify-start",
									children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold",
									children: "+1.000 professoras felizes"
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						kicker: "Por que funciona?",
						title: "Inglês que prende a atenção das crianças",
						subtitle: "Com o Kit Inglês Lúdico, seus alunos aprendem inglês brincando através de recursos visuais, atividades práticas e materiais que eles realmente gostam de fazer."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center",
						children: benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-pop p-6 flex flex-col items-center transition-transform hover:-translate-y-2",
							style: { transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.5}deg)` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `mb-4 inline-flex rounded-2xl border-[3px] border-foreground p-3 ${b.color}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-7 w-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl",
									children: b.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: b.desc
								})
							]
						}, b.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						kicker: "Perfeito para",
						title: "Feito pra quem ensina com o coração"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 grid gap-8 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-pop bg-sun/60 p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-10 w-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl",
									children: "Professores"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3",
								children: [
									"Mais participação dos alunos",
									"Menos tempo planejando",
									"Aulas mais divertidas",
									"Melhor fixação do conteúdo"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 font-semibold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
										" ",
										t
									]
								}, t))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-pop bg-accent/60 p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-10 w-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl",
									children: "Pais e Homeschool"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3",
								children: [
									"Aprendizado divertido em casa",
									"Fácil de aplicar",
									"Sem necessidade de experiência em ensino",
									"Atividades educativas e criativas"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 font-semibold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }),
										" ",
										t
									]
								}, t))
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						kicker: "O que você recebe",
						title: "Veja alguns dos recursos do Kit",
						subtitle: "Atividades prontas que combinam imagem, movimento e fala para uma experiência rica de aprendizado."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 relative w-full overflow-hidden flex py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-max animate-marquee gap-5 pause-on-hover",
							children: [...resources, ...resources].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-pop overflow-hidden flex flex-col w-[280px] shrink-0",
								style: { transform: `rotate(${(i % 2 === 0 ? -1 : 1) * .8}deg)` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: r.img,
									alt: r.label,
									className: "aspect-square w-full object-cover border-b-[3px] border-foreground"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 items-center gap-3 p-4 bg-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-6 w-6 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold leading-tight",
										children: r.label
									})]
								})]
							}, i))
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						kicker: "Como funciona",
						title: "Em 3 passos simples"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-8 md:grid-cols-3",
						children: [
							{
								icon: Download,
								title: "Receba o acesso imediatamente",
								desc: "Após a compra você recebe acesso instantâneo ao material.",
								color: "bg-sun"
							},
							{
								icon: Printer,
								title: "Imprima quando quiser",
								desc: "Use quantas vezes desejar. O acesso é vitalício.",
								color: "bg-accent"
							},
							{
								icon: Backpack,
								title: "Aplique nas suas aulas",
								desc: "Escolha a atividade, imprima e comece a utilizar imediatamente.",
								color: "bg-leaf"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative card-pop p-8 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -top-5 left-1/2 -translate-x-1/2 rounded-full border-[3px] border-foreground bg-primary px-4 py-1 font-display text-lg font-bold text-primary-foreground",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `mx-auto mt-2 inline-flex rounded-2xl border-[3px] border-foreground p-4 ${s.color}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-8 w-8" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-xl",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: s.desc
								})
							]
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							kicker: "Quem compra, ama ❤️",
							title: "Professores utilizam o material para"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 flex flex-wrap justify-center gap-3",
							children: [
								"Educação Infantil",
								"ESL e EFL",
								"Reforço Escolar",
								"Homeschool",
								"Crianças de 4 a 8 anos"
							].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tag bg-card",
								style: { transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg)` },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-leaf" }),
									" ",
									t
								]
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid gap-6 md:grid-cols-3",
							children: [
								{
									name: "Camila R.",
									role: "Professora de Inglês Infantil",
									text: "Meus alunos pediram pra repetir a atividade! Nunca vi tanto engajamento."
								},
								{
									name: "Juliana M.",
									role: "Homeschool Mom",
									text: "Material lindo, fácil de aplicar e meu filho ama a Flower de Action Verbs."
								},
								{
									name: "Rafaela S.",
									role: "Teacher ESL",
									text: "Economizei horas de planejamento. Vale cada centavo."
								}
							].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-pop p-6 text-center flex flex-col items-center",
								style: { transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1}deg)` },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-0.5 text-secondary justify-center",
										children: [...Array(5)].map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, j))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 font-semibold",
										children: [
											"\"",
											t.text,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex items-center justify-center gap-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold",
											children: t.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: t.role
										})] })
									})
								]
							}, t.name))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "ofertas",
				className: "px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						kicker: "Acesso imediato",
						title: "Escolha seu Kit",
						subtitle: "Pagamento único · acesso vitalício · uso e downloads ilimitados"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 grid items-stretch gap-8 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-pop flex flex-col p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, { className: "h-8 w-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl",
										children: "Kit Inglês Lúdico Essencial"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-5xl font-bold",
										children: "R$17,90"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Pagamento único"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex-1 space-y-3",
									children: [
										"Action Verbs Flower",
										"What Can You See?",
										"What's In My Backpack?",
										"What's Baking In My Oven?",
										"What's Cooking In My Pot?",
										"Uso ilimitado",
										"Downloads ilimitados"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-leaf" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: t
										})]
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://pay.wiapy.com/58WtAgb6G-T",
									className: "btn-pop mt-8 w-full bg-secondary text-secondary-foreground",
									children: "QUERO O KIT ESSENCIAL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-center gap-2 text-sm font-bold text-muted-foreground animate-pulse",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "90% escolhem o plano Completo" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "hidden h-5 w-5 lg:block text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "block h-5 w-5 lg:hidden text-primary" })
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-pop relative flex flex-col bg-card p-8 ring-4 ring-primary/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-[3px] border-foreground bg-primary px-5 py-1.5 font-display font-bold text-primary-foreground",
									children: "⭐ MAIS ESCOLHIDO"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Backpack, { className: "h-8 w-8 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl",
										children: "Kit Inglês Lúdico Completo"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground line-through",
											children: "De R$97,90"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-5xl font-bold text-primary",
												children: "R$27,90"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold",
												children: "à vista"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground",
											children: "Pagamento único · acesso vitalício"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex-1 space-y-3",
									children: [
										"Tudo do Kit Essencial",
										"Comparatives & Superlatives Flower",
										"50 Dinâmicas de Inglês para Crianças",
										"+100 Atividades Educativas",
										"Literatura em Inglês",
										"Matemática em Inglês",
										"Vocabulary Practice",
										"Writing Activities",
										"Reading Activities",
										"Mini Books",
										"Uso ilimitado",
										"Downloads ilimitados",
										"Acesso vitalício"
									].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold",
											children: t
										})]
									}, t))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://pay.wiapy.com/po8P1S8lls",
									className: "btn-pop mt-8 w-full bg-primary text-primary-foreground",
									children: "QUERO O KIT COMPLETO"
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-pop relative bg-leaf/40 p-8 text-center md:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto inline-flex rounded-full border-[3px] border-foreground bg-card p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-12 w-12 text-leaf" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-4xl",
								children: "Garantia de 7 Dias"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-lg font-semibold",
								children: "Risco zero para você."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-xl text-muted-foreground",
								children: "Se o material não ajudar a tornar suas aulas mais divertidas e participativas, devolvemos seu investimento. Sem complicações."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						kicker: "FAQ",
						title: "Perguntas Frequentes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 space-y-3",
						children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqItem, {
							q: f.q,
							a: f.a,
							defaultOpen: i === 0
						}, f.q))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 pb-24 pt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-4xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-pop relative overflow-hidden bg-primary p-10 text-center text-primary-foreground md:p-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sun/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-12 -right-8 h-48 w-48 rotate-12 rounded-3xl bg-accent/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "mx-auto h-10 w-10" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 text-4xl md:text-5xl",
										children: "Ensinar inglês pode ser divertido."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-xl text-lg opacity-90",
										children: "Com as ferramentas certas, as crianças participam mais, aprendem mais e se divertem durante o processo."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#ofertas",
										className: "btn-pop mt-8 bg-sun text-foreground",
										children: "🎒 Garantir meu Kit agora"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm opacity-80",
										children: "Acesso imediato · Garantia de 7 dias"
									})
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t-[3px] border-foreground/10 px-4 py-8 text-center text-sm text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Kit Inglês Lúdico · Todos os direitos reservados"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurchaseNotification, {})
		]
	});
}
function FaqItem({ q, a, defaultOpen = false }) {
	const [open, setOpen] = (0, import_react.useState)(defaultOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-pop overflow-hidden bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen(!open),
			className: "flex w-full items-center justify-between gap-4 p-5 text-left font-bold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}` })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t-[3px] border-dashed border-foreground/20 p-5 text-muted-foreground",
			children: a
		})]
	});
}
//#endregion
export { SalesPage as component };
