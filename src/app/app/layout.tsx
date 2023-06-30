'use client';

import { AppShell } from '@mantine/core';
import { AppLeftSidebar } from '@/components/layout/AppLeftSidebar';
import { AppBar } from '@/components/layout/AppBar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell navbar={<AppLeftSidebar />} header={<AppBar />}>
      {children}
    </AppShell>
  );
}
