import Clutch from '../components/Clutch';
import Footer from '../components/footer/index';
import LabCore from '../components/manufacturing/manufacturingPage';
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
