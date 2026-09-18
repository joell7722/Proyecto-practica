'use client'

import { useEffect, useState } from 'react'
import { MenuIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react'

import { BrandLogo } from '@/components/brand-logo'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { navLinks, site } from '@/lib/site'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-background/70 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="shrink-0" aria-label="Ir al inicio">
          <BrandLogo />
        </a>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden md:inline-flex"
            nativeButton={false}
            render={<a href={site.phoneHref} />}
          >
            <PhoneIcon data-icon="inline-start" />
            {site.phoneLabel}
          </Button>
          <Button
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={<a href="#contacto" />}
          >
            Solicitar asesoría
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Abrir menú"
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="gap-0">
              <SheetHeader className="border-b border-border p-5">
                <SheetTitle className="text-left">
                  <BrandLogo />
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Navegación móvil" className="flex flex-col p-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-navy transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t border-border p-5">
                <Button
                  nativeButton={false}
                  render={<a href="#contacto" />}
                  onClick={() => setOpen(false)}
                >
                  Solicitar asesoría
                </Button>
                <Button
                  variant="outline"
                  nativeButton={false}
                  render={
                    <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" />
                  }
                >
                  <MessageCircleIcon data-icon="inline-start" />
                  Escríbenos por WhatsApp
                </Button>
                <a
                  href={site.phoneHref}
                  className="text-center text-sm text-muted-foreground"
                >
                  {site.phoneLabel}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
