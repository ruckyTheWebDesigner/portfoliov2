"use client";

import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";

import Button from "./Button";

function MoreArticles({ posts }: { posts: any }) {
  return (
    <div className='space-y-6 lg:space-y-8 flex flex-col items-center'>
      <div>
        <span className='text-lg md:text-xl lg:text-2xl font-bold text-center dark:text-slate-300'>
          More Articles{" "}
        </span>
      </div>
      <div className='grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 items-center'>
        {posts?.slice(0, 5).map((article: any) => {
          return (
            <Link href={`/blogs/${article.slug}`} key={article._id}>
              <BlogCard title={article.title} description={article.brief} />
            </Link>
          );
        })}
      </div>

      <div className='flex justify-center'>
        <Link href={"/blogs"}>
          <Button variant='outline'>View All</Button>
        </Link>
      </div>
    </div>
  );
}

export default MoreArticles;
