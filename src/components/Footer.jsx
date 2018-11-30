import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background: #055474;
  font-size: 0.8em;
  p {
    color: ${props => props.theme.font};
    font-size: 1.3em;
    margin: 2em 0;
  }
`;

export const Footer = ({ language }) => (
  <StyledFooter>
    <p>
      {language
        ? "Designed and developed by Yerko Henriquez"
        : "Diseñado y desarrolado por Yerko Henriquez"}
    </p>
  </StyledFooter>
);
export default Footer;
