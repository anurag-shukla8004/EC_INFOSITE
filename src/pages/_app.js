import { NextSeo } from 'next-seo';
import { setup } from 'twind';
import '../styles/404.css';
import '../styles/blog.css';
import '../styles/blogReadMore.css';
import '../styles/clientSuccess.css';
import '../styles/contactUs.css';
import '../styles/customerAppDev.css';
import '../styles/eCommerce.css';
import '../styles/freeVocal.css';
import '../styles/global.css';
import '../styles/googleCloud.css';
import '../styles/index.css';
import '../styles/labCore.css';
import '../styles/leaderShip.css';
import '../styles/loader.css';
import '../styles/pricing.css';
import '../styles/pytDev.css';
import '../styles/registration.css';
import '../styles/teamService.css';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo title="EC infosolutions" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
