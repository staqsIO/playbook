import { Navbar } from "@/components/layout";
import { SplitText } from "@/components/bits/split-text";
import { GradientText } from "@/components/bits/gradient-text";
import { TextShimmer } from "@/components/bits/text-shimmer";
import { ClickSpark } from "@/components/bits/click-spark";
import { AnimatedCard } from "@/components/bits/animated-card";
import { FadeIn } from "@/components/bits/fade-in";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center p-8 pt-28">
        <main className="flex flex-col items-center gap-12 text-center max-w-4xl">
          {/* Hero Section */}
          <FadeIn>
            <div className="space-y-6">
              <h1 className="text-5xl font-anton tracking-tight sm:text-7xl">
                <SplitText text="WELCOME TO" className="justify-center mb-2" />
                <div className="mt-2">
                  <GradientText className="text-6xl sm:text-8xl">
                    PLAYBOOK
                  </GradientText>
                </div>
              </h1>
              <p className="text-xl text-muted-foreground font-antonio">
                <TextShimmer className="text-2xl font-semibold">
                  Next.js 14 + React 18 + React Bits
                </TextShimmer>
              </p>
            </div>
          </FadeIn>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <AnimatedCard delay={0.1}>
              <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-lg h-full">
                <div className="text-4xl mb-4">⚡️</div>
                <h3 className="text-xl font-antonio font-semibold mb-3">
                  Lightning Fast
                </h3>
                <p className="text-sm text-muted-foreground">
                  Built on Next.js 14 with App Router for optimal performance
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-lg h-full">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-antonio font-semibold mb-3">
                  Beautiful Design
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tailwind CSS with custom theme and shadcn/ui components
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-lg h-full">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-antonio font-semibold mb-3">
                  Smooth Animations
                </h3>
                <p className="text-sm text-muted-foreground">
                  Framer Motion powers all React Bits animations
                </p>
              </div>
            </AnimatedCard>
          </div>

          {/* Interactive Demo */}
          <FadeIn delay={0.4}>
            <div className="mt-8 rounded-xl border bg-card p-8 shadow-xl">
              <h3 className="text-2xl font-antonio font-semibold mb-4">
                Try React Bits Components
              </h3>
              <p className="text-muted-foreground mb-6">
                Click the button below to see spark effects in action!
              </p>
              <ClickSpark>
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-antonio font-semibold text-lg hover:bg-primary/90 transition-colors">
                  Click Me for Sparks! ✨
                </button>
              </ClickSpark>
            </div>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="https://reactbits.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-antonio font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
              >
                Explore React Bits →
              </a>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-secondary bg-transparent px-8 py-4 text-base font-antonio font-semibold text-foreground shadow-lg transition-all hover:bg-secondary hover:text-secondary-foreground hover:scale-105"
              >
                Next.js Docs
              </a>
            </div>
          </FadeIn>

          {/* Footer */}
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            <p className="font-antonio">
              Built with <GradientText animate={false}>Next.js 14</GradientText> •{" "}
              React 18 • TypeScript • Tailwind CSS
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
