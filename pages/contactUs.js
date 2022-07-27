import Head from "next/head";
import ContactUs from "../components/contactUs/contactUsPage";
import Layout from "../components/Layout/Layout";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Layout>
        <ContactUs />
      </Layout>
    </>
  );
}