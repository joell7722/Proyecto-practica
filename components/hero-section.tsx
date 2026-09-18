import Image from 'next/image'
import { ArrowRightIcon, MessageCircleIcon, ShieldCheckIcon } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

const highlights = [
  { value: '+8', label: 'años de experiencia' },
  { value: '+250', label: 'empresas asesoradas' },
  { value: '100%', label: 'atención personalizada' },
]

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-linear-to-b from-accent/70 to-background"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <Reveal className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium tracking-wide text-navy">
            <ShieldCheckIcon className="size-4 text-celeste" aria-hidden="true" />
            Consultoría contable y tributaria en Chile
          </span>

          <h1 className="font-heading text-4xl leading-[1.08] font-extrabold tracking-tight text-navy text-balance sm:text-5xl lg:text-[3.4rem]">
            Impulsamos el crecimiento de tu empresa con soluciones contables y tributarias.
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Más de ocho años asesorando empresas y emprendedores con un servicio profesional,
            cercano y orientado a resultados.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<a href="#contacto" />}>
              Contáctanos
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false} render={<a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" />}
            >
              <MessageCircleIcon data-icon="inline-start" />
              Escríbenos por WhatsApp
            </Button>
          </div>

          <dl className="mt-2 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {highlights.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                  {item.value}
                </dt>
                <dd className="text-xs leading-snug text-muted-foreground sm:text-sm">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-navy/10">
            <Image
              src="/images/hero-asesoria.png"
              alt="Equipo de Leal y Asociados revisando informes contables con un cliente"
              width={960}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="font-heading text-sm font-bold text-navy">
              Asesoría permanente, no solo en época de impuestos
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Acompañamos cada decisión de tu negocio con información clara y oportuna.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
