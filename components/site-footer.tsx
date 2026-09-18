import Image from 'next/image'
import { MailIcon, PhoneIcon } from 'lucide-react'

import { BrandLogo } from '@/components/brand-logo'
import { Separator } from '@/components/ui/separator'
import { navLinks, site } from '@/lib/site'

const socials = [
  { src: '/icons/linkedin.svg', label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { src: '/icons/instagram.svg', label: 'Instagram', href: 'https://www.instagram.com' },
  { src: '/icons/facebook.svg', label: 'Facebook', href: 'https://www.facebook.com' },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <BrandLogo variant="inverse" />
            <p className="max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              Consultora chilena especializada en contabilidad, tributación, finanzas y recursos
              humanos para microempresas, pequeñas empresas y emprendedores.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-xl border border-navy-foreground/15 bg-navy-foreground/95 transition-colors hover:border-celeste/60"
                >
                  <Image
                    src={social.src}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Enlaces del sitio" className="flex flex-col gap-3">
            <p className="font-heading text-sm font-bold tracking-wide uppercase">Navegación</p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-navy-foreground/70 transition-colors hover:text-celeste"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-heading text-sm font-bold tracking-wide uppercase">Contacto</p>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-celeste"
            >
              <PhoneIcon className="size-4" aria-hidden="true" />
              {site.phoneLabel}
            </a>
            <a
              href={site.emailHref}
              className="flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-celeste"
            >
              <MailIcon className="size-4" aria-hidden="true" />
              {site.email}
            </a>
            <p className="text-sm leading-relaxed text-navy-foreground/70">{site.address}</p>
            <p className="text-sm text-navy-foreground/70">{site.schedule}</p>
          </div>
        </div>

        <Separator className="my-8 bg-navy-foreground/15" />

        <div className="flex flex-col gap-2 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p>Santiago de Chile · {site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
