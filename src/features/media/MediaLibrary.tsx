import { useState } from 'react'
import { Upload } from 'lucide-react'
import { mediaItems } from '@/lib/mockData'
import type { MediaItem } from '@/lib/types'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'

export default function MediaLibrary() {
  const [selected, setSelected] = useState<MediaItem | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-muted">{mediaItems.length} files</p>
        <Button size="sm">
          <Upload size={16} />
          Upload
        </Button>
      </div>

      {/* 2 cols mobile -> 3 tablet -> 5 desktop */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {mediaItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className="group text-left"
          >
            <Card className="overflow-hidden p-0">
              <div className="aspect-square overflow-hidden bg-paper">
                <img
                  src={item.url}
                  alt={item.filename}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </Card>
            <p className="mt-1.5 truncate text-xs text-slate-muted">{item.filename}</p>
          </button>
        ))}
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.filename ?? ''}
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setSelected(null)}>
              Close
            </Button>
            <Button size="sm">Insert into post</Button>
          </div>
        }
      >
        {selected && (
          <div className="space-y-3">
            <img src={selected.url} alt={selected.filename} className="w-full rounded-lg" />
            <dl className="grid grid-cols-2 gap-2 text-sm">
              <dt className="text-slate-muted">Size</dt>
              <dd className="text-right text-ink">{selected.size}</dd>
              <dt className="text-slate-muted">Uploaded</dt>
              <dd className="text-right text-ink">{selected.uploadedAt}</dd>
            </dl>
          </div>
        )}
      </Modal>
    </div>
  )
}
