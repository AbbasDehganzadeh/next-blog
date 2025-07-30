'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HeroUIProvider } from '@heroui/react';

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>
  <HeroUIProvider>{children}</HeroUIProvider>
  </QueryClientProvider>
}
