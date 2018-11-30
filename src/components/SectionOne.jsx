import React from "react";
import Section from "./Section";
import styled from "styled-components";

const Skill = styled.li`
  margin: 0.1em 0;
  color: ${props => props.theme.heading};
  & span {
    color: ${props => props.theme.contrast};
  }
`;

const SkillContainer = styled.ul`
  padding: 0 1em;
  display: flex;
  flex-flow: column wrap;
  max-height: 6em;
  @media (max-width: 425px) {
    max-height: 15em;
    padding: 0;
    margin-left: 2em;
    align-items: flex-start;
  }
`;

export const SectionOne = ({ StyledTitle, StyledP, skills, language }) => (
  <Section>
    <div id="section1">
      <StyledTitle>{language ? "About me" : "Sobre mi"}</StyledTitle>
      <StyledP>
        {language
          ? `I'm a self-taught front-end developer who enjoys to learn new ways
            to make better apps, I'm very detallist and I like to always find
            the best solution for a determined problem.
            Here's a list of tools and technologies I have experience with:`
          : `Soy un desarrollador front-end autodidacta, disfruto de aprender nuevas formas 
            de crear mejores aplicaciones, Soy muy detallista y me gusta aplicar 
            la mejor solucion para cada problema concreto.
            Aqui hay una lista de las herramientas y tecnologias en las que tengo experiencia: 
          `}
      </StyledP>
      <SkillContainer>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <span>{skill}</span>
          </Skill>
        ))}
      </SkillContainer>
    </div>
  </Section>
);

export default SectionOne;
