'use client'; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-4">Something went wrong</p>
        <p className="text-sm text-muted-foreground mb-8">{error.message}</p>
        <button
          onClick={reset}
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

