"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 80,
    suffix: "%",
    title: "Pérdida de competencias",
    body: "El 80% de lo aprendido en capacitaciones corporativas se pierde al no haber transferencia real al puesto de trabajo en las primeras 48 horas.",
  },
  {
    value: 24,
    suffix: "",
    title: "Obsolescencia técnica (meses)",
    body: 'Cualquier competencia técnica adquirida hoy tiene una vida útil media de apenas dos años antes de requerir un "reskilling" profundo.',
  },
  {
    value: 400,
    suffix: "%",
    title: "Impacto inmersivo",
    body: "Los entornos de aprendizaje inmersivos de alto nivel demuestran ser hasta 4 veces más efectivos en la retención cognitiva que los métodos tradicionales.",
  },
];

function StatNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 2000);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.floor(eased * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
          else setCurrent(value);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="mb-4 text-4xl font-black text-brand-primary tabular-nums"
    >
      {current}
      {suffix}
    </div>
  );
}

export function Stats() {
  return (
    <div className="relative z-10 grid gap-8 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-3xl border border-zinc-100 bg-white p-8 text-center shadow-sm"
        >
          <StatNumber value={stat.value} suffix={stat.suffix} />
          <h4 className="mb-2 font-bold">{stat.title}</h4>
          <p className="text-sm text-brand-secondary">{stat.body}</p>
        </div>
      ))}
    </div>
  );
}
