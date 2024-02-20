"use client";

import { NodePost } from "@/utils/types";
import Link from "next/link";
import BlogCard from "./BlogCard";

import Button from "./Button";

function MoreArticles({ posts }: { readonly posts: NodePost[] }) {
  return (
    <div className='space-y-6 lg:space-y-8 flex flex-col items-center'>
      <div>
        <span className='text-lg md:text-xl lg:text-2xl font-bold text-center dark:text-slate-300'>
          More Articles{" "}
        </span>
      </div>
      <div className='grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 items-center'>
        {posts?.slice(0, 5).map((article) => {
          return (
            <Link href={`/blog/${article.node.slug}`} key={article.node.id}>
              <BlogCard node={article.node} />
            </Link>
          );
        })}
      </div>

      <div className='flex justify-center'>
        <Link href={"/blog"}>
          <Button variant='outline'>View All</Button>
        </Link>
      </div>
    </div>
  );
}

export default MoreArticles;
