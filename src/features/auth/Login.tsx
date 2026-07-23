import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Feather } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'At least 6 characters'),
})
type FormData = z.infer<typeof schema>

export default function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600))
    navigate('/')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 py-12 sm:px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-2 text-paper">
          <Feather size={28} className="text-gold" />
          <h1 className="font-display text-2xl font-semibold">Quill</h1>
          <p className="text-sm text-paper/50">Sign in to manage your content</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-white/10 bg-ink-2 p-6 sm:p-8"
          noValidate
        >
          <div className="mb-4">
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-paper/80">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register('email')}
              className="h-10 w-full rounded-lg border border-white/10 bg-ink px-3 text-sm text-paper
                placeholder:text-paper/30 focus:border-gold focus:outline-none"
              placeholder="you@studio.com"
            />
            {errors.email && <p className="mt-1 text-xs text-danger">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-paper/80">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
              className="h-10 w-full rounded-lg border border-white/10 bg-ink px-3 text-sm text-paper
                placeholder:text-paper/30 focus:border-gold focus:outline-none"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-danger">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>
      </div>
    </div>
  )
}
