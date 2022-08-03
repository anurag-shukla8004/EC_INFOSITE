import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import FreeVocal from '@/components/freeVocal/freeVocalPage.js';
import Footer from '@/components/footer';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function Home() {
  return (
    <Page>
    
      <NextSeo
        title="STARTD - Template"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <FreeVocal />
      
      <Footer />
    </Page>
  );
}