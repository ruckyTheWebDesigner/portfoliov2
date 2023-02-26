const endpoint = "https://api.hashnode.com/";
const apiKey = "7df95377-352a-4181-8e01-08e6833f82c6";

const mutation = `
mutation {
    followUser(userId : "rukewe") {
      code
        success
        message
    }
    }
`;

export const followUser = async () => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify({
      query: mutation,
    }),
  });

  const data = await response.json();
  return data;
};
