import { Link } from 'react-router-dom'
import { MoreVertical } from 'lucide-react'
import type { Post } from '@/lib/types'
import { StatusBadge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-2">
        <Link to={`/posts/${post.id}`} className="min-w-0">
          <p className="truncate font-medium text-ink hover:text-gold-deep">{post.title}</p>
        </Link>
        <button
          className="shrink-0 rounded-md p-1 text-slate-muted hover:bg-paper"
          aria-label={`More actions for ${post.title}`}
        >
          <MoreVertical size={16} />
        </button>
      </div>
      <p className="mt-1 line-clamp-2 text-sm text-slate-muted">{post.excerpt}</p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs text-slate-muted">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-paper text-[10px] font-semibold text-slate">
            {post.author.avatarInitials}
          </span>
          {post.category} · {post.updatedAt}
        </div>
        <StatusBadge status={post.status} />
      </div>
    </Card>
  )
}
