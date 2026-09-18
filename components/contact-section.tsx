'use client'

import { useState } from 'react'
import {
  CheckCircle2Icon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
  SendIcon,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { site } from '@/lib/site'

type FormValues = {
  nombre: string
  empresa: string
  correo: string
  telefono: string
  mensaje: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  nombre: '',
  empresa: '',
  correo: '',
  telefono: '',
  mensaje: '',
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.nombre.trim().length < 3) {
    errors.nombre = 'Ingresa tu nombre completo.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.correo.trim())) {
    errors.correo = 'Ingresa un correo electrónico válido.'
  }
  if (values.telefono.replace(/\D/g, '').length < 8) {
    errors.telefono = 'Ingresa un teléfono de contacto válido.'
  }
  if (values.mensaje.trim().length < 10) {
    errors.mensaje = 'Cuéntanos brevemente qué necesitas (mínimo 10 caracteres).'
  }

  return errors
}

const contactData = [
  { icon: PhoneIcon, label: 'Teléfono', value: site.phoneLabel, href: site.phoneHref },
  { icon: MailIcon, label: 'Correo', value: site.email, href: site.emailHref },
  { icon: MapPinIcon, label: 'Dirección', value: site.address },
  { icon: ClockIcon, label: 'Horario', value: site.schedule },
]

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)

  const handleChange = (field: keyof FormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setSent(true)
    setValues(initialValues)
  }

  return (
    <section id="contacto" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:px-8">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-celeste uppercase">
              Contacto
            </p>
            <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
              Conversemos sobre el próximo paso de tu empresa
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Completa el formulario y un asesor te contactará dentro del siguiente día hábil.
              También puedes escribirnos directamente por WhatsApp.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {contactData.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-background text-navy shadow-sm">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-navy underline-offset-4 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-navy">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <Button
            variant="outline"
            size="lg"
            className="w-fit bg-background"
            nativeButton={false} render={<a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" />}
          >
            <MessageCircleIcon data-icon="inline-start" />
            Escríbenos por WhatsApp
          </Button>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="border-border/80 shadow-lg shadow-navy/5">
            <CardHeader>
              <CardTitle className="font-heading text-xl font-bold text-navy">
                Solicita tu asesoría
              </CardTitle>
              <CardDescription>
                Cuéntanos de tu empresa y te preparamos una propuesta a medida.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {sent ? (
                <div className="flex flex-col items-start gap-3 rounded-2xl border border-celeste/40 bg-accent/50 p-6">
                  <CheckCircle2Icon className="size-8 text-navy" aria-hidden="true" />
                  <p className="font-heading text-lg font-bold text-navy">
                    ¡Gracias por escribirnos!
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Recibimos tu solicitud. Un asesor de Leal y Asociados te contactará dentro
                    del siguiente día hábil.
                  </p>
                  <Button variant="outline" onClick={() => setSent(false)}>
                    Enviar otra solicitud
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <FieldGroup>
                    <Field data-invalid={errors.nombre ? true : undefined}>
                      <FieldLabel htmlFor="nombre">Nombre *</FieldLabel>
                      <Input
                        id="nombre"
                        name="nombre"
                        autoComplete="name"
                        placeholder="Ej: María González"
                        value={values.nombre}
                        aria-invalid={errors.nombre ? true : undefined}
                        onChange={(event) => handleChange('nombre')(event.target.value)}
                      />
                      {errors.nombre && <FieldDescription>{errors.nombre}</FieldDescription>}
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="empresa">Empresa</FieldLabel>
                      <Input
                        id="empresa"
                        name="empresa"
                        autoComplete="organization"
                        placeholder="Nombre o razón social"
                        value={values.empresa}
                        onChange={(event) => handleChange('empresa')(event.target.value)}
                      />
                    </Field>

                    <Field data-invalid={errors.correo ? true : undefined}>
                      <FieldLabel htmlFor="correo">Correo *</FieldLabel>
                      <Input
                        id="correo"
                        name="correo"
                        type="email"
                        autoComplete="email"
                        placeholder="nombre@empresa.cl"
                        value={values.correo}
                        aria-invalid={errors.correo ? true : undefined}
                        onChange={(event) => handleChange('correo')(event.target.value)}
                      />
                      {errors.correo && <FieldDescription>{errors.correo}</FieldDescription>}
                    </Field>

                    <Field data-invalid={errors.telefono ? true : undefined}>
                      <FieldLabel htmlFor="telefono">Teléfono *</FieldLabel>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+56 9 1234 5678"
                        value={values.telefono}
                        aria-invalid={errors.telefono ? true : undefined}
                        onChange={(event) => handleChange('telefono')(event.target.value)}
                      />
                      {errors.telefono && <FieldDescription>{errors.telefono}</FieldDescription>}
                    </Field>

                    <Field data-invalid={errors.mensaje ? true : undefined}>
                      <FieldLabel htmlFor="mensaje">Mensaje *</FieldLabel>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        placeholder="Cuéntanos qué servicio necesitas y el giro de tu empresa."
                        value={values.mensaje}
                        aria-invalid={errors.mensaje ? true : undefined}
                        onChange={(event) => handleChange('mensaje')(event.target.value)}
                      />
                      {errors.mensaje && <FieldDescription>{errors.mensaje}</FieldDescription>}
                    </Field>

                    <Field>
                      <Button type="submit" size="lg">
                        <SendIcon data-icon="inline-start" />
                        Solicitar Asesoría
                      </Button>
                      <FieldDescription>
                        Tus datos son confidenciales y solo se usan para contactarte.
                      </FieldDescription>
                    </Field>
                  </FieldGroup>
                </form>
              )}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
