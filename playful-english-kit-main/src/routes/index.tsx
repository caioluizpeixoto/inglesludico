import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Palette,
  MessageCircle,
  Printer,
  GraduationCap,
  Users,
  Download,
  Backpack,
  ShieldCheck,
  Check,
  Star,
  Heart,
  Flower2,
  Telescope,
  Pizza,
  CookingPot,
  BookOpen,
  Gift,
  ChevronDown,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Inglês Lúdico - Aulas divertidas para crianças" },
      {
        name: "description",
        content:
          "Transforme suas aulas de inglês infantil com atividades prontas, divertidas e interativas. Acesso imediato e vitalício a partir de R$17,90.",
      },
      { property: "og:title", content: "Kit Inglês Lúdico - Aulas divertidas para crianças" },
      {
        property: "og:description",
        content:
          "Atividades visuais, interativas e prontas para imprimir. Ensine inglês brincando para crianças de 4 a 8 anos.",
      },
    ],
  }),
  component: SalesPage,
});

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-[3px] border-dashed border-foreground/40 bg-muted/60 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground ${className}`}
    >
      <span className="px-3 py-2">🖼️ {label}</span>
    </div>
  );
}

function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker && <span className="tag bg-sun mb-4">{kicker}</span>}
      <h2 className="text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

const benefits = [
  { icon: Sparkles, title: "Aprendizagem Interativa", desc: "As crianças participam ativamente da aula e aprendem fazendo.", color: "bg-sun" },
  { icon: Palette, title: "Método Visual", desc: "Imagens, abas, flores, binóculos e atividades práticas facilitam a compreensão.", color: "bg-accent" },
  { icon: MessageCircle, title: "Mais Speaking", desc: "Os alunos praticam inglês de forma natural durante as atividades.", color: "bg-leaf" },
  { icon: Printer, title: "Pronto para Imprimir", desc: "Baixe, imprima e aplique sem perder horas preparando aulas.", color: "bg-berry/70" },
];

const resources = [
  { icon: Flower2, label: "Action Verbs Flower", color: "bg-berry/60", img: "/produto1.png" },
  { icon: Telescope, label: "What Can You See?", color: "bg-accent", img: "/produto2.png" },
  { icon: Backpack, label: "What's In My Backpack?", color: "bg-sun", img: "/produto3.png" },
  { icon: Pizza, label: "What's Baking In My Oven?", color: "bg-secondary", img: "/produto4.png" },
  { icon: CookingPot, label: "What's Cooking In My Pot?", color: "bg-leaf", img: "/produto5.png" },
  { icon: Flower2, label: "Comparatives & Superlatives Flower", color: "bg-primary/70", img: "/produto6.png" },
  { icon: BookOpen, label: "50 Dinâmicas de Inglês para Crianças", color: "bg-accent", img: "/produto7.png" },
  { icon: Gift, label: "+100 Atividades Extras", color: "bg-sun", img: "/produto8.png" },
];

const faqs = [
  { q: "📥 Como recebo o material?", a: "O acesso é enviado imediatamente após a confirmação do pagamento." },
  { q: "🖨️ Preciso imprimir?", a: "Sim. Todos os materiais são digitais e foram criados para impressão." },
  { q: "👩‍🏫 Serve para professores?", a: "Sim. O material foi desenvolvido especialmente para professores de inglês infantil." },
  { q: "👨‍👩‍👧 Funciona para pais?", a: "Sim. Também é ideal para homeschooling e reforço escolar." },
  { q: "📚 Para qual idade é indicado?", a: "Crianças de 4 a 8 anos." },
  { q: "🔁 Posso usar quantas vezes quiser?", a: "Sim. O acesso é vitalício e os downloads são ilimitados." },
  { q: "💰 O pagamento é único?", a: "Sim. Você paga apenas uma vez." },
  { q: "📱 Posso acessar pelo celular?", a: "Sim. Você pode acessar e baixar os arquivos pelo celular, tablet ou computador." },
];

const fakeBuyers = [
  { name: "Mariana S.", city: "São Paulo, SP" },
  { name: "Juliana C.", city: "Rio de Janeiro, RJ" },
  { name: "Fernanda R.", city: "Belo Horizonte, MG" },
  { name: "Aline P.", city: "Curitiba, PR" },
  { name: "Camila B.", city: "Porto Alegre, RS" },
  { name: "Beatriz L.", city: "Brasília, DF" },
];

function PurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [buyerIndex, setBuyerIndex] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      setBuyerIndex((prev) => (prev + 1) % fakeBuyers.length);
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000); // Oculta após 5 segundos
    };

    // Mostra a primeira após 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);
    // Depois repete a cada 30 segundos
    const interval = setInterval(showNotification, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const buyer = fakeBuyers[buyerIndex];

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="card-pop flex items-center gap-3 bg-card p-4 ring-2 ring-primary/20">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sun border-[2px] border-foreground">
          <Check className="h-5 w-5 text-foreground" />
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{buyer.name} comprou o Kit</p>
          <p className="text-xs text-muted-foreground">{buyer.city}</p>
        </div>
      </div>
    </div>
  );
}

function SalesPage() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  return (
    <main className="overflow-x-hidden">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-3 text-center text-sm font-bold md:text-base">
          🔥 Oferta especial por tempo limitado · acesso vitalício
        </div>
      </div>

      {/* HERO */}
      <section className="relative px-4 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="tag bg-sun">
            <Sparkles className="h-4 w-4" /> Para Teachers da Educação Infantil
          </span>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Suas aulas de inglês{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">nunca mais</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 -rotate-1 rounded-full bg-sun" />
            </span>{" "}
            serão as mesmas.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Transforme o aprendizado em um momento divertido, interativo e inesquecível para seus alunos.
            Chega de atividades que não prendem a atenção das crianças.
          </p>

          <div className="relative my-10 w-full max-w-2xl">
            <div className="absolute -left-6 -top-6 -z-0 h-32 w-32 rounded-full bg-sun" />
            <div className="absolute -bottom-8 -right-4 -z-0 h-24 w-24 rotate-12 rounded-3xl bg-accent" />
            <img src="/hero.png" alt="Hero Kit Inglês" className="relative aspect-[4/3] w-full rounded-2xl border-[3px] border-foreground object-cover shadow-pop rotate-1" />
            <div className="card-pop absolute -bottom-6 left-6 flex items-center gap-3 rounded-full px-4 py-3">
              <div className="rounded-full bg-leaf p-2">
                <Check className="h-5 w-5" />
              </div>
              <p className="text-sm font-bold">Pronto para imprimir</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#ofertas" className="btn-pop bg-primary text-primary-foreground">
              Quero meu Kit agora
            </a>
            <div className="flex items-center gap-2 text-sm font-bold">
              <ShieldCheck className="h-5 w-5 text-leaf" /> Garantia de 7 dias
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`/avaliacao${i}.png`} alt={`Avaliação ${i}`} className="h-10 w-10 rounded-full border-[3px] border-foreground object-cover bg-card" />
              ))}
            </div>
            <div className="text-center md:text-left">
              <div className="flex justify-center gap-0.5 text-secondary md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-bold">+1.000 professoras felizes</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="Por que funciona?"
            title="Inglês que prende a atenção das crianças"
            subtitle="Com o Kit Inglês Lúdico, seus alunos aprendem inglês brincando através de recursos visuais, atividades práticas e materiais que eles realmente gostam de fazer."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="card-pop p-6 flex flex-col items-center transition-transform hover:-translate-y-2"
                style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.5}deg)` }}
              >
                <div className={`mb-4 inline-flex rounded-2xl border-[3px] border-foreground p-3 ${b.color}`}>
                  <b.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Perfeito para" title="Feito pra quem ensina com o coração" />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="card-pop bg-sun/60 p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-10 w-10" />
                <h3 className="text-2xl">Professores</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {["Mais participação dos alunos", "Menos tempo planejando", "Aulas mais divertidas", "Melhor fixação do conteúdo"].map((t) => (
                  <li key={t} className="flex items-start gap-3 font-semibold">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-pop bg-accent/60 p-8">
              <div className="flex items-center gap-3">
                <Users className="h-10 w-10" />
                <h3 className="text-2xl">Pais e Homeschool</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {["Aprendizado divertido em casa", "Fácil de aplicar", "Sem necessidade de experiência em ensino", "Atividades educativas e criativas"].map((t) => (
                  <li key={t} className="flex items-start gap-3 font-semibold">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="O que você recebe"
            title="Veja alguns dos recursos do Kit"
            subtitle="Atividades prontas que combinam imagem, movimento e fala para uma experiência rica de aprendizado."
          />
          <div className="mt-14 relative w-full overflow-hidden flex py-4">
            <div className="flex w-max animate-marquee gap-5 pause-on-hover">
              {[...resources, ...resources].map((r, i) => (
                <div
                  key={i}
                  className="card-pop overflow-hidden flex flex-col w-[280px] shrink-0"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.8}deg)` }}
                >
                  <img src={r.img} alt={r.label} className="aspect-square w-full object-cover border-b-[3px] border-foreground" />
                  <div className="flex flex-1 items-center gap-3 p-4 bg-card">
                    <r.icon className="h-6 w-6 shrink-0" />
                    <p className="font-bold leading-tight">{r.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Como funciona" title="Em 3 passos simples" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: Download, title: "Receba o acesso imediatamente", desc: "Após a compra você recebe acesso instantâneo ao material.", color: "bg-sun" },
              { icon: Printer, title: "Imprima quando quiser", desc: "Use quantas vezes desejar. O acesso é vitalício.", color: "bg-accent" },
              { icon: Backpack, title: "Aplique nas suas aulas", desc: "Escolha a atividade, imprima e comece a utilizar imediatamente.", color: "bg-leaf" },
            ].map((s, i) => (
              <div key={s.title} className="relative card-pop p-8 text-center">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full border-[3px] border-foreground bg-primary px-4 py-1 font-display text-lg font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <div className={`mx-auto mt-2 inline-flex rounded-2xl border-[3px] border-foreground p-4 ${s.color}`}>
                  <s.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Quem compra, ama ❤️" title="Professores utilizam o material para" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Educação Infantil", "ESL e EFL", "Reforço Escolar", "Homeschool", "Crianças de 4 a 8 anos"].map((t, i) => (
              <span key={t} className="tag bg-card" style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg)` }}>
                <Check className="h-4 w-4 text-leaf" /> {t}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { name: "Camila R.", role: "Professora de Inglês Infantil", text: "Meus alunos pediram pra repetir a atividade! Nunca vi tanto engajamento." },
              { name: "Juliana M.", role: "Homeschool Mom", text: "Material lindo, fácil de aplicar e meu filho ama a Flower de Action Verbs." },
              { name: "Rafaela S.", role: "Teacher ESL", text: "Economizei horas de planejamento. Vale cada centavo." },
            ].map((t, i) => (
              <div key={t.name} className="card-pop p-6 text-center flex flex-col items-center" style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1}deg)` }}>
                <div className="flex gap-0.5 text-secondary justify-center">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 font-semibold">"{t.text}"</p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="px-4 py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-sun/20 blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl -z-10" />
        
        <div className="mx-auto max-w-6xl">
          <SectionTitle 
            kicker="🎁 Bônus Exclusivos" 
            title="Presentes Liberados Apenas Hoje!" 
            subtitle="Garantindo o seu Kit Inglês Lúdico agora, você também leva esses 3 materiais incríveis totalmente de graça. É o empurrãozinho final para aulas perfeitas."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { 
                title: "Jogo da Memória em Inglês", 
                desc: "Cartas prontas para imprimir de um jogo super divertido! Fixe o vocabulário enquanto as crianças treinam a memória e a pronúncia.", 
                value: "R$ 39,90",
                color: "bg-sun",
                img: "/flashcards.png"
              },
              { 
                title: "Super Kit das Cores", 
                desc: "Um pacote premium de atividades práticas e dinâmicas infalíveis para as crianças decorarem todas as cores em inglês brincando.", 
                value: "R$ 67,90",
                color: "bg-accent",
                img: "/cores.png"
              },
              { 
                title: "Certificado Bilíngue", 
                desc: "Um lindo certificado de conclusão bilíngue (Inglês/Português) para celebrar o aprendizado e deixar os pequenos cheios de orgulho.", 
                value: "R$ 29,90",
                color: "bg-leaf",
                img: "/certificado.png"
              }
            ].map((b, i) => (
              <div key={b.title} className="card-pop flex flex-col p-6 bg-card text-center relative transition-transform hover:-translate-y-2" style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 1.5}deg)` }}>
                <div className={`absolute -top-4 -right-4 h-12 w-12 rounded-full ${b.color} border-[3px] border-foreground flex items-center justify-center rotate-12 z-10 shadow-pop`}>
                  <Gift className="h-6 w-6 text-foreground" />
                </div>
                <img src={b.img} alt={b.title} className="aspect-square w-full rounded-xl border-[3px] border-foreground object-cover bg-muted/60" />
                <div className="mt-6 flex-1">
                  <span className="tag mb-3 bg-secondary/20 text-secondary-foreground border-secondary/30">Bônus #{i + 1}</span>
                  <h3 className="text-xl font-bold">{b.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{b.desc}</p>
                </div>
                <div className="mt-5 rounded-xl bg-muted/50 p-3 border-[2px] border-dashed border-foreground/20">
                  <p className="text-xs text-muted-foreground">Valor normal: <span className="line-through">{b.value}</span></p>
                  <p className="font-display font-bold text-leaf text-xl mt-0.5">Hoje: GRÁTIS!</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section id="ofertas" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="Acesso imediato"
            title="Escolha seu Kit"
            subtitle="Pagamento único · acesso vitalício · uso e downloads ilimitados"
          />

          <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
            <div className="card-pop flex flex-col p-8">
              <div className="flex items-center gap-3">
                <Backpack className="h-8 w-8" />
                <h3 className="text-2xl">Kit Inglês Lúdico Essencial</h3>
              </div>
              <div className="mt-6">
                <span className="font-display text-5xl font-bold">R$10,00</span>
                <p className="text-sm text-muted-foreground">Pagamento único</p>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {["Action Verbs Flower", "What Can You See?", "What's In My Backpack?", "What's Baking In My Oven?", "What's Cooking In My Pot?", "Uso ilimitado", "Downloads ilimitados"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                    <span className="font-semibold">{t}</span>
                  </li>
                ))}
              </ul>
              <button onClick={(e) => { e.preventDefault(); setIsUpsellOpen(true); }} className="btn-pop mt-8 w-full bg-secondary text-secondary-foreground">
                QUERO O KIT ESSENCIAL
              </button>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-muted-foreground animate-pulse">
                <span>90% escolhem o plano Completo</span>
                <ArrowRight className="hidden h-5 w-5 lg:block text-primary" />
                <ArrowDown className="block h-5 w-5 lg:hidden text-primary" />
              </div>
            </div>

            <div className="card-pop relative flex flex-col bg-card p-8 ring-4 ring-primary/30">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-[3px] border-foreground bg-primary px-5 py-1.5 font-display font-bold text-primary-foreground">
                ⭐ MAIS ESCOLHIDO
              </div>
              <div className="flex items-center gap-3">
                <Backpack className="h-8 w-8 text-primary" />
                <h3 className="text-2xl">Kit Inglês Lúdico Completo</h3>
              </div>
              <div className="mt-6">
                <p className="text-sm text-muted-foreground line-through">De R$97,90</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-primary">R$27,90</span>
                  <span className="text-sm font-bold">à vista</span>
                </div>
                <p className="text-sm text-muted-foreground">Pagamento único · acesso vitalício</p>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {["Tudo do Kit Essencial", "Comparatives & Superlatives Flower", "50 Dinâmicas de Inglês para Crianças", "+100 Atividades Educativas", "Literatura em Inglês", "Matemática em Inglês", "Vocabulary Practice", "Writing Activities", "Reading Activities", "Mini Books", "Uso ilimitado", "Downloads ilimitados", "Acesso vitalício"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="font-semibold">{t}</span>
                  </li>
                ))}
              </ul>
              <a href="https://pay.wiapy.com/po8P1S8lls" className="btn-pop mt-8 w-full bg-primary text-primary-foreground">
                QUERO O KIT COMPLETO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERT */}
      <section className="px-4 py-20 bg-sun/10">
        <div className="mx-auto max-w-5xl">
          <div className="card-pop flex flex-col md:flex-row items-center gap-10 bg-card p-8 md:p-12 border-4 border-foreground">
            <div className="w-56 h-56 md:w-64 md:h-64 shrink-0 rounded-full border-[8px] border-secondary bg-primary/20 p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-3 transition-transform hover:rotate-2">
              <img src="/prof.png" alt="Teacher Hellen" className="w-full h-full rounded-full object-cover border-[3px] border-foreground bg-muted" />
            </div>
            <div className="text-center md:text-left flex-1">
              <span className="tag bg-sun/30 text-foreground border-foreground mb-4">Quem criou o material?</span>
              <h2 className="text-3xl md:text-4xl font-bold">Nice to meet you, sou a Teacher Hellen! 👋</h2>
              <p className="mt-5 text-muted-foreground text-lg">
                Sou professora apaixonada por educação infantil e criei o <strong>Kit Inglês Lúdico</strong> porque sei exatamente como é frustrante tentar prender a atenção das crianças com atividades sem graça.
              </p>
              <p className="mt-4 text-muted-foreground text-lg">
                Todo o material foi testado e validado em sala de aula para trazer <strong>mais cor, movimento e diversão</strong> para o ensino. Meu objetivo é que seus alunos amem aprender inglês e que você tenha muito mais praticidade na hora de planejar suas aulas!
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* GUARANTEE */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="card-pop relative bg-leaf/40 p-8 text-center md:p-12">
            <div className="mx-auto inline-flex rounded-full border-[3px] border-foreground bg-card p-5">
              <ShieldCheck className="h-12 w-12 text-leaf" />
            </div>
            <h2 className="mt-4 text-4xl">Garantia de 7 Dias</h2>
            <p className="mt-3 text-lg font-semibold">Risco zero para você.</p>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
              Se o material não ajudar a tornar suas aulas mais divertidas e participativas, devolvemos seu
              investimento. Sem complicações.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="FAQ" title="Perguntas Frequentes" />
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-24 pt-10">
        <div className="mx-auto max-w-4xl">
          <div className="card-pop relative overflow-hidden bg-primary p-10 text-center text-primary-foreground md:p-16">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-sun/70" />
            <div className="absolute -bottom-12 -right-8 h-48 w-48 rotate-12 rounded-3xl bg-accent/70" />
            <div className="relative">
              <Heart className="mx-auto h-10 w-10" />
              <h2 className="mt-4 text-4xl md:text-5xl">Ensinar inglês pode ser divertido.</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
                Com as ferramentas certas, as crianças participam mais, aprendem mais e se divertem durante o
                processo.
              </p>
              <a href="#ofertas" className="btn-pop mt-8 bg-sun text-foreground">
                🎒 Garantir meu Kit agora
              </a>
              <p className="mt-4 text-sm opacity-80">Acesso imediato · Garantia de 7 dias</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-[3px] border-foreground/10 px-4 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kit Inglês Lúdico · Todos os direitos reservados
      </footer>
      <PurchaseNotification />
      <UpsellModal isOpen={isUpsellOpen} />
    </main>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card-pop overflow-hidden bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
      >
        <span>{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t-[3px] border-dashed border-foreground/20 p-5 text-muted-foreground">{a}</div>}
    </div>
  );
}

function UpsellModal({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="card-pop relative w-full max-w-md bg-card p-6 text-center md:p-8 animate-in zoom-in-95 duration-200 border-4 border-primary">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-[3px] border-foreground bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
          🎁 OFERTA ESPECIAL
        </div>
        
        <h2 className="mt-4 text-2xl font-bold md:text-3xl">Espere! Temos uma surpresa para você 😍</h2>
        <p className="mt-3 text-muted-foreground">
          Antes de finalizar, liberamos um <strong>upgrade exclusivo</strong>. Por apenas <strong>R$ 7,90 a mais</strong> (total R$ 17,90), você pode levar a versão Completa com:
        </p>
        
        <div className="mt-5 text-left bg-muted/50 p-4 rounded-xl border-[2px] border-dashed border-foreground/20">
          <ul className="space-y-2 text-sm font-semibold">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-leaf" /> +100 Atividades Extras Educativas</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-leaf" /> 50 Dinâmicas Divertidas</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-leaf" /> Todos os 3 Bônus Inclusos</li>
          </ul>
        </div>

        <p className="mt-4 text-xs font-bold text-primary/80">Essa é uma oportunidade única antes de concluir o seu pedido. Aproveite!</p>

        <div className="mt-6 flex flex-col gap-3">
          <a href="https://pay.wiapy.com/58WtAgb6G-T" className="btn-pop w-full bg-primary text-primary-foreground text-base h-auto py-3">
            Sim! Quero a Versão Completa por R$ 17,90
          </a>
          <a href="https://pay.wiapy.com/oEND7CUYxf" className="text-xs font-bold text-muted-foreground underline hover:text-foreground mt-2">
            Não, obrigada. Prefiro ficar apenas com o kit de R$ 10,00 por enquanto.
          </a>
        </div>
      </div>
    </div>
  );
}
