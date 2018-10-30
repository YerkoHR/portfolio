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
`;

export const Footer = ({ StyledP }) => (
  <StyledFooter>
    <StyledP>Designed and developed by Yerko Henriquez</StyledP>
  </StyledFooter>
);
export default Footer;
