import Image from 'next/image'
import { EyeIcon, HandshakeIcon, TargetIcon } from 'lucide-react'

import { Reveal } from '@/components/reveal'

const pillars = [
  {
    icon: TargetIcon,
    title: 'Orden y precisión',
    description: 'Procesos claros para que tu contabilidad esté siempre al día.',
  },
  {
    icon: EyeIcon,
    title: 'Transparencia',
    description: 'Informes comprensibles y honestos sobre el estado de tu empresa.',
  },
  {
    icon: HandshakeIcon,
    title: 'Cercanía',
    description: 'Una atención cercana y personalizada para cada cliente.',
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* Presentación de César */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div
              aria-hidden="true"
              className="absolute -top-5 -left-5 -z-10 size-32 rounded-3xl bg-accent"
            />

            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-navy/10">
              <div className="relative aspect-[4/4] overflow-hidden bg-accent/30">
                <Image
                  src="/images/cesar-leal.png"
                  alt="César Leal, fundador de Leal y Asociados"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>

              <div className="border-t border-border bg-white p-6 text-center">
                <h3 className="font-heading text-2xl font-extrabold text-navy">
                  César Leal
                </h3>

                <p className="mt-1 font-semibold text-primary">
                  Fundador · Contador Auditor
                </p>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Profesional con experiencia en asesoría contable, tributaria y financiera,
                  comprometido con entregar soluciones claras y cercanas a cada cliente.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Información de la empresa */}
        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal className="flex flex-col gap-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-celeste uppercase">
              Quiénes Somos
            </p>

            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
              Un equipo consolidado al servicio de empresas y emprendedores
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              En Leal y Asociados acompañamos a empresas y emprendedores en la gestión de sus
              obligaciones contables, tributarias, financieras y administrativas, entregando
              soluciones personalizadas que generan confianza y tranquilidad para nuestros
              clientes.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              Nuestro trabajo se basa en una atención profesional y cercana, buscando que cada
              cliente pueda comprender la situación de su empresa y tomar decisiones con
              información clara y oportuna.
            </p>
          </Reveal>

          <ul className="flex flex-col gap-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.08 * index}>
                <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <pillar.icon className="size-5" aria-hidden="true" />
                  </span>

                  <div className="flex flex-col gap-1">
                    <p className="font-heading font-bold text-navy">
                      {pillar.title}
                    </p>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}