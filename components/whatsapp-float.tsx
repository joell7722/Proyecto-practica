'use client'

import { motion } from 'motion/react'
import { MessageCircleIcon } from 'lucide-react'

import { site } from '@/lib/site'

export function WhatsappFloat() {
  return (
    <motion.a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-navy px-4 py-3.5 text-navy-foreground shadow-xl shadow-navy/25 transition-colors hover:bg-primary sm:right-6 sm:bottom-6"
    >
      <MessageCircleIcon className="size-6" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </motion.a>
  )
}
