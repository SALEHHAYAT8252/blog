import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Bold, Italic, Link2, List, Image as ImageIcon } from 'lucide-react'
import { posts } from '@/lib/mockData'
import type { PostStatus } from '@/lib/types'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Badge'

export default function PostEditor() {
  const { id } = useParams()
  const existing = posts.find((p) => p.id === id)

  const [title, setTitle] = useState(existing?.title ?? '')
  const [status, setStatus] = useState<PostStatus>(existing?.status ?? 'draft')
  const [category, setCategory] = useState(existing?.category ?? 'Design')
  const [tags, setTags] = useState<string[]>(existing?.tags ?? [])

  return (
    <div className="mx-auto max-w-6xl">
      {/* Sticky action bar */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-muted">{existing ? 'Editing post' : 'New post'}</p>
          <h1 className="font-display text-xl font-semibold text-ink sm:text-2xl">
            {existing ? existing.title : 'Untitled draft'}
          </h1>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" className="flex-1 sm:flex-none">
            Save draft
          </Button>
          <Button size="sm" className="flex-1 sm:flex-none">
            Publish
          </Button>
        </div>
      </div>

      {/* Two-pane on lg+, stacked below */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Editor pane */}
        <div className="space-y-4 lg:col-span-2">
          <Card className="p-4 sm:p-6">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              className="font-display w-full border-none bg-transparent text-2xl font-semibold
                text-ink placeholder:text-slate-muted/60 focus:outline-none sm:text-3xl"
            />

            {/* Toolbar */}
            <div className="mt-4 flex flex-wrap items-center gap-1 border-y border-border py-2">
              {[Bold, Italic, Link2, List, ImageIcon].map((Icon, i) => (
                <button
                  key={i}
                  className="rounded-md p-2 text-slate-muted hover:bg-paper hover:text-ink"
                  aria-label="Formatting option"
                  type="button"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>

            <textarea
              defaultValue={existing?.excerpt}
              placeholder="Start writing your story…"
              rows={16}
              className="mt-4 w-full resize-none border-none bg-transparent text-base leading-relaxed
                text-slate placeholder:text-slate-muted/60 focus:outline-none"
            />
          </Card>
        </div>

        {/* Metadata sidebar — becomes a stacked section on mobile, sticky column on desktop */}
        <div className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <Card className="space-y-4 p-4 sm:p-5">
            <h3 className="font-display font-semibold text-ink">Status</h3>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as PostStatus)}
              className="h-10 w-full rounded-lg border border-border bg-paper-2 px-3 text-sm focus:border-gold focus:outline-none"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </Card>

          <Card className="space-y-4 p-4 sm:p-5">
            <h3 className="font-display font-semibold text-ink">Organize</h3>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-muted">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-10 w-full rounded-lg border border-border bg-paper-2 px-3 text-sm focus:border-gold focus:outline-none"
              >
                {['Design', 'Engineering', 'Writing', 'Product'].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-muted">Tags</label>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
                <button
                  onClick={() => setTags([...tags, `tag-${tags.length + 1}`])}
                  className="rounded-full border border-dashed border-border px-2.5 py-0.5 text-xs text-slate-muted hover:border-gold hover:text-gold-deep"
                  type="button"
                >
                  + Add tag
                </button>
              </div>
            </div>
          </Card>

          <Card className="p-4 sm:p-5">
            <h3 className="font-display mb-3 font-semibold text-ink">Cover image</h3>
            <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-paper text-sm text-slate-muted">
              Click to upload
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
