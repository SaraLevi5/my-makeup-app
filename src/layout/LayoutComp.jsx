import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import CssBaseline from "@mui/material/CssBaseline";

const LayoutComp = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default LayoutComp;
