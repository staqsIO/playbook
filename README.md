# Playbook

A modern Next.js 14 application with React 18, TypeScript, Tailwind CSS, and React Bits support.

## Tech Stack

- **Next.js 14.2.33** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library for React Bits
- **shadcn/ui** - Re-usable components built with Radix UI
- **Lucide React** - Beautiful icon library

## Project Structure

```
playbook/
├── src/
│   ├── app/                 # Next.js 14 App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/          # Reusable components
│   │   ├── ui/             # shadcn/ui components
│   │   └── bits/           # React bits components
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # cn() helper
│   ├── hooks/              # Custom React hooks
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── package.json
```

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Adding Components

### shadcn/ui Components

Add shadcn/ui components using the CLI:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc...
```

Components will be added to `src/components/ui/`.

### React Bits

Place your React Bits animated components in `src/components/bits/`.

Example usage:
```tsx
import { motion } from "framer-motion";

export function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Your content */}
    </motion.div>
  );
}
```

## Utilities

### cn() Helper

The `cn()` utility combines Tailwind classes with clsx and tailwind-merge:

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />
```

## Features

✅ Next.js 14 App Router  
✅ React 18 with TypeScript  
✅ Tailwind CSS with CSS variables  
✅ Dark mode support  
✅ Framer Motion for animations  
✅ shadcn/ui component library  
✅ Path aliases (@/*)  
✅ Modern icon library (Lucide)  
✅ Production-ready configuration  

## Best Practices

- Use Server Components by default (App Router)
- Add 'use client' only when needed (interactivity, hooks, browser APIs)
- Keep components small and focused
- Use TypeScript for type safety
- Leverage Tailwind CSS utilities
- Follow Next.js file conventions

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Bits](https://reactbits.dev)
