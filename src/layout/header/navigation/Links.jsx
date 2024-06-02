import { useContext } from "react";
import { Box } from "@mui/material";
import {
  alwaysLinks,
  loggedInLinks,
  loggedOutLinks,
  adminLinks,
} from "./AllLinks";
import NavComp from "./NavComp";
import loginContext from "../../../context/login.context";

const Links = () => {
  const { login } = useContext(loginContext);

  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      {alwaysLinks.map((item, index) => (
        <NavComp key={"NavigationLink" + index} to={item.to}>
          {item.children}
        </NavComp>
      ))}

      {!login &&
        loggedOutLinks.map((item, index) => (
          <NavComp key={"NavigationLink" + index} to={item.to}>
            {item.children}
          </NavComp>
        ))}

      {login &&
        loggedInLinks.map((item, index) => (
          <NavComp key={"NavigationLink" + index} to={item.to}>
            {item.children}
          </NavComp>
        ))}

      {login?.role === "admin" &&
        adminLinks.map((item, index) => (
          <NavComp key={"NavigationLink" + index} to={item.to}>
            {item.children}
          </NavComp>
        ))}
    </Box>
  );
};

export default Links;
