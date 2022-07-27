import Head from "next/head";
import Index from "../components/agribusinesses/agribusinessesPage";
import Layout from "../components/Layout/Layout";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Layout>
        <Index />
      </Layout>
    </>
  );
}