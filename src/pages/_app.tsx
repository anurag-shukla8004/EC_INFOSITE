import { AppProps } from 'next/app';
import '@/styles/global.css';
// import '@fontsource/inter';
// import "@fontsource/jost"
import "../styles/index.css";
import "../styles/leaderShip.css";
import "../styles/clientSuccess.css";
import "../styles/agribusinesses.css";
import "../styles/customerAppDev.css";
import "../styles/registration.css";
import "../styles/contactUs.css";
import "../styles/pytDev.css";
import "../styles/freeVocal.css";
import "../styles/labCore.css";
import "../styles/pricing.css";
import "../styles/eCommerce.css";
import "../styles/manufacturing.css";
import "../styles/googleCloud.css";
import "../styles/blog.css";
import "../styles/blogReadMore.css";
import "../styles/teamService.css";
import "../styles/loader.css";
import { setup } from 'twind';
import twindConfig from '../twind.config';
import Head from 'next/head';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  
  return <Component {...pageProps} />;
}
