# AGENTS.md - Guidelines for AI Coding Agents

## Project Context
**Name**: Marleen (PKM-PAPER)
**Stack**: Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4
**Location**: `C:\dev\PKM-PAPER\marleen web` (All commands run from here)

## Build, Lint, & Test
```bash
bun install          # Install dependencies
bun run dev          # Start development server
bun run build        # Production build
bun run lint         # Lint codebase (eslint)
bunx tsc --noEmit    # Type checking
# Tests: No framework configured. If needed, suggest Vitest or Playwright.
```

## Code Style & Conventions

### TypeScript & React
- **Strict Mode**: All code must pass strict checks.
- **Components**: Functional components, PascalCase naming (`Navbar.tsx`).
- **Props**: Use `React.ComponentProps<"element">` for extension.
- **Types**: Prefer `type` over `interface`.
- **Imports**: Group order: React/Next -> Third-party -> Internal (`@/components`, `@/lib`).
- **Exports**: Named exports for components (`export { Navbar }`).
- **Directives**: Use `"use client"` only when interactive state/hooks are needed.

### Styling (Tailwind CSS 4)
- **Theme**: Warm orange primary, teal secondary, off-white cream background.
- **Fonts**: Geist Mono (monospace aesthetic).
- **Utility**: Use `cn()` for class merging. `cva` for component variants.
- **Tokens**: Use semantic colors (`text-foreground`, `bg-background`).
- **No Emojis**: Use `@hugeicons/react` icons instead.

## Web Interface Guidelines (Strict Compliance)

### Accessibility & Focus
- **Labels**: All form controls need `<label>` or `aria-label`. Icon-only buttons MUST have `aria-label`.
- **Focus**: Visible focus states (`focus-visible:ring-*`). Never `outline: none` without replacement.
- **Structure**: Hierarchical headings (`h1`-`h6`). Semantic HTML first (`<button>`, `<a>`).
- **Updates**: Async updates use `aria-live="polite"`.

### Forms
- **Attributes**: Inputs need `autocomplete`, `name`, and correct `type` (`email`, `tel`).
- **Behavior**: Never block paste. Submit enabled until request starts. Errors inline.
- **Safety**: `autocomplete="off"` for non-auth fields. Warn on unsaved changes.

### Animation & Interaction
- **Perf**: Animate `transform`/`opacity` only. Honor `prefers-reduced-motion`.
- **Feedback**: Buttons need `hover:` states. Interactive states must increase contrast.
- **Touch**: `touch-action: manipulation` to prevent zoom delay. Min target size 44px.

### Performance & Images
- **Images**: `<img>` needs explicit `width`/`height`. Below-fold `loading="lazy"`.
- **Lists**: Virtualize large lists (>50 items).
- **Render**: No layout reads (`offsetWidth`) during render. Batch DOM operations.

### Navigation & State
- **URL**: Filters, tabs, pagination must reflect in URL query params.
- **Links**: Use `<a>` or `<Link>` for navigation (never `div onClick`).
- **Destructive**: Require confirmation modal or undo action.

### Content & Typography
- **Format**: Use curly quotes (“”). Non-breaking spaces for units (`10&nbsp;MB`).
- **Loading**: "Loading…" (ellipsis character, not three dots).
- **Copy**: Title Case headings. Active voice ("Install CLI"). Numerals for counts ("8 items").
- **Truncation**: Handle long content (`truncate`, `line-clamp`). Handle empty states gracefully.

### Anti-patterns (Do Not Use)
- `transition: all` (list properties explicitly)
- `user-scalable=no` (never disable zoom)
- `autoFocus` on mobile
- Hardcoded date/number formats (use `Intl`)
- Array `.map()` on large lists without virtualization
- `suppressHydrationWarning` without valid reason

## Directory Structure
- `/app`: App Router pages
- `/components/ui`: shadcn/ui components (kebab-case files)
- `/lib`: Utilities (`utils.ts` for `cn`)
- `/public`: Static assets
