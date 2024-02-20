"use client";

import { NodePost, Post } from "@/utils/types";
import { Skeleton } from "@mantine/core";
import Link from "next/link";
import React, { Suspense } from "react";
import { FiPlus } from "react-icons/fi";
import BlogCard from "../shared/BlogCard";
import Button from "../shared/Button";

interface Props {
  posts: NodePost[];
}

function Blogs({ posts }: Readonly<Props>) {
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
            {posts.slice(0, endNum).map((blog) => {
              return (
                <Link href={`/blog/${blog.node.slug}`} key={blog.node.id}>
                  <BlogCard key={blog.node.id} node={blog.node} />
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
