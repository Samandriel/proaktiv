import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PreferencesStore {
  theme: string;
  locale: string;
  setTheme: (value: string) => void;
  setLocale: (value: string) => void;
}

export const usePreferencesStore = create(
  persist<PreferencesStore>(
    (set, get) => ({
      theme: 'dark',
      locale: 'us-en',
      setTheme: (value: string) => {
        const oldTheme = get().theme;
        const htmlDocumentClass = document.documentElement.classList;
        if (htmlDocumentClass.contains(oldTheme)) return;
        htmlDocumentClass.remove(oldTheme);
        htmlDocumentClass.add(value);
        set({ theme: value });
      },
      setLocale: (value: string) => set({ locale: value }),
    }),
    {
      name: 'preferences-storage',
    }
  )
);
