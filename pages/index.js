import Layout from "../components/Layout";
import React from "react";
import dynamic from "next/dynamic";
import Top from "../components/Top";
import InfoContainer from "../components/InfoContainer";

export default function App() {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });

  return (
    <Layout>
      <Top />
      <InfoContainer />
      <Map />
    </Layout>
  );
}
