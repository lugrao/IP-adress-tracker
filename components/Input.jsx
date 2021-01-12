import React from "react";

const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://ip-adress-tracker-omega.vercel.app";

const Input = () => {
  React.useEffect(async () => {
    const data = await fetch(`${server}/api/getIp`);
    const ip = await data.json();
    setInput(ip.ip);
  }, []);

  const [input, setInput] = React.useState("Cargando...");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return <input type="text" onChange={handleInput} value={input}></input>;
};

export default Input;
