import { create } from 'zustand';

interface PreferencesStore {
  theme: string;
  locale: string;
  setTheme: (value: string) => void;
  setLocale: (value: string) => void;
}

export const usePreferencesStore = create<PreferencesStore>((set) => ({
  theme: 'light',
  locale: 'us-en',
  setTheme: (value) => set({ theme: value }),
  setLocale: (value) => set({ locale: value }),
}));
