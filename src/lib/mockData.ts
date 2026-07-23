import type { Author, DashboardStat, MediaItem, Post } from './types'

export const currentUser: Author = {
  id: 'u1',
  name: 'Sara Nasser',
  avatarInitials: 'SN',
  role: 'Editor',
}

const authors: Author[] = [
  currentUser,
  { id: 'u2', name: 'Deepak Rao', avatarInitials: 'DR', role: 'Author' },
  { id: 'u3', name: 'Lina Alvarez', avatarInitials: 'LA', role: 'Admin' },
]

export const posts: Post[] = [
  {
    id: 'p1',
    title: 'Designing for the quiet hours: night mode done right',
    slug: 'designing-for-the-quiet-hours',
    excerpt: 'A look at how contrast, not just color inversion, makes dark UI feel calm rather than heavy.',
    body: '<p>Full article body goes here…</p>',
    status: 'published',
    author: authors[0],
    category: 'Design',
    tags: ['ui', 'accessibility', 'dark-mode'],
    updatedAt: '2026-07-20',
    publishedAt: '2026-07-21',
  },
  {
    id: 'p2',
    title: 'What shipping a CMS taught us about content models',
    slug: 'shipping-a-cms-content-models',
    excerpt: 'Three redesigns in, here is the schema we finally settled on and why the first two failed.',
    body: '<p>Full article body goes here…</p>',
    status: 'draft',
    author: authors[1],
    category: 'Engineering',
    tags: ['cms', 'architecture'],
    updatedAt: '2026-07-22',
  },
  {
    id: 'p3',
    title: 'A field guide to editorial voice',
    slug: 'field-guide-editorial-voice',
    excerpt: 'How to keep a dozen writers sounding like one publication without flattening anyone.',
    body: '<p>Full article body goes here…</p>',
    status: 'scheduled',
    author: authors[2],
    category: 'Writing',
    tags: ['style-guide', 'process'],
    updatedAt: '2026-07-19',
    publishedAt: '2026-07-28',
  },
  {
    id: 'p4',
    title: 'Migrating five years of posts without losing a single slug',
    slug: 'migrating-posts-without-losing-slugs',
    excerpt: 'Redirect maps, canonical tags, and the spreadsheet that saved our search rankings.',
    body: '<p>Full article body goes here…</p>',
    status: 'published',
    author: authors[0],
    category: 'Engineering',
    tags: ['seo', 'migration'],
    updatedAt: '2026-07-15',
    publishedAt: '2026-07-16',
  },
  {
    id: 'p5',
    title: 'The case for shorter drafts',
    slug: 'the-case-for-shorter-drafts',
    excerpt: 'Word count is not a proxy for effort, and our editors were done pretending otherwise.',
    body: '<p>Full article body goes here…</p>',
    status: 'draft',
    author: authors[1],
    category: 'Writing',
    tags: ['editing'],
    updatedAt: '2026-07-23',
  },
]

export const mediaItems: MediaItem[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `m${i + 1}`,
  url: `https://picsum.photos/seed/quill-${i + 1}/480/320`,
  filename: `cover-${i + 1}.jpg`,
  size: `${(120 + i * 13) % 400 + 80} KB`,
  uploadedAt: '2026-07-18',
}))

export const dashboardStats: DashboardStat[] = [
  { label: 'Published posts', value: '128', delta: '+4 this week', trend: 'up' },
  { label: 'Drafts in progress', value: '17', delta: '+2 this week', trend: 'up' },
  { label: 'Avg. read time', value: '4.2m', delta: '-0.1m', trend: 'down' },
  { label: 'Comments pending', value: '9', delta: 'no change', trend: 'flat' },
]
