import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import Footer from '../components/footer/index';
import Index from '../components/Index/IndexPage';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function Home() {
  return (
    <Page>
    
      <NextSeo
        title="STARTD - Template"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <Header />
        <Index />
      <Footer />
    </Page>
  );
}
