import { h } from "preact";
import blogStyle from "../blogs/style.css";
import BackButton from "../../components/backButton";
import Footer from "../../components/footer";
import projectsJSON from "../../data/projectsList.json";
import Helmet from "preact-helmet";

export default function Projects() {
  const projects = projectsJSON["data"];
  const { card, first, top, content, wrapper, date } = blogStyle;

  const getTime = (timeinSec) => {
    var utcSeconds = timeinSec;
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toDateString();
  };

  const constructCard = (data, i) => {
    return (
      <div
        key={"card" + i}
        onClick={() => {
          window.open(data.link, "_blank");
        }}
        className={i === 0 ? `${card} ${first}` : card}
      >
        <h2 dangerouslySetInnerHTML={{ __html: data.title }} />
        <p className={date}>{getTime((data.timestamp && data.timestamp._seconds) || 0)}</p>
        <p dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    );
  };

  const genList = () => {
    let ls = [];
    for (let i = 0; i < projects.length; i++) {
      ls.push(constructCard(projects[i], i));
    }
    return ls;
  };

  return (
    <>
      <Helmet
        title="Software Projects | Rohan Grover"
        meta={[
          {
            name: "description",
            content:
              "Selected software projects by Rohan Grover, including developer tools, AI-powered applications, browser extensions, and open-source work.",
          },
          { name: "robots", content: "index, follow, max-image-preview:large" },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "Software Projects | Rohan Grover" },
          {
            property: "og:description",
            content:
              "Explore developer tools, AI-powered applications, browser extensions, and software projects by Rohan Grover.",
          },
          { property: "og:url", content: "https://ronork.com/projects/" },
          { property: "og:site_name", content: "Rohan Grover" },
        ]}
        link={[{ rel: "canonical", href: "https://ronork.com/projects/" }]}
      />
      <BackButton />
      <div className={wrapper}>
        <div className={top} />
        <div className={content}>{genList()}</div>
      </div>
      <Footer />
    </>
  );
}
