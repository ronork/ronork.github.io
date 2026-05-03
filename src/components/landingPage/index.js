import { h } from "preact";
import { Link } from "preact-router/match";
import List from "./listing";
import globalStyle from "../index.css";

const AboutMe = () => {
  const {
    tc,
    aboutMeContainer,
    ma,
    mtb100,
    mt30,
    db,
    brx100,
    imgDim,
    pageTitle,
    clr08c2,
    slash,
    pFont,
    redClr,
  } = globalStyle;
  return (
    <div className={`${tc} ${aboutMeContainer} ${ma} ${mtb100} ${mt30}`}>
      <img
        className={`${db} ${brx100} ${ma} ${imgDim}`}
        src="/assets/images/avatar.webp"
        alt="My Photo did not not load on your system:("
      />
      <h1 className={pageTitle}>
        Rohan <span>G</span>rover
        <span className={`${clr08c2} ${slash}`}>/</span>
        रोहन ग्रोवर
      </h1>
      <p className={pFont}>
        &#x0003C; Web Developer specialising in{" "}
        <span className={redClr}>React</span> and{" "}
        <span className={redClr}>NodeJS</span> / &#x0003E;
      </p>
      <List />
    </div>
  );
};

export default AboutMe;
