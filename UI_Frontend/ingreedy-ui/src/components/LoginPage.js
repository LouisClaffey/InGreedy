import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import MainHomepage from "../Layouts/Homepage";
import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";
import MainLayout from "../Layouts/UnregisteredLayout";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Toolbar } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const authority = "USER";

  const user = {
    authority,
    email,
    password,
  };

  const returnHome = () => {
    return (
      <Routes>
        <Route exact path="/users" element={<MainHomepage />} />
      </Routes>
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/users", user).then(() => returnHome);
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
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form>
          <div onChange={(e) => setEmail(e.target.value)}>
            <TextField
              label="email"
              id="outlined-size-small"
              defaultValue="email"
              size="small"
              value={email}
            />
          </div>
          <div onChange={(e) => setPassword(e.target.value)}>
            <TextField
              label="password"
              id="outlined-size-small"
              defaultValue="password"
              size="small"
              value={password}
            />
          </div>
          <Link to="/users">
            <Button onClick={() => handleClick} variant="contained">
              login
            </Button>
          </Link>
        </form>
      </Box>
    </>
  );
}
