import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import TextBoxes from "./TextBox";
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Grid } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import RegisteredLayout from "../Layouts/RegisteredLayout";
import { ThemeProvider } from "@emotion/react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Toolbar } from "@mui/material";

export default function IngredientsTable() {
  const [formValue, setFormValue] = useState({
    recipeTitle: "",
    recipeInstructions: "",
  });

  const handleChangeTextBoxes = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [grains, setGrains] = useState("");
  const [proteins, setProteins] = useState("");
  const [vegetables, setVeg] = useState("");
  const [dairies, setDairy] = useState("");
  const [fruits, setFruit] = useState("");
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [recipes, setRecipes] = useState();
  const [clicked, setClicked] = useState(false);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (clicked === true) {
      axios.get("http://localhost:8080/newrecipes").then((response) => {
        const recipeResponse = response.data;
        setRecipes(recipeResponse);
      });
    }
  }, [clicked]);

  console.log(clicked);

  const recipe = {
    title,
    grains,
    proteins,
    vegetables,
    dairies,
    fruits,
    instructions,
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/recipes", recipe);
    setSubmit(true);
  };

  const { recipeTitle, recipeInstructions } = formValue;

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
      <form>
        <Container maxWidth="sm">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div onChange={(e) => setTitle(e.target.value)}>
              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                name="recipeTitle"
                maxRows={4}
                value={recipeTitle}
                onChange={handleChangeTextBoxes}
              />
            </div>
          </Box>
          <Box
            onChange={(e) => setGrains(e.target.value)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ justifyContent: "left", paddingTop: 10 }}
              >
                Grains
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  control={<Radio />}
                  label="pasta"
                  value="pasta"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="rice"
                  value="rice"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="noodles"
                  value="noodles"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="quinoa"
                  value="quinoa"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="flour"
                  value="flour"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            onChange={(e) => setProteins(e.target.value)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ justifyContent: "left", paddingTop: 10 }}
              >
                Proteins
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  control={<Radio />}
                  label="chicken"
                  value="chicken"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="salmon"
                  value="salmon"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="beef"
                  value="beef"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="pork"
                  value="pork"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="beans"
                  value="beans"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            onChange={(e) => setVeg(e.target.value)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ justifyContent: "left", paddingTop: 10 }}
              >
                Vegtables
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  control={<Radio />}
                  label="broccoli"
                  value="broccoli"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="potato"
                  value="potato"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="onion"
                  value="onion"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="carrot"
                  value="carrot"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="turnip"
                  value="turnip"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            onChange={(e) => setDairy(e.target.value)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                style={{ justifyContent: "left", paddingTop: 10 }}
              >
                Dairies
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  control={<Radio />}
                  label="yogurt"
                  value="yogurt"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="crèmefraîche"
                  value="crèmefraîche"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="cream"
                  value="cream"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="cheese"
                  value="cheese"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="milk"
                  value="milk"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            onChange={(e) => setFruit(e.target.value)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                // component="legend"
                style={{ justifyContent: "left", paddingTop: 10 }}
              >
                Fruits
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  control={<Radio />}
                  label="tomato"
                  value="tomato"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="apple"
                  value="apple"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="strawberry"
                  value="strawberry"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="banana"
                  value="banana"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="lemon"
                  value="lemon"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box>
            <div onChange={(e) => setInstructions(e.target.value)}>
              <TextField
                id="outlined-multiline-static"
                label="Multiline2"
                multiline
                name="recipeInstructions"
                value={recipeInstructions}
                rows={4}
                defaultValue="Instructions"
                onChange={handleChangeTextBoxes}
              />
            </div>
          </Box>
          <Box>
            <div>
              <Button
                variant="contained"
                onClick={handleClick}
                disabled={submit}
              >
                Click to submit recipe
              </Button>
              <Link to="/users">
                <Button variant="contained">Click to see recipes</Button>
              </Link>
              <Routes>
                <Route exact path="/users" element={<RegisteredLayout />} />
              </Routes>
            </div>
          </Box>
        </Container>
      </form>
    </>
  );
}
