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
  const [ipData, setIpData] = React.useState("");
  const [initialIp, setInitialIp] = React.useState(null);

  React.useEffect(async () => {
    const data = await fetch(`${server}/api/getIp`);
    const ip = await data.json();
    try {
      setInitialIp(ip.ip);
    } catch (err) {
      console.log(err);
    }
  }, []);

  React.useEffect(async () => {
    if (initialIp) {
      const data = await fetch(`api/getData/${initialIp}`);
      const json = await data.json();
      try {
        setIpData(json);
      } catch (err) {
        console.log(err);
      }
    }
  }, [initialIp]);

  const updateData = (data) => {
    setIpData(data);
  };

  return (
    <Layout>
      <Top updateData={updateData} />
      <InfoContainer data={ipData} />
      <Map data={ipData} />
    </Layout>
  );
}
