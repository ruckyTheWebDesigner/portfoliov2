import CustomContainer from "@/components/shared/Container";
import { FooterCentered } from "@/components/shared/Footer";
import MoreArticles from "@/components/shared/MoreArticles";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch("http://localhost:3000/api/articles");
  const data = await response.json();

  const {
    data: {
      user: {
        publication: { posts },
      },
    },
  } = data;

  return (
    <html lang='en'>
      <body className='space-y-12 lg:space-y-18'>
        {children}

        <CustomContainer size={"md"}>
          <MoreArticles posts={posts} />
        </CustomContainer>

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
