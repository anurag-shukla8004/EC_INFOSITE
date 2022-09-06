import Clutch from '../components/Clutch';
import Footer from '../components/footer/index';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <div className='clutchBox'>
      <Clutch />
      </div>
     
      <Footer />
    </Page>
  );
}