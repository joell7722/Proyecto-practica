import {
  AwardIcon,
  ClockIcon,
  HeadsetIcon,
  HeartHandshakeIcon,
  RocketIcon,
  UserCheckIcon,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'

const reasons = [
  {
    icon: AwardIcon,
    title: 'Más de 8 años de experiencia',
    description: 'Trayectoria comprobada asesorando empresas de distintos rubros.',
  },
  {
    icon: UserCheckIcon,
    title: 'Atención personalizada',
    description: 'Un contador asignado que conoce el detalle de tu operación.',
  },
  {
    icon: HeadsetIcon,
    title: 'Asesoría permanente',
    description: 'Estamos disponibles todo el año, no solo en fechas tributarias.',
  },
  {
    icon: ClockIcon,
    title: 'Respuesta rápida',
    description: 'Resolvemos tus consultas en el menor tiempo posible.',
  },
  {
    icon: HeartHandshakeIcon,
    title: 'Compromiso con nuestros clientes',
    description: 'Tu tranquilidad y cumplimiento son nuestra prioridad.',
  },
  {
    icon: RocketIcon,
    title: 'Soluciones para emprendedores y empresas',
    description: 'Planes adaptables al tamaño y crecimiento de tu negocio.',
  },
]

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground sm:py-24">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-72 rounded-full bg-celeste/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-celeste uppercase">
            ¿Por qué elegirnos?
          </p>
          <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
            Confianza que se construye con resultados
          </h2>
          <p className="text-base leading-relaxed text-navy-foreground/75 text-pretty">
            Nuestros clientes nos eligen por la claridad de nuestro trabajo y por la cercanía con
            la que acompañamos cada etapa de su empresa.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={0.06 * index}>
              <li className="flex h-full flex-col gap-3 rounded-2xl border border-navy-foreground/12 bg-navy-foreground/5 p-6 transition-colors hover:border-celeste/50 hover:bg-navy-foreground/10">
                <span className="grid size-11 place-items-center rounded-xl bg-celeste/15 text-celeste">
                  <reason.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="font-heading text-base font-bold">{reason.title}</p>
                <p className="text-sm leading-relaxed text-navy-foreground/70">
                  {reason.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
