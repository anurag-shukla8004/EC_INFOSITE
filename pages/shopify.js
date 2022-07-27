import Head from "next/head";
import Shopify from "../components/shopify/shopifyPage";
import Layout from "../components/Layout/Layout";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Layout>
        <Shopify />
      </Layout>
    </>
  );
}