import React from "react";
import Section from "./Section";
import Project from "./project";
import styled from "styled-components";

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 15px 15px;
`;

export const SectionTwo = ({ StyledTitle, projects }) => (
  <Section>
    <div id="section2">
      <StyledTitle>Projects</StyledTitle>
      <Projects>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Projects>
    </div>
  </Section>
);

export default SectionTwo;
