import styles from "./styles.module.css";
import CustomContainer from "@/components/shared/Container";
import Card from "@/components/shared/Card";
import Header from "@/components/blogs/Header";
import Image from "next/image";
import React from "react";
import Author from "@/components/blog/Author";
import type { Metadata } from "next";

async function getArticle(slug: string) {
  const response = await fetch(
    `http://localhost:3000/api/article?slug=${slug}`
  );

  const { data } = await response.json();

  return data;
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const data = await getArticle(params.slug);

  return {
    title: data?.post.title,
    description: data?.post.brief,
    authors: {
      name: data?.post.author.name,
      url: data?.post.author.url,
    },
    publisher: data?.post.author.name,
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

  const data = await getArticle(slug);

  return (
    <div>
      <Header data={data} />
      <div>
        <div>
          <div className='space-y-10'>
            <div className='mx-auto max-w-3xl lg:max-w-4xl'>
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

            <CustomContainer
              py={"lg"}
              my={"lg"}
              size={"sm"}
              className='text-center'>
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
            </CustomContainer>

            <CustomContainer size={"sm"}>
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: data?.post.content,
                }}
              />
            </CustomContainer>

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
      </div>
    </div>
  );
}

export default Blog;
