import Head from "next/head";
import PytDev from "../components/pytDev/pytDevPage";
import Layout from "../components/Layout/Layout";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Layout>
        <PytDev />
      </Layout>
    </>
  );
}