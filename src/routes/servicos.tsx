import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Wrench, ShieldCheck, Stethoscope, Gavel, Disc, Cog, Zap, Fuel, ChevronDown, MessageCircle,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — JVO Auto-Serviços" },
      { name: "description", content: "Mecânica geral, preventiva, corretiva, freios, suspensão, elétrica, injeção e avaliação para leilão em Umuarama-PR." },
      { property: "og:title", content: "Serviços — JVO Auto-Serviços" },
      { property: "og:description", content: "Tudo o que seu veículo precisa em um só lugar." },
    ],
  }),
  component: ServicosPage,
});

const SERVICES = [
  { icon: Wrench, title: "Mecânica Geral", desc: "Manutenção completa multimarcas.", items: ["Troca de óleo e filtros", "Correia dentada", "Embreagem", "Bomba d'água"] },
  { icon: ShieldCheck, title: "Manutenção Preventiva", desc: "Evite gastos maiores com revisões periódicas.", items: ["Revisão por quilometragem", "Check-list completo", "Trocas programadas", "Pré-viagem"] },
  { icon: Stethoscope, title: "Manutenção Corretiva", desc: "Resolvemos o problema na primeira visita.", items: ["Diagnóstico computadorizado", "Reparo de motor", "Câmbio mecânico", "Trocas pontuais"] },
  { icon: Gavel, title: "Avaliação para Leilão", desc: "Análise técnica antes da compra.", items: ["Inspeção visual e mecânica", "Teste de funcionamento", "Relatório do estado", "Estimativa de reparos"] },
  { icon: Disc, title: "Freios", desc: "Segurança em primeiro lugar.", items: ["Pastilhas e discos", "Cilindro mestre", "Sangria do sistema", "Freio de mão"] },
  { icon: Cog, title: "Suspensão", desc: "Conforto e estabilidade.", items: ["Amortecedores", "Molas e batentes", "Pivôs e bandejas", "Alinhamento"] },
  { icon: Zap, title: "Elétrica", desc: "Sistema elétrico funcionando perfeitamente.", items: ["Bateria e alternador", "Motor de partida", "Faróis e fiação", "Centrais e módulos"] },
  { icon: Fuel, title: "Injeção Eletrônica", desc: "Diagnóstico e reparo da injeção.", items: ["Leitura de scanner", "Limpeza de bicos", "Sensores", "Sonda lambda"] },
];

function ServicosPage() {
  return (
    <Section>
      <SectionHeader eyebrow="Nossos serviços" title="Tudo para o seu veículo" subtitle="Clique em qualquer serviço para ver mais detalhes." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </Section>
  );
}

function ServiceCard({ icon: Icon, title, desc, items }: typeof SERVICES[number]) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition hover:shadow-lg">
      <div className="mb-3 flex items-start justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue text-brand-blue-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <button onClick={() => setOpen((v) => !v)} aria-label="Detalhes" className="rounded-md p-1 text-muted-foreground hover:bg-secondary">
          <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      <h3 className="text-2xl text-brand-blue">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      <div className={`grid transition-all ${open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <ul className="overflow-hidden space-y-1.5 text-sm">
          {items.map((it) => (
            <li key={it} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand-red" />{it}</li>
          ))}
        </ul>
      </div>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-red px-4 py-2.5 text-sm font-semibold text-brand-red-foreground transition hover:brightness-110">
        <MessageCircle className="h-4 w-4" /> Agende agora
      </a>
    </div>
  );
}
