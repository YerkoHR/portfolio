import React from "react";
import Section from "./Section";

export const Introduction = ({ StyledH1, StyledH3, StyledP, language }) => (
  <Section>
    <div>
      <StyledH1>Hi I'm Yerko Henriquez</StyledH1>
      <StyledH3>front-end web developer</StyledH3>
      <StyledP>
        {language
          ? "I'm currently living in Chile and looking for chances to become a better web developer."
          : ""}
      </StyledP>
    </div>
  </Section>
);
export default Introduction;
