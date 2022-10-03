import Clutch from '../components/Clutch';
import Footer from '../components/footer/index';
import Header from '../components/home/index';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <Header />
      <Clutch/>
      <Footer />
    </Page>
  );
}
