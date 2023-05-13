export const metadata = {
  title: "Rukewe Joseph | Blog",
  description: "Rukewe Joseph's blog.",
  robots: "index, follow",
  keywords:
    "Rukewe Joseph, Rukewe, Joseph, Rukewe Joseph Blog, Rukewe Joseph Blog Website",
  generator: "Next.js",
  manifest: "/manifest.json",
  category: "Blog",
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
