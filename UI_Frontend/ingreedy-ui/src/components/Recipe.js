import React, { useEffect, useState } from "react";
import "../App.css";
import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import RecipeServiceGet from "../api/RecipeServiceGet";

export default function Recipe() {
  const [recipes, setRecipes] = useState();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked === true) {
      RecipeServiceGet.execute().then((response) => {
        const recipeResponse = response.data;
        setRecipes(recipeResponse);
      });
    }
  }, [clicked]);

  console.log(clicked);

  return (
    <>
      <Button variant="contained" onClick={() => setClicked(!clicked)}>
        Click to see Recipes
      </Button>
      <Container>
        {recipes &&
          recipes.map((recipes) => (
            <Grid key={recipes.id}>
              <Grid item xs={12} md={8} lg={9}>
                <Typography variant="h3">
                  {recipes.title.toLowerCase()}
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} lg={9} style={{ paddingBottom: 20 }}>
                <Typography>{recipes.instructions}</Typography>
              </Grid>
            </Grid>
          ))}
      </Container>
    </>
  );
}
