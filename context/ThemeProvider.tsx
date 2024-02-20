"use client";

import { MantineProvider } from "@mantine/core";

export default function ThemeProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <MantineProvider
      theme={{
        primaryColor: "teal",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
      }}>
      {children}
    </MantineProvider>
  );
}
