import Link from "next/link";
import React from "react";
import useArticles from "../../hooks/useArticles";
import BlogCard from "../shared/Card";

import Button from "../shared/Button";

function MoreArticles() {
  const { data } = useArticles();

  return (
    <div className='space-y-6 lg:space-y-8 flex flex-col items-center'>
      <div>
        <span className='text-lg md:text-xl lg:text-2xl font-bold text-center dark:text-slate-300'>
          More Articles{" "}
        </span>
      </div>
      <div className='grid gap-4 md:gap-6 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {data?.slice(0, 5).map((article) => {
          return (
            <Link href={`/blogs/${article.slug}`} key={article._id}>
              <BlogCard title={article.title} description={article.brief} />
            </Link>
          );
        })}
      </div>

      <div className='flex justify-center'>
        <Button variant='default'>View All</Button>
      </div>
    </div>
  );
}

export default MoreArticles;
