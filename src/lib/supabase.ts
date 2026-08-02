import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Platform } from "react-native";

import { env } from "@/constants/env";
import type { Database } from "@/types/database";

/**
 * Supabase browser/mobile client.
 * Auth sessions are persisted with AsyncStorage on native.
 * We will swap in typed Database definitions once the schema exists.
 */
export const supabase = createClient<Database>(
  env.supabaseUrl || "https://placeholder.supabase.co",
  env.supabaseAnonKey || "placeholder-anon-key",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: Platform.OS === "web",
    },
  },
);
