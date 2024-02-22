const express = require("express");
const server = express();
const { request, response } = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
// const Product = require("./models/product");
const port = 3000;
const db_uri =
  "mongodb+srv://jayrshah255:jayrshah255@cluster0.dclrmna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());

mongoose.connect(db_uri).then((reuslt) => {
  server.listen(port, () => {
    console.log(`Listening on ${port}...\n connected to DB`);
  });
});

server.get("/", (request, response) => {
  response.send("Live!!!");
});
