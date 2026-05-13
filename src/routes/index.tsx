import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Wrench, ShieldCheck, Stethoscope, Gavel, Star, Phone, MessageCircle,
  Award, HandshakeIcon, Receipt, MapPin, ArrowRight, CheckCircle2, CalendarCheck, Cog,
} from "lucide-react";
import hero from "@/assets/hero-workshop.jpg";
import glauko from "@/assets/glauko.jpg";
import { Section, SectionHeader } from "@/components/site/Section";
import { WHATSAPP_URL, TEL_URL, PHONE_DISPLAY } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oficina Mecânica em Umuarama-PR | JVO Auto-Serviços" },
      { name: "description", content: "Oficina mecânica e centro automotivo em Umuarama-PR. 25+ anos de experiência, diagnóstico preciso, orçamento transparente e parcelamento em até 4x sem juros." },
      { property: "og:title", content: "Oficina Mecânica em Umuarama-PR | JVO Auto-Serviços" },
      { property: "og:description", content: "Centro automotivo multimarcas com 25+ anos. Mecânica geral, freios, suspensão, injeção e leilão. Agende pelo WhatsApp." },
      { property: "og:url", content: "https://jvo-care-connect.lovable.app/" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [
      { rel: "canonical", href: "https://jvo-care-connect.lovable.app/" },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Wrench, title: "Mecânica Geral", desc: "Manutenção completa multimarcas com peças de qualidade." },
  { icon: ShieldCheck, title: "Preventiva", desc: "Revisões periódicas para evitar quebras e gastos maiores." },
  { icon: Stethoscope, title: "Corretiva", desc: "Diagnóstico preciso e reparo do problema na primeira visita." },
  { icon: Gavel, title: "Avaliação para Leilão", desc: "Análise técnica antes da compra de veículos de leilão." },
];

const REASONS = [
  { icon: Award, title: "25+ anos de experiência", desc: "Glauko atua na mecânica desde os 16 anos." },
  { icon: HandshakeIcon, title: "Atendimento familiar", desc: "Cada cliente é tratado com atenção e respeito." },
  { icon: Receipt, title: "Orçamento transparente", desc: "Você aprova tudo antes do serviço iniciar." },
  { icon: CheckCircle2, title: "Parcelamos em até 4x", desc: "Sem juros no cartão de crédito." },
];

const TESTIMONIALS = [
  { name: "Carlos M.", text: "Atendimento excelente, identificaram o problema do meu carro rapidamente. Recomendo demais!" },
  { name: "Patrícia L.", text: "Honestos e cuidadosos. Resolveram o problema do meu Onix sem enrolação." },
  { name: "Rafael S.", text: "Avaliaram um carro de leilão para mim e me pouparam de uma furada. Profissionais de verdade." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-blue text-brand-blue-foreground">
        <div className="absolute inset-0">
          <img src={hero} alt="Oficina JVO Auto-Serviços" width={1600} height={1000} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/85 to-brand-blue/40" />
        </div>
        <div className="container-page relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wider">
              <Award className="h-3.5 w-3.5" /> 25 anos de experiência
            </span>
            <h1 className="mt-5 text-5xl leading-tight md:text-7xl">
              Seu carro em <span className="text-brand-red">boas mãos</span> há 25 anos
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Mecânica geral multimarcas em Umuarama-PR. Diagnóstico preciso, orçamento transparente e atendimento familiar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3 text-sm font-semibold text-brand-red-foreground shadow-lg shadow-brand-red/30 transition hover:brightness-110">
                <MessageCircle className="h-5 w-5" /> Agende pelo WhatsApp
              </a>
              <a href={TEL_URL}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                <Phone className="h-5 w-5" /> Ligar agora
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-red" />Umuarama-PR</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-red" />{PHONE_DISPLAY}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <Section alt>
        <SectionHeader eyebrow="O que fazemos" title="Nossos Serviços" subtitle="Tudo que seu veículo precisa, em um só lugar." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue group-hover:bg-brand-red group-hover:text-white transition">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl text-brand-blue">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/servicos" className="inline-flex items-center gap-2 font-semibold text-brand-red hover:underline">
            Ver todos os serviços <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* WHY US */}
      <Section>
        <SectionHeader eyebrow="Por que a JVO" title="Por que escolher a JVO" subtitle="Os motivos pelos quais centenas de motoristas confiam no nosso trabalho." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div key={r.title} className="rounded-xl border-l-4 border-brand-red bg-surface-alt p-6">
              <r.icon className="mb-3 h-7 w-7 text-brand-red" />
              <h3 className="text-xl text-brand-blue">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ABOUT GLAUKO */}
      <Section alt>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.img src={glauko} alt="Glauko Rangel de Almeida — proprietário JVO Auto-Serviços"
            width={900} height={1100} loading="lazy"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl" />
          <div>
            <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">Sobre nós</span>
            <h2 className="mt-3 text-4xl text-brand-blue md:text-5xl">Conheça o Glauko</h2>
            <p className="mt-4 text-base text-muted-foreground">
              Apaixonado por mecânica desde os 16 anos, Glauko Rangel acumulou 25+ anos de experiência antes de fundar a JVO Auto-Serviços. Hoje atende motoristas de Umuarama com a mesma dedicação de sempre: diagnóstico preciso, conversa franca e respeito pelo seu carro e pelo seu bolso.
            </p>
            <Link to="/sobre" className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-blue px-5 py-3 text-sm font-semibold text-brand-blue-foreground hover:brightness-110">
              Nossa história <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader eyebrow="Quem confia" title="O que dizem nossos clientes" />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-xl bg-surface-alt p-6 shadow-sm">
              <div className="mb-3 flex gap-0.5 text-brand-red">
                {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
              </div>
              <p className="text-sm leading-relaxed text-foreground">"{t.text}"</p>
              <p className="mt-4 font-semibold text-brand-blue">— {t.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* STEPS */}
      <Section alt>
        <SectionHeader eyebrow="Como funciona" title="Em 3 passos simples" />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { n: "01", icon: CalendarCheck, title: "Agende", desc: "Fale conosco pelo WhatsApp ou telefone e marque um horário." },
            { n: "02", icon: Stethoscope, title: "Diagnóstico", desc: "Avaliamos seu veículo e enviamos um orçamento transparente." },
            { n: "03", icon: Cog, title: "Execução", desc: "Após sua aprovação, executamos com qualidade e prazo combinado." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-xl border border-border bg-card p-8">
              <span className="absolute -top-4 left-6 rounded-md bg-brand-red px-3 py-1 font-display text-lg text-white">{s.n}</span>
              <s.icon className="mb-3 h-8 w-8 text-brand-blue" />
              <h3 className="text-2xl text-brand-blue">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-brand-blue py-16 text-brand-blue-foreground">
        <div className="container-page text-center">
          <h2 className="text-4xl md:text-5xl">Pronto para cuidar do seu carro?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">Agende agora pelo WhatsApp e fale diretamente com o Glauko.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-red px-8 py-4 text-base font-semibold text-brand-red-foreground shadow-lg transition hover:brightness-110">
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
