import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import LeaderShip from '../components/leaderShip';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <LeaderShip />
      <Clutch />
      <Footer />
    </Page>
  );
}
