import '@/assets/styles/main.scss';
import Base from '@/app/base';

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
      <body>
        <Base>{children}</Base>
      </body>
    </html>
  );
}
