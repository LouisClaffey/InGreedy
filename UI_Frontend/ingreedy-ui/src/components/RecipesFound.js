import React, { useEffect, useState } from "react";
import "../App.css";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import axios from "axios";

export default function RecipesFound() {
  const [recipes, setRecipes] = useState();
  const [noResults, setNoResutls] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/found")
      .then((response) => {
        const recipeResponse = response.data;
        setRecipes(recipeResponse);
        if (recipeResponse.length === 0) {
          setNoResutls("No such recipe exists.");
        }
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
        <Typography variant="h5">{noResults}</Typography>
      </Container>
    </>
  );
}
