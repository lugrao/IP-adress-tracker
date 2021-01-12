import Layout from "../components/Layout";
import React from "react";
import dynamic from "next/dynamic";
import Top from "../components/Top";

export default function App() {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });

  const [ipData, setIpData] = React.useState("");
  const updateData = (data) => {
    setIpData(data);
  }
  return (
    <Layout>
      <Top updateData={updateData} />
      <Map data={ipData} />
    </Layout>
  );
}
