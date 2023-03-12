import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import ThemeProvider from "@/context/ThemeProvider";
export const metadata = {
  title: "Rukewe Joseph | Javascript Developer",
  description:
    "Rukewe Joseph's portfolio website showcases his skills, experience, and projects to potential employers and clients. Built using Next.js and TypeScript, the website features a responsive design, dark mode toggle, and animations for an engaging user experience.",
  robots: "index, follow",
  keywords:
    "Rukewe Joseph, Software Engineer, Javascript Developer, Full Stack Developer, Rukewe Joseph Portfolio Website, Blog, Rukewe Joseph Blog",
  generator: "Next.js",
  manifest: "/manifest.json",
  icons: {
    icon: {
      sizes: "32x32",
      url: "/favicon.ico",
      rel: "icon",
      type: "image/png",
    },
    apple: "/apple-touch-icon.png",
  },
  category: "Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ThemeProvider>
        <body>
          {children}
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
