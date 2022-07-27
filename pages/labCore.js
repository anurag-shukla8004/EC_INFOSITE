import React from 'react'
import LabCore from '../components/labCore/labCorePage'
import Head from "next/head";
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
        <LabCore/>
      </Layout>
    </>
  );
}