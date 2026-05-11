import { createFileRoute } from "@tanstack/react-router";
import { Award, HandshakeIcon, Eye, CreditCard, Gavel, MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/diferenciais")({
  head: () => ({
    meta: [
      { title: "Diferenciais — JVO Auto-Serviços" },
      { name: "description", content: "Por que escolher a JVO: experiência, transparência, atendimento familiar e especialistas em leilão." },
      { property: "og:title", content: "Diferenciais — JVO Auto-Serviços" },
      { property: "og:description", content: "Conheça os diferenciais que tornam a JVO única em Umuarama-PR." },
    ],
  }),
  component: DiferenciaisPage,
});

const ITEMS = [
  { icon: Award, title: "Experiência comprovada", desc: "25+ anos transformando problemas em soluções." },
  { icon: HandshakeIcon, title: "Atendimento familiar", desc: "Você é tratado pelo nome, não por número de OS." },
  { icon: Eye, title: "Transparência total", desc: "Orçamento detalhado antes de qualquer reparo." },
  { icon: CreditCard, title: "Facilidade de pagamento", desc: "Parcelamos em até 4x sem juros no cartão." },
  { icon: Gavel, title: "Especialistas em leilão", desc: "Avaliação técnica para você comprar com segurança." },
  { icon: MapPin, title: "Localização estratégica", desc: "Zona V em Umuarama-PR, fácil acesso." },
];

function DiferenciaisPage() {
  return (
    <Section>
      <SectionHeader eyebrow="Por que a JVO" title="Nossos diferenciais" subtitle="O que nos torna a escolha certa para você e seu veículo." />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((it) => (
          <div key={it.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-red/5 transition group-hover:bg-brand-red/10" />
            <div className="relative">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue text-brand-blue-foreground">
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl text-brand-blue">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
