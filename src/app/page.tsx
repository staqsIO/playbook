export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 text-center max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Welcome to{" "}
            <span className="text-primary">Playbook</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Next.js 14 + React 18 + TypeScript + Tailwind CSS + React Bits
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold">⚡️ Fast</h3>
            <p className="text-sm text-muted-foreground">
              Built on Next.js 14 with App Router
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold">🎨 Beautiful</h3>
            <p className="text-sm text-muted-foreground">
              Tailwind CSS + shadcn/ui components
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-2 font-semibold">✨ Animated</h3>
            <p className="text-sm text-muted-foreground">
              Framer Motion for smooth animations
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-muted p-4 text-sm">
          <p className="font-mono">
            Get started by editing{" "}
            <code className="rounded bg-background px-2 py-1 font-semibold">
              src/app/page.tsx
            </code>
          </p>
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Documentation
          </a>
          <a
            href="https://reactbits.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            React Bits
          </a>
        </div>
      </main>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>Built with Next.js 14 • React 18 • TypeScript • Tailwind CSS</p>
      </footer>
    </div>
  );
}
