import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>IP Adress Tracker</title>
                <meta property="og:title" content="IP Adress Tracker" key="title" />
                <meta
                    name="description"
                    content="Lo dicho"
                />
            </Head>
            <main id="main">{children}</main>
        </div>
    )
}
