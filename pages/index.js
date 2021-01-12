import Layout from "../components/Layout";
import React from "react";
import dynamic from "next/dynamic";
import Top from "../components/Top";
import InfoContainer from "../components/InfoContainer";

export default function App() {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });

  const [ipData, setIpData] = React.useState("");
  const updateData = (data) => {
    console.log(data);
    setIpData(data);
  }
  return (
    <Layout>
<<<<<<< HEAD
      <Top updateData={updateData} />
      <Map data={ipData} />
=======
      <Top />
      <InfoContainer />
      <Map />
>>>>>>> 0c4cc9af2e586d7326bc81a411d22c9eff1c5ce9
    </Layout>
  );
}
