/**
 * Temporary auth stub.
 *
 * Flip `isAuthenticated` to preview the other navigator:
 * - false → Authentication stack (Welcome / Login / Sign up)
 * - true  → Main tabs (Home, Search, Saved, Map, Profile)
 *
 * We will replace this with real Supabase session state later.
 */
export function useAuth() {
  return {
    isAuthenticated: true,
    isLoading: false,
  } as const;
}
