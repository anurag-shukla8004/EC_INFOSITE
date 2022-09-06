import Blog from '../components/blog/blogPage.js';
import Footer from '../components/footer';
import Page from '../components/page';


export default function Home() {
  return (
    <Page>
      <Blog />
      <Footer />
    </Page>
  );
}
