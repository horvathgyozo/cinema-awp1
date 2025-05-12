import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      login: (user: User, token: string) =>
        set({ user, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
    }),
    { name: "auth-storage" }
  )
);
