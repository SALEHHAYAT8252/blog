import { type ButtonHTMLAttributes, forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-ink-2 active:bg-ink-3',
  secondary: 'bg-paper-2 text-slate border border-border hover:bg-paper',
  ghost: 'text-slate hover:bg-paper',
  danger: 'bg-danger text-white hover:opacity-90',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-lg font-medium
          transition-colors disabled:opacity-50 disabled:pointer-events-none
          ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = 'Button'
