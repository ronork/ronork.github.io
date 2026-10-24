import { h } from "preact";
import LandingPage from "../../components/landingPage";
import Footer from "../../components/footer";
import Helmet from "preact-helmet";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rohan Grover",
  url: "https://ronork.com/",
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "Postman" },
  sameAs: [
    "https://github.com/ronork",
    "https://www.linkedin.com/in/rohangrover/"
  ],
  knowsAbout: [
    "Software Engineering",
    "Developer Tools",
    "API Development",
    "JavaScript",
    "TypeScript",
    "Frontend Architecture",
    "Artificial Intelligence"
  ],
  mainEntityOfPage: "https://ronork.com/"
};

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
        { property: "og:type", content: "profile" },
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
        { property: "profile:first_name", content: "Rohan" },
        { property: "profile:last_name", content: "Grover" },
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
      }}
    />
    <LandingPage />
    <Footer page="Home" />
  </>
);

export default Home;
