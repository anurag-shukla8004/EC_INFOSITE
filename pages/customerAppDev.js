import Head from "next/head";
import CustomerAppDev from "../components/customerAppDev/customerAppDevPage";
import Layout from "../components/Layout/Layout";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>VPN Best Landingpage </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      </Head>
      <Layout>
        <CustomerAppDev/>
      </Layout>
    </>
  );
}
