import {
  FooterContainer,
  FooterImg,
  HeaderFooter,
  FooterSpan
} from "./FooterStyles";

import designSvg from "../../assets/design.svg";

import React, { useState } from "react";

const Footer = () => {
  const [github, setGithub] = useState("");
  return (
    <FooterContainer>
      <HeaderFooter onClick={() =>
            setGithub(
              (window.location.href =
                "https://github.com/TuncayArican")
            )
          }
          to={github}
          target="_blank"
        >{"<Tuncay/>"}Recipe</HeaderFooter>
      <FooterImg src={designSvg} />
      <FooterSpan>Copyright {new Date().getFullYear()}</FooterSpan>
    </FooterContainer>
  )
}

export default Footer