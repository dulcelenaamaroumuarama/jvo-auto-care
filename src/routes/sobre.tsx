import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, Eye, Award } from "lucide-react";
import glauko from "@/assets/glauko.jpg";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — JVO Auto-Serviços" },
      { name: "description", content: "Conheça a história do Glauko Rangel e da JVO Auto-Serviços, oficina familiar em Umuarama-PR." },
      { property: "og:title", content: "Sobre — JVO Auto-Serviços" },
      { property: "og:description", content: "25+ anos de experiência aplicados ao seu veículo." },
      { property: "og:image", content: glauko },
    ],
  }),
  component: SobrePage,
});

const TIMELINE = [
  { year: "1999", title: "O começo", desc: "Aos 16 anos, Glauko entra para a mecânica como aprendiz e descobre sua vocação." },
  { year: "2005", title: "Especialização", desc: "Anos de aperfeiçoamento em mecânica multimarcas, injeção eletrônica e diagnóstico." },
  { year: "2015", title: "Referência local", desc: "Reconhecido em Umuarama pela honestidade e qualidade do atendimento." },
  { year: "2022", title: "Nasce a JVO", desc: "Fundação da JVO Auto-Serviços, com estrutura própria e atendimento familiar." },
  { year: "Hoje", title: "25+ anos depois", desc: "Centenas de clientes atendidos com diagnóstico preciso e total transparência." },
];

const VALORES = [
  { icon: Eye, title: "Transparência", desc: "Orçamento claro, sem surpresas." },
  { icon: Award, title: "Qualidade", desc: "Peças adequadas e serviço bem executado." },
  { icon: Heart, title: "Atendimento personalizado", desc: "Cada cliente é único, cada carro também." },
];

function SobrePage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img src={glauko} alt="Glauko Rangel" width={900} height={1100} loading="lazy"
            className="aspect-[4/5] rounded-2xl object-cover shadow-xl" />
          <div>
            <span className="rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-red">Nossa história</span>
            <h1 className="mt-3 text-5xl text-brand-blue md:text-6xl">25 anos de paixão por mecânica</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Glauko Rangel de Almeida começou aos 16 anos consertando o que aparecia. Hoje, à frente da JVO Auto-Serviços, lidera uma oficina que une experiência, tecnologia e atendimento familiar.
            </p>
          </div>
        </div>
      </Section>

      <Section alt>
        <SectionHeader eyebrow="Linha do tempo" title="Nossa trajetória" />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-brand-blue/20 md:left-1/2" />
          {TIMELINE.map((t, i) => (
            <motion.div key={t.year}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative mb-10 pl-12 md:w-1/2 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
              <span className="absolute left-2 top-2 h-4 w-4 rounded-full bg-brand-red ring-4 ring-background md:left-auto md:right-[-9px]"
                style={i % 2 === 0 ? undefined : { left: "-9px", right: "auto" }} />
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <span className="font-display text-2xl text-brand-red">{t.year}</span>
                <h3 className="text-xl text-brand-blue">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="O que nos move" title="Nossos valores" />
        <div className="grid gap-6 md:grid-cols-3">
          {VALORES.map((v) => (
            <div key={v.title} className="rounded-xl border border-border p-6 text-center">
              <v.icon className="mx-auto mb-3 h-10 w-10 text-brand-red" />
              <h3 className="text-2xl text-brand-blue">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
