import { Reveal } from '@/components/reveal'

const steps = [
  {
    step: '01',
    title: 'Primer contacto',
    description:
      'Nos escribes por WhatsApp o formulario y coordinamos una conversación inicial sin costo.',
  },
  {
    step: '02',
    title: 'Reunión de diagnóstico',
    description:
      'Revisamos la situación contable, tributaria y administrativa actual de tu empresa.',
  },
  {
    step: '03',
    title: 'Elaboración de propuesta',
    description:
      'Definimos alcance, plazos y valores en una propuesta clara y ajustada a tu realidad.',
  },
  {
    step: '04',
    title: 'Acompañamiento permanente',
    description:
      'Ejecutamos el servicio y te mantenemos informado con reportes e indicadores periódicos.',
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-celeste uppercase">
            Cómo trabajamos
          </p>
          <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Un proceso simple, ordenado y transparente
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute top-6 left-6 hidden h-px w-[calc(100%-3rem)] bg-border lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-6 w-px bg-border lg:hidden"
          />
          {steps.map((item, index) => (
            <Reveal key={item.step} delay={0.08 * index}>
              <li className="relative flex gap-5 lg:flex-col lg:gap-4">
                <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full border border-border bg-background font-heading text-sm font-extrabold text-navy shadow-sm">
                  {item.step}
                </span>
                <div className="flex flex-col gap-2 pb-2">
                  <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
