import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 2em 15em 2em 8em;
  margin-bottom: 12em;
  @media (max-width: 870px) {
    width: 80%;
    padding: 2em 0;
    margin: 0 auto 12em auto;
  }
`;

export default ({ children }) => <StyledSection>{children}</StyledSection>;
