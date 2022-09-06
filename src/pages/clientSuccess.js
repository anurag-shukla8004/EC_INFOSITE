import ClientSuccess from '../components/clientSuccess/index';
import Clutch from '../components/Clutch/index';
import Footer from '../components/footer';
import Page from '../components/page';


export default function Home() {
  return (
    <Page>
      <ClientSuccess />
      <Clutch />
      <Footer />
    </Page>
  );
}
