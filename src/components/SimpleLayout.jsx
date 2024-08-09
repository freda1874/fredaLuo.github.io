import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-12 sm:mt-14">
      <header className="max-w-2xl">
        <h1 className="text-4xl  text-center font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-base text-center text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-5 sm:mt-5">{children}</div>}
    </Container>
  )
}
