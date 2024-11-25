import Card from "@/components/shared/Card";
import Header from "@/components/blog/Header";
import Image from "next/image";
import Author from "@/components/blog/Author";
import type { Metadata } from "next";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { fetchArticle } from "@/utils/articles";
import { MemoizedReactMarkdown } from "@/components/shared/MemoizedReactMarkdown";
import MarkdownComponents from "@/components/shared/MarkDownComponents";
import { Components } from "react-markdown";

export async function generateMetadata(
  props: {
    params: Promise<{
      slug: string;
    }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  const post = await fetchArticle(slug);

  return {
    metadataBase: new URL("https://rukewejoseph.com"),
    title: post?.title,
    description: post?.brief,
    authors: {
      name: post.author?.name,
      url: post.author.profilePicture,
    },
    publisher: post.author?.name,
    keywords: post.tags ? post.tags.map((tag) => tag.name) : [],
    robots: {
      follow: true,
      index: true,
      googleBot: {
        follow: true,
        index: true,
      },
    },
    openGraph: {
      type: "article",
      url: `https://www.rukewejoseph.com/blog/${params.slug}`,
      title: post.title,
      description: post.brief,
      siteName: `${post.author.name} Portfolio | Blog`,
      images: post.coverImage ? [post.coverImage.url] : [],
      authors: [post.author.name],
      publishedTime: post.publishedAt,
    },
  };
}

async function Blog(
  props: {
    readonly params: Promise<{
      readonly slug: string;
    }>;
  }
) {
  const params = await props.params;
  const { slug } = params;

  const post = await fetchArticle(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.rukewejoseph.com/blog/${slug}`,
    },
    headline: post.title,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
  };

  return (
    <>
      <Header post={post} />
      <section>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div>
          <div className='space-y-10'>
            <div className='mx-auto max-w-3xl lg:max-w-4xl px-4'>
              {post.coverImage ? (
                <Image
                  width={1000}
                  height={300}
                  loading='eager'
                  className='object-fit rounded-md aspect-video'
                  alt={post.title}
                  src={post.coverImage.url}
                />
              ) : null}
            </div>

            <div className='text-center max-w-2xl lg:max-w-4xl mx-auto'>
              <div className='space-y-6 lg:space-y-10 flex flex-col items-center px-4'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-black leading-10 '>
                  {post.title}
                </h1>

                <div className='flex items-center space-x-5'>
                  <div className='flex items-center space-x-4'>
                    <Image
                      alt='author'
                      src={post.author.profilePicture}
                      width={35}
                      height={35}
                      className='rounded-full'
                    />
                    <p className='font-semibold text-sm'>{post.author.name}</p>
                  </div>
                  <div>
                    <ul className='list-disc'>
                      <li className='text-sm'>
                        {new Date(post.publishedAt).toLocaleDateString(
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

            <div className=' max-w-2xl lg:max-w-4xl mx-auto px-4'>
              <MemoizedReactMarkdown
                className='prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 leading-relaxed space-y-4'
                remarkPlugins={[remarkGfm, remarkMath]}
                components={MarkdownComponents as Partial<Components>}>
                {post.content.markdown}
              </MemoizedReactMarkdown>
            </div>

            <section className='space-y-10 lg:space-y-14'>
              <div className='flex gap-4 justify-center flex-wrap'>
                {post.tags
                  ? post.tags.map((tag: { name: string }) => {
                      return (
                        <Card
                          key={tag.name}
                          className='h-full text-sm font-semibold'>
                          {tag.name}
                        </Card>
                      );
                    })
                  : null}
              </div>

              <div className='py-8 border-t border-b border-slate-700'>
                <div className='flex flex-col items-center'>
                  <Author
                    name={post.author.name}
                    photo={post.author.profilePicture}
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

export default Blog;
