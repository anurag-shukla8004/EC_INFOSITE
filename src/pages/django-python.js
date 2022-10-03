import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';
import PytDev from '../components/pytDev/pytDevPage.js';

export default function Home() {
  return (
    <Page>
      <PytDev />
      <Clutch />
      <Footer />
    </Page>
  );
}
