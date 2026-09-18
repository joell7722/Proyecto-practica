import { Reveal } from '@/components/reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: '¿Atienden empresas pequeñas?',
    answer:
      'Sí. La mayoría de nuestros clientes son microempresas, pequeñas empresas y emprendedores. Adaptamos el servicio y el valor al tamaño real de tu operación.',
  },
  {
    question: '¿Cómo puedo contratar sus servicios?',
    answer:
      'Escríbenos por WhatsApp o completa el formulario de contacto. Coordinamos una reunión de diagnóstico y luego recibes una propuesta con alcance, plazos y valores.',
  },
  {
    question: '¿Trabajan de manera remota?',
    answer:
      'Trabajamos con clientes de todo Chile de forma 100% remota, con reuniones por videollamada y documentación digital. También agendamos reuniones presenciales en Santiago.',
  },
  {
    question: '¿Qué documentación necesito?',
    answer:
      'Para comenzar solicitamos tu carpeta tributaria, accesos al SII, documentos de compras y ventas del período y, si corresponde, información de tus trabajadores. Te guiamos paso a paso.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <Reveal className="flex flex-col gap-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-celeste uppercase">
            Preguntas Frecuentes
          </p>
          <h2 className="font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy text-balance sm:text-4xl">
            Resolvemos tus dudas antes de comenzar
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Si tu consulta no aparece aquí, escríbenos y te respondemos personalmente.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion className="rounded-2xl border border-border bg-card px-5 shadow-sm">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 font-heading text-base font-bold text-navy hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
