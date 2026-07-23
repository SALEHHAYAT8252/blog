import type { HTMLAttributes } from 'react'

export function Card({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-xl border border-border bg-paper-2 shadow-sm shadow-ink/[0.02] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
