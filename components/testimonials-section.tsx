import { QuoteIcon, StarIcon } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const testimonials = [
  {
    quote:
      'Desde que trabajamos con Leal y Asociados dejamos de preocuparnos por los plazos del SII. Todo llega ordenado y a tiempo.',
    name: 'Carolina Muñoz',
    role: 'Gerenta, Distribuidora Andes SpA',
    initials: 'CM',
  },
  {
    quote:
      'Me ayudaron a constituir mi empresa y a entender mis números desde el primer mes. La atención es muy cercana y clara.',
    name: 'Rodrigo Espinoza',
    role: 'Fundador, Taller Nova',
    initials: 'RE',
  },
  {
    quote:
      'El manejo de remuneraciones de nuestro equipo mejoró por completo. Responden rápido y siempre con soluciones.',
    name: 'Paulina Vergara',
    role: 'Administradora, Clínica Dental Sur',
    initials: 'PV',
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-celeste uppercase">
            Testimonios
          </p>
          <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Lo que dicen quienes confían en nosotros
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={0.08 * index}>
              <Card className="h-full border-border/80 shadow-sm">
                <CardContent className="flex flex-col gap-4">
                  <QuoteIcon className="size-7 text-celeste" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-navy/85">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex gap-0.5" aria-label="Calificación 5 de 5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        className="size-4 fill-celeste text-celeste"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-accent font-heading text-xs font-bold text-accent-foreground"
                  >
                    {testimonial.initials}
                  </span>
                  <div className="flex flex-col">
                    <p className="font-heading text-sm font-bold text-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
