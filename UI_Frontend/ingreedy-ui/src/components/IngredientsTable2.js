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
import { Grid } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import MainHomepage from "../Layouts/Homepage";
import { ThemeProvider } from "@emotion/react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Toolbar } from "@mui/material";

export default function IngredientsTable2() {
  const [formValue, setFormValue] = useState({
    recipeTitle: "",
    recipeInstructions: "",
  });

  const [state, setState] = React.useState({
    pasta: false,
    rice: false,
    noodles: false,
    quinoa: false,
    flour: false,
    chicken: false,
    salmon: false,
    beef: false,
    pork: false,
    beans: false,
    broccoli: false,
    potato: false,
    onion: false,
    carrot: false,
    turnip: false,
    yogurt: false,
    crèmefraîche: false,
    cream: false,
    cheese: false,
    milk: false,
    tomato: false,
    apple: false,
    strawberry: false,
    banana: false,
    lemon: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const {
    pasta,
    rice,
    noodles,
    quinoa,
    flour,
    chicken,
    salmon,
    beef,
    pork,
    beans,
    broccoli,
    potato,
    onion,
    carrot,
    turnip,
    yogurt,
    crèmefraîche,
    cream,
    cheese,
    milk,
    tomato,
    apple,
    strawberry,
    banana,
    lemon,
  } = state;

  const error =
    [
      pasta,
      rice,
      noodles,
      quinoa,
      flour,
      chicken,
      salmon,
      beef,
      pork,
      beans,
      broccoli,
      potato,
      onion,
      carrot,
      turnip,
      yogurt,
      crèmefraîche,
      cream,
      cheese,
      milk,
      tomato,
      apple,
      strawberry,
      banana,
      lemon,
    ].filter((v) => v).length !== 2;

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
    if (clicked === false) {
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
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <FormControl>
              <FormLabel style={{ justifyContent: "left", paddingTop: 10 }}>
                Grains
              </FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pasta}
                      onChange={handleChange}
                      name="pasta"
                    />
                  }
                  label="pasta"
                  value="pasta"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rice}
                      onChange={handleChange}
                      name="rice"
                    />
                  }
                  label="rice"
                  value="rice"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={noodles}
                      onChange={handleChange}
                      name="noodles"
                    />
                  }
                  label="noodles"
                  value="noodles"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={quinoa}
                      onChange={handleChange}
                      name="quinoa"
                    />
                  }
                  label="quinoa"
                  value="quinoa"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={flour}
                      onChange={handleChange}
                      name="flour"
                    />
                  }
                  label="flour"
                  value="flour"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box
            onChange={(e) => setProteins(e.target.value)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl>
              <FormLabel style={{ justifyContent: "left", paddingTop: 10 }}>
                Proteins
              </FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={chicken}
                      onChange={handleChange}
                      name="chicken"
                    />
                  }
                  label="chicken"
                  value="chicken"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={salmon}
                      onChange={handleChange}
                      name="salmon"
                    />
                  }
                  label="salmon"
                  value="salmon"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={beef}
                      onChange={handleChange}
                      name="beef"
                    />
                  }
                  label="beef"
                  value="beef"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pork}
                      onChange={handleChange}
                      name="pork"
                    />
                  }
                  label="pork"
                  value="pork"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={beans}
                      onChange={handleChange}
                      name="beans"
                    />
                  }
                  label="beans"
                  value="beans"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box
            onChange={(e) => setVeg(e.target.value)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl>
              <FormLabel style={{ justifyContent: "left", paddingTop: 10 }}>
                Vegtables
              </FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={broccoli}
                      onChange={handleChange}
                      name="broccoli"
                    />
                  }
                  label="broccoli"
                  value="broccoli"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={potato}
                      onChange={handleChange}
                      name="potato"
                    />
                  }
                  label="potato"
                  value="potato"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={onion}
                      onChange={handleChange}
                      name="onion"
                    />
                  }
                  label="onion"
                  value="onion"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={carrot}
                      onChange={handleChange}
                      name="carrot"
                    />
                  }
                  label="carrot"
                  value="carrot"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={turnip}
                      onChange={handleChange}
                      name="turnip"
                    />
                  }
                  label="turnip"
                  value="turnip"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box
            onChange={(e) => setDairy(e.target.value)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl>
              <FormLabel style={{ justifyContent: "left", paddingTop: 10 }}>
                Dairies
              </FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={yogurt}
                      onChange={handleChange}
                      name="yogurt"
                    />
                  }
                  label="yogurt"
                  value="yogurt"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crèmefraîche}
                      onChange={handleChange}
                      name="crèmefraîche"
                    />
                  }
                  label="crèmefraîche"
                  value="crèmefraîche"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cream}
                      onChange={handleChange}
                      name="cream"
                    />
                  }
                  label="cream"
                  value="cream"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cheese}
                      onChange={handleChange}
                      name="cheese"
                    />
                  }
                  label="cheese"
                  value="cheese"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={milk}
                      onChange={handleChange}
                      name="milk"
                    />
                  }
                  label="milk"
                  value="milk"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box
            onChange={(e) => setFruit(e.target.value)}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControl>
              <FormLabel
                // component="legend"
                style={{ justifyContent: "left", paddingTop: 10 }}
              >
                Fruits
              </FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={tomato}
                      onChange={handleChange}
                      name="tomato"
                    />
                  }
                  label="tomato"
                  value="tomato"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={apple}
                      onChange={handleChange}
                      name="apple"
                    />
                  }
                  label="apple"
                  value="apple"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={strawberry}
                      onChange={handleChange}
                      name="strawberry"
                    />
                  }
                  label="strawberry"
                  value="strawberry"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={banana}
                      onChange={handleChange}
                      name="banana"
                    />
                  }
                  label="banana"
                  value="banana"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lemon}
                      onChange={handleChange}
                      name="lemon"
                    />
                  }
                  label="lemon"
                  value="lemon"
                />
              </FormGroup>
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
                <Route exact path="/users" element={<MainHomepage />} />
              </Routes>
            </div>
          </Box>
        </Container>
      </form>
    </>
  );
}
