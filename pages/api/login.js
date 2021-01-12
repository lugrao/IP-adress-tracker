export default async function handler(req, res) {
  const apiKey = "at_o4xhBh8I7V1hewte23RKs60EG7kl6";
  const ip = dev ? "201.231.175.210" : req.headers["x-forwarded-for"];
  const URL = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`;
  const getInfo = await fetch(URL);
  const json = await getInfo.json();
  res.status(200).json(json);
}

const dev = process.env.NODE_ENV !== "production";
