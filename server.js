const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // convert json to javaScript objects ---
const cors = require("cors");

const app = express(); // creating express application instance ----

const port = 8000; // listen port ---

// import routes ---
const postRoutes = require("./Routers/posts");

//Add app middlewears ---
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);

//Yb3o7WMrcEDasvVW
// eshan - GfO9pPR19khjOPNy

const DB_URL =
  "mongodb+srv://eshan:GfO9pPR19khjOPNy@mernapp.16s1rhe.mongodb.net/mernCrud?retryWrites=true&w=majority";

// mongoose walata database eka connect karanwa ---
// etapsee ena promise eka handle karanna one ---
mongoose
  .connect(DB_URL, {})
  .then(() => {
    console.log("Connected -- ");
  })
  .catch((err) => {
    console.log(err);
  });

// To make your Express application accessible over the internet, you need to start the server and listen on a specific port.
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
