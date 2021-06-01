export default async (req, res) => {
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&tag=cat`
  );
  const json = await resp.json();
  res.json(json.data);
};
