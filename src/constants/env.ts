/**
 * Central place to read public Expo env vars.
 * Use EXPO_PUBLIC_* so values are available in the client bundle.
 * Never put secret service-role keys here.
 */
function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    // Soft failure during early scaffolding so the app still boots.
    // Replace with a hard throw once credentials are required for a feature.
    console.warn(`[env] Missing ${name}. Add it to your .env file.`);
    return "";
  }

  return value;
}

export const env = {
  supabaseUrl: requireEnv("EXPO_PUBLIC_SUPABASE_URL"),
  supabaseAnonKey: requireEnv("EXPO_PUBLIC_SUPABASE_ANON_KEY"),
  googlePlacesApiKey: requireEnv("EXPO_PUBLIC_GOOGLE_PLACES_API_KEY"),
} as const;
