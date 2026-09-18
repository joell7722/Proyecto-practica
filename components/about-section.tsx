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
    description: 'Un equipo disponible que conoce tu negocio por su nombre.',
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg shadow-navy/5">
              <Image
                src="/images/equipo-leal.png"
                alt="Equipo profesional de Leal y Asociados en reunión con un cliente"
                width={960}
                height={720}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-5 -left-5 -z-10 size-32 rounded-3xl bg-accent"
            />
          </div>
        </Reveal>

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
          </Reveal>

          <ul className="flex flex-col gap-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.08 * index}>
                <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <pillar.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-heading font-bold text-navy">{pillar.title}</p>
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
