import BlogCard from "@/components/shared/BlogCard";
import NavBar from "@/components/shared/NavBar";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Skeleton from "@/components/shared/Skeleton";
import Link from "next/link";
import { Suspense } from "react";
import { FooterCentered } from "@/components/shared/Footer";
import { FiPlus } from "react-icons/fi";

export default async function Blogs() {
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
    <div>
      <NavBar />
      <div className='py-6 lg:py-10 container mx-auto px-4 lg:px-14 xl:px-36'>
        <div className='mb-6 flex justify-between items-center'>
          <h6 className='text-lg font-medium text-teal-500'> Latest Blogs</h6>

          <Suspense
            fallback={<Skeleton height={"30px"} width={"100px"} radius='md' />}>
            <span className='px-4 font-semibold text-xl'>
              {posts.length} Article{posts.length > 1 ? "s" : ""}
            </span>
          </Suspense>
        </div>

        <div>
          <Suspense
            fallback={
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <Skeleton height={"250px"} radius='md' />
                <Skeleton height={"250px"} radius='md' />
                <Skeleton height={"250px"} radius='md' />
                <Skeleton height={"250px"} radius='md' />
              </div>
            }>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {posts.map((blog: any) => {
                return (
                  <Link href={`/blogs/${blog.slug}`} key={blog._id}>
                    <BlogCard
                      key={blog.title}
                      title={blog.title}
                      description={blog.brief}
                    />
                  </Link>
                );
              })}
            </div>
          </Suspense>
        </div>

        <div className='flex flex-col items-center mt-10 md:mt-16'>
          <Button variant='outline' rightIcon={<FiPlus />}>
            Load more articles
          </Button>
        </div>
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
