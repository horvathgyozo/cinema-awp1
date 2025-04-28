import { create } from "zustand";

interface AuthStore {
  username: string;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  username: "",
  isAuthenticated: false,
  login: (username: string) => set({ username, isAuthenticated: true }),
  logout: () => set({ username: "", isAuthenticated: false }),
}));
