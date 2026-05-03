import { h } from "preact";
import LandingPage from "../../components/landingPage";
import Footer from "../../components/footer";
import Helmet from "preact-helmet";

const Home = () => (
  <>
    <Helmet title="Home" />
    <LandingPage />
    <Footer page="Home" />
  </>
);

export default Home;
