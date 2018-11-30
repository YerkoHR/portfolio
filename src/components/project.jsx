import React from "react";
import { Folder, Github, Link } from "../svg";
import styled from "styled-components";

const Project = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  background: #1b7397;
  transition: 0.2s ease-in;
  svg {
    width: 45px;
    height: 45px;
    fill: ${props => props.theme.font};
  }
  &:hover {
    transform: translateY(-5px);
  }
`;
const Section1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Subsection1 = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    cursor: pointer;
    transition: 0.4s ease-in-out;
    &:hover {
      fill: ${props => props.theme.contrast};
    }
  }
  div {
    margin: 0 0.4em;
  }
`;
const Section2 = styled.div`
  margin-bottom: 2em;
  h1 {
    color: ${props => props.theme.heading};
  }
  p {
    color: ${props => props.theme.font};
  }
`;
const Section3 = styled.div`
  span {
    margin-right: 1em;
    color: ${props => props.theme.contrast};
  }
`;
export default ({ project, language }) => (
  <Project>
    <div>
      <Section1>
        <div>{Folder}</div>
        <Subsection1>
          <div title="Repository">
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              {Github}
            </a>
          </div>
          <div title="Live demo">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              {Link}
            </a>
          </div>
        </Subsection1>
      </Section1>
      <Section2>
        <h1>{project.name}</h1>
        <p>{language ? project.descriptionEN : project.descriptionES}</p>
      </Section2>
    </div>
    <Section3>
      {project.techs.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </Section3>
  </Project>
);
