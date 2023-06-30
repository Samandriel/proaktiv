'use client';

import { MantineProvider, ColorScheme } from '@mantine/core';
import { usePreferencesStore } from '@/stores/preferences';

export default function AppTheme({ children }: { children: React.ReactNode }) {
  const { theme } = usePreferencesStore();

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: theme as ColorScheme }}
    >
      {children}
    </MantineProvider>
  );
}
