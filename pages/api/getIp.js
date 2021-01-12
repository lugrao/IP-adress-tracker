export default async function handler(req, res) {
  const ip = dev ? "201.231.175.210" : req.headers["x-forwarded-for"];

  res.json({ ip: ip });
}

const dev = process.env.NODE_ENV !== "production";
