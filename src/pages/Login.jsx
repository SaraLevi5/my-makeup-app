import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Box, Typography, Avatar, Grid, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextInputComponent from "../components/TextInputComponent";
import ROUTES from "../routes/ROUTES";
import loginContext from "../context/login.context.js";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { setLogin } = useContext(loginContext);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("users/login", {
        email: emailValue,
        password: passwordValue,
      });

      localStorage.setItem("token", data);
      const decoded = jwtDecode(data);
      setLogin(decoded);

      console.log(decoded);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.log(error);
    }
  };

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
        Sigh in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <TextInputComponent
            key="email"
            xs={12}
            sm={6}
            id="email"
            label="email"
            value={emailValue}
            onChange={handleEmailChange}
            // onBlur
            errors
            required
            type="text"
          />
          <TextInputComponent
            key="password"
            xs={12}
            sm={6}
            id="password"
            label="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            // onBlur
            errors
            required
            type="password"
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          // disabled={Object.keys(errors).length > 0}
        >
          Sign in
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to={ROUTES.REGISTER}>{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
