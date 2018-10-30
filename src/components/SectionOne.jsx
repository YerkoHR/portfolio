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
`;

export const SectionOne = ({ StyledTitle, StyledP, skills }) => (
  <Section>
    <div id="section1">
      <StyledTitle>About me</StyledTitle>
      <StyledP>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo minus
        aliquid sunt commodi adipisci dolores natus iste atque exercitationem
        temporibus voluptatem ut, neque magnam hic necessitatibus amet ratione
        porro laborum consectetur accusantium omnis placeat illum eveniet
        facere. Magnam atque voluptatibus earum. Officia cumque cupiditate quos
        repellendus neque ratione quia. Labore.
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
