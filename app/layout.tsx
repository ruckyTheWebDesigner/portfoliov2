import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/context/ThemeProvider";

export const metadata = {
  title: "Rukewe Joseph | Javascript Developer | Portfolio Website",
  description:
    "Rukewe Joseph is a software engineer and full-stack Javascript developer. Check out his portfolio website to see his skills, experience, and projects, and read his blog for insights into web development and Javascript.",
  robots: "index, follow",
  keywords:
    "Rukewe Joseph, Software Engineer, Javascript Developer, Full Stack Developer, Portfolio Website, Blog, Web Development, Javascript",
  generator: "Next.js",
  manifest: "/manifest.json",
  category: "Portfolio",
  creator: "Rukewe Joseph",
  publisher: "Rukewe Joseph",
  openGraph: {
    type: "website",
    url: "https://www.rukewejoseph.com",
    title: "Rukewe Joseph | Javascript Developer | Portfolio Website",
    description:
      "Rukewe Joseph is a software engineer and full-stack Javascript developer. Check out his portfolio website to see his skills, experience, and projects, and read his blog for insights into web development and Javascript.",
    siteName: "Rukewe Joseph Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 200,
        height: 200,
        alt: "Rukewe Joseph Portfolio Website",
      },
    ],
  },
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
          {/* <Analytics /> */}
        </body>
      </ThemeProvider>
    </html>
  );
}
