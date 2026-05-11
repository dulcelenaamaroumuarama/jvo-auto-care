import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import g1 from "@/assets/g-shop.jpg";
import g2 from "@/assets/g-diag.jpg";
import g3 from "@/assets/g-brake.jpg";
import g4 from "@/assets/g-susp.jpg";
import g5 from "@/assets/g-engine.jpg";
import g6 from "@/assets/g-auction.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — JVO Auto-Serviços" },
      { name: "description", content: "Conheça nossa estrutura, equipe e veículos atendidos pela JVO Auto-Serviços." },
      { property: "og:title", content: "Galeria — JVO Auto-Serviços" },
      { property: "og:description", content: "Estrutura, equipe e trabalhos realizados." },
      { property: "og:image", content: g1 },
    ],
  }),
  component: GaleriaPage,
});

const PHOTOS = [
  { src: g1, label: "Estrutura", cat: "Estrutura", h: "tall" },
  { src: g2, label: "Diagnóstico computadorizado", cat: "Equipe", h: "med" },
  { src: g3, label: "Sistema de freios", cat: "Antes e Depois", h: "short" },
  { src: g4, label: "Reparo de suspensão", cat: "Equipe", h: "tall" },
  { src: g5, label: "Inspeção de motor", cat: "Veículos", h: "med" },
  { src: g6, label: "Avaliação para leilão", cat: "Veículos", h: "short" },
];

const CATS = ["Todos", "Antes e Depois", "Estrutura", "Equipe", "Veículos"] as const;

function GaleriaPage() {
  const [filter, setFilter] = useState<(typeof CATS)[number]>("Todos");
  const [open, setOpen] = useState<string | null>(null);
  const list = PHOTOS.filter((p) => filter === "Todos" || p.cat === filter);

  return (
    <Section>
      <SectionHeader eyebrow="Galeria" title="Nosso trabalho em imagens" />
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {CATS.map((c) => (
          <button key={c} onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === c ? "bg-brand-red text-brand-red-foreground" : "bg-secondary text-foreground hover:bg-brand-blue hover:text-brand-blue-foreground"
            }`}>
            {c}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {list.map((p) => (
          <button key={p.src} onClick={() => setOpen(p.src)}
            className="group block w-full overflow-hidden rounded-xl">
            <img src={p.src} alt={p.label} loading="lazy"
              className="w-full transition duration-500 group-hover:scale-105" />
            <span className="block bg-brand-blue px-3 py-2 text-left text-xs font-medium text-brand-blue-foreground">{p.label}</span>
          </button>
        ))}
      </div>

      {open && (
        <div onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 animate-in fade-in">
          <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Fechar">
            <X className="h-6 w-6" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain" />
        </div>
      )}
    </Section>
  );
}
