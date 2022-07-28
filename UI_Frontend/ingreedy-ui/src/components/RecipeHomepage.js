import React, { useEffect, useState } from "react";
import "../App.css";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import axios from "axios";
import { ControlCameraOutlined } from "@material-ui/icons";
import AuthenticationService from "../Authentication/AuthenticationService";

export default function Recipes() {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/home")
      .then((response) => {
        const recipeResponse = response.data;
        setRecipes(recipeResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container>
        {recipes &&
          recipes.map((recipes) => (
            <Grid key={recipes.id}>
              <Grid item xs={12} md={8} lg={9}>
                <Typography variant="h3">
                  {recipes?.title.toLowerCase()}
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} lg={9} style={{ paddingBottom: 10 }}>
                <Typography variant="h6">
                  {recipes?.grains} {recipes?.proteins} {recipes?.vegetables}{" "}
                  {recipes?.dairies} {recipes?.fruits}
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} lg={9} style={{ paddingBottom: 20 }}>
                <Typography variant="h5">{recipes?.instructions}</Typography>
              </Grid>
            </Grid>
          ))}
      </Container>
    </>
  );
}