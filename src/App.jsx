import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Typography } from "@mui/material";
import Router from "./routes/Router";
import LayoutComp from "./layout/LayoutComp";
import loginContext from "./context/login.context.js";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  const [login, setLogin] = useState(null);
  const isAuthChecked = useAuthCheck();

  return (
    <loginContext.Provider value={{ login, setLogin }}>
      <BrowserRouter>
        <LayoutComp>
          {isAuthChecked ? (
            <Router />
          ) : (
            <Typography variant="h1">Loading...</Typography>
          )}
        </LayoutComp>
      </BrowserRouter>
    </loginContext.Provider>
  );
}

export default App;
