import Layout from "../components/Layout";
import React from "react";
import dynamic from "next/dynamic";
import Top from "../components/Top";
import InfoContainer from "../components/InfoContainer";

const dev = process.env.NODE_ENV !== "production";
const server = dev
  ? "http://localhost:3000"
  : "https://ip-adress-tracker-omega.vercel.app";

export default function App() {
  
  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  
  const [initialIp, setInitialIp] = React.useState(null);
  React.useEffect(async () => {
    const data = await fetch(`${server}/api/getIp`);
    const ip = await data.json();
    setInitialIp(ip.ip);
  }, []);
  console.log(initialIp)

  const [ipData, setIpData] = React.useState("");
  const updateData = (data) => {
    setIpData(data);
  };
  
  return (
    <Layout>
      <Top updateData={updateData} initialIp={initialIp} />
      <InfoContainer data={ipData} />
      <Map data={ipData} initialIp={initialIp}/>
    </Layout>
  );
}
