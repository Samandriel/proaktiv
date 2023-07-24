'use client';

import {
  ColorScheme,
  MantineProvider,
  MantineThemeOverride,
} from '@mantine/core';
import { usePreferencesStore } from '@/stores/preferences';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Noto_Sans } from 'next/font/google';
import { useEffect } from 'react';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const notoSans = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function AppTheme({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = usePreferencesStore();
  useEffect(() => {
    setTheme(theme);
  });

  const config: MantineThemeOverride = {
    colorScheme: theme as ColorScheme,
    fontFamily: `${notoSans.style.fontFamily}, Inter, sans-serif`,
    globalStyles: (mantineStyle) => ({
      body: {
        backgroundColor: 'var(--color-body-background)',
        color: 'var(--color-text)',
        lineHeight: 'normal',
      },
    }),
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...config }}>
        {children}
      </MantineProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
