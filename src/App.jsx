import React, { Component } from "react";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto");
  body {
    margin: 0;
    background: ${props => props.theme.background};
    font-family:  Roboto, sans-serif;
    position: relative;
    min-height: 100%;
    padding-bottom: 5em;
    width: 100%;
    counter-reset: section; 
  }
  h1 {
    font-family: Montserrat;
  }
  main{
    counter-reset: section 0;
  }
`;

const theme = {
  background: "#05668D",
  heading: "#fff",
  font: "#C5D2DD",
  contrast: "#E9D758"
};

const StyledH1 = styled.h1`
  color: ${props => props.theme.heading};
  font-size: 3em;
`;
const StyledTitle = styled.h1`
  color: ${props => props.theme.heading};
  &::before {
    counter-increment: section 1;
    content: "0" counter(section) ".";
    color: ${props => props.theme.contrast};
    margin-right: 0.3em;
  }
`;

const StyledH3 = styled.h3`
  color: ${props => props.theme.contrast};
  font-size: 2em;
`;

const StyledP = styled.p`
  color: ${props => props.theme.font};
  font-size: 1.3em;
  margin: 2em 0;
  width: 70%;
`;
const ToTopBtn = styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #1b7397;
  color: #fff;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      english: true,
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Git", "Gatsby"],
      projects: [
        {
          name: "Reddit Viewer",
          techs: ["HTML", "CSS"],
          live: "",
          repo: "",
          descriptionEN: "",
          descriptionES: ""
        },
        {
          name: "DC Index",
          techs: ["HTML", "CSS"],
          live: "",
          repo: "",
          descriptionEN: "",
          descriptionES: ""
        }
      ]
    };
    this.scrollTo = this.scrollTo.bind(this);
    this.changeLang = this.changeLang.bind(this);
  }
  changeLang(bool) {
    this.setState({ english: bool });
  }
  scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  componentDidMount() {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    };
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Header
            scrollTo={this.scrollTo}
            changeLang={this.changeLang}
            language={this.state.english}
          />
          <Introduction
            StyledH1={StyledH1}
            StyledH3={StyledH3}
            language={this.state.english}
            StyledP={StyledP}
          />
          <main>
            <SectionOne
              StyledTitle={StyledTitle}
              StyledP={StyledP}
              skills={this.state.skills}
              language={this.state.english}
            />
            <SectionTwo
              projects={this.state.projects}
              language={this.state.english}
              StyledTitle={StyledTitle}
            />
          </main>
          <Footer StyledP={StyledP} language={this.state.english} />
          <ToTopBtn id="myBtn" onClick={() => this.scrollTo("header")}>
            UP
          </ToTopBtn>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
