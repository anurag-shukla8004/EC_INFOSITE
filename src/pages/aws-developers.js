import FreeVocal from '../components/awsPartner/awsPartnerPage.js';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
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
