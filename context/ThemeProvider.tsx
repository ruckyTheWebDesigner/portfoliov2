"use client";

import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  createEmotionCache,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

// const emotionCache = createEmotionCache();

export default function ThemeProvider({ children }: any) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    console.log("value", value);
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    console.log("colorScheme", colorScheme);
  };

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
