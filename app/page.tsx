import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { FaqSection } from '@/components/faq-section'
import { HeroSection } from '@/components/hero-section'
import { ProcessSection } from '@/components/process-section'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TestimonialsSection } from '@/components/testimonials-section'
import { WhatsappFloat } from '@/components/whatsapp-float'
import { WhyUsSection } from '@/components/why-us-section'

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </div>
  )
}
