import React from "react";
import "./App.css";
import IngredientsTable from "./components/IngredientsTable";
import RecipeHomepage from "./components/RecipeHomepage";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import MainLayout from "./Layouts/MainLayout";
import MainHomepage from "./Layouts/Homepage";
import UnregisteredLayout from "./Layouts/UnregisteredLayout";
import IngredientsTable2 from "./components/IngredientsTable2";

import { Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";

function App({ history }) {
  return (
    <>
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<MainLayout />} />
          <Route path="/users" element={<MainHomepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/find-recipe" element={<UnregisteredLayout />} />
          <Route path="/users/submit" element={<IngredientsTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
