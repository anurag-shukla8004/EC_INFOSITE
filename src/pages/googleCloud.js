import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import ContactUs from '../components/googleCloud/googleCloudPage.js';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <ContactUs />
      <Clutch />
      <Footer />
    </Page>
  );
}
