import React, { Component } from "react";
import AuthenticationService from "../Authentication/AuthenticationService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Box,
  Button,
  Container,
} from "@mui/material";
import { red } from "@material-ui/core/colors";

export default function LoginComponent(props) {
  const navigate = useNavigate();

  const [hasLoginFailed, setHasLoginFailed] = useState(false);

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formValue;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  console.log(formValue);

  const loginClicked = () => {
    AuthenticationService.executeJwtAuthenticationService(username, password)
      .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          username,
          response.data.token
        );
      })
      .then(() => navigate("/users"))
      .catch(() => {
        setHasLoginFailed(true);
      });
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            InGreedy
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Typography variant="h3" color="inherit" noWrap>
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="container">
            {hasLoginFailed && (
              <div style={{ color: "red" }}>Invalid Credentials</div>
            )}
            <TextField
              name="username"
              label="username"
              id="outlined-size-small"
              defaultValue="username"
              size="small"
              value={username}
              onChange={handleChange}
            />
            <TextField
              name="password"
              type="password"
              label="password"
              id="outlined-size-small"
              defaultValue="username"
              size="small"
              value={password}
              onChange={handleChange}
            />
            <Button onClick={loginClicked} variant="contained">
              login
            </Button>
          </div>
        </Box>
      </Container>
    </>
  );
}
