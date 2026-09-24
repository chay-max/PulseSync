import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const URL = process.env.EXPO_PUBLIC_SUPABASE_URL
const KEY = process.env.EXPO_PUBLIC_SUPABASE_KEY

if (!URL || !KEY){
  throw new Error
  
}

export const supabase = createClient(
  URL!,
  KEY!,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })