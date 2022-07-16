import { ThemeProvider } from "@emotion/react";
import React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Typography,
  Toolbar,
  Grid,
  Box,
  Button,
  Container,
} from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import RegisteredLayout from "./RegisteredLayout";
import UnregisteredLayout from "./UnregisteredLayout";
import { flexbox } from "@mui/system";

export default function MainLayout() {
  return (
    <main>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            InGreedy
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Grid container spacing={20}>
          <Grid item xs={6} md={6}>
            <Link to="/find-recipe">
              <Button variant="contained">Find Recipes</Button>
            </Link>
          </Grid>
          <Grid item xs={6} md={6}>
            <Link to="/users">
              <Button variant="contained">Login</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Routes>
        <Route exact path="/users" element={<RegisteredLayout />} />
        <Route exact path="/find-recipe" element={<UnregisteredLayout />} />
      </Routes>
    </main>
  );
}
