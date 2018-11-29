import React from "react";
import styled, { keyframes } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2em 1em;
  counter-reset: item 0;
`;
const HeaderUl = styled.ul`
  margin: 0;
  padding: 0.4em;
  display: flex;
  flex-direction: row;
  list-style: none;
`;
const NavAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateY(-20px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
`;
const HeaderLi = styled.li`
  margin: 0 2em;
  counter-increment: item 1;
  animation: ${NavAnimation} ${props => props.delay}s ease-in-out;
  & button,
  & a {
    cursor: pointer;
    background: transparent;
    border: 0;
    text-decoration: none;
    color: ${props => props.theme.font};
    font-size: 1.1em;
    transition: 0.2s ease;
    &:focus {
      outline: 0;
    }
    &:hover {
      color: ${props => props.theme.contrast};
    }
  }
  &::before {
    content: "0" counter(item) ".";
    color: ${props => props.theme.contrast};
    margin-right: 0.3em;
  }
`;
const LangBtns = styled.div`
  align-self: center;
  margin-left: 1em;
  button {
    background-color: #1b7397;
    color: #fff;
    cursor: pointer;
    outline: 0;
    padding: 0.8em 1em;
    margin-right: 0.2em;
    transition: 0.3s ease-in-out;
    border: 0;
    &:hover {
      color: ${props => props.theme.contrast};
      opacity: 0.85;
    }
  }
`;

export const Header = ({ scrollTo, changeLang, language }) => (
  <StyledHeader id="header">
    <LangBtns>
      <button onClick={() => changeLang(true)}>EN</button>
      <button onClick={() => changeLang(false)}>ES</button>
    </LangBtns>
    <HeaderUl>
      <HeaderLi delay={0.4}>
        <button onClick={() => scrollTo("section1")}>
          {language ? "About" : "Sobre mi"}
        </button>
      </HeaderLi>
      <HeaderLi delay={0.6}>
        <button onClick={() => scrollTo("section2")}>
          {language ? "Projects" : "Projectos"}
        </button>
      </HeaderLi>
      <HeaderLi delay={0.8}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/YerkoHR"
        >
          GitHub
        </a>
      </HeaderLi>
    </HeaderUl>
  </StyledHeader>
);

export default Header;
