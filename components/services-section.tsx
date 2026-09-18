import {
  BuildingIcon,
  CalculatorIcon,
  FileTextIcon,
  LineChartIcon,
  UsersIcon,
  WalletIcon,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const services = [
  {
    icon: CalculatorIcon,
    title: 'Contabilidad Empresarial',
    description:
      'Registro contable mensual, estados financieros y control de tus obligaciones al día.',
  },
  {
    icon: FileTextIcon,
    title: 'Asesoría Tributaria',
    description:
      'Planificación de impuestos, declaraciones y respuesta oportuna ante el SII.',
  },
  {
    icon: BuildingIcon,
    title: 'Constitución de Empresas',
    description:
      'Creación de tu sociedad, inicio de actividades y trámites legales sin complicaciones.',
  },
  {
    icon: UsersIcon,
    title: 'Recursos Humanos',
    description:
      'Contratos, reglamentos internos y gestión laboral alineada con la normativa vigente.',
  },
  {
    icon: WalletIcon,
    title: 'Remuneraciones',
    description:
      'Cálculo de liquidaciones, cotizaciones y finiquitos con total exactitud.',
  },
  {
    icon: LineChartIcon,
    title: 'Consultoría Financiera',
    description:
      'Flujo de caja, indicadores y proyecciones para tomar decisiones con respaldo.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-celeste uppercase">
            Servicios
          </p>
          <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Soluciones integrales para la gestión de tu empresa
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            Diseñamos cada servicio según el tamaño y la etapa de tu negocio, desde el primer
            emprendimiento hasta empresas en crecimiento.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.06 * index}>
              <Card className="h-full border-border/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-celeste/60 hover:shadow-lg hover:shadow-navy/5">
                <CardHeader>
                  <span className="mb-2 grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <service.icon className="size-6" aria-hidden="true" />
                  </span>
                  <CardTitle className="font-heading text-lg font-bold text-navy">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Button size="lg" nativeButton={false} render={<a href="#contacto" />}>
            Conversemos sobre tu empresa
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
