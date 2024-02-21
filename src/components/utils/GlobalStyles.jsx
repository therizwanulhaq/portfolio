import { Global, css } from "@emotion/react";

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
