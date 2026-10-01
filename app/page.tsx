import Image from "next/image";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { Stats } from "@/components/stats";

const pdfHref = "/pdf/MPE-El-Escudo-contra-la-Obsolescencia-Profesional.pdf";

function GlobeIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col justify-center bg-zinc-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-rise mx-auto mb-10 flex h-32 w-64 items-center justify-center">
            <Image
              src="/img/multiversica-logo-blanco.png"
              alt="Multiversica Academy"
              width={1834}
              height={891}
              priority
              loading="eager"
              className="h-full w-auto object-contain"
            />
          </div>
          <span className="hero-rise hero-rise-delay mb-6 inline-block rounded-full bg-brand-highlight px-4 py-1 text-sm text-brand-secondary">
            Nuevo paradigma formativo
          </span>
          <h1 className="hero-rise hero-rise-delay mb-8 text-5xl leading-tight font-extrabold text-white md:text-7xl">
            Metodología Polimática Enfocada (MPE)
          </h1>
          <p className="hero-rise hero-rise-delay mb-12 text-2xl font-light text-zinc-300">
            Un nuevo paradigma para la transferencia de competencias al puesto de trabajo.
          </p>
          <div className="hero-rise hero-rise-delay mx-auto mb-12 max-w-lg rounded-2xl border border-zinc-700 bg-zinc-800 p-6 shadow-md">
            <p className="mb-4 text-sm font-semibold tracking-wider text-zinc-400 uppercase">
              Escucha el resumen (MPE en el entorno FLUX)
            </p>
            <audio className="w-full" controls preload="metadata">
              <source
                src="/audio/Metodologia_polimatica_para_el_entorno_FLUX.mp3"
                type="audio/mpeg"
              />
              Tu navegador no soporta el audio.
            </audio>
          </div>
          <a
            href="#lead-form"
            className="btn-mpe inline-block rounded-full px-10 py-4 text-lg font-bold text-white"
          >
            Obtener White Paper
          </a>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <Reveal className="mb-24 space-y-20">
          <div className="relative z-10 flex flex-col items-center gap-12">
            <div className="w-full">
              <Image
                src="/img/mpe.png"
                alt="Estructura MPE"
                width={2048}
                height={1143}
                className="h-auto w-full rounded-3xl"
              />
            </div>
            <div className="max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-brand-primary">¿Qué es el modelo MPE?</h2>
              <p className="mb-6 leading-relaxed text-brand-secondary">
                La Metodología Polimática Enfocada (MPE) es el motor de curaduría inteligente que
                detiene la obsolescencia del talento. A través de nuestra técnica del superpareto, el
                Cerebro MPE tamiza el ruido informativo para entregar solo el 5% del conocimiento
                vital que genera el 90% del impacto operativo, asegurando que tu equipo aprenda,
                aplique y retenga habilidades críticas más rápido que con cualquier método
                tradicional.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-16 rounded-3xl bg-white p-12 shadow-xl md:grid-cols-2">
            <div className="order-2 flex flex-col justify-center md:order-1">
              <h2 className="mb-6 text-4xl leading-tight font-extrabold text-brand-primary">
                El escudo contra la obsolescencia profesional
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-brand-secondary">
                <strong>
                  ¿Sabías que el 80% de las competencias técnicas adquiridas hoy pierden su valor
                  competitivo en menos de 24 meses?
                </strong>
                <br />
                <br />
                En nuestro White Paper,{" "}
                <strong>
                  &quot;Metodología Polimática Enfocada (MPE): Un nuevo paradigma para la
                  transferencia de competencias al puesto de trabajo&quot;
                </strong>
                , desglosamos cómo el modelo MPE actúa como un activo estratégico para transformar tu
                carrera y acelerar la adaptabilidad de tus equipos en el mercado FLUX.
              </p>
              <a
                href={pdfHref}
                className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-4 text-lg font-bold text-white"
              >
                Descargar Ficha Técnica PDF
                <span className="ml-2">↓</span>
              </a>
            </div>
            <div className="order-1 flex transform flex-col items-center justify-center p-6 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 rotate-3 rounded-2xl bg-brand-highlight" />
                <Image
                  src="/img/mpe-book.jpg"
                  alt="White Paper MPE"
                  width={800}
                  height={693}
                  className="relative h-80 w-auto rounded-lg object-contain shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mb-24">
          <h2 className="relative z-10 mb-12 text-center text-3xl font-bold text-brand-primary">
            La realidad del mercado: ¿Por qué la formación actual no escala?
          </h2>
          <Stats />
        </Reveal>

        <section id="lead-form" className="mb-24 scroll-mt-8 rounded-3xl bg-zinc-900 p-12 text-white">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mb-8 text-3xl font-bold">Descarga el white paper de la MPE</h2>
            <p className="mb-8">
              Accede a nuestra Metodología Polimática Enfocada: un nuevo paradigma para la
              transferencia de competencias al puesto de trabajo.
            </p>
            <LeadForm />
          </div>
        </section>

        <Reveal className="mb-24">
          <h2 className="relative z-10 mb-12 text-center text-3xl font-bold">Los Autores</h2>
          <div className="relative z-10 grid gap-12 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src="/img/oscar-brazos-cruzados-sq.jpg"
                  alt="Oscar Cartagena"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-bold">Oscar Cartagena</h4>
              <p className="mb-4 text-center font-semibold text-blue-600">
                Co-fundador & CEO @ Multiversica
              </p>
              <div className="mb-4 flex justify-center gap-6">
                <a
                  href="https://oscarcartagena.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Web Personal"
                  className="text-slate-500 transition-colors hover:text-blue-600"
                >
                  <GlobeIcon />
                </a>
                <a
                  href="https://linkedin.com/in/oscarcartagena"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-500 transition-colors hover:text-blue-600"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src="/img/adarocha.png"
                  alt="Antonio Da Rocha"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <h4 className="mb-2 text-center text-xl font-bold">Antonio Da Rocha</h4>
              <p className="mb-4 text-center font-semibold text-blue-600">
                Co-fundador & Chief Education Officer @ Multiversica
              </p>
              <div className="mb-4 flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/antonio-darocha"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-500 transition-colors hover:text-blue-600"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </article>
          </div>
        </Reveal>
      </main>

      <footer className="bg-slate-900 px-6 py-16 text-slate-400">
        <div className="mx-auto grid max-w-5xl gap-12 border-b border-slate-800 pb-12 md:grid-cols-3">
          <div>
            <Image
              src="/img/multiversica-logo-blanco.png"
              alt="Multiversica Academy"
              width={1834}
              height={891}
              className="mb-4 h-20 w-auto"
            />
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://multiversica.com/"
                  className="transition hover:text-blue-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  Multiversica
                </a>
              </li>
              <li>
                <a
                  href="https://multiversica.academy/"
                  className="transition hover:text-blue-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  Multiversica Academy
                </a>
              </li>
              <li>
                <a href="#lead-form" className="transition hover:text-blue-400">
                  Descargar White Paper MPE
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">Contacto</h4>
            <p className="text-sm">Soluciones tecnoformativas para empresas</p>
          </div>
        </div>
        <div className="pt-8 text-center text-sm">
          <p>© 2026 Multiversica. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
