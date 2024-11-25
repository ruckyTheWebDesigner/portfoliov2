import { fetchArticle } from "@/utils/articles";

export async function GET(request: Request) {
  const url = new URL(request.url);

  try {
    const slug = url.searchParams.get("slug");
    const articles = await fetchArticle(slug as string);
    return new Response(JSON.stringify(articles), {
      status: 200,
    });
  } catch (error) {
    console.error(error, "An error occurred");
    return new Response("An error occurred", {
      status: 500,
    });
  }
}
