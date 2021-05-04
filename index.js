const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");

//DB Config
require("./database/config").dbConnection();

//App de express
const app = express();
//CORS
app.use(cors());
//Lectura y parseo de body
app.use(express.json());

//Node server
const server = require("http").createServer(app);

// Path público
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use("/api/books", require("./routes/books"));

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log("Server on port", process.env.PORT);
});
