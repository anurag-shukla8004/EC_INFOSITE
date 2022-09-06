import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';
import PrivacyPolicy from '../components/privacyPolicy/index';

export default function Home() {
  return (
    <Page>
      <PrivacyPolicy />
      <Clutch />
      <Footer />
    </Page>
  );
}
