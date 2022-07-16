import { ThemeProvider } from "@emotion/react";
import React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, createTheme, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Recipe from "../components/RecipeHomepage";

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
      <Typography variant="h6" color="inherit" noWrap>
        Unregistered
      </Typography>
    </main>
  );
}
