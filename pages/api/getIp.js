export default async function handler(req, res) {
  const ip = req.headers["x-forwarded-for"];

  res.json({ ip: ip });
}
