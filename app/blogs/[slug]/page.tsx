import styles from "./styles.module.css";
import Card from "@/components/shared/Card";
import Header from "@/components/blogs/Header";
import Image from "next/image";
import React from "react";
import Author from "@/components/blog/Author";
import type { Metadata } from "next";

import { fetchArticle } from "@/utils/articles";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const { data } = await fetchArticle(params.slug);

  return {
    title: data?.post?.title,
    description: data?.post?.brief,
    authors: {
      name: data?.post.author?.name,
      url: data?.post.author?.url,
    },
    publisher: data?.post.author?.name,
    keywords: data?.post.tags,
    robots: {
      follow: true,
      index: true,
      googleBot: {
        follow: true,
        index: true,
      },
    },
  };
}

async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;

  const { data } = await fetchArticle(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sleektechnology.hashnode.dev/${slug}`,
    },
    headline: data?.post.title,
    image: data?.post.coverImage,
    datePublished: data?.post.dateAdded,
    dateModified: data?.post.dateUpdated,
  };

  return (
    <>
      <Header data={data} />
      <section>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div>
          <div className='space-y-10'>
            <div className='mx-auto max-w-3xl lg:max-w-4xl px-4'>
              {data?.post.coverImage ? (
                <Image
                  width={1000}
                  height={300}
                  loading='eager'
                  className='object-fit rounded-md aspect-video'
                  alt=''
                  src={data?.post.coverImage}
                />
              ) : null}
            </div>

            <div className='text-center max-w-2xl lg:max-w-4xl mx-auto'>
              <div className='space-y-6 lg:space-y-10 flex flex-col items-center px-4'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-black leading-10 '>
                  {data?.post.title}
                </h1>

                <div className='flex items-center space-x-5'>
                  <div className='flex items-center space-x-4'>
                    <Image
                      alt='author'
                      src={data?.post.author.photo}
                      width={35}
                      height={35}
                      className='rounded-full'
                    />
                    <p className='font-semibold text-sm'>
                      {data?.post.author.name}
                    </p>
                  </div>
                  <div>
                    <ul className='list-disc'>
                      <li className='text-sm'>
                        {new Date(data?.post.dateAdded).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <MyComponent html={data?.post.content} />

            <section className='space-y-10 lg:space-y-14'>
              <div className='flex gap-4 justify-center flex-wrap'>
                {data?.post.tags.map((tag: { name: string }) => {
                  return (
                    <Card
                      key={tag.name}
                      className='h-full text-sm font-semibold'>
                      {tag.name}
                    </Card>
                  );
                })}
              </div>

              <div className='py-8 border-t border-b border-slate-700'>
                <div className='flex flex-col items-center'>
                  <Author
                    name={data?.post.author.name}
                    photo={data?.post.author.photo}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

function MyComponent(props: { html: string }) {
  return (
    <div
      className={`${styles.content} max-w-2xl lg:max-w-4xl mx-auto px-4`}
      dangerouslySetInnerHTML={{ __html: props.html }}></div>
  );
}

export default Blog;
