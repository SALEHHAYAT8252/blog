import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  FolderTree,
  Users,
  Settings,
  Feather,
  ChevronsLeft,
} from 'lucide-react'
import { useUIStore } from '@/store/uiStore'

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/posts', label: 'Posts', icon: FileText },
  { to: '/media', label: 'Media', icon: ImageIcon },
  { to: '/categories', label: 'Categories', icon: FolderTree },
  { to: '/users', label: 'Users', icon: Users },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const { mobileSidebarOpen, closeMobileSidebar, sidebarCollapsed, toggleSidebarCollapsed } =
    useUIStore()

  return (
    <>
      {/* Mobile scrim */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/50 lg:hidden"
          onClick={closeMobileSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-ink text-paper
          transition-[transform,width] duration-200 ease-out
          lg:static lg:translate-x-0
          ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          ${sidebarCollapsed ? 'lg:w-[76px]' : 'lg:w-64'}
          w-64`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-5">
          <div className="flex items-center gap-2 overflow-hidden">
            <Feather size={22} className="shrink-0 text-gold" />
            {!sidebarCollapsed && (
              <span className="font-display text-lg font-semibold tracking-tight">Quill</span>
            )}
          </div>
          <button
            onClick={toggleSidebarCollapsed}
            className="hidden rounded-md p-1 text-paper/50 hover:bg-ink-2 hover:text-paper lg:block"
            aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronsLeft
              size={16}
              className={`transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-thin px-3 py-2">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={closeMobileSidebar}
              title={sidebarCollapsed ? label : undefined}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors
                ${sidebarCollapsed ? 'lg:justify-center' : ''}
                ${
                  isActive
                    ? 'bg-ink-2 text-gold'
                    : 'text-paper/70 hover:bg-ink-2 hover:text-paper'
                }`
              }
            >
              <Icon size={18} className="shrink-0" />
              <span className={sidebarCollapsed ? 'lg:hidden' : ''}>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className={`flex items-center gap-3 ${sidebarCollapsed ? 'lg:justify-center' : ''}`}>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-semibold text-ink">
              DK
            </div>
            <div className={`min-w-0 ${sidebarCollapsed ? 'lg:hidden' : ''}`}>
              <p className="truncate text-sm font-medium">Dildar Khan</p>
              <p className="truncate text-xs text-paper/50">Editor</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
