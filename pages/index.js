import Layout from "../components/Layout";
import React from "react";
import dynamic from "next/dynamic"

const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://ip-adress-tracker-omega.vercel.app";

export default function App() {
  React.useEffect(async () => {
    const data = await fetch(`${server}/api/getIp`);
    const ip = await data.json();
    setInput(ip.ip);
  }, []);

  const [input, setInput] = React.useState("Cargando...");
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const Map = dynamic(
    () => import("../components/Map"),
    { ssr: false }
  )

  return (
    <Layout>
      <h1>buenas</h1>
      <p>{input}</p>
      <input type="text" onChange={handleInput} value={input}></input>
      <Map />
    </Layout>
  );
}
