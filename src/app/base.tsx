'use client';

import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { usePreferencesStore } from '@/stores/preferences';
// import { Noto_Sans } from 'next/font/google';
// const NotoSans = Noto_Sans({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
// });

const config: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: 'Noto Sans, Inter, sans-serif',
};

export default function AppTheme({ children }: { children: React.ReactNode }) {
  const { theme } = usePreferencesStore();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...config }}>
      {children}
    </MantineProvider>
  );
}
