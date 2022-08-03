// import * as React from "react";
// import Box from "@mui/material/Box";
// import FormLabel from "@mui/material/FormLabel";
// import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import { useState, useEffect } from "react";
// import { Button } from "@mui/material";
// import axios from "axios";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import { Grid } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function IngredientsTableFind3() {
//   const navigate = useNavigate();

//   const [grains, setGrains] = useState("");
//   const [proteins, setProteins] = useState("");
//   const [vegetables, setVeg] = useState("");
//   const [dairies, setDairy] = useState("");
//   const [fruits, setFruit] = useState("");
//   const [validated, setValidated] = useState(false);

//   const ingredients = {
//     grains,
//     proteins,
//     vegetables,
//     dairies,
//     fruits,
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:8080/ingredients", ingredients)
//       .then(() => navigate("/users/foundrecipes"));
//   };

//   useEffect(() => {
//     if (
//       grains.length > 0 &&
//       proteins.length > 0 &&
//       vegetables.length > 0 &&
//       dairies.length > 0 &&
//       fruits.length > 0
//     ) {
//       setValidated(true);
//     }
//   }, [grains, proteins, vegetables, dairies, fruits]);

//   return (
//     <>
//       <form>
//         <Box
//           onChange={(e) => setGrains(e.target.value)}
//           sx={{ display: "flex", flexDirection: "row" }}
//         >
//           <Grid container justifyContent="center">
//             <FormControl>
//               <FormLabel
//                 id="demo-row-radio-buttons-group-label"
//                 style={{ justifyContent: "left", paddingTop: 10 }}
//               >
//                 Grains
//               </FormLabel>
//               <RadioGroup
//                 row
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 name="row-radio-buttons-group"
//               >
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="pasta"
//                     value="pasta"
//                   />
//                 </Grid>
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="rice"
//                     value="rice"
//                   />
//                 </Grid>
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="oats"
//                     value="oats"
//                   />
//                 </Grid>
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="quinoa"
//                     value="quinoa"
//                   />
//                 </Grid>
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="flour"
//                     value="flour"
//                   />
//                 </Grid>
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="noodles"
//                     value="noodles"
//                   />
//                 </Grid>
//               </RadioGroup>
//             </FormControl>
//           </Grid>
//         </Box>
//         <Box
//           onChange={(e) => setProteins(e.target.value)}
//           sx={{ display: "flex", flexDirection: "row" }}
//         >
//           <Grid container justifyContent="center">
//             <FormControl>
//               <FormLabel
//                 id="demo-row-radio-buttons-group-label"
//                 style={{ justifyContent: "left", paddingTop: 10 }}
//               >
//                 Proteins
//               </FormLabel>
//               <RadioGroup
//                 row
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 name="row-radio-buttons-group"
//               >
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="salmon"
//                     value="salmon"
//                   />
//                 </Grid>
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="beef"
//                     value="beef"
//                   />
//                 </Grid>
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="pork"
//                     value="pork"
//                   />
//                 </Grid>
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="beans"
//                     value="beans"
//                   />
//                 </Grid>
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="eggs"
//                     value="eggs"
//                   />
//                 </Grid>
//                 <Grid item md={2}>
//                   <FormControlLabel
//                     control={<Radio />}
//                     label="chicken"
//                     value="chicken"
//                   />
//                 </Grid>
//               </RadioGroup>
//             </FormControl>
//           </Grid>
//         </Box>
//         <Box
//           onChange={(e) => setVeg(e.target.value)}
//           sx={{ display: "flex", flexDirection: "row" }}
//         >
//           <Grid container justifyContent="center">
//             <FormControl>
//               <FormLabel
//                 id="demo-row-radio-buttons-group-label"
//                 style={{ justifyContent: "left", paddingTop: 10 }}
//               >
//                 Vegtables
//               </FormLabel>
//               <RadioGroup
//                 row
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 name="row-radio-buttons-group"
//               >
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="broccoli"
//                   value="broccoli"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="potato"
//                   value="potato"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="onion"
//                   value="onion"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="carrot"
//                   value="carrot"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="turnip"
//                   value="turnip"
//                 />
//               </RadioGroup>
//             </FormControl>
//           </Grid>
//         </Box>
//         <Box
//           onChange={(e) => setDairy(e.target.value)}
//           sx={{ display: "flex", flexDirection: "row" }}
//         >
//           <Grid container justifyContent="center">
//             <FormControl>
//               <FormLabel
//                 id="demo-row-radio-buttons-group-label"
//                 style={{ justifyContent: "left", paddingTop: 10 }}
//               >
//                 Dairies
//               </FormLabel>
//               <RadioGroup
//                 row
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 name="row-radio-buttons-group"
//               >
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="yogurt"
//                   value="yogurt"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="milk"
//                   value="milk"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="cream"
//                   value="cream"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="cheese"
//                   value="cheese"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="crèmefraîche"
//                   value="crèmefraîche"
//                 />
//               </RadioGroup>
//             </FormControl>
//           </Grid>
//         </Box>
//         <Box
//           onChange={(e) => setFruit(e.target.value)}
//           sx={{ display: "flex", flexDirection: "row" }}
//         >
//           <Grid container justifyContent="center">
//             <FormControl>
//               <FormLabel
//                 id="demo-row-radio-buttons-group-label"
//                 // component="legend"
//                 style={{ justifyContent: "left", paddingTop: 10 }}
//               >
//                 Fruits
//               </FormLabel>
//               <RadioGroup
//                 row
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 name="row-radio-buttons-group"
//               >
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="tomato"
//                   value="tomato"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="berries"
//                   value="berries"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="banana"
//                   value="banana"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="citrus"
//                   value="citrus"
//                 />
//                 <FormControlLabel
//                   control={<Radio />}
//                   label="avocado"
//                   value="avocado"
//                 />
//               </RadioGroup>
//             </FormControl>
//           </Grid>
//         </Box>
//         <Box>
//           <Grid container justifyContent={"center"}>
//             <div>
//               <Button
//                 variant="contained"
//                 onClick={handleClick}
//                 disabled={!validated}
//               >
//                 Click to find recipe
//               </Button>
//             </div>
//           </Grid>
//         </Box>
//       </form>
//     </>
//   );
// }
