"use client";

import { FormEvent, useState } from "react";

type LeadResponse = {
  status: "success" | "error";
  message: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function LeadForm() {
  const [pending, setPending] = useState(false);
  const [modal, setModal] = useState<LeadResponse | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setPending(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as LeadResponse;
      setModal(result);
      if (result.status === "success") {
        form.reset();
        window.gtag?.("event", "generate_lead", {
          event_category: "form_submission",
          event_label: "MPE_WhitePaper_Download",
          value: 1,
        });
      }
    } catch {
      setModal({
        status: "error",
        message: "Error técnico al procesar la respuesta.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <form id="mpeForm" className="space-y-4 text-left" onSubmit={onSubmit}>
        <input
          className="w-full rounded-xl border-none bg-white p-4 text-brand-secondary placeholder:text-zinc-400"
          name="nombre"
          type="text"
          placeholder="Nombre completo"
          autoComplete="name"
          required
        />
        <input
          className="w-full rounded-xl border-none bg-white p-4 text-brand-secondary placeholder:text-zinc-400"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          autoComplete="email"
          required
        />
        <input
          className="w-full rounded-xl border-none bg-white p-4 text-brand-secondary placeholder:text-zinc-400"
          name="empresa"
          type="text"
          placeholder="Empresa"
          autoComplete="organization"
          required
        />
        <input
          className="w-full rounded-xl border-none bg-white p-4 text-brand-secondary placeholder:text-zinc-400"
          name="cargo"
          type="text"
          placeholder="Cargo"
          autoComplete="organization-title"
          required
        />
        <button
          id="submitBtn"
          type="submit"
          disabled={pending}
          className="btn-mpe w-full rounded-xl py-4 text-lg font-bold text-white transition disabled:opacity-70"
        >
          {pending ? "Enviando..." : "Acceder al White Paper"}
        </button>
      </form>

      {modal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center text-brand-secondary shadow-2xl">
            <h3 className="mb-3 text-2xl font-bold">
              {modal.status === "success" ? "¡Solicitud recibida!" : "Error"}
            </h3>
            <p className="mb-6 leading-relaxed">{modal.message}</p>
            <button
              type="button"
              className="btn-mpe rounded-full px-8 py-3 font-bold text-white"
              onClick={() => setModal(null)}
            >
              Entendido
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
