"use client";

import { MantineProvider } from "@mantine/core";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        primaryColor: "teal",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
      }}>
      {children}
    </MantineProvider>
  );
}
