import { h } from "preact";
import { useEffect } from "preact/hooks";
import blogStyle from "../blogs/style.css";
import { Link } from "preact-router/match";
import BackButton from "../../components/backButton";
import Footer from "../../components/footer";
import blogJSON from "../../data/blogData.json";
import Helmet from "preact-helmet";

export default function BlogPage({ blogId }) {
  const { card, first, top, content, wrapper, date } = blogStyle;

  const blogData = blogJSON[blogId]["data"];
  const wordsPerMinute = 200;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogData]);

  const getTime = (timeinSec) => {
    var utcSeconds = timeinSec;
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toDateString();
  };

  const getPageLinks = () => {
    let links = [];
    if (blogData.prevBlogTitle) {
      links.push(
        <Link key="prevBlog" href={blogData.prevBlogUrl}>
          <li style={{ marginBottom: "10px", width: "100%", textAlign: "left" }}>
            ← <a>{blogData.prevBlogTitle}</a>
          </li>
        </Link>
      );
    }
    if (blogData.nextBlogTitle) {
      links.push(
        <Link key="nextBlog" href={blogData.nextBlogUrl}>
          <li style={{ width: "100%", textAlign: "right" }}>
            <a>{blogData.nextBlogTitle}</a> →
          </li>
        </Link>
      );
    }
    return links.length > 0 ? links : "";
  };

  const readTime = (text) => {
    let result = "";
    let textLength = text.split(" ").length;
    if (textLength > 0) {
      let value = Math.ceil(textLength / wordsPerMinute);
      result = ` • ☕️ ${value} min read`;
    }
    return result;
  };

  const constructPage = () => {
    return (
      <div className={`${card} ${first} ${blogStyle["blogPage"]}`}>
        <h1>{blogData.title}</h1>
        <p className={date}>
          {getTime(blogData.timestamp["_seconds"]) + readTime(blogData["content"])}
        </p>
        <div
          style={{ color: "black" }}
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        />
        {getPageLinks() ? (
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              listStyle: "none",
              padding: "0px",
              textDecoration: "underline",
              color: "#db5461",
            }}
          >
            {getPageLinks()}
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <>
      <BackButton backTo={"/blogs"} />
      <Helmet
        title={blogData.title}
        meta={[
          {
            name: "description",
            content: blogData.description.replace(/<\/?[^>]+(>|$)/g, ""),
          },
        ]}
      />
      <div className={wrapper}>
        <div className={top} />
        <div className={content}>{constructPage()}</div>
      </div>
      <Footer />
      <style>{`
  .blogImg {
    max-width: 100%;
    height: auto;
    padding: 10px;
  }
  pre {
    background: #333;
    white-space: pre;
    word-wrap: break-word;
    overflow: auto;
  }
  pre.code {
    margin: 20px 25px;
    border-radius: 4px;
    border: 1px solid #292929;
    position: relative;
  }
  pre.code label {
    font-family: sans-serif;
    font-weight: bold;
    font-size: 13px;
    color: #ddd;
    position: absolute;
    left: 1px;
    top: 15px;
    text-align: center;
    width: 60px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    pointer-events: none;
  }
  pre.code code {
    display: block;
    padding: 15px 16px 14px;
    border-left: 1px solid #555;
    overflow-x: auto;
    font-size: 13px;
    line-height: 19px;
    color: #ddd;
  }
  pre::after {
    padding: 0;
    width: auto;
    height: auto;
    position: absolute;
    right: 18px;
    top: 14px;
    font-size: 12px;
    color: #ddd;
    line-height: 20px;
    overflow: hidden;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: all 0.3s ease;
  }
  pre:hover::after {
    opacity: 0;
    visibility: visible;
  }
  pre.code-css code { color: #91a7ff; }
  pre.code-html code { color: #aed581; }
  pre.code-javascript code { color: #f1f1f1; }
  pre.code-jquery code { color: #4dd0e1; }
  .highlight { background-color: #ffeb004f; }
  .dib { display: inline-block; }
  .fr { float: right; }
  .fl { float: left; }
      `}</style>
    </>
  );
}
