import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';
import LabCore from '../components/Pricing/pricingPage.js';

export default function Home() {
  return (
    <Page>
      <LabCore />
      <Clutch />
      <Footer />
    </Page>
  );
}
