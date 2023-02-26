const endpoint = "https://api.hashnode.com/";
const ARTICLE_QUERY = `
  {
    user(username: "rukewe") {
      publication {
        posts(page: 0) {
            _id
            title
            brief
            slug
            followersCount
            dateAdded
            coverImage
            contentMarkdown
            coverImage
        }
      }
    }
  }

`;

export const fetchArticles = async () => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.HASHNODE_API_KEY}`,
    },
    body: JSON.stringify({
      query: ARTICLE_QUERY,
    }),
  });

  const data = await response.json();

  return data;
};

const apiKey = "7df95377-352a-4181-8e01-08e6833f82c6";

export const fetchArticle = async (slug: string) => {
  const ARTICLE_QUERY_BY_SLUG = `
{
  post(slug: "${slug}", hostname: "sleektechnology.hashnode.dev") {
    sourcedFromGithub
    _id
    isRepublished
    followersCount
    cuid
    slug
    title
    type
    partOfPublication
    dateUpdated
    totalReactions
    numCollapsed
    isDelisted
    isFeatured
    isActive
    replyCount
    responseCount
    popularity
    dateAdded
    contentMarkdown
    content
    brief
    coverImage
    isAnonymous
    tags {
      name
    }
    reactions {
      reaction {
        image
        name
      }
      count
    }
    author {
      name
      photo
    }
    responses(page: 0) {
      popularity
      totalReactions
      replies {
        content
        dateAdded
      }
    }
  }
}
`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ query: ARTICLE_QUERY_BY_SLUG }),
  });

  const data = await response.json();

  return data;
};
