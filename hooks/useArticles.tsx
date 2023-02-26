import { useQuery } from "@tanstack/react-query";
import React from "react";

function useArticles() {
  const { data, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await fetch("/api/articles");
      const data = await response.json();

      const {
        article: {
          data: {
            user: {
              publication: { posts },
            },
          },
        },
      } = data;

      return posts;
    },
  });

  return { data, isLoading };
}

export default useArticles;
