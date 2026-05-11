import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Clock, Mail, MessageCircle, Upload } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { ADDRESS, HOURS, PHONE_DISPLAY, TEL_URL, WHATSAPP_URL, MAP_EMBED, MAP_LINK } from "@/lib/contact";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — JVO Auto-Serviços" },
      { name: "description", content: "Fale com a JVO Auto-Serviços em Umuarama-PR. WhatsApp, telefone, formulário e mapa." },
      { property: "og:title", content: "Contato — JVO Auto-Serviços" },
      { property: "og:description", content: "Agende seu serviço, peça orçamento ou tire dúvidas." },
    ],
  }),
  component: ContatoPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z.string().trim().min(8, "Telefone inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255).or(z.literal("")),
  service: z.string().min(1, "Selecione um serviço"),
  date: z.string().optional(),
  time: z.string().optional(),
  vehicle: z.string().max(100).optional(),
  message: z.string().trim().min(5, "Conte um pouco mais").max(1000),
});

type FormData = z.infer<typeof schema>;

function ContatoPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", service: "", message: "", vehicle: "", date: "", time: "" },
  });
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = form;

  const onSubmit = async (data: FormData) => {
    // Webhook simulado
    console.log("[JVO Contact]", data);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Mensagem enviada! Em breve entraremos em contato.");
    reset();
  };

  return (
    <>
      <Section>
        <SectionHeader eyebrow="Fale conosco" title="Entre em contato" subtitle="Preencha o formulário, ligue ou fale no WhatsApp." />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-3 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Nome*" error={errors.name?.message}>
                <input {...register("name")} className={inputCls} placeholder="Seu nome completo" />
              </Field>
              <Field label="Telefone*" error={errors.phone?.message}>
                <input {...register("phone")} className={inputCls} placeholder="(44) 9 9999-9999" />
              </Field>
            </div>
            <Field label="E-mail" error={errors.email?.message}>
              <input {...register("email")} type="email" className={inputCls} placeholder="seu@email.com" />
            </Field>
            <Field label="Tipo de serviço*" error={errors.service?.message}>
              <select {...register("service")} className={inputCls}>
                <option value="">Selecione...</option>
                <option>Mecânica Geral</option>
                <option>Manutenção Preventiva</option>
                <option>Manutenção Corretiva</option>
                <option>Avaliação para Leilão</option>
                <option>Freios</option>
                <option>Suspensão</option>
                <option>Elétrica</option>
                <option>Injeção Eletrônica</option>
                <option>Outro</option>
              </select>
            </Field>

            <div className="rounded-lg border border-dashed border-border bg-surface-alt p-4">
              <p className="mb-3 text-sm font-semibold text-brand-blue">Agendamento (opcional)</p>
              <div className="grid gap-3 md:grid-cols-3">
                <Field label="Data"><input type="date" {...register("date")} className={inputCls} /></Field>
                <Field label="Hora"><input type="time" {...register("time")} className={inputCls} /></Field>
                <Field label="Marca / Modelo / Ano"><input {...register("vehicle")} className={inputCls} placeholder="Ex: Onix 2018" /></Field>
              </div>
            </div>

            <Field label="Mensagem / descrição do problema*" error={errors.message?.message}>
              <textarea {...register("message")} rows={5} className={inputCls} placeholder="Descreva o problema ou o serviço desejado" />
            </Field>

            <div className="flex items-center gap-2 rounded-md border border-border bg-surface-alt px-3 py-3 text-sm text-muted-foreground">
              <Upload className="h-4 w-4" /> Você poderá anexar fotos ao falarmos pelo WhatsApp.
            </div>

            <p className="text-xs text-muted-foreground">Protegido por reCAPTCHA (placeholder). Seus dados não serão compartilhados.</p>

            <button disabled={isSubmitting} type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3 text-sm font-semibold text-brand-red-foreground transition hover:brightness-110 disabled:opacity-60">
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>

          {/* Side info */}
          <aside className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-brand-blue p-6 text-brand-blue-foreground">
              <h3 className="text-2xl">Contato direto</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-brand-red" />{ADDRESS}</li>
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-brand-red" /><a href={TEL_URL} className="hover:underline">{PHONE_DISPLAY}</a></li>
                <li className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 text-brand-red" />{HOURS}</li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-brand-red" />contato@jvoautoservicos.com.br</li>
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-red px-4 py-3 text-sm font-semibold text-brand-red-foreground hover:brightness-110">
                <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe src={MAP_EMBED} title="Mapa JVO" loading="lazy" className="h-72 w-full" />
              <a href={MAP_LINK} target="_blank" rel="noreferrer noopener"
                className="block bg-card px-4 py-3 text-center text-sm font-semibold text-brand-blue hover:bg-secondary">
                Abrir no Google Maps
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

const inputCls = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
