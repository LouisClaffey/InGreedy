import React from "react";
import "./App.css";
import IngredientsTable from "./components/IngredientsTable";
import RecipeHomepage from "./components/RecipeHomepage";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import MainLayout from "./Layouts/MainLayout";
import RegisteredLayout from "./Layouts/RegisteredLayout";
import UnregisteredLayout from "./Layouts/UnregisteredLayout";

import { Route } from "react-router-dom";

function App({ history }) {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<MainLayout />} />
        <Route path="/users" element={<RegisteredLayout />} />
        <Route path="/find-recipe" element={<UnregisteredLayout />} />
        <Route path="/users/submit" element={<IngredientsTable />} />
      </Routes>
    </Router>
  );
}

export default App;
