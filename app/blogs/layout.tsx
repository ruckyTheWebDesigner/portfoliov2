// "use client";
// import { MantineProvider } from "@mantine/core";
import { FooterCentered } from "@/components/shared/Footer";
import MoreArticles from "@/components/shared/MoreArticles";

export const metadata = {
  title: "Rukewe Joseph | Blog",
  description: "Rukewe Joseph's blog.",
};

export default async function Layout({
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
