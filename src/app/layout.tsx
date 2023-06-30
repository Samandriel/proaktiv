import './globals.scss';
import { Noto_Sans } from 'next/font/google';
import AppTheme from '@/app/app-theme';
const NotoSans = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'ProAktiv',
  description: 'Cross-platform productivity toolset',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={NotoSans.className}>
        <AppTheme>{children}</AppTheme>
      </body>
    </html>
  );
}
