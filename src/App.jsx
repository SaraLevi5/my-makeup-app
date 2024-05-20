import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Router from "./routes/Router";
import LayoutComp from "./layout/LayoutComp";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E5C6CE", // Change to your desired primary color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LayoutComp>
          <Router />
        </LayoutComp>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
