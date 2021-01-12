import Head from "next/head";

export default function Layout({ children }) {
  const data = async () => {
    const todaLaData = await fetch(
      "https://geo.ipify.org/api/v1?apiKey=at_o4xhBh8I7V1hewte23RKs60EG7kl6&ipAddress=201.231.175.210"
    );

    return todaLaData;
  };

  console.log({ data });
  return (
    <div>
      <Head>
        <title>IP Adress Tracker</title>
        <meta property="og:title" content="IP Adress Tracker" key="title" />
        <meta name="description" content="Lo dicho" />
      </Head>
      <main id="main">{children}</main>
    </div>
  );
}
