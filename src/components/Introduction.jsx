import React from "react";
import Section from "./Section";

export const Introduction = ({ StyledH1, StyledH3, StyledP, language }) => (
  <Section>
    <div>
      <StyledH1>
        {language
          ? `Hi I'm Yerko Henriquez`
          : `Hola, mi nombre es Yerko Henriquez`}
      </StyledH1>
      <StyledH3>
        {language ? `Front-end web developer` : `Desarrollador front-end`}
      </StyledH3>
      <StyledP>
        {language
          ? "I'm currently living in Chile and looking for chances to become a better web developer."
          : "Actualmente viviendo en Chile y buscando oportunidades para convertirme en un mejor desarrollador web."}
      </StyledP>
    </div>
  </Section>
);
export default Introduction;
