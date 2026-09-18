import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
  variant?: 'default' | 'inverse'
}

export function BrandLogo({ className, variant = 'default' }: BrandLogoProps) {
  const inverse = variant === 'inverse'

  return (
    <span className={cn('flex items-center gap-3', className)}>
      <span
        aria-hidden="true"
        className={cn(
          'grid size-10 shrink-0 place-items-center rounded-xl font-heading text-sm font-extrabold tracking-tight',
          inverse
            ? 'bg-navy-foreground text-navy'
            : 'bg-navy text-navy-foreground',
        )}
      >
        LA
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-base font-extrabold tracking-tight sm:text-lg',
            inverse ? 'text-navy-foreground' : 'text-navy',
          )}
        >
          Leal <span className="font-medium">y</span> Asociados
        </span>
        <span
          className={cn(
            'mt-1 text-[0.65rem] font-medium tracking-[0.18em] uppercase',
            inverse ? 'text-navy-foreground/70' : 'text-muted-foreground',
          )}
        >
          Consultores
        </span>
      </span>
    </span>
  )
}
