/**
 * Tiny className helper for conditional NativeWind classes.
 * Prefer this over string concatenation so unused classes stay readable.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
