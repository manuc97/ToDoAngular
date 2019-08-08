const express = require("express");
const port = 4000;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost/db", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", function() {
  console.log("error db");
});

db.once("open", function() {
  console.log("DB connected");
});

const itemSchema = new Schema({
  name: String
});

const userSchema = new Schema({
  username: String,
  password: String
});

const Item = mongoose.model("Item", itemSchema);
const User = mongoose.model("User", userSchema);

app.post("/item", function(request, response) {
  Item.create(request.body).then((data, error) => {
    if (error === undefined) {
      response.status(200).json(data);
    } else {
      response.status(500).json(null);
    }
  });
});

app.post("/login", function(request, response) {
  let user = request.body;
  console.log(user);
  User.findOne(user, (error, data) => {
    console.log("---", data);
    console.log("---", error);
    if (!error) {
      if (data === null) {
        response.status(500).json(null);
      } else {
        response.status(200).json(data);
      }
    } else {
      response.status(500).json(error);
    }
  });
});

app.get("/items", function(request, response) {
  Item.find().then((data, error) => {
    if (error === undefined) {
      response.status(200).json(data);
    } else {
      response.status(500).json(null);
    }
  });
});

app.delete("/delete/item/:id", function(request, response) {
  Item.remove({ _id: request.params.id }).then((data, error) => {
    if (error === undefined) {
      response.status(200).json(data);
    } else {
      response.status(500).json(null);
    }
  });
});

app.put("/item/:id", function(request, response) {
  Item.findByIdAndUpdate(
    { _id: request.params.id },
    { $set: request.body }
  ).then((data, error) => {
    if (error === undefined) {
      response.status(200).json(data);
    } else {
      response.status(500).json(null);
    }
  });
});

app.listen(port, function() {
  console.log("App running");
});

app.use("/hello", function(request, response) {
  response.send("xxx");
});

app.use("/", express.static(`${__dirname}/public`));
