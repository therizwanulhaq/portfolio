import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import { Theme } from "./components/utils/Theme";
import Main from "./components/Main";
import GlobalStyles from "./components/utils/GlobalStyles";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
