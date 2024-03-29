import { FooterCentered } from "@/components/shared/Footer";
import MoreArticles from "@/components/shared/MoreArticles";
import { fetchArticles } from "@/utils/articles";

export default async function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const posts = await fetchArticles();

  return (
    <html lang='en'>
      <body className='space-y-12 lg:space-y-18'>
        {children}

        <div className='px-4 md:max-w-3xl lg:max-w-5xl mx-auto'>
          <MoreArticles posts={posts} />
        </div>

        <FooterCentered
          links={[
            {
              link: "/",
              label: "Home",
            },
          ]}
        />
      </body>
    </html>
  );
}
