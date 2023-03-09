import { fetchArticles } from "@/utils/articles";

export async function GET(request: Request) {
  const articles = await fetchArticles();

  console.log(articles, "articles");
  return new Response(JSON.stringify(articles), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
