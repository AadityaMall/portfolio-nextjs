# AGENTS.md — Personal Frontend Base

Read this file in full before writing a single line of code, creating any file, or making any structural decision. This is the base standard for every project.

---

## Design Override File

If a `DESIGN.md` exists in this repo, import and read it before anything else:

```
@DESIGN.md
```

**DESIGN.md always wins.** If DESIGN.md contradicts anything in this file for the current project, DESIGN.md takes precedence — visuals, motion, palette, layout feel, all of it. Anything not addressed by DESIGN.md falls back to this file.

---

## Step 1 — Identify Project Type

Before creating any folder or file, determine which project type this is. If it is not clear from context, **ask before assuming**.

| # | Type | Description |
|---|------|-------------|
| 1 | **Static frontend-only** | No backend, no dynamic content. e.g. a simple portfolio or landing page. |
| 2 | **Content-driven frontend** | No transactional backend, but content is read from Firestore (or similar). e.g. a marketing or brochure site with CMS-editable content — no auth, no user writes. |
| 3 | **Full-stack / transactional** | Real backend operations: auth, user data, cart, admin panel, writes. Backed by a custom REST API and/or Firebase Functions. |

The project type controls which directory structure to use (see below) and which data-access patterns apply.

---

## Visual Style — Default

> These are the defaults. DESIGN.md overrides any or all of them per project.

- **Palette:** pastel, minimal. Avoid saturated or loud colors.
- **Dark mode:** required on every project, no exceptions. Never ship without it.
- **Overall feel:** modern, clean, completely professional. Not playful or experimental unless told otherwise.
- **UI/UX:** minimalistic, simple, easy to operate. No visual clutter, no excessive decoration.
- **Animation:** light and purposeful only — hover state transitions, drawer slides, menu fades. No heavy motion, parallax, or page transitions by default.
- **Icons:** Lucide exclusively (`lucide-react`). No other icon library.
- **Typography:** clean, legible, consistent scale. Never mix more than two font families.
- **Spacing:** generous whitespace. Components should breathe — avoid cramped layouts.
- **Responsiveness:** every UI must work on mobile, tablet, and desktop. Mobile-first approach.

---

## Architecture Principles

- The application is **decoupled**. Presentation components never embed data-fetching or business logic directly — always go through the `contentSource` or `services` layer.
- Where UI structure is driven by content (nav items, footer links, dynamic menus), define it as **typed config data**, not hardcoded JSX. The component renders the config; the config is not baked into the component tree.
- **Never capture dynamic or async data as a frozen module-level constant.** A `const heroData = fetchSomething()` at module scope is permanently locked to whatever resolved (or didn't) at import time. Always read dynamic content through an explicit accessor — async call on the server, reactive hook on the client.

---

## Components

- **shadcn/ui exclusively.** No other component libraries.
- **Do not pre-populate `src/components/ui/`.** The folder stays empty until a task actually needs a component. Use the **shadcn MCP server** to browse, search, and install components on demand — pull only what the current task requires.
- **Compose, don't duplicate.** Build composite components from shadcn primitives (e.g. `ProfileCard`, `StatusBadge`, `InquiryRow`) rather than repeating the same markup across multiple files.
- **Component folder naming is feature-scoped** inside `src/components/` — not a flat dump. e.g. `components/product/`, `components/auth/`, `components/admin/`, `components/layout/`.
- `components/layout/` holds Navbar, Footer, and any persistent shell components.
- `components/ui/` holds only installed shadcn primitives and small generic UI pieces. Never put feature-specific logic here.

---

## Styling

- **Tailwind v4, CSS-first.** No `tailwind.config.js` / `.ts` unless explicitly needed for plugins or advanced content paths.
- **All design tokens live in `src/app/globals.css`** using the `@theme` directive — colors, radius, font sizes.
- Light-mode tokens go under `:root`. Dark-mode tokens go under `.dark`. Never write per-component `dark:` utility classes for color values — swap the token, not the class.
- Continue using class-based Tailwind utilities normally in components (`bg-background`, `text-foreground`, `text-primary`, etc.).

**Token structure example:**

```css
@import "tailwindcss";

@theme {
  --color-background: oklch(98% 0.01 320);
  --color-surface: oklch(96% 0.01 280);
  --color-surface-hover: oklch(93% 0.02 280);
  --color-primary: oklch(65% 0.15 280);
  --color-text: oklch(20% 0.02 280);
  --color-text-muted: oklch(50% 0.02 280);
  --radius: 0.75rem;
}

.dark {
  --color-background: oklch(13% 0.02 280);
  --color-surface: oklch(17% 0.02 280);
  --color-surface-hover: oklch(22% 0.02 280);
  --color-primary: oklch(70% 0.15 280);
  --color-text: oklch(94% 0.01 280);
  --color-text-muted: oklch(60% 0.02 280);
}
```

---

## Directory Structure

### Type 1 — Static frontend-only

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── layout/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    └── ui/              ← shadcn primitives, installed on demand
```

---

### Type 2 — Content-driven frontend

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── [route]/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── [feature]/       ← one folder per page/feature (e.g. home/, about/)
│   └── ui/
├── lib/
│   ├── contentSource.ts         # server-side: source selector, in-memory store, accessors
│   ├── contentSource.client.ts  # client-side: useSyncExternalStore hooks
│   ├── firebase.ts              # Firebase SDK init only
│   ├── <source>Data.ts          # real read implementation (e.g. firestoreData.ts)
│   ├── mockData.ts              # static fallback — default when no live source is set
│   └── utils.ts
└── types/
    └── [domain].ts              # hand-maintained content shape definitions
```

**Rules:**
- `contentSource` / `contentSource.client` is the **only** entry point for the rest of the app. Components never import from `<source>Data.ts` directly.
- Data source defaults to `mock` unless an env var explicitly sets it to a live source (e.g. `NEXT_PUBLIC_CONTENT_SOURCE=firestore`). Local dev must never accidentally hit production data by omission.
- Client hooks are built on `useSyncExternalStore`. The server snapshot always returns `null` to prevent SSR/hydration mismatches — the component renders a skeleton until client data arrives.

---

### Type 3 — Full-stack / transactional

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── (admin)/         ← admin route group with its own layout
│   └── [locale]/(site)/ ← public site route group (i18n if needed)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── admin/
│   ├── auth/
│   ├── [feature]/
│   └── ui/
├── context/                       # global client-side state
│   └── <domain>/
│       ├── <Domain>Context.ts     # contract: types + context object only
│       └── <Domain>Provider.tsx   # implementation: state, effects, handlers
├── hooks/                         # custom hooks not tied to a specific context
├── lib/
│   ├── firebase.ts                # Firebase SDK init only — nothing else
│   └── utils.ts
├── middleware/                    # client-side route guards
│   ├── ProtectedRoute.tsx
│   └── AuthorizedRoutes.tsx
├── services/                      # one file per domain entity
│   └── [entity].ts                # typed CRUD functions + realtime subscriptions
└── types/
    └── [Domain].ts                # hand-maintained request/response contracts
```

**Rules:**
- `lib/` is infrastructure-only — Firebase init and generic utilities. No content abstraction, no mock layer, no domain logic.
- `services/` is the data-access layer. Components never call `fetch` or Firestore directly — always through a service function.
- `context/` splits contract from implementation. `*Context.ts` holds only the TypeScript types and the context object. `*Provider.tsx` holds all the state, effects, and handlers. Never mix them.
- If a Firebase Functions backend is colocated under `functions/` in the same repo, treat it as a fully independent project — it has its own `package.json` and deploy lifecycle. Types stay hand-mirrored in `src/types/`. Do not import across that boundary unless the repo is explicitly set up as a workspace monorepo with a shared types package.

---

## Backend Integration

Every data-fetching or data-writing function must honor this contract regardless of backend type:
- Returns `Promise<T>` on success
- Rejects or throws a **clean string message** on failure (never a raw Error object or unparsed response)

The contract is shared. The implementation is not. Never assume one handler works across backend types.

### REST API

```typescript
const handleResponse = async <T>(res: Response): Promise<T> => {
  let data: any;
  try {
    data = await res.json();
  } catch {
    return Promise.reject("Invalid server response");
  }
  if (!res.ok) {
    return Promise.reject(data?.message || "Something went wrong");
  }
  return data.data;
};
```

Every function in `services/` for a REST backend calls this handler.

### Firebase — one-off reads/writes

For one-off writes where the return value is shaped manually (e.g. after `addDoc`), plain try/catch inside the function is the right call — it already satisfies the contract. Don't force a shared wrapper where the boilerplate doesn't repeat:

```typescript
export const addAddress = async (
  userId: string,
  addressData: Omit<Address, "id" | "userId">
): Promise<Address> => {
  try {
    const docRef = await addDoc(collection(db, "addresses"), {
      ...addressData,
      userId,
      createdAt: new Date(),
    });
    return { id: docRef.id, userId, ...addressData };
  } catch {
    throw "Failed to add address";
  }
};
```

### Firebase — realtime subscriptions

Realtime data has a different contract — a callback + unsubscribe, not a single resolved value. Use this shape for any data that needs to stay live:

```typescript
export const subscribeToProducts = (
  onData: (data: Product[]) => void,
  onError?: (error: unknown) => void,
): Unsubscribe => {
  return onSnapshot(
    collection(db, "products"),
    (snapshot) =>
      onData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Product))),
    (error) => onError?.(error),
  );
};
```

Never wrap a snapshot listener in a `Promise<T>` — you lose the live-update behavior.

---

## Types

- All types in `src/types/` are **hand-maintained**. No codegen, no auto-import from a backend.
- When backend type definitions are provided (via prompt or pasted code), mirror them into TypeScript interfaces here.
- One file per domain: `User.ts`, `Product.ts`, `Cart.ts`, etc. — never dump everything into a single `types.ts`.
- Applies even when the backend is colocated in the same repo — hand-mirror, don't cross-import.

---

## Navbar

**Design:**
- Floating pill shape, fixed to the top of the viewport, horizontally centered.
- `backdrop-blur` + semi-transparent background (`bg-white/90` in light, dark equivalent in dark mode).
- Subtle border: `border border-primary/10`.
- Light drop shadow: `shadow-lg shadow-primary/5`.
- Always force-light internally (the navbar itself stays light-themed regardless of page dark mode, unless DESIGN.md says otherwise).

**Desktop:**
- Logo on the left, nav links centered/spread, controls (theme toggler, CTA, etc.) on the right.
- Active link: `text-primary bg-primary/5`. Inactive: `text-text-muted hover:text-text hover:bg-surface-hover`.
- Dropdowns via shadcn `NavigationMenu`. Groups inside a dropdown get a heading, a divider, then a list of items with optional description lines.
- Dropdown content: `bg-surface border-primary/10`.

**Mobile:**
- Hamburger (`Menu` icon from Lucide) replaces nav links.
- Slide-in drawer from the right: `w-72 max-w-[80vw]`, full height, `shadow-2xl`.
- Backdrop overlay behind drawer: `bg-black/20 backdrop-blur-sm`. Tapping it closes the drawer.
- Nav items with children use shadcn `Accordion` inside the drawer — not nested drawers.
- Drawer header: project name/logo on left, `X` close button on right.
- Smooth CSS transform transitions for open/close (`translate-x-0` / `translate-x-full`, `duration-300 ease-out`).

**Structure:**
- Nav items are defined as a typed config array (`NavItem[]`), not hardcoded JSX. The component renders the config.
- A `NavItem` can be: a simple link, a dropdown (with flat items or grouped items), or a custom `render` function for full control.
- Desktop and mobile rendering are split into separate sub-components: `DesktopNav`, `DesktopNavDropdown`, `MobileNav`, `MobileNavAccordion`. The main `Navbar` component orchestrates them.
- If content is dynamic (data-driven nav links), the Navbar reads from the content layer (`useContentValue` or equivalent). While loading, render a skeleton that preserves the navbar's height and layout — never return `null` and cause layout shift.

---

## Footer

**Design:**
- Full-width, `bg-surface`, top border `border-t border-primary/10`.
- Two sections: a main grid above, a bottom bar below separated by another `border-t border-primary/10`.
- Max width `max-w-7xl`, centered, standard horizontal padding.

**Main grid:**
- 4-column layout on desktop (`lg:grid-cols-4`), 2-column on tablet, 1-column on mobile.
- Column 1 (brand): logo, short description, social icon links. Social icons: small rounded squares, `bg-primary/10`, `hover:bg-primary/20`, Lucide or inline SVG icons.
- Columns 2–3: link lists with a `font-semibold text-text` heading. Links: `text-text-muted hover:text-primary transition-colors`.
- Column 4: contact info — each item as an icon + text row. Icons from Lucide (`MapPin`, `Phone`, `Mail`) in `text-primary`.

**Bottom bar:**
- Copyright left, legal/policy links right. On mobile, stacks vertically and centers.
- Legal links: `text-text-muted hover:text-primary transition-colors`.

**Loading state:**
- If footer data is async, render a full-height skeleton version that matches the grid layout. Never return `null`.

---

## Globals CSS — globals.css location

- For Next.js App Router: `src/app/globals.css`
- Imported once in `src/app/layout.tsx` — never imported again elsewhere.