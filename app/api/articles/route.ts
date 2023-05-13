import { fetchArticles } from "@/utils/articles";
import { get } from "@vercel/edge-config";

export async function GET(request: Request) {
  const articles = await fetchArticles();
  const greeting = await get("greeting");

  console.log(greeting, "greeting");

  return new Response(JSON.stringify(articles), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
