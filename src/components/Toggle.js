import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
  }
`;

const StyledIcon = styled.svg`
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;

  @media (max-width: 576px) {
    width: 20px;
    height: 20px;
  }
`;

export const Toggle = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <IconWrapper onClick={toggleTheme} theme={theme} aria-label="Tema Değiştir">
      {isDark ? (
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#212121"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </StyledIcon>
      ) : (
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </StyledIcon>
      )}
    </IconWrapper>
  );
};
