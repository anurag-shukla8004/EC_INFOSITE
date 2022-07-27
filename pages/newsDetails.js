import FeatureNewsDetails from "../components/newsDetailsComponents/FeatureNewsDetails";
import NewsPage from "../components/newsDetailsComponents/newsPage";
import ReadNext from "../components/newsDetailsComponents/readNext";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
       
       <FeatureNewsDetails/>
       <NewsPage/>
       <ReadNext/>
      </Layout>
    </>
  );
}