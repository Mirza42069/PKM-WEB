# AGENTS.md - Guidelines for AI Coding Agents

This repository contains a Next.js 16 application (in `/marleen`) with React 19, TypeScript 5, and Tailwind CSS 4.

## Project Structure

```
PKM-PAPER/
├── marleen/          # Next.js application
│   ├── app/          # App Router pages and layouts
│   ├── components/   # React components
│   │   └── ui/       # shadcn/ui components (base-mira style)
│   ├── lib/          # Utility functions
│   └── public/       # Static assets
└── graphics/         # Project graphics/images
```

## Build, Lint, and Test Commands

All commands run from the `marleen/` directory:

```bash
bun install          # Install dependencies
bun run dev          # Development server
bun run build        # Production build
bun run start        # Start production server
bun run lint         # Lint codebase (or: bun eslint .)
bunx tsc --noEmit    # Type checking
```

**No test framework configured.** If tests are needed, use Vitest (unit) or Playwright (E2E).

## Code Style Guidelines

### TypeScript
- **Strict mode enabled** - All code must pass strict TypeScript checks
- Target: ES2017, Module resolution: Bundler
- Use `React.ComponentProps<"element">` for extending HTML element props
- Prefer `type` over `interface` for object types

```typescript
function Button({ className, ...props }: React.ComponentProps<"button">) { ... }
function Card({ size = "default", ...props }: React.ComponentProps<"div"> & { size?: "default" | "sm" }) { ... }
```

### Imports (order with blank lines between groups)
1. React/framework imports (`next/*`, `react`)
2. Third-party libraries (`@base-ui/*`, `class-variance-authority`)
3. Internal aliases (`@/components/*`, `@/lib/*`)

```typescript
import * as React from "react"
import Link from "next/link"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

### Path Aliases
- `@/components/*` - React components
- `@/components/ui/*` - shadcn/ui components
- `@/lib/*` - Utility functions
- `@/hooks/*` - Custom React hooks

### Component Patterns
- Use function declarations (not arrow functions)
- Export named components for UI components
- Use `"use client"` directive only when needed
- Add `data-slot` attributes to root elements

```typescript
"use client"
function Navbar() {
  return <header data-slot="navbar" className="...">{/* content */}</header>
}
export { Navbar }
```

### Styling
- **Tailwind CSS 4** with CSS variables for theming
- **Typography**: Monospace font (Geist Mono) throughout - enterprise minimal aesthetic
- **Colors**: Warm orange primary, teal secondary, off-white cream background
- Use `cn()` from `@/lib/utils` for conditional class merging
- Use `cva` for component variants
- Semantic color tokens: `text-foreground`, `bg-background`, `text-muted-foreground`
- **No emojis** in UI - use hugeicons or text-based indicators instead

```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", outline: "..." },
    size: { default: "...", sm: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "default" },
})
```

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `Navbar`, `CardHeader` |
| Files (UI) | kebab-case | `alert-dialog.tsx` |
| Functions/vars | camelCase | `formatPrice`, `buttonVariants` |
| CSS variables | kebab-case | `--primary-foreground` |

### Component Library
- **shadcn/ui** with **base-mira** style
- Icon library: **hugeicons** (`@hugeicons/react`)
- Add components: `bunx shadcn@latest add <component>`

### Error Handling
- Use TypeScript's strict null checks
- Prefer early returns for validation
- Use optional chaining (`?.`) and nullish coalescing (`??`)

### File Organization
- One component per file (except related sub-components)
- Group related exports at file bottom
- Keep page components focused on layout composition

### JSX Formatting
- Double quotes for attributes
- Self-close empty elements
- Extract complex logic into variables

```tsx
const services = [{ title: "...", price: "..." }]
{services.map((service) => <Card key={service.title}>...</Card>)}
```

### ESLint Configuration
Uses ESLint 9 with `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
Ignored: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` (16.x) | React framework with App Router |
| `react` (19.x) | UI library |
| `tailwindcss` (4.x) | Utility-first CSS |
| `@base-ui/react` | Base component primitives |
| `class-variance-authority` | Component variant management |
| `clsx` + `tailwind-merge` | Class name utilities |
| `@hugeicons/react` | Icon library |

## Common Patterns

### Page Structure
```tsx
export default function PageName() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">{/* content */}</section>
      </main>
    </div>
  )
}
```

### Adding shadcn Components
```bash
cd marleen && bunx shadcn@latest add button card input
```
