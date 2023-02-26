import BlogCard from "@/components/shared/Card";
import NavBar from "@/components/shared/NavBar";
import Container from "@/components/shared/Container";
import Skeleton from "@/components/shared/Skeleton";
import Link from "next/link";
import { Suspense } from "react";
import { FooterCentered } from "@/components/shared/Footer";
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
      <Container size={"md"} py={"xl"} my={"xl"}>
        <div className='mb-6 flex justify-between items-center'>
          <h6 className='text-lg font-medium'> Latest Blogs</h6>

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
      </Container>

      <FooterCentered
        links={[
          {
            link: "/",
            label: "Home",
          },
        ]}
      />
    </div>
  );
}
