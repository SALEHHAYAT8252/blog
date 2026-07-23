import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'

export function Layout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-paper">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar title={title} />
        <main className="flex-1 overflow-y-auto scrollbar-thin p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
