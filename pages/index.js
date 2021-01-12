import Layout from "../components/Layout";
import React from "react";
import dynamic from "next/dynamic";
import Input from "../components/Input";

export default function App() {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });

  return (
    <Layout>
      <h1>buenas</h1>
      <Input />
      <Map />
    </Layout>
  );
}
