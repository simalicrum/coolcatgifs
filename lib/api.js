export async function fetchAPI() {
  const res = await fetch('https://api.giphy.com/v1/gifs/random?api_key=' + process.env.GIPHY_API_KEY + "&tag=cat");
  const json = await res.json();
  if(json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API');
  }
  return json.data;
}