import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, Avatar, Grid, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextInputComponent from "../components/TextInputComponent";
import ROUTES from "../routes/ROUTES";

const Register = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const inputsKey = ["Full Name", "Phone", "Email", "Password"];

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1 }}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography variant="subtitle1" color="initial">
        Sigh up
      </Typography>
      <Box component="form" onSubmit noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {inputsKey.map((key) => (
            <TextInputComponent
              key={key}
              xs={12}
              sm={6}
              id={key}
              label={key}
              autoFocus={key === "Full Name"}
              value={key}
              onChange
              onBlur
              errors
              required
              type={key === "password" ? "password" : "text"}
            />
          ))}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          // disabled={Object.keys(errors).length > 0}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to={ROUTES.LOGIN}>{"Already have an account? Sign in"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Register;
