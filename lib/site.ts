export const site = {
  name: 'Leal y Asociados',
  tagline: 'Consultoría contable, tributaria y financiera',
  phoneLabel: '+56 9 1234 5678',
  phoneHref: 'tel:+56912345678',
  whatsappHref:
    'https://wa.me/56950918711?text=Hola%20Leal%20y%20Asociados%2C%20necesito%20asesor%C3%ADa%20para%20mi%20empresa.',
  email: 'leal.auditores@gmail.com',
  emailHref: 'mailto:leal.auditores@gmail.com',
  address: 'Av. Libertador Bernardo O’Higgins 1234, Oficina 802, Santiago, Chile',
  schedule: 'Lunes a viernes de 9:00 a 18:30 h',
  yearsOfExperience: 8,
} as const

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
] as const
