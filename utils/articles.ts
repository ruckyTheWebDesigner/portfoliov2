import { NodePost, Post, Publication } from "./types";

const endpoint = "https://gql.hashnode.com";
const ARTICLE_QUERY = `
  {
    publication(host: "sleektechnology.hashnode.dev") {
      id
                posts(first: 0){
           edges {
             node {
               id
               title
               subtitle
               brief
               slug
               isFollowed
               publishedAt
               coverImage {
                 url
               }
               content {
                 markdown
               }
             }
           }
         }
       }
  }

`;

const apiKey = process.env.NEXT_PUBLIC_HASHNODE_KEY;

export const fetchArticles = async () => {
  try {
    const response = await fetch(endpoint, {
      // revalide every 10 minutes
      next: {
        revalidate: 600,
      },

      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        query: ARTICLE_QUERY,
      }),
    });

    const data = await response.json();

    const {
      data: {
        publication: {
          posts: { edges: posts },
        },
      },
    } = data;

    return posts as NodePost[];
  } catch (error) {
    console.log(error, "error");
    throw error;
  }
};

export const fetchArticle = async (slug: string) => {
  try {
    const ARTICLE_QUERY_BY_SLUG = `
  {

    publication(host: "sleektechnology.hashnode.dev") {
      id
            post(slug: "${slug}") {
                          id
                    title
                    subtitle
                    brief
                    slug
                    isFollowed
                    publishedAt
                    coverImage {
                      url
                    }
                    content {
                      markdown
                    }
                    author {
                      profilePicture
                      name
                    }
         }
       }
  }
  `;

    const response = await fetch(endpoint, {
      // revalide every 10 minutes
      next: {
        revalidate: 600,
      },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ query: ARTICLE_QUERY_BY_SLUG }),
    });

    const {
      data: {
        publication: { post },
      },
    } = await response.json();

    return post as Publication["post"];
  } catch (error) {
    console.log(error, "error");
    throw error;
  }
};
