import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
export const metadata = {
  title: "Rukewe Joseph | Javascript Developer",
  description:
    "Rukewe Joseph's portfolio website showcases his skills, experience, and projects to potential employers and clients. Built using Next.js and TypeScript, the website features a responsive design, dark mode toggle, and animations for an engaging user experience.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
