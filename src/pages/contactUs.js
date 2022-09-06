import Clutch from '../components/Clutch';
import ContactUs from '../components/contactUs/contactUsPage.js';
import Footer from '../components/footer';
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
