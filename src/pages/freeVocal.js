import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import FreeVocal from '../components/freeVocal/freeVocalPage.js';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <FreeVocal />
      <Clutch />
      <Footer />
    </Page>
  );
}
