import Head from "next/head";
import AwsPartner from "../components/awsPartner/awsPartnerPage";
import Layout from "../components/Layout/Layout";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Layout>
        <AwsPartner />
      </Layout>
    </>
  );
}