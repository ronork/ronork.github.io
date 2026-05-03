import { h } from "preact";
import { SocialIcon } from "react-social-icons";
import globalStyle from "../index.css";

const Footer = (props) => {
  const { footer, pa, iconImgDim } = globalStyle;
  return (
    <div className={props.page === "Home" ? `${footer} ${pa}` : footer}>
      <SocialIcon className={iconImgDim} url="https://twitter.com/ROnAx13" />
      <SocialIcon
        className={iconImgDim}
        url="https://www.linkedin.com/in/rohan-grover-35a35a154/"
      />
      <SocialIcon className={iconImgDim} url="https://github.com/ronork/" />
      <SocialIcon
        bgColor="rgba(219, 84, 97, 0.89)"
        className={iconImgDim}
        url="mailto:grohan95@gmail.com"
      />
    </div>
  );
};

export default Footer;
