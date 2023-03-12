"use client";

import { Skeleton } from "@mantine/core";
import Link from "next/link";
import React, { Suspense } from "react";
import { FiPlus } from "react-icons/fi";
import BlogCard from "../shared/BlogCard";
import Button from "../shared/Button";

function Blogs({ posts }: { posts: any }) {
  const [endNum, setEndNum] = React.useState(6);
  return (
    <div>
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
            {posts.slice(0, endNum).map((blog: any) => {
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
        <Button
          variant='outline'
          onClick={() => setEndNum(endNum + 3)}
          rightIcon={<FiPlus />}>
          Load more articles
        </Button>
      </div>
    </div>
  );
}

export default Blogs;
