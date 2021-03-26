import { fetchAPI } from '../../lib/api'

export default async (req, res) => {
  const refreshed = await fetchAPI();
  res.status(200).json(refreshed);
}
