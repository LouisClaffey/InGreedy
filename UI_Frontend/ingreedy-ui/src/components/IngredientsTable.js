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
import axios, { Axios } from "axios";

export default function IngredientsTable() {
  const [isChecked, setIsChecked] = useState({
    pasta: false,
    rice: false,
    noodles: false,
    quinoa: false,
    flour: false,
    chicken: false,
    salmon: false,
    beef: false,
    pork: false,
    tofu: false,
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
  } = isChecked;

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

  const handleChange = (event) => {
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
  };

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
    axios
      .post("http://localhost:8080/recipes", recipe)
      .then((res) => console.log(res + " louis is cool"));
  };

  // useEffect(() => {}, [isChecked]);

  // useEffect(() => {}, [isChecked]);

  // useEffect(() => {}, [isChecked]);

  // useEffect(() => {}, [isChecked]);

  const { recipeTitle, recipeInstructions } = formValue;

  return (
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
          onChange={(e) => setGrains(e.target.name)}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <FormLabel component="legend" style={{ marginTop: 9, padding: 20 }}>
            Grains
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox checked={pasta} onChange={handleChange} name="pasta" />
            }
            label="pasta"
            style={{ padding: 15 }}
            value={"pasta"}
          />
          <FormControlLabel
            control={
              <Checkbox checked={rice} onChange={handleChange} name="rice" />
            }
            label="rice"
            style={{ padding: 15 }}
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
            style={{ padding: 15 }}
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
            style={{ padding: 15 }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={flour} onChange={handleChange} name="flour" />
            }
            label="flour"
            style={{ padding: 15 }}
          />
        </Box>
        <Box
          onChange={(e) => setProteins(e.target.name)}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <FormLabel component="legend" style={{ marginTop: 9, padding: 20 }}>
            Proteins
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={chicken}
                onChange={handleChange}
                name="chicken"
              />
            }
            label="chicken"
            style={{ padding: 15 }}
            value={"chicken"}
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
            style={{ padding: 15 }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={beef} onChange={handleChange} name="beef" />
            }
            label="beef"
            style={{ padding: 15 }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={pork} onChange={handleChange} name="pork" />
            }
            label="pork"
            style={{ padding: 15 }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={beans} onChange={handleChange} name="beans" />
            }
            label="beans"
            style={{ padding: 15 }}
          />
        </Box>
        <Box
          onChange={(e) => setVeg(e.target.name)}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <FormLabel component="legend" style={{ marginTop: 9, padding: 20 }}>
            Vegetables
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={broccoli}
                onChange={handleChange}
                name="broccoli"
              />
            }
            label="broccoli"
            style={{ padding: 15 }}
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
            style={{ padding: 15 }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={onion} onChange={handleChange} name="onion" />
            }
            label="onion"
            style={{ padding: 15 }}
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
            style={{ padding: 15 }}
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
            style={{ padding: 15 }}
          />
        </Box>
        <Box
          onChange={(e) => setDairy(e.target.name)}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <FormLabel component="legend" style={{ marginTop: 9, padding: 20 }}>
            Dairies
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={yogurt}
                onChange={handleChange}
                name="yogurt"
              />
            }
            label="yogurt"
            style={{ padding: 15 }}
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
            style={{ padding: 15 }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={cream} onChange={handleChange} name="cream" />
            }
            label="cream"
            style={{ padding: 15 }}
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
            style={{ padding: 15 }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={milk} onChange={handleChange} name="milk" />
            }
            label="milk"
            style={{ padding: 15 }}
          />
        </Box>
        <Box
          onChange={(e) => setFruit(e.target.name)}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <FormLabel component="legend" style={{ marginTop: 9, padding: 20 }}>
            Fruits
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={tomato}
                onChange={handleChange}
                name="tomato"
              />
            }
            label="tomato"
            style={{ padding: 15 }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={apple} onChange={handleChange} name="apple" />
            }
            label="apple"
            style={{ padding: 15 }}
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
            style={{ padding: 15 }}
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
            style={{ padding: 15 }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={lemon} onChange={handleChange} name="lemon" />
            }
            label="lemon"
            style={{ padding: 15 }}
          />
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
            <Button variant="contained" onClick={handleClick}>
              Click to submit recipe
            </Button>
          </div>
        </Box>
      </Container>
    </form>
  );
}
