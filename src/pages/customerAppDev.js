import Clutch from '../components/Clutch';
import CustomerAppDev from '../components/customerAppDev/customerAppDevPage.js';
import Footer from '../components/footer';
import Page from '../components/page';


export default function Home() {
  return (
    <Page>
      <CustomerAppDev />
      <Clutch />
      <Footer />
    </Page>
  );
}
