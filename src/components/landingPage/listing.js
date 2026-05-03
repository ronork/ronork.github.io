import { h } from "preact";
import { Link } from "preact-router/match";
import globalStyle from "../index.css";

const Listing = () => {
  const { mt20, onLand, flexible, cvLink } = globalStyle;
  return (
    <div className={mt20}>
      <ul className={flexible} style={{ display: "unset" }}>
        <li>
          <Link href="/blogs/">
            <button className={onLand}>Blogs</button>
          </Link>
        </li>
        <li>
          <Link href="/projects/">
            <button className={onLand}>Projects</button>
          </Link>
        </li>
        <a className={cvLink} href="/assets/docs/rohangrover.pdf" target="_blank">
          <li>
            <button className={onLand}>Download CV</button>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Listing;
