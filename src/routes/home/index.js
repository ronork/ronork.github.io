import { h } from "preact";
import LandingPage from "../../components/landingPage";
import Footer from "../../components/footer";
import Helmet from "preact-helmet";

const Home = () => (
  <>
    <Helmet
      title="Rohan Grover | Software Engineer, Developer Tools & AI"
      meta={[
        {
          name: "description",
          content:
            "Rohan Grover is a software engineer at Postman in Bengaluru, India, working on developer tools, API workflows, frontend architecture, and AI-powered developer experiences.",
        },
        { name: "author", content: "Rohan Grover" },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:title",
          content: "Rohan Grover | Software Engineer, Developer Tools & AI",
        },
        {
          property: "og:description",
          content:
            "Software engineer building reliable user-facing applications, developer tools, and AI-powered developer experiences.",
        },
        { property: "og:url", content: "https://ronork.com/" },
        { property: "og:site_name", content: "Rohan Grover" },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: "Rohan Grover | Software Engineer, Developer Tools & AI",
        },
        {
          name: "twitter:description",
          content:
            "Software engineer building reliable user-facing applications, developer tools, and AI-powered developer experiences.",
        },
      ]}
      link={[{ rel: "canonical", href: "https://ronork.com/" }]}
    />
    <LandingPage />
    <Footer page="Home" />
  </>
);

export default Home;
