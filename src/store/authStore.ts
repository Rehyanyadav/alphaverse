import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { addDays, isPast } from 'date-fns';

interface Profile {
  id: string;
  email: string;
  name: string;
  role: 'free' | 'pro' | 'enterprise';
  subscription_end?: string;
}

interface AuthState {
  user: any | null;
  profile: Profile | null;
  isLoading: boolean;
  subscriptionEndsIn: number | null;
  initialize: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  checkSubscription: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  isLoading: true,
  subscriptionEndsIn: null,

  initialize: async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        set({ user, profile });
        await get().checkSubscription();
      }
    } catch (error) {
      console.error('Error initializing auth:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    set({ user: data.user, profile });
    await get().checkSubscription();
  },

  signup: async (email: string, password: string, name: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: data.user.id,
            email,
            name,
            role: 'free',
          },
        ]);

      if (profileError) throw profileError;

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();

      set({ user: data.user, profile });
    }
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null, profile: null, subscriptionEndsIn: null });
  },

  checkSubscription: async () => {
    const { profile } = get();
    if (!profile || !profile.subscription_end) {
      set({ subscriptionEndsIn: null });
      return false;
    }

    const endDate = new Date(profile.subscription_end);
    const daysLeft = Math.ceil((endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    set({ subscriptionEndsIn: daysLeft });

    // Check if subscription has ended
    if (isPast(endDate)) {
      // Grace period of 1 month for data retention
      const gracePeriodEnd = addDays(endDate, 30);
      if (isPast(gracePeriodEnd)) {
        await get().logout();
        return false;
      }
    }

    return true;
  },
}));