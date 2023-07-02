'use client';

import {
  ColorScheme,
  MantineProvider,
  MantineThemeOverride,
} from '@mantine/core';
import { usePreferencesStore } from '@/stores/preferences';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

// import { Noto_Sans } from 'next/font/google';
// const NotoSans = Noto_Sans({
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
// });

export default function AppTheme({ children }: { children: React.ReactNode }) {
  const { theme } = usePreferencesStore();

  const config: MantineThemeOverride = {
    colorScheme: theme as ColorScheme,
    fontFamily: 'Noto Sans, Inter, sans-serif',
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
