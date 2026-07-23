import { Routes, Route } from 'react-router-dom'
import { FolderTree, Users, Settings } from 'lucide-react'
import { Layout } from '@/components/layout/Layout'
import Login from '@/features/auth/Login'
import Dashboard from '@/features/dashboard/Dashboard'
import PostList from '@/features/posts/PostList'
import PostEditor from '@/features/posts/PostEditor'
import MediaLibrary from '@/features/media/MediaLibrary'
import { PlaceholderPage } from '@/features/misc/PlaceholderPage'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <Layout title="Dashboard">
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/posts"
        element={
          <Layout title="Posts">
            <PostList />
          </Layout>
        }
      />
      <Route
        path="/posts/new"
        element={
          <Layout title="New post">
            <PostEditor />
          </Layout>
        }
      />
      <Route
        path="/posts/:id"
        element={
          <Layout title="Edit post">
            <PostEditor />
          </Layout>
        }
      />
      <Route
        path="/media"
        element={
          <Layout title="Media library">
            <MediaLibrary />
          </Layout>
        }
      />
      <Route
        path="/categories"
        element={
          <Layout title="Categories">
            <PlaceholderPage
              icon={FolderTree}
              title="Categories & tags"
              description="Organize your content taxonomy here. Build this out with a nested list and drag-to-reorder."
            />
          </Layout>
        }
      />
      <Route
        path="/users"
        element={
          <Layout title="Users">
            <PlaceholderPage
              icon={Users}
              title="Team & roles"
              description="Manage who can write, edit, and publish. Add a table with role badges here."
            />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout title="Settings">
            <PlaceholderPage
              icon={Settings}
              title="Site settings"
              description="Configure your blog's title, domain, SEO defaults, and integrations here."
            />
          </Layout>
        }
      />
    </Routes>
  )
}
