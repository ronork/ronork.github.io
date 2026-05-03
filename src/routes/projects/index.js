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
        <p className={date}>{getTime(data.timestamp["_seconds"])}</p>
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
      <Helmet title="Projects" />
      <BackButton />
      <div className={wrapper}>
        <div className={top} />
        <div className={content}>{genList()}</div>
      </div>
      <Footer />
    </>
  );
}
