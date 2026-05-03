import { h } from "preact";
import blogStyle from "./style.css";
import { Link } from "preact-router/match";
import BackButton from "../../components/backButton";
import Footer from "../../components/footer";
import blogsJSON from "../../data/blogList.json";
import cardTitle from "../../helper/cardTitle";
import Helmet from "preact-helmet";

export default function BlogsList() {
  const blogs = blogsJSON["data"];
  const { card, first, top, content, wrapper, blogList, date } = blogStyle;

  const getTime = (timeinSec) => {
    var utcSeconds = timeinSec;
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toDateString();
  };

  const constructCard = (data, i) => {
    let url = "/blogs/" + cardTitle(data.title) + "/";
    return (
      <Link key={"card" + i} href={url}>
        <div className={i === 0 ? `${card} ${first}` : card}>
          <h2>{data.title}</h2>
          <p className={date}>{getTime(data.timestamp["_seconds"])}</p>
          <div
            style={{ color: "black" }}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </Link>
    );
  };

  const makeList = () => {
    let listView = [],
      cn = 0;
    for (let i = 0; i < blogs.length; i++) {
      listView.push(constructCard(blogs[i], cn));
      cn++;
    }
    return listView;
  };

  return (
    <>
      <Helmet title="Blogs" />
      <BackButton />
      <div className={`${wrapper} ${blogList}`}>
        <div className={top} />
        <div className={content}>{makeList()}</div>
      </div>
      <Footer />
    </>
  );
}
