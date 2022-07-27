import Head from "next/head";
import GoogleCloud from "../components/googleCloud/googleCloudPage";
import Layout from "../components/Layout/Layout";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Layout>
        <GoogleCloud />
      </Layout>
    </>
  );
}