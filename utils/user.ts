const endpoint = "https://api.hashnode.com/";

const QUERY = `
{
    user(username: "rukewe") {
      username
      name
      photo
    }
  }
`;

export const fetchUser = async () => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY,
    }),
  });

  const data = await response.json();

  return data;
};
