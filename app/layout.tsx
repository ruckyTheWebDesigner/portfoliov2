"use client";
import { MantineProvider } from "@mantine/core";
import "./globals.css";
// import { MantineProvider } from "@mantine/core";

// export const metadata = {
//   title: "Rukewe Joseph | Javascript Developer",
//   description:
//     "Rukewe Joseph's portfolio website showcases his skills, experience, and projects to potential employers and clients. Built using Next.js and TypeScript, the website features a responsive design, dark mode toggle, and animations for an engaging user experience.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "dark",
        primaryColor: "teal",
      }}>
      <html lang='en'>
        <body>{children}</body>
      </html>
    </MantineProvider>
  );
}
