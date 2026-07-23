import type { PostStatus } from '@/lib/types'

const statusConfig: Record<PostStatus, { label: string; dot: string; bg: string; text: string }> = {
  published: { label: 'Published', dot: 'bg-success', bg: 'bg-success-soft', text: 'text-success' },
  draft: { label: 'Draft', dot: 'bg-slate-muted', bg: 'bg-paper', text: 'text-slate-muted' },
  scheduled: { label: 'Scheduled', dot: 'bg-info', bg: 'bg-info-soft', text: 'text-info' },
}

export function StatusBadge({ status }: { status: PostStatus }) {
  const c = statusConfig[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${c.bg} ${c.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} aria-hidden="true" />
      {c.label}
    </span>
  )
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-paper-2 px-2.5 py-0.5 text-xs text-slate-muted">
      {children}
    </span>
  )
}
