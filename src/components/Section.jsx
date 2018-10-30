import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 2em 15em 2em 8em;
  margin-bottom: 12em;
`;

export default ({ children }) => <StyledSection>{children}</StyledSection>;
