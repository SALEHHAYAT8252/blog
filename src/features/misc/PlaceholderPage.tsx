import type { LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export function PlaceholderPage({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <Card className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
        <Icon size={22} />
      </div>
      <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
      <p className="max-w-sm text-sm text-slate-muted">{description}</p>
    </Card>
  )
}
