import { fetchArticle } from "@/utils/articles";

export async function GET(request: Request) {
  // const { slug } = request.params;
  const url = new URL(request.url);

  //   console.log(url, "url");

  //   console.log(url.searchParams.get("slug"));

  const slug = url.searchParams.get("slug");
  const articles = await fetchArticle(slug as string);
  return new Response(JSON.stringify(articles), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
