import NavBar from "@/components/shared/NavBar";
import Skeleton from "@/components/shared/Skeleton";
import { Suspense } from "react";
import { FooterCentered } from "@/components/shared/Footer";

import BlogsContent from "@/components/blog/Blogs";

import { fetchArticles } from "@/utils/articles";

export default async function Blogs() {
  const data = await fetchArticles();

  const {
    data: {
      user: {
        publication: { posts },
      },
    },
  } = data;

  return (
    <div>
      <NavBar />
      <div className='py-6 lg:py-10 container mx-auto px-4 lg:px-14 xl:px-36 2xl:px-60 mt-3'>
        <div className='mb-6 flex justify-between items-center'>
          <h6 className='text-lg font-medium text-teal-500'> Latest Blogs</h6>

          <Suspense
            fallback={<Skeleton height={"30px"} width={"100px"} radius='md' />}>
            <span className='px-4 font-semibold text-xl'>
              {posts.length} Article{posts.length > 1 ? "s" : ""}
            </span>
          </Suspense>
        </div>

        <BlogsContent posts={posts} />
      </div>

      <div>
        <FooterCentered
          links={[
            {
              link: "/",
              label: "Home",
            },
          ]}
        />
      </div>
    </div>
  );
}
