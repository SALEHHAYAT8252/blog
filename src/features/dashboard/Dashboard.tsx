import { ArrowDown, ArrowRight, ArrowUp, Minus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { StatusBadge } from '@/components/ui/Badge'
import { dashboardStats, posts } from '@/lib/mockData'

const trendIcon = { up: ArrowUp, down: ArrowDown, flat: Minus }
const trendColor = { up: 'text-success', down: 'text-danger', flat: 'text-slate-muted' }

export default function Dashboard() {
  const recent = posts.slice(0, 4)

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Stat grid: 1 col mobile -> 2 col sm -> 4 col lg */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => {
          const Icon = trendIcon[stat.trend]
          return (
            <Card key={stat.label} className="p-5">
              <p className="text-sm text-slate-muted">{stat.label}</p>
              <p className="font-display mt-2 text-3xl font-semibold text-ink">{stat.value}</p>
              <p className={`mt-2 flex items-center gap-1 text-xs font-medium ${trendColor[stat.trend]}`}>
                <Icon size={12} />
                {stat.delta}
              </p>
            </Card>
          )
        })}
      </section>

      {/* Recent posts */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">Recent activity</h2>
          <Link
            to="/posts"
            className="flex items-center gap-1 text-sm font-medium text-gold-deep hover:underline"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <Card className="divide-y divide-border">
          {recent.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
            >
              <div className="min-w-0">
                <p className="truncate font-medium text-ink">{post.title}</p>
                <p className="mt-1 text-sm text-slate-muted">
                  {post.author.name} · {post.category} · {post.updatedAt}
                </p>
              </div>
              <div className="shrink-0">
                <StatusBadge status={post.status} />
              </div>
            </div>
          ))}
        </Card>
      </section>
    </div>
  )
}
