import { h } from "preact";
import { Link } from "preact-router/match";
import backStyle from "./style.css";

const BackButton = (props) => {
  return (
    <Link href={props.backTo ? props.backTo : "/"}>
      <div className={backStyle["back-button"]}>
        <div className={backStyle["arrow-wrap"]}>
          <span className={backStyle["arrow-part-1"]} />
          <span className={backStyle["arrow-part-2"]} />
          <span className={backStyle["arrow-part-3"]} />
        </div>
      </div>
    </Link>
  );
};

export default BackButton;
