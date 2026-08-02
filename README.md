# Bearings

A React Native app built with **Expo**, **TypeScript**, **NativeWind**, **Supabase**, and the **Google Places API**.

This repo is intentionally scaffolded for beginners: every folder has a clear job, and we will build screen-by-screen from your Figma designs.

---

## Why this stack?

| Tool | Why we use it |
| --- | --- |
| **Expo** | Fastest way to ship React Native without wrestling with Xcode/Android Studio early on |
| **TypeScript** | Catches bugs before you run the app; autocomplete makes learning APIs easier |
| **Expo Router** | File-based navigation (like Next.js). Add a file in `app/` → you get a screen |
| **NativeWind** | Tailwind-style `className` styling that matches how many Figma handoffs are written |
| **Supabase** | Auth + database + storage with a generous free tier |
| **Google Places** | Place search / autocomplete / details for location features |

---

## Getting started

### 1. Prerequisites

- Node.js 20+ (this environment uses Node 22)
- [Expo Go](https://expo.dev/go) on your phone (optional but recommended)

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variables

```bash
cp .env.example .env
```

Fill in:

- `EXPO_PUBLIC_SUPABASE_URL`
- `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- `EXPO_PUBLIC_GOOGLE_PLACES_API_KEY`

> Only `EXPO_PUBLIC_*` values are available in the app. Never put a Supabase **service role** key in the client.

### 4. Start the app

```bash
npm start
```

Then press `i` (iOS simulator), `a` (Android emulator), `w` (web), or scan the QR code with Expo Go.

---

## Project structure (and why)

```text
Bearings/
├── app/                      # SCREENS ONLY (Expo Router)
│   ├── _layout.tsx           # Root layout + future global providers
│   └── index.tsx             # Home route ("/")
│
├── src/
│   ├── components/           # Reusable UI used by multiple screens
│   │   └── ui/               # Small primitives (Button, Input, etc.)
│   ├── features/             # Feature modules (auth, places, …)
│   │   ├── auth/
│   │   └── places/
│   ├── hooks/                # Shared React hooks
│   ├── lib/                  # External clients (Supabase, Google Places)
│   ├── constants/            # Env + theme tokens
│   ├── types/                # Shared TypeScript types
│   └── utils/                # Pure helpers (no React, no network)
│
├── assets/                   # Images, fonts, icons
├── global.css                # Tailwind entry for NativeWind
├── tailwind.config.js        # Design tokens + content paths
├── babel.config.js           # NativeWind JSX transform
├── metro.config.js           # Bundler + NativeWind CSS pipeline
├── app.json                  # Expo app config (name, scheme, plugins)
├── .env.example              # Safe template for secrets
└── README.md
```

### Mental model

1. **`app/` = routes.** If the user navigates to it, it lives here.
2. **`src/components/` = shared UI.** Buttons, cards, list rows that appear in more than one place.
3. **`src/features/` = product areas.** Keep auth logic near auth UI; keep places logic near places UI.
4. **`src/lib/` = talking to the outside world.** Supabase and Google Places belong here, not inside screen files.
5. **`src/constants/` + `src/types/` = shared facts.** Colors, env vars, and TypeScript shapes.

### Path alias

Import from `src/` with `@/`:

```ts
import { supabase } from "@/lib/supabase";
import { theme } from "@/constants/theme";
```

Configured in `tsconfig.json` (`paths`) so imports stay short as the app grows.

---

## Design workflow (Figma → code)

We treat Figma as the source of truth:

1. You share a frame / link for the next screen.
2. We extract spacing, type, and color tokens into `src/constants/theme.ts` and `tailwind.config.js`.
3. We implement **one screen at a time** in `app/`.
4. Shared pieces move into `src/components/` only after they appear twice (or clearly will).

No screens are invented ahead of the designs.

---

## What’s already wired up

- Expo Router entry (`main: "expo-router/entry"`)
- NativeWind (`className` styling) with a temporary brand palette
- Supabase client scaffolding (`src/lib/supabase.ts`)
- Google Places (New) API helpers (`src/lib/google-places.ts`)
- Typed env reader (`src/constants/env.ts`)
- Placeholder home screen proving NativeWind works

## What’s next (suggested order)

1. Align tokens with Figma (colors, type, spacing)
2. Build the first designed screen
3. Add auth (Supabase) once the Figma auth flow is ready
4. Wire Places search when the location UI exists

---

## Useful scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start Expo dev server |
| `npm run typecheck` | TypeScript check without building |
| `npm run android` / `ios` / `web` | Platform shortcuts |

---

## Notes for beginners

- **Don’t panic about missing API keys yet.** The app boots without them; features that need keys will warn in the console.
- **Prefer editing `app/` and `src/`.** You rarely need to touch Metro/Babel after this scaffold.
- **Ask before large refactors.** We build incrementally so each change is understandable.
