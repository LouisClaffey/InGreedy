import React from "react";
import "./App.css";
import IngredientsTable from "./components/IngredientsTable";
import RecipeHomepage from "./components/RecipeHomepage";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Login from "./components/Login";
import MainHomepage from "./Layouts/Homepage";
import UnregisteredLayout from "./Layouts/UnregisteredLayout";
import { Route } from "react-router-dom";

function App({ history }) {
  return (
    <>
      <Router history={history}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/users" element={<MainHomepage />} />
          <Route path="/find-recipe" element={<UnregisteredLayout />} />
          <Route path="/users/submit" element={<IngredientsTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
