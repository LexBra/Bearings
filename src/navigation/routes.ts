/**
 * Central route names for Expo Router.
 * Use these instead of hardcoding path strings in buttons/links.
 */
export const routes = {
  home: "/",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
