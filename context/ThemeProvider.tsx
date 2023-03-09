"use client";

import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  createEmotionCache,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

import rtlPlugin from "stylis-plugin-rtl";

export const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});

export default function Demo({ children }: { children: React.ReactNode }) {
  // useColorScheme hook will return either 'dark' or 'light' on client
  // hook will return either 'dark' or 'light' on client
  // and always 'light' during ssr as window.matchMedia is not available
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);

  // console.log(colorScheme, preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={preferredColorScheme}
      toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        emotionCache={rtlCache}
        theme={{ dir: "rtl", colorScheme: "dark", components: {} }}
        // theme={{ colorScheme: "dark", components: {} }}
        withGlobalStyles
        withNormalizeCSS>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
