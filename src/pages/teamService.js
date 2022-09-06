import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';
import TeamService from '../components/teamService/index';

export default function Home() {
  return (
    <Page>
      <TeamService />
      <Clutch />
      <Footer />
    </Page>
  );
}
