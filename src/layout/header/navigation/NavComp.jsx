import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavComp = ({ to, children }) => {
  return (
    <Button
      component={Link}
      to={to}
      sx={{ color: "#000" }}
      variant={children === "Contact" ? "contained" : "text"}
    >
      {children}
    </Button>
  );
};

export default NavComp;
