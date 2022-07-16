import { ThemeProvider } from "@emotion/react";
import React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, createTheme, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Recipe from "../components/RecipeHomepage";
import IngredientsTable from "../components/IngredientsTable";
import { NavLink, Routes, Route } from "react-router-dom";

export default function MainLayout() {
  return (
    <main>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            InGreedy
          </Typography>
          <NavLink to="submit" style={{ position: "absolute", right: "1rem" }}>
            Submit Recipe
          </NavLink>
        </Toolbar>
      </AppBar>
      <Recipe></Recipe>
      <Routes>
        <Route exact path="/users/submit" element={<IngredientsTable />} />
      </Routes>
    </main>
  );
}
