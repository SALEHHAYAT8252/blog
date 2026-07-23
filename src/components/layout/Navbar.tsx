import { Menu, Search, Bell, Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useUIStore } from '@/store/uiStore'
import { Button } from '@/components/ui/Button'

export function Navbar({ title }: { title: string }) {
  const openMobileSidebar = useUIStore((s) => s.openMobileSidebar)
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-border bg-paper/90 px-4 backdrop-blur sm:px-6">
      <button
        onClick={openMobileSidebar}
        className="rounded-md p-2 text-slate hover:bg-paper-2 lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      <h1 className="font-display truncate text-lg font-semibold text-ink sm:text-xl">{title}</h1>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <div className="relative hidden md:block">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-muted"
          />
          <input
            type="search"
            placeholder="Search posts…"
            aria-label="Search posts"
            className="h-9 w-56 rounded-lg border border-border bg-paper-2 pl-9 pr-3 text-sm
              placeholder:text-slate-muted focus:border-gold focus:outline-none lg:w-72"
          />
        </div>

        <button
          className="relative rounded-md p-2 text-slate hover:bg-paper-2"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
        </button>

        <Button size="sm" onClick={() => navigate('/posts/new')} className="hidden sm:inline-flex">
          <Plus size={16} />
          New post
        </Button>
        <Button
          size="sm"
          onClick={() => navigate('/posts/new')}
          className="sm:hidden"
          aria-label="New post"
        >
          <Plus size={16} />
        </Button>
      </div>
    </header>
  )
}
