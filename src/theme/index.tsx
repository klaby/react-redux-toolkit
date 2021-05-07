import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    background: #0d1117;
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif
  }
`;

export const Theme: React.FC = ({ children }) => (
  <ThemeProvider
    theme={{
      colors: {
        blue: "#0984e3",
        green: "#00b894",
      },
    }}
  >
    {children}
  </ThemeProvider>
);
