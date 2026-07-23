import { Link } from 'react-router-dom'
import { MoreVertical } from 'lucide-react'
import type { Post } from '@/lib/types'
import { StatusBadge } from '@/components/ui/Badge'

export function PostTable({ posts }: { posts: Post[] }) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="border-b border-border text-xs uppercase tracking-wide text-slate-muted">
          <th className="py-3 pl-5 pr-3 font-medium">Title</th>
          <th className="px-3 py-3 font-medium">Author</th>
          <th className="px-3 py-3 font-medium">Category</th>
          <th className="px-3 py-3 font-medium">Status</th>
          <th className="px-3 py-3 font-medium">Updated</th>
          <th className="py-3 pl-3 pr-5 font-medium text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        {posts.map((post) => (
          <tr key={post.id} className="hover:bg-paper">
            <td className="max-w-xs py-3 pl-5 pr-3">
              <Link to={`/posts/${post.id}`} className="block truncate font-medium text-ink hover:text-gold-deep">
                {post.title}
              </Link>
              <p className="truncate text-xs text-slate-muted">{post.excerpt}</p>
            </td>
            <td className="px-3 py-3 text-slate">{post.author.name}</td>
            <td className="px-3 py-3 text-slate-muted">{post.category}</td>
            <td className="px-3 py-3">
              <StatusBadge status={post.status} />
            </td>
            <td className="px-3 py-3 text-slate-muted">{post.updatedAt}</td>
            <td className="py-3 pl-3 pr-5 text-right">
              <button
                className="rounded-md p-1.5 text-slate-muted hover:bg-paper-2 hover:text-ink"
                aria-label={`More actions for ${post.title}`}
              >
                <MoreVertical size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
