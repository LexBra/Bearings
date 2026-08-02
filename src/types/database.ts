/**
 * Placeholder Supabase Database types.
 * After your schema is ready, replace this file with generated types:
 *   npx supabase gen types typescript --project-id <id> > src/types/database.ts
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      // Example shape — replace with real tables from Supabase.
      // profiles: {
      //   Row: { id: string; display_name: string | null };
      //   Insert: { id: string; display_name?: string | null };
      //   Update: { display_name?: string | null };
      // };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
