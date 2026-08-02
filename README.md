# Bearings

A React Native app built with **Expo**, **TypeScript**, **NativeWind**, **Supabase**, and the **Google Places API**.

We build incrementally from your Figma designs — no invented screens ahead of time.

---

## Getting started

```bash
npm install
cp .env.example .env   # fill in keys when you have them
npm start
```

Then press `i` (iOS), `a` (Android), `w` (web), or scan the QR code with Expo Go.

---

## Project structure (what each folder is for)

```text
Bearings/
├── app/                         # Expo Router entry points (thin route files)
│   ├── _layout.tsx              # Root navigation shell
│   └── index.tsx                # Route "/" → renders HomeScreen
│
├── src/
│   ├── components/              # Reusable UI building blocks
│   ├── screens/                 # Full-screen UI used by routes
│   ├── navigation/              # Route names + navigation helpers
│   ├── hooks/                   # Shared React hooks
│   ├── services/                # External APIs (Supabase, Google Places)
│   ├── constants/               # Env vars, theme tokens, static config
│   ├── utils/                   # Pure helpers (no React, no network)
│   └── types/                   # Shared TypeScript types
│
├── assets/
│   ├── icons/                   # App icons + favicon
│   ├── images/                  # Splash + in-app images
│   └── fonts/                   # Custom fonts (added later)
│
├── global.css                   # NativeWind / Tailwind entry
├── tailwind.config.js           # Design tokens + content paths
└── .env.example                 # Safe template for API keys
```

### Folder guide

| Folder | Purpose | Put here… | Don’t put here… |
| --- | --- | --- | --- |
| **`app/`** | Routing only (Expo Router). A file = a URL/route. | Thin wrappers that render a screen | Big UI, API calls, business logic |
| **`src/screens/`** | One file per screen’s UI | `HomeScreen`, `LoginScreen`, etc. | Buttons used on many screens |
| **`src/components/`** | Reusable UI pieces | Buttons, inputs, cards, list rows | Full screens |
| **`src/navigation/`** | Navigation helpers | Route name constants, linking helpers | Screen layouts (those stay in `app/`) |
| **`src/hooks/`** | Shared React logic | `useAuth`, `useDebounce` | One-off logic used by a single screen |
| **`src/services/`** | Talking to the outside world | Supabase client, Places API calls | UI components |
| **`src/constants/`** | Values that rarely change | Colors, spacing, env readers | Functions with side effects |
| **`src/utils/`** | Small pure helpers | `cn()`, formatters, validators | Hooks or network code |
| **`src/types/`** | TypeScript shapes shared across files | `PlaceDetails`, DB types | Runtime logic |
| **`assets/icons/`** | App icons | Icon PNGs used by Expo / stores | Screen mockups |
| **`assets/images/`** | Visual assets | Splash, photos, illustrations | Fonts |
| **`assets/fonts/`** | Custom typefaces | `.ttf` / `.otf` files | Images |

### Why `app/` and `src/screens/` are separate

- **`app/`** tells Expo Router *which routes exist*.
- **`src/screens/`** holds the actual screen UI.

That keeps routing configuration small and makes screens easier to find, test, and match to Figma frames.

### Path alias

Import from `src/` with `@/`:

```ts
import { HomeScreen } from "@/screens/HomeScreen";
import { supabase } from "@/services/supabase";
import { routes } from "@/navigation";
```

---

## Design workflow (Figma → code)

1. You share a Figma frame.
2. We update tokens in `src/constants/theme.ts` + `tailwind.config.js`.
3. We add the screen under `src/screens/` and a thin route in `app/`.
4. Shared UI moves into `src/components/` once it appears more than once.

---

## Navigation structure

Bearings uses **Expo Router** (built on **React Navigation**):

```text
Root Stack
├── (auth) stack        → Welcome, Login, Sign Up
└── (tabs) bottom tabs  → Home, Search, Saved, Map, Profile
```

- Route files live in `app/` (thin wrappers)
- Screen UI lives in `src/screens/`
- Route constants live in `src/navigation/routes.ts`
- Auth gate stub: `src/hooks/useAuth.ts` (`isAuthenticated` flip switches Auth vs Tabs)

## Already wired

- Expo Router + React Navigation (stack + bottom tabs)
- NativeWind (`className` styling)
- Supabase + Google Places service scaffolding
- Placeholder screens only (no Figma UI yet)

## Useful scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start Expo |
| `npm run typecheck` | TypeScript check |
| `npm run android` / `ios` / `web` | Platform shortcuts |
