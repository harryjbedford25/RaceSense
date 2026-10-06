import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);

  useEffect(() => {
    if (!supabase) {
      console.error('Supabase client not initialized');
      setAuthChecked(true);
      setIsLoadingAuth(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setAuthChecked(true);
      setIsLoadingAuth(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setAuthChecked(true);
      setIsLoadingAuth(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkUserAuth = async () => {
    if (!supabase) {
      setAuthError({ type: 'auth_error', message: 'Supabase not initialized' });
      setIsLoadingAuth(false);
      return;
    }

    setIsLoadingAuth(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
      setAuthChecked(true);
    } catch (error) {
      setAuthError({ type: 'auth_error', message: error.message });
    } finally {
      setIsLoadingAuth(false);
    }
  };

  const signIn = async (email, password) => {
    if (!supabase) throw new Error('Supabase not initialized');
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  };

  const signUp = async (email, password) => {
    if (!supabase) throw new Error('Supabase not initialized');
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}`,
      },
    });
    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    if (!supabase) throw new Error('Supabase not initialized');
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    window.location.href = '/';
  };

  const resetPassword = async (email) => {
    if (!supabase) throw new Error('Supabase not initialized');
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) throw error;
  };

  const updatePassword = async (newPassword) => {
    if (!supabase) throw new Error('Supabase not initialized');
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    if (error) throw error;
  };

  const navigateToLogin = () => {
    window.location.href = '/login';
  };

  const value = {
    user,
    session,
    isAuthenticated: !!user,
    isLoadingAuth,
    authChecked,
    authError,
    isLoadingPublicSettings,
    checkUserAuth,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updatePassword,
    navigateToLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
