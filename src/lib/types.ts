export type PostStatus = 'draft' | 'published' | 'scheduled'

export interface Author {
  id: string
  name: string
  avatarInitials: string
  role: 'Admin' | 'Editor' | 'Author'
}

export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  body: string
  status: PostStatus
  author: Author
  category: string
  tags: string[]
  coverImage?: string
  updatedAt: string
  publishedAt?: string
}

export interface MediaItem {
  id: string
  url: string
  filename: string
  size: string
  uploadedAt: string
}

export interface DashboardStat {
  label: string
  value: string
  delta: string
  trend: 'up' | 'down' | 'flat'
}
