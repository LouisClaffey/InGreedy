import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function TextBoxes() {
  const [formValue, setFormValue] = useState({
    title: "",
    instructions: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { title, instructions } = formValue;

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            name="title"
            multiline
            maxRows={4}
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Multiline2"
            multiline
            name="instructions"
            rows={4}
            defaultValue="Instructions"
            value={instructions}
            onChange={handleChange}
          />
        </div>
      </Box>
    </>
  );
}
