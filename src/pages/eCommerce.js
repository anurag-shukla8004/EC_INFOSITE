import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import LabCore from '@/components/eCommerce/eCommercePage.js';
import Footer from '@/components/footer';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function Home() {
  return (
    <Page>
    
      <NextSeo
        title="STARTD - Template"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <LabCore />
      
      <Footer />
    </Page>
  );
}