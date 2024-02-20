export interface NodePost {
  node: Post;
}

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  brief: string;
  slug: string;
  isFollowed: boolean;
  publishedAt: string;
  coverImage: {
    url: string;
  };
  content: {
    markdown: string;
  };
  author: Author;
  readTimeInMinutes: number;
  views: number;
  reactionCount: number;
  updatedAt: string;
  seo: Seo;
  tags: Tag[];
}

interface Author {
  name: string;
  profilePicture: string;
}

interface Seo {
  title: string;
  description: string;
}

interface Tag {
  id: string;
  name: string;
  info: {
    text: string;
  };
}

export interface Publication {
  id: string;
  post: Post;
}
