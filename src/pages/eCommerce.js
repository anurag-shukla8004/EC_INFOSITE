import Clutch from '../components/Clutch';
import LabCore from '../components/eCommerce/eCommercePage.js';
import Footer from '../components/footer';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <LabCore />
      <Clutch />
      <Footer />
    </Page>
  );
}
