export const fetchStars = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();

  return { stars: json.stargazers_count };
};
