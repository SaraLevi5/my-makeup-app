import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import useAuthCheck from "../hooks/useAuthCheck";
// import { Typography } from "@mui/material";

const LayoutComp = ({ children }) => {
  // const isAuthChecked = useAuthCheck();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#E5C6CE", // Change to your desired primary color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default LayoutComp;
