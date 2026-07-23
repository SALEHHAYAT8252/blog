import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import type { PostStatus } from '@/lib/types'
import { posts } from '@/lib/mockData'
import { Card } from '@/components/ui/Card'
import { PostTable } from './PostTable'
import { PostCard } from './PostCard'

const filters: { label: string; value: PostStatus | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Published', value: 'published' },
  { label: 'Draft', value: 'draft' },
  { label: 'Scheduled', value: 'scheduled' },
]

export default function PostList() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<PostStatus | 'all'>('all')

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesStatus = status === 'all' || p.status === status
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase())
      return matchesStatus && matchesQuery
    })
  }, [query, status])

  return (
    <div className="space-y-4">
      {/* Filter bar: stacks on mobile, single row on desktop */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            aria-label="Search posts"
            className="h-10 w-full rounded-lg border border-border bg-paper-2 pl-9 pr-3 text-sm
              placeholder:text-slate-muted focus:border-gold focus:outline-none"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setStatus(f.value)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                status === f.value
                  ? 'bg-ink text-paper'
                  : 'bg-paper-2 text-slate-muted border border-border hover:bg-paper'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <Card className="p-10 text-center">
          <p className="font-display text-lg font-medium text-ink">No posts match your filters</p>
          <p className="mt-1 text-sm text-slate-muted">Try a different search term or status.</p>
        </Card>
      ) : (
        <>
          {/* Desktop / tablet: table. Below md: stacked cards. */}
          <Card className="hidden overflow-x-auto md:block">
            <PostTable posts={filtered} />
          </Card>
          <div className="grid grid-cols-1 gap-3 md:hidden">
            {filtered.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
